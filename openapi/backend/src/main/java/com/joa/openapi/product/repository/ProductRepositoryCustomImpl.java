package com.joa.openapi.product.repository;

import static com.joa.openapi.product.entity.QProduct.product;

import com.joa.openapi.product.dto.res.ProductSearchResponseDto;
import com.joa.openapi.product.entity.Product;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import java.util.List;
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
    public Page<ProductSearchResponseDto> searchProductCustom(Pageable pageable) {

        // 쿼리 설정
        JPAQuery<Product> query = jpaQueryFactory
            .selectFrom(product)
            .orderBy(product.createdAt.desc());

        // 페이징된 상품 조회
        List<Product> products = query
                .offset(pageable.getOffset()) //반환되는 행의 시작점
                .limit(pageable.getPageSize())	//반환되는 행의 수
                .fetch();

        //Dto 변환
        List<ProductSearchResponseDto> res = products.stream().map(ProductSearchResponseDto::toDto)
                .collect(java.util.stream.Collectors.toList());

        //페이지 객체 반환
        return new PageImpl<>(res, pageable, products.size());
    }
}
