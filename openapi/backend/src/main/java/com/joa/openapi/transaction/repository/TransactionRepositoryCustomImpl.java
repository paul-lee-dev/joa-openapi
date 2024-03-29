package com.joa.openapi.transaction.repository;

import static com.joa.openapi.transaction.entity.QTransaction.transaction;

import com.joa.openapi.transaction.dto.req.TransactionSearchRequestDto;
import com.joa.openapi.transaction.dto.res.TransactionSearchResponseDto;
import com.joa.openapi.transaction.entity.Transaction;
import com.joa.openapi.transaction.enums.TransactionOrderBy;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class TransactionRepositoryCustomImpl implements TransactionRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory; // JPA 쿼리를 생성하고 실행하는데 사용

    @Override
    public Page<TransactionSearchResponseDto> searchTransactionCustom(
        TransactionSearchRequestDto req, Pageable pageable) {

        // 날짜 조건 처리
        LocalDateTime fromDate = Optional.ofNullable(req.getFromDate())
            .map(date -> date.atTime(0, 0))
            .orElse(LocalDateTime.of(1900, 1, 1, 0, 0)); // 최소 날짜 기본값
        LocalDateTime toDate = Optional.ofNullable(req.getToDate())
            .map(date -> date.atTime(23, 59, 59))
            .orElse(LocalDateTime.of(3000, 12, 31, 23, 59, 59)); // 최대 날짜 기본값

        BooleanExpression dateCondition = transaction.createdAt.between(fromDate, toDate);

        // accountId 기반 검색 조건 적용
        BooleanExpression searchTypeCondition = eqSearchType(req);

        // 조건 합치기
        BooleanExpression condition = dateCondition.and(searchTypeCondition);

        JPAQuery<Transaction> query = jpaQueryFactory
            .selectFrom(transaction)
            .where(condition);

        // 정렬 조건 적용
        OrderSpecifier<?> orderSpecifier = eqOrderBy(req.getOrderBy());
        if (orderSpecifier != null) {
            query = query.orderBy(orderSpecifier);
        }

        // 페이지네이션 적용
        List<Transaction> transactions = query
            .offset(pageable.getOffset())   // 반환되는 행의 시작점
            .limit(pageable.getPageSize())  // 반환되는 행의 수
            .fetch();

        // DTO 변환
        List<TransactionSearchResponseDto> res = transactions.stream()
            .map(TransactionSearchResponseDto::toDto)
            .collect(Collectors.toList());

        return new PageImpl<>(res, pageable, transactions.size());
    }

    private BooleanExpression eqSearchType(TransactionSearchRequestDto req) {
        if (req.getSearchType() == null) {
            return null;
        }
        return switch (req.getSearchType()) {
            case DEPOSIT_ONLY -> transaction.toAccount.eq(req.getAccountId());
            case WITHDRAWAL_ONLY -> transaction.fromAccount.eq(req.getAccountId());
            default -> transaction.fromAccount.eq(req.getAccountId())
                .or(transaction.toAccount.eq(req.getAccountId()));
        };
    }

    private OrderSpecifier<?> eqOrderBy(TransactionOrderBy orderBy) {
        if (orderBy == null) {
            return null;
        }
        return orderBy == TransactionOrderBy.OLDEST ? transaction.createdAt.asc() : transaction.createdAt.desc();
    }

}
