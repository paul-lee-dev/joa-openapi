package com.joa.openapi.product.service;

import com.joa.openapi.account.entity.Account;
import com.joa.openapi.bank.entity.Bank;
import com.joa.openapi.bank.errorcode.BankErrorCode;
import com.joa.openapi.bank.repository.BankRepository;
import com.joa.openapi.common.errorcode.CommonErrorCode;
import com.joa.openapi.common.exception.RestApiException;
import com.joa.openapi.common.repository.ApiRepository;
import com.joa.openapi.product.dto.req.ProductCreateRequestDto;
import com.joa.openapi.product.dto.req.ProductSearchRequestDto;
import com.joa.openapi.product.dto.res.ProductCreateResponseDto;
import com.joa.openapi.product.dto.res.ProductDetailResponseDto;
import com.joa.openapi.product.dto.res.ProductSearchResponseDto;
import com.joa.openapi.product.dto.res.ProductUpdateIsDoneResponseDto;
import com.joa.openapi.product.entity.Product;
import com.joa.openapi.product.errorcode.ProductErrorCode;
import com.joa.openapi.product.repository.ProductRepository;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class ProductService {

    private final ProductRepository productRepository;
    private final BankRepository bankRepository;
    private final ApiRepository apiRepository;

    @Transactional
    public ProductCreateResponseDto create(UUID apiKey, ProductCreateRequestDto req) {
        bankAuthorityValidation(apiKey, req.getBankId());

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
    public ProductUpdateIsDoneResponseDto end(UUID apiKey, UUID productId) {
        productAuthorityValidation(apiKey, productId);

        Product product = productRepository.findById(productId)
            .orElseThrow(() -> new RestApiException(ProductErrorCode.NO_PRODUCT));

        if (product.getIsDone()) {
            throw new RestApiException(ProductErrorCode.ALREADY_DONE);
        }
        product.updateIsDone(true);

        productRepository.save(product);

        return ProductUpdateIsDoneResponseDto.toDto(product);
    }

    @Transactional
    public void delete(UUID apiKey, UUID productId) {
        productAuthorityValidation(apiKey, productId);

        Product product = productRepository.findById(productId)
            .orElseThrow(() -> new RestApiException(ProductErrorCode.NO_PRODUCT));

        boolean allAccountsDeleted = product.getAccountList().stream()
            .allMatch(Account::getIsDeleted);

        if (allAccountsDeleted) {
            product.deleteSoftly();
        } else {
            throw new RestApiException(ProductErrorCode.NO_PRODUCT);
        }
    }

    public Page<ProductSearchResponseDto> search(UUID apiKey, ProductSearchRequestDto req, Pageable pageable) {
        return productRepository.searchProductCustom(req, pageable);
    }

    public ProductDetailResponseDto searchOne(UUID apiKey, UUID productId) {
        Product product = productRepository.findById(productId)
            .orElseThrow(() -> new RestApiException(ProductErrorCode.NO_PRODUCT));

        return ProductDetailResponseDto.toDto(product);
    }

    public void bankAuthorityValidation(UUID apiKey, UUID bankId) {
        UUID adminId = apiRepository.getByApiKey(apiKey).getAdminId();
        Bank bank = bankRepository.findById(bankId).orElseThrow(() -> new RestApiException(BankErrorCode.NO_BANK));

        if (!bank.getAdminId().equals(adminId))
            throw new RestApiException(CommonErrorCode.NO_AUTHORIZATION);
    }

    public void productAuthorityValidation(UUID apiKey, UUID productId) {
        Product product = productRepository.findById(productId).orElseThrow(() -> new RestApiException(BankErrorCode.NO_BANK));
        bankAuthorityValidation(apiKey, product.getProductsBank().getId());
    }
}
