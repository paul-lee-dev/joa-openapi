package com.joa.openapi.member.repository;

import com.joa.openapi.member.dto.MemberSearchRequestDto;
import com.joa.openapi.member.dto.MemberSearchResponseDto;
import com.joa.openapi.member.entity.Member;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.joa.openapi.account.entity.QAccount.account;
import static com.joa.openapi.member.entity.QMember.member;
import static com.joa.openapi.product.entity.QProduct.product;

@Repository
@RequiredArgsConstructor
public class MemberRepositoryCustomImpl implements MemberRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory; // JPA 쿼리를 생성하고 실행하는데 사용

    @Override
    public Page<MemberSearchResponseDto> searchMemberCustom(UUID adminId, MemberSearchRequestDto req, Pageable pageable) {

        // 쿼리 설정
        JPAQuery<Member> query = jpaQueryFactory
                .selectFrom(member)
                .leftJoin(member.bank)
                .leftJoin(member.dummy)
                .fetchJoin()
                //account의 은행아이디로 은행을 가져와서 은행의 어드민아이디 == apiKey로 admin가져온거랑
                .where(eqAdminId(adminId), eqBankId(req.getBankId()), eqMemberName(req.getMemberName()), eqDummy(req.getIsDummy()))
                .orderBy(member.createdAt.desc());

        long total = query.fetchCount(); // 전체 계좌 수

        // 페이징된 계좌 조회
        List<Member> members = query
                .offset(pageable.getOffset()) //반환되는 행의 시작점
                .limit(pageable.getPageSize())	//반환되는 행의 수
                .fetch();

        //Dto 변환
        List<MemberSearchResponseDto> res = members.stream().map(MemberSearchResponseDto::toDto)
                .collect(Collectors.toList());

        //페이지 객체 반환
        return new PageImpl<>(res, pageable, total);
    }

    private BooleanExpression eqAdminId(UUID adminId) {
        return member.bank.adminId.eq(adminId);
    }

    private BooleanExpression eqBankId(UUID bankId) {
        if (bankId == null)
            return null;

        return member.bank.id.eq(bankId);
    }

    private BooleanExpression eqMemberName(String name) {
        if (name == null || name.isBlank()) {
            return null; // 검색어가 없을 경우 적용할 필터 없음
        }

        return member.name.likeIgnoreCase("%" + name + "%");
    }

    private BooleanExpression eqDummy(Boolean type) {
        if (type == null)
            return null;

        if(type)
            return member.dummy.isNotNull();
        else
            return member.dummy.isNull();
    }
}
