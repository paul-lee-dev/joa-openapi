package com.joa.openapi.product.dto.req;

import com.joa.openapi.product.enums.ProductOrderBy;
import com.joa.openapi.product.enums.ProductType;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductSearchRequestDto {

    private UUID bankId; // 은행
    private Boolean isDone; // 종료 여부
    private String productKeyword; // 상품명 키워드
    private ProductType productType; // 상품 분류
    private ProductOrderBy orderBy; // 최신순, 과거순
}