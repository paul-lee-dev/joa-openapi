package com.joa.openapi.dummy.repository;

import com.joa.openapi.dummy.dto.DummyResponseDto;
import com.joa.openapi.dummy.dto.DummySearchRequestDto;
import com.joa.openapi.dummy.entity.Dummy;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.joa.openapi.dummy.entity.QDummy.dummy;

@Repository
@RequiredArgsConstructor
@Slf4j
public class DummyRepositoryCustomImpl implements DummyRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public Page<DummyResponseDto> searchDummyCustom(DummySearchRequestDto req, UUID adminId, Pageable pageable) {

        log.info("{}", req.getSearchKeyWord());
        log.info("{}", adminId);

        JPAQuery<Dummy> query = jpaQueryFactory
                .selectFrom(dummy)
                .leftJoin(dummy.memberList)
                .leftJoin(dummy.transactionList)
                .fetchJoin()
                .where(eqSearchKeyWord(req.getSearchKeyWord()), eqIsAdmin(adminId), eqIsType(req));

        long total = query.fetchCount();

        List<Dummy> dummys = query
                .offset(pageable.getOffset())
                .limit(pageable.getPageSize())
                .fetch();

        List<DummyResponseDto> res = dummys.stream().map(DummyResponseDto::toDto)
                .collect(Collectors.toList());

        return new PageImpl<>(res, pageable, total);
    }

    private BooleanExpression eqSearchKeyWord(String searchKeyWord) {
        if (searchKeyWord == null || searchKeyWord.isBlank()) return null;

        log.info("{}", searchKeyWord);
        return dummy.name.likeIgnoreCase("%" + searchKeyWord + "%");
    }

    private BooleanBuilder eqIsType(DummySearchRequestDto req) {
        return new BooleanBuilder()
                .or(eqIsMember(req.getIsMember()))
                .or(eqIsAccount(req.getIsAccount()))
                .or(eqIsTransaction(req.getIsTransaction()));
    }

    private BooleanExpression eqIsMember(Boolean type) {
        if (type == null) return null;

        if (type) return dummy.memberCount.isNotNull();
        else return dummy.memberCount.isNull();
    }

    private BooleanExpression eqIsAccount(Boolean type) {
        if (type == null) return null;

        if (type) return dummy.accountCount.isNotNull();
        else return dummy.accountCount.isNull();
    }

    private BooleanExpression eqIsTransaction(Boolean type) {
        if (type == null) return null;

        if (type) return dummy.transactionCount.isNotNull();
        else return dummy.transactionCount.isNull();
    }

    private BooleanExpression eqIsAdmin(UUID adminId) {
        return dummy.adminId.eq(adminId);
    }
}
