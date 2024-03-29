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
public class ProductRateRequestDto {

    private Long amount; //예금은 예치금액, 적금은 지급금액
    private Integer term;
    private String accountId;
    private UUID productId;
}
