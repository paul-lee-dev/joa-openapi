package com.joa.openapi.product.dto.req;

import com.joa.openapi.account.enums.TaxType;
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
public class ProductRateRequestDto {

    private Long amount;
    private Integer term;
    private PaymentType paymentType;
    private TaxType taxType;
    private UUID productId;
}