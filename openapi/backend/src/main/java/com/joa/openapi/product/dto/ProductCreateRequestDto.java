package com.joa.openapi.product.dto;

import com.joa.openapi.product.enums.PaymentType;
import com.joa.openapi.product.enums.ProductType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductCreateRequestDto {

    private String name;
    private String description;
    private Long minAmount;
    private Long maxAmount;
    private Double rate;
    private ProductType productType;
    private PaymentType paymentType;
}