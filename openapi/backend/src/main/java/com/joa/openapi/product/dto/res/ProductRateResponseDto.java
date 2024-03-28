package com.joa.openapi.product.dto.res;

import com.joa.openapi.account.entity.Account;
import com.joa.openapi.product.entity.Product;
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
public class ProductRateResponseDto {

    private UUID productId;
    private String productName;
    private ProductType productType; // 예금, 적금
    private PaymentType paymentType; // 지급방식 - 단리, 복리
    private Double rate;
    private String accountName;
    private Long amount;
    private Long interest; //이자액
    private Long calculatedInterest;  //원금 + 이자액

    public static ProductRateResponseDto toDto(Product product, Account account, Long interest, Long calculatedInterest) {
        return ProductRateResponseDto.builder()
                .productId(product.getId())
                .productName(product.getName())
                .productType(product.getProductType())
                .paymentType(product.getPaymentType())
                .rate(product.getRate())
                .accountName(account.getName())
                .amount(account.getAmount())
                .interest(interest)
                .calculatedInterest(calculatedInterest)
                .build();
    }
}
