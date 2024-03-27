package com.joa.openapi.product.controller;

import com.joa.openapi.account.dto.*;
import com.joa.openapi.common.response.ApiResponse;
import com.joa.openapi.product.dto.ProductCreateRequestDto;
import com.joa.openapi.product.dto.ProductCreateResponseDto;
import com.joa.openapi.product.dto.ProductUpdateIsDoneResponseDto;
import com.joa.openapi.product.service.ProductService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

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
}