package com.joa.openapi.transaction.repository;

import static com.joa.openapi.account.entity.QAccount.account;
import static com.joa.openapi.product.entity.QProduct.product;
import static com.joa.openapi.transaction.entity.QTransaction.transaction;

import com.joa.openapi.account.entity.QAccount;
import com.joa.openapi.transaction.dto.req.TransactionSearchRequestDto;
import com.joa.openapi.transaction.dto.res.TransactionSearchResponseDto;
import com.joa.openapi.transaction.entity.Transaction;
import com.joa.openapi.transaction.enums.TransactionOrderBy;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
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

        BooleanBuilder condition = new BooleanBuilder();

        // TODO : bankId 조건 처리 -> 관리자가 등록한 bankId와 거래한 적이 있으면 거래내역 가져오기
        UUID bankId = req.getBankId();
        if (bankId != null) {

            List<String> accountIds = jpaQueryFactory.select(account.id)
                .from(account)
                .where(account.bankId.eq(bankId))
                .fetch();

            if(!accountIds.isEmpty()) {
                condition.and(transaction.fromAccount.in(accountIds)
                    .or(transaction.toAccount.in(accountIds)));
            }
        }


        // isDummy 조건 처리
        Boolean isDummy = req.isDummy();
        if (Boolean.TRUE.equals(isDummy)) {
            condition.and(transaction.dummy.isNotNull());
        }

        // depositorName 조건 처리
        BooleanExpression depositorNameKeywordCondition = eqSearchDepositorNameKeyword(req.getDepositorNameKeyword());
        if (depositorNameKeywordCondition != null) {
            condition.and(depositorNameKeywordCondition);
        }

        // accountId 조건 처리
        String accountId = req.getAccountId();
        if (accountId != null) {
            condition.and(transaction.fromAccount.eq(accountId)
                .or(transaction.toAccount.eq(accountId)));
        }

        // dummyName 조건 처리
        String dummyName = req.getDummyName();
        if (dummyName != null) {
            condition.and(transaction.dummy.name.eq(dummyName));
        }

        // fromAmount, toAmount 조건 처리
        Long fromAmount = req.getFromAmount();
        Long toAmount = req.getToAmount();
        if (fromAmount != null && toAmount != null) {
            condition.and(transaction.amount.between(fromAmount, toAmount));
        }

        // 날짜 조건 처리 fromDate, toDate
        LocalDateTime fromDate = Optional.ofNullable(req.getFromDate())
            .map(date -> date.atTime(0, 0))
            .orElse(LocalDateTime.of(1900, 1, 1, 0, 0)); // 최소 날짜 기본값
        LocalDateTime toDate = Optional.ofNullable(req.getToDate())
            .map(date -> date.atTime(23, 59, 59))
            .orElse(LocalDateTime.of(3000, 12, 31, 23, 59, 59)); // 최대 날짜 기본값

        condition.and(transaction.createdAt.between(fromDate, toDate));

        // 검색 조건 적용 searchType
        BooleanExpression searchTypeCondition = eqSearchType(req);
        if (searchTypeCondition != null) {
            condition.and(searchTypeCondition);
        }

        // 쿼리 설정
        JPAQuery<Transaction> query = jpaQueryFactory
            .selectFrom(transaction)
            .where(condition);


        // 정렬 조건 적용 orderBy
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

    private BooleanExpression eqSearchDepositorNameKeyword(String depositorNameKeyword) {
        if (depositorNameKeyword == null || depositorNameKeyword.isBlank()) {
            return null;
        }

        return transaction.depositorName.likeIgnoreCase("%" + depositorNameKeyword + "%");

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
        return switch (orderBy) {
            case OLDEST -> transaction.createdAt.asc();
            case AMOUNT_ASC -> transaction.amount.asc();
            case AMOUNT_DESC -> transaction.amount.desc();
            default -> transaction.createdAt.desc();
        };
    }

}
