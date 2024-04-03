package com.joa.openapi.product.repository;

import com.joa.openapi.product.dto.req.ProductSearchRequestDto;
import com.joa.openapi.product.dto.res.ProductSearchResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.UUID;

public interface ProductRepositoryCustom {

    Page<ProductSearchResponseDto> searchProductCustom(UUID adminId, ProductSearchRequestDto req, Pageable pageable);
    UUID searchBankFirstProductCustom(UUID adminId, UUID bankId);
}
