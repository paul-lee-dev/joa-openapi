package com.joa.openapi.account.repository;

import com.joa.openapi.account.dto.AccountSearchRequestDto;
import com.joa.openapi.account.dto.AccountSearchResponseDto;
import com.joa.openapi.account.entity.Account;
import com.joa.openapi.account.enums.AccountKeywordType;
import com.joa.openapi.account.enums.AccountSortBy;
import com.joa.openapi.account.enums.AccountWhether;
import com.querydsl.core.types.OrderSpecifier;
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
import static com.joa.openapi.account.enums.AccountWhether.NO;
import static com.joa.openapi.account.enums.AccountWhether.YES;

@Repository
@RequiredArgsConstructor
public class AccountRepositoryCustomImpl implements AccountRepositoryCustom{

    private final JPAQueryFactory jpaQueryFactory; // JPA 쿼리를 생성하고 실행하는데 사용

    @Override
    public Page<AccountSearchResponseDto> searchAccountCustom(AccountSearchRequestDto req, Pageable pageable) {

        // 쿼리 설정
        JPAQuery<Account> query = jpaQueryFactory
                .selectFrom(account)
                .leftJoin(account.holder)
                .leftJoin(account.dummy)
                .fetchJoin()
                .where(eqBankList(req.getBankList()), eqDormant(req.getIsDormant()), eqDummy(req.getIsDummy()), eqSearchKeyword(req.getKeywordType(), req.getSearchKeyword()))
                .orderBy(eqSortBy(req.getSortBy()));

        long total = query.fetchCount(); // 전체 계좌 수

        // 페이징된 계좌 조회
        List<Account> accounts = query
                .offset(pageable.getOffset()) //반환되는 행의 시작점
                .limit(pageable.getPageSize())	//반환되는 행의 수
                .fetch();

        //Dto 변환
        List<AccountSearchResponseDto> res = accounts.stream().map(AccountSearchResponseDto::toDto)
                .collect(Collectors.toList());

        //페이지 객체 반환
        return new PageImpl<>(res, pageable, total);
    }

    private BooleanExpression eqDormant(Boolean type) {
        if (type == null)
            return null;

        if(type)
            return account.isDormant.isTrue();
        else
            return account.isDormant.isFalse();
    }

    private BooleanExpression eqDummy(Boolean type) {
        if (type == null)
            return null;

        if(type)
            return account.dummy.isNotNull();
        else
            return account.dummy.isNull();
    }

    private BooleanExpression eqSearchKeyword(AccountKeywordType keywordType, String searchKeyword) {
        if (searchKeyword == null || searchKeyword.isBlank()) {
            return null; // 검색어가 없을 경우 적용할 필터 없음
        }

        if(keywordType == null){
            return account.name.likeIgnoreCase("%" + searchKeyword + "%");
        }

        // 검색 키워드를 통한 조건 반환
        return switch (keywordType) {
            case ACCOUNT_ID -> account.id.likeIgnoreCase("%" + searchKeyword + "%");
            case HOLDER_NAME -> account.holder.name.likeIgnoreCase("%" + searchKeyword + "%");
            case ACCOUNT_NAME -> account.name.likeIgnoreCase("%" + searchKeyword + "%");
//            case PRODUCT_NAME:
//                return account.product.name.likeIgnoreCase("%" + searchKeyword + "%");
            case DUMMY_NAME -> account.dummy.name.likeIgnoreCase("%" + searchKeyword + "%");
            default -> null;
        };
    }

    private BooleanExpression eqBankList(List<UUID> bankList){
        if(bankList == null || bankList.isEmpty())
            return null;

        return account.bankId.in(bankList);
    }

    private OrderSpecifier<?> eqSortBy(AccountSortBy sortBy) {
        return switch (sortBy) {
            case LOWEST_BALANCE -> account.balance.asc();
            case HIGHEST_BALANCE -> account.balance.desc();
            case OLDEST -> account.createdAt.asc();
            case NEAR_EXPIRATION -> account.endDate.asc();
            case FURTHER_EXPIRATION -> account.endDate.desc();
            default -> account.createdAt.desc(); // 기본 정렬 (최신순)
        };
    }
}
