package com.joa.openapi.product.service;

import com.joa.openapi.account.entity.Account;
import com.joa.openapi.account.errorcode.AccountErrorCode;
import com.joa.openapi.account.repository.AccountRepository;
import com.joa.openapi.account.service.AccountService;
import com.joa.openapi.common.exception.RestApiException;
import com.joa.openapi.product.dto.req.ProductRateRequestDto;
import com.joa.openapi.product.dto.res.ProductRateResponseDto;
import com.joa.openapi.product.entity.Product;
import com.joa.openapi.product.enums.PaymentType;
import com.joa.openapi.product.enums.ProductType;
import com.joa.openapi.product.errorcode.ProductErrorCode;
import com.joa.openapi.product.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class DepositAccountService {
    private final ProductRepository productRepository;
    private final AccountRepository accountRepository;

    public ProductRateResponseDto calculateRate(ProductRateRequestDto req) {
        Account account = accountRepository.findById(req.getAccountId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));
        Product product = productRepository.findById(req.getProductId()).orElseThrow(() -> new RestApiException(ProductErrorCode.NO_PRODUCT));

        Long[] calculatedInterest = new Long[2]; // 계산된 이자액

        System.out.println("지급 타입 : " + product.getPaymentType());
        System.out.println("상품 타입 : " + product.getProductType());

        if(product.getProductType().equals(ProductType.TERM_DEPOSIT)) {
            // 예금 이자 계산
            calculatedInterest = calculateTermDeposit(req.getAmount(), product.getRate(), req.getTerm(), product.getPaymentType());
        } else if (product.getProductType().equals(ProductType.FIXED_DEPOSIT)) {
            // 적금 이자 계산
            calculatedInterest = calculateFixedDeposit(req.getAmount(), product.getRate(), req.getTerm(), product.getPaymentType());
        }
        return ProductRateResponseDto.toDto(product, account, calculatedInterest[0], calculatedInterest[1]);
    }

    //예금
    public Long[] calculateTermDeposit(double principal, double rate, int term, PaymentType paymentType) {
        double monthlyInterestRate = rate / 12 / 100;
        long interest;
        long totalAmount;

        if(paymentType.equals(PaymentType.SIMPLE)) {
            //단리 계산 공식: 원금 * (1 + 이자율 * 예치 개월수 / 12)
            interest = (long) (principal * monthlyInterestRate * term);
            totalAmount = (long) (principal + interest);
        } else {
            //복리 계산
            totalAmount = (long) (principal * Math.pow((1 + monthlyInterestRate), term));
            interest = totalAmount - (long) principal;
        }

        return new Long[] {interest, totalAmount};
    }

    //적금
    public Long[] calculateFixedDeposit(double monthlyDeposit, double rate, int term, PaymentType paymentType) {

        long totalPrincipal = (long) (monthlyDeposit * term); // 적립 원금
        long interest;

        if(paymentType.equals(PaymentType.SIMPLE)) {
            // 적금 단리 이자 계산
            interest = (long) (monthlyDeposit * term * (term + 1) / 2 * rate / 12 / 100); // 단리 이자            return totalPrincipal + simpleInterest;
        } else {
            // 적금 연복리 이자 계산
            double monthlyInterestRate = rate / 12 / 100;
            interest = 0;
            for (int i = 0; i < term; i++) {
                interest += (long) (monthlyDeposit * (Math.pow(1 + monthlyInterestRate, term - i) - 1));
            }
        }
        long totalAmount = totalPrincipal + interest;
        return new Long[] {interest, totalAmount};
    }
}