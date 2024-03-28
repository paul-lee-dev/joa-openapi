package com.joa.openapi.product.repository;

import com.joa.openapi.bank.entity.Bank;
import com.joa.openapi.common.exception.RestApiException;
import com.joa.openapi.product.entity.Product;
import com.joa.openapi.product.errorcode.ProductErrorCode;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ProductRepository extends JpaRepository<Product, UUID>{

    Optional<Product> findByProductsBank(Bank bank);
    default Product getByBankId(Bank bank) {
        return findByProductsBank(bank).orElseThrow(() -> new RestApiException(ProductErrorCode.NO_PRODUCT));
    }
}
