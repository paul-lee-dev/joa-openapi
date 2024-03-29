package com.joa.openapi.product.repository;

import static com.joa.openapi.account.entity.QAccount.account;
import static com.joa.openapi.product.entity.QProduct.product;
import static com.joa.openapi.transaction.entity.QTransaction.transaction;

import com.joa.openapi.product.dto.req.ProductSearchRequestDto;
import com.joa.openapi.product.dto.req.ProductSearchRequestDto.ProductOrderBy;
import com.joa.openapi.product.dto.res.ProductSearchResponseDto;
import com.joa.openapi.product.entity.Product;
import com.joa.openapi.product.enums.ProductType;
import com.querydsl.core.BooleanBuilder;
import com.querydsl.core.types.OrderSpecifier;
import com.querydsl.core.types.dsl.BooleanExpression;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

@Repository
@RequiredArgsConstructor
public class ProductRepositoryCustomImpl implements ProductRepositoryCustom {

    private final JPAQueryFactory jpaQueryFactory; // JPA 쿼리를 생성하고 실행하는데 사용


    @Override
    public Page<ProductSearchResponseDto> searchProductCustom(ProductSearchRequestDto req,
        Pageable pageable) {

        BooleanBuilder condition = new BooleanBuilder();

        // 은행 ID 조건 처리
        UUID bankId = req.getBankId();
        if (bankId != null) {
            condition.and(product.productsBank.id.eq(bankId));
        }

        // 종료 여부 조건 처리
        Boolean isDone = req.getIsDone();
        if (isDone != null) {
            condition.and(product.isDone.eq(isDone));
        }

        // 상품명 키워드 조건 처리
        BooleanExpression productKeywordCondition = eqSearchProductKeyword(req.getProductKeyword());
        if (productKeywordCondition != null) {
            condition.and(productKeywordCondition);
        }

        // 상품 타입 조건 처리
        BooleanExpression productTypeCondition = eqProductType(req);
        if (productTypeCondition != null) {
            condition.and(productTypeCondition);
        }

        // 쿼리 설정
        JPAQuery<Product> query = jpaQueryFactory
            .selectFrom(product)
            .where(condition);

        // 정렬 조건 처리
        OrderSpecifier<?> orderBySpecifier = eqOrderBy(req.getOrderBy());
        if (orderBySpecifier != null) {
            query.orderBy(orderBySpecifier);
        }

        // 페이징된 상품 조회
        List<Product> products = query
            .offset(pageable.getOffset())
            .limit(pageable.getPageSize())
            .fetch();

        // Dto 변환
        List<ProductSearchResponseDto> res = products.stream().map(ProductSearchResponseDto::toDto)
            .collect(java.util.stream.Collectors.toList());

        // 페이지 객체 반환
        return new PageImpl<>(res, pageable, products.size());
    }

    private BooleanExpression eqSearchProductKeyword(String productKeyword) {
        if (productKeyword == null || productKeyword.isBlank()) {
            return null; // 검색어가 없을 경우 적용할 필터 없음
        }

        return product.name.likeIgnoreCase("%" + productKeyword + "%");

    }

    private BooleanExpression eqProductType(ProductSearchRequestDto req) {
        if (req.getProductType() == null) {
            return null;
        }
        return switch (req.getProductType()) {
            case ORDINARY_DEPOSIT -> product.productType.eq(ProductType.ORDINARY_DEPOSIT);
            case TERM_DEPOSIT -> product.productType.eq(ProductType.TERM_DEPOSIT);
            case FIXED_DEPOSIT -> product.productType.eq(ProductType.FIXED_DEPOSIT);
        };
    }

    private OrderSpecifier<?> eqOrderBy(ProductOrderBy orderBy) {
        if (orderBy == null) {
            return null;
        }
        return orderBy == ProductOrderBy.OLDEST ? product.createdAt.asc() : product.createdAt.desc();
    }
}
