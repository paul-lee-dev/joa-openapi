package com.joa.openapi.product.service;

import com.joa.openapi.account.entity.Account;
import com.joa.openapi.bank.entity.Bank;
import com.joa.openapi.bank.errorcode.BankErrorCode;
import com.joa.openapi.bank.repository.BankRepository;
import com.joa.openapi.common.exception.RestApiException;
import com.joa.openapi.product.dto.ProductCreateRequestDto;
import com.joa.openapi.product.dto.ProductCreateResponseDto;
import com.joa.openapi.product.dto.ProductUpdateIsDoneResponseDto;
import com.joa.openapi.product.entity.Product;
import com.joa.openapi.product.errorcode.ProductErrorCode;
import com.joa.openapi.product.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProductService {

    private final ProductRepository productRepository;
    private final BankRepository bankRepository;

    @Transactional
    public ProductCreateResponseDto create(ProductCreateRequestDto req) {

        //authorityValidation(memberId); /* TODO 관리자 권한 설정 */
        Bank bank = bankRepository.findById(req.getBankId()).orElseThrow(() -> new RestApiException(BankErrorCode.NO_BANK));

        Product product = Product.builder()
                .name(req.getName())
                .description(req.getDescription())
                .minAmount(req.getMinAmount())
                .maxAmount(req.getMaxAmount())
                .rate(req.getRate())
                .productType(req.getProductType())
                .paymentType(req.getPaymentType())
                .isDone(false)
                .productsBank(bank)
                .build();

        productRepository.save(product);

        return ProductCreateResponseDto.toDto(product);
    }

    @Transactional
    public ProductUpdateIsDoneResponseDto end(UUID productId) {

        //authorityValidation(memberId);

        Product product = productRepository.findById(productId).orElseThrow(() -> new RestApiException(ProductErrorCode.NO_PRODUCT));

        if(product.getIsDone())
            throw new RestApiException(ProductErrorCode.ALREADY_DONE);
        product.updateIsDone(true);

        productRepository.save(product);

        return ProductUpdateIsDoneResponseDto.toDto(product);
    }

    @Transactional
    public void delete(UUID productId) {

        //authorityValidation(memberId);

        Product product = productRepository.findById(productId).orElseThrow(() -> new RestApiException(ProductErrorCode.NO_PRODUCT));

        boolean allAccountsDeleted = product.getAccountList().stream().allMatch(Account::getIsDeleted);

        if(allAccountsDeleted)
            product.deleteSoftly();
        else
            throw new RestApiException(ProductErrorCode.NO_PRODUCT);
    }

    public void authorityValidation(UUID memberId) {

    }
}
