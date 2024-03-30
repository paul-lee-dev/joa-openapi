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
    private Long interest; //이자액
    private Long taxInterest; //세금
    private Long calculatedInterest;  //원금 + 이자액(과세 처리)

    public static ProductRateResponseDto toDto(Product product, Long interest, Long taxInterest, Long calculatedInterest) {
        return ProductRateResponseDto.builder()
                .productId(product.getId())
                .productName(product.getName())
                .productType(product.getProductType())
                .paymentType(product.getPaymentType())
                .rate(product.getRate())
                .interest(interest)
                .taxInterest(taxInterest)
                .calculatedInterest(calculatedInterest)
                .build();
    }
}
