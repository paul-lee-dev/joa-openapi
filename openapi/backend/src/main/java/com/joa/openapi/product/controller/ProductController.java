package com.joa.openapi.product.controller;

import com.joa.openapi.common.response.ApiResponse;
import com.joa.openapi.product.dto.req.ProductCreateRequestDto;
import com.joa.openapi.product.dto.req.ProductRateRequestDto;
import com.joa.openapi.product.dto.req.ProductSearchRequestDto;
import com.joa.openapi.product.dto.res.ProductCreateResponseDto;
import com.joa.openapi.product.dto.res.ProductDetailResponseDto;
import com.joa.openapi.product.dto.res.ProductRateResponseDto;
import com.joa.openapi.product.dto.res.ProductSearchResponseDto;
import com.joa.openapi.product.dto.res.ProductUpdateIsDoneResponseDto;
import com.joa.openapi.product.enums.ProductOrderBy;
import com.joa.openapi.product.enums.ProductType;
import com.joa.openapi.product.service.DepositAccountService;
import com.joa.openapi.product.service.ProductService;
import java.util.Map;
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
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/product")
@RequiredArgsConstructor
public class ProductController {

    private final ProductService productService;
    private final DepositAccountService depositAccountService;

    @PostMapping
    public ResponseEntity<?> create(@RequestHeader("apiKey") UUID apiKey, @RequestBody ProductCreateRequestDto req) {
        ProductCreateResponseDto res = productService.create(apiKey, req);
        return ResponseEntity.ok(ApiResponse.success("상품 등록에 성공했습니다.", res));
    }

    @PatchMapping("/{productId}")
    public ResponseEntity<?> end(@RequestHeader("apiKey") UUID apiKey, @PathVariable(value = "productId") UUID productId) {
        ProductUpdateIsDoneResponseDto res = productService.end(apiKey, productId);
        return ResponseEntity.ok(ApiResponse.success("상품 종료에 성공했습니다.", res));
    }

    @DeleteMapping("/{productId}")
    public ResponseEntity<?> delete(@RequestHeader("apiKey") UUID apiKey, @PathVariable(value = "productId") UUID productId) {
        productService.delete(apiKey, productId);
        return ResponseEntity.ok(ApiResponse.success("계좌 해지에 성공했습니다."));
    }

    @GetMapping("/search")
    public ResponseEntity<?> search(@RequestHeader("apiKey") UUID apiKey, @RequestParam Map<String, String> allParams,
        @PageableDefault Pageable pageable) {

        // TODO : AuthoriaztionBank로 Apikey & BankId 체크

        ProductSearchRequestDto req = ProductSearchRequestDto.builder()
            .bankId(
                allParams.get("bankId") == null ? null : UUID.fromString(allParams.get("bankId")))
            .isDone(allParams.get("isDone") == null ? null
                : Boolean.parseBoolean(allParams.get("isDone")))
            .productKeyword(allParams.get("productKeyword") == null ? null
                : allParams.get("productKeyword"))
            .productType(allParams.get("productType") == null ? null
                : ProductType.valueOf(allParams.get("productType")))
            .orderBy(allParams.get("orderBy") == null ? null
                : ProductOrderBy.valueOf(allParams.get("orderBy")))
            .build();

        Page<ProductSearchResponseDto> productsPage = productService.search(apiKey, req, pageable);
        return ResponseEntity.ok(ApiResponse.success("예적금 상품 조회에 성공했습니다.", productsPage));
    }

    @GetMapping("/{productId}")
    public ResponseEntity<?> searchOne(@RequestHeader("apiKey") UUID apiKey, @PathVariable(value = "productId") UUID productId) {
        ProductDetailResponseDto productDetail = productService.searchOne(apiKey, productId);
        return ResponseEntity.ok(ApiResponse.success("예적금 상품 상세 조회에 성공했습니다.", productDetail));
    }

    @GetMapping("/interest")
    public ResponseEntity<?> calculateInterest(@RequestHeader("apiKey") UUID apiKey, @RequestBody ProductRateRequestDto req) {
        ProductRateResponseDto rate = depositAccountService.calculateRate(apiKey, req);
        return ResponseEntity.ok(ApiResponse.success("만기 이자율 조회에 성공했습니다.", rate));
    }
}