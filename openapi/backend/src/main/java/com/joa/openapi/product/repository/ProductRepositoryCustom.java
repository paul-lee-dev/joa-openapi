package com.joa.openapi.product.repository;

import com.joa.openapi.product.dto.res.ProductSearchResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface ProductRepositoryCustom {

    Page<ProductSearchResponseDto> searchProductCustom(Pageable pageable);

}
