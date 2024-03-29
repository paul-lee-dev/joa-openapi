package com.joa.openapi.product.dto.res;

import com.joa.openapi.product.entity.Product;
import com.joa.openapi.product.enums.PaymentType;
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
public class ProductDetailResponseDto {

    private UUID productId;
    private String name;
    private String description;
    private Long minAmount;
    private Long maxAmount;
    private Double rate;
    private ProductType productType; // 예금, 적금
    private PaymentType paymentType; // 지급방식 - 단리, 복리
    private Boolean isDone;
    private UUID bankId;

    public static ProductDetailResponseDto toDto(Product product) {
        return ProductDetailResponseDto.builder()
            .productId(product.getId())
            .name(product.getName())
            .description(product.getDescription())
            .minAmount(product.getMinAmount())
            .maxAmount(product.getMaxAmount())
            .rate(product.getRate())
            .productType(product.getProductType())
            .paymentType(product.getPaymentType())
            .isDone(product.getIsDone())
            .bankId(product.getProductsBank().getId())
            .build();
    }
}
