package com.joa.openapi.product.service;

import com.joa.openapi.account.entity.Account;
import com.joa.openapi.account.enums.TaxType;
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
import com.joa.openapi.transaction.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Arrays;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class DepositAccountService {
    private final ProductRepository productRepository;
    private final AccountRepository accountRepository;
    private final TransactionService transactionService;

    @Scheduled(cron = "0 0 0 * * ?") // 매일 자정에 실행되는 크론 표현식
    //@Scheduled(cron = "0 */1 * * * ?") // 매 분마다 실행되도록 변경
    //@Scheduled(cron = "*/10 * * * * ?")
    @Transactional
    public void payInterest() {
        //정기예금, 정기적금 만기시 금액 지급
        String today = LocalDate.now().format(DateTimeFormatter.ofPattern("MM/dd/yyyy"));
        List<Account> accounts = accountRepository.findAllByEndDate(today);

        Long calculatedInterest = 0L; // 계산된 이자액


        for (Account account : accounts) {
            Long totalPrincipal = account.getAmount(); // 원금

            if(account.getProduct().getProductType().equals(ProductType.TERM_DEPOSIT)) {
                // 예금 이자 계산
                calculatedInterest = calculateTermDeposit(account.getAmount(), account.getProduct().getRate(), account.getTerm(), account.getProduct().getPaymentType());

            } else if (account.getProduct().getProductType().equals(ProductType.FIXED_DEPOSIT)) {
                // 적금 이자 계산
                calculatedInterest = calculateFixedDeposit(account.getAmount(), account.getProduct().getRate(), account.getTerm(), account.getProduct().getPaymentType());
                totalPrincipal *= account.getTerm();
            }

            long taxInterest = 0;

            if(account.getTaxType() != null && account.getTaxType().equals(TaxType.TAX)){
                taxInterest = calculatedInterest * 154 / 1000;
            }

            Long totalAmount = totalPrincipal + calculatedInterest - taxInterest;

                transactionService.depositInterest(account, totalAmount);
            }

        for (Account account : accounts) {
            if (account.getProduct().getProductType().equals(ProductType.ORDINARY_DEPOSIT)) {
                Long interest = calculateMinuteInterest(account.getBalance(), account.getProduct().getRate());
                transactionService.depositInterest(account, interest);
            }
            if (account.getProduct().getProductType().equals(ProductType.FIXED_DEPOSIT)) {
                transactionService.withdrawAmount(account);
            }
        }
    }

    private Long calculateMinuteInterest(double principal, double rate) {
        double annualInterestRate = rate / 100;
        double minuteInterestRate = annualInterestRate / 365; //(365 * 24 * 60); // 연 이자율을 분 이자율로 변환

        return (long) (principal * minuteInterestRate); // 매 분마다의 이자 계산
    }

    public ProductRateResponseDto calculateRate(UUID apiKey, ProductRateRequestDto req) {
        Account account = accountRepository.findById(req.getAccountId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));
        Product product = productRepository.findById(req.getProductId()).orElseThrow(() -> new RestApiException(ProductErrorCode.NO_PRODUCT));

        Long calculatedInterest = 0L; // 계산된 이자액
        Long totalPrincipal = account.getAmount(); // 원금

        System.out.println("지급 타입 : " + product.getPaymentType());
        System.out.println("상품 타입 : " + product.getProductType());

        if(product.getProductType().equals(ProductType.TERM_DEPOSIT)) {
            // 예금 이자 계산
            calculatedInterest = calculateTermDeposit(account.getAmount(), product.getRate(), account.getTerm(), product.getPaymentType());

        } else if (product.getProductType().equals(ProductType.FIXED_DEPOSIT)) {
            // 적금 이자 계산
            calculatedInterest = calculateFixedDeposit(account.getAmount(), product.getRate(), account.getTerm(), product.getPaymentType());
            totalPrincipal *= account.getTerm();
        }

        long taxInterest = 0L;
        if(account.getTaxType().equals(TaxType.TAX)){
            taxInterest = calculatedInterest * 154 / 1000;
        }

        Long totalAmount = totalPrincipal + calculatedInterest - taxInterest;

        return ProductRateResponseDto.toDto(product, account, calculatedInterest, taxInterest, totalAmount); //계산된 이자액, 세금액, 최종 지금액
    }

    //예금
    public Long calculateTermDeposit(double principal, double rate, int term, PaymentType paymentType) {
        double monthlyInterestRate = rate / 12 / 100;
        long interest;
        long totalAmount;

        if(paymentType.equals(PaymentType.SIMPLE)) {
            //단리 계산 공식: 원금 * (1 + 이자율 * 예치 개월수 / 12)
            interest = (long) (principal * monthlyInterestRate * term);
        } else {
            //복리 계산
            totalAmount = (long) (principal * Math.pow((1 + monthlyInterestRate), term));
            interest = totalAmount - (long) principal;
        }

        return interest;
    }

    //적금
    public Long calculateFixedDeposit(double monthlyDeposit, double rate, int term, PaymentType paymentType) {
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
        return interest;
    }
}