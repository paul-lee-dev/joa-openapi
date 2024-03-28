package com.joa.openapi.product.controller;

import com.joa.openapi.common.response.ApiResponse;
import com.joa.openapi.product.dto.req.ProductCreateRequestDto;
import com.joa.openapi.product.dto.res.ProductCreateResponseDto;
import com.joa.openapi.product.dto.res.ProductUpdateIsDoneResponseDto;
import com.joa.openapi.product.service.ProductService;
import com.joa.openapi.product.dto.res.ProductSearchResponseDto;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/product")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody ProductCreateRequestDto req) {
        ProductCreateResponseDto res = productService.create(req);
        return ResponseEntity.ok(ApiResponse.success("상품 등록에 성공했습니다.", res));
    }

    @PatchMapping("/{productId}")
    public ResponseEntity<?> end(@PathVariable(value = "productId") UUID productId) {
        ProductUpdateIsDoneResponseDto res = productService.end(productId);
        return ResponseEntity.ok(ApiResponse.success("상품 종료에 성공했습니다.", res));
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<?> delete(@PathVariable(value = "productId") UUID productId) {
        productService.delete(productId);
        return ResponseEntity.ok(ApiResponse.success("계좌 해지에 성공했습니다."));
    }

    // queryDsl로 예적금 상품 조회
    @GetMapping("/search")
    public ResponseEntity<?> search(@PageableDefault Pageable pageable) {
        Page<ProductSearchResponseDto> productsPage = productService.search(pageable);
        return ResponseEntity.ok(ApiResponse.success("예적금 상품 조회에 성공했습니다.", productsPage));
    }

}