package com.joa.openapi.account.service;

import com.joa.openapi.account.dto.AccountCreateRequestDto;
import com.joa.openapi.product.entity.Product;
import com.joa.openapi.product.enums.PaymentType;
import com.joa.openapi.product.enums.ProductType;
import org.springframework.stereotype.Service;

@Service
public class DepositAccountService {

    public Double calculateRate(AccountCreateRequestDto req, Product product) {

        double calculatedInterest = 0.0; // 계산된 이자액

        if(product.getProductType().equals(ProductType.TERM_DEPOSIT)) {
            // 예금 이자 계산
            calculatedInterest = calculateTermDeposit(req.getAmount(), product.getRate(), req.getTerm(), product.getPaymentType());
        } else if (product.getProductType().equals(ProductType.FIXED_DEPOSIT)) {
            // 적금 이자 계산
            calculatedInterest = calculateFixedDeposit(req.getAmount(), product.getRate(), req.getTerm(), product.getPaymentType());
        }
        return calculatedInterest;
    }

    public double calculateTermDeposit(double principal, double annualInterestRate, int termInMonths, PaymentType paymentType) {

        if(paymentType.equals(PaymentType.SIMPLE)) {
            // 단리 계산 공식: 원금 * (1 + 이자율 * 예치 개월수 / 12)
            double monthlyInterestRate = annualInterestRate / 12 / 100;
            return principal * (1 + monthlyInterestRate * termInMonths);
        } else {
            double monthlyInterestRate = annualInterestRate / 12 / 100;
            return principal * Math.pow((1 + monthlyInterestRate), termInMonths);
        }
    }

    public double calculateFixedDeposit(double monthlyDeposit, double annualInterestRate, int termInMonths, PaymentType paymentType) {

        double totalPrincipal = monthlyDeposit * termInMonths; // 적립 원금

        if(paymentType.equals(PaymentType.SIMPLE)) {
            // 적금 단리 이자 계산
            double simpleInterest = monthlyDeposit * termInMonths * (termInMonths + 1) / 2 * annualInterestRate / 12 / 100; // 단리 이자
            return totalPrincipal + simpleInterest;
        } else {
            // 적금 연복리 이자 계산
            double monthlyInterestRate = annualInterestRate / 12 / 100;
            double compoundInterest = monthlyDeposit * ((Math.pow(1 + monthlyInterestRate, termInMonths) - 1) / monthlyInterestRate) - totalPrincipal; // 연복리 이자
            return totalPrincipal + compoundInterest;
        }
    }
}