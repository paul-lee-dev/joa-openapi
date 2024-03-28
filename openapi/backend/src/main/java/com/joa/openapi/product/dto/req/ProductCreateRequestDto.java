package com.joa.openapi.product.dto.req;

import com.joa.openapi.product.enums.PaymentType;
import com.joa.openapi.product.enums.ProductType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

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
    private UUID bankId;
}