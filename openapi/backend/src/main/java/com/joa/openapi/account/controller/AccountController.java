package com.joa.openapi.account.controller;

import com.joa.openapi.account.dto.*;
import com.joa.openapi.account.service.AccountService;
import com.joa.openapi.common.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/v1/account")
@RequiredArgsConstructor
public class AccountController {

    private final AccountService accountService;

    @PostMapping
    public ResponseEntity<?> create(@RequestHeader("apiKey") UUID apiKey, @RequestHeader("memberId") UUID memberId, @RequestBody AccountCreateRequestDto req) {

        AccountCreateResponseDto response = accountService.create(apiKey, memberId, req);
        return ResponseEntity.ok(ApiResponse.success("계좌 개설에 성공했습니다.", response));
    }

    @PatchMapping
    public ResponseEntity<?> update(@RequestHeader("apiKey") UUID apiKey, @RequestHeader("memberId") UUID memberId, @RequestBody AccountUpdateRequestDto req) {
        AccountUpdateResponseDto response = accountService.update(apiKey, memberId, req);
        return ResponseEntity.ok(ApiResponse.success("계좌 수정에 성공했습니다.", response));
    }

    @PatchMapping("/limit")
    public ResponseEntity<?> updateLimit(@RequestHeader("apiKey") UUID apiKey, @RequestHeader("memberId") UUID memberId, @RequestBody AccountUpdateRequestDto req) {
        Long limit = accountService.updateLimit(apiKey, req);
        return ResponseEntity.ok(ApiResponse.success("이체한도 변경에 성공했습니다.", limit));
    }

    @PatchMapping("/password")
    public ResponseEntity<?> updatePassword(@RequestHeader("apiKey") UUID apiKey, @RequestHeader("memberId") UUID memberId, @RequestBody AccountUpdateRequestDto req) {
        accountService.updatePassword(apiKey, memberId, req);
        return ResponseEntity.ok(ApiResponse.success("비밀번호 변경에 성공했습니다."));
    }

    @DeleteMapping
    public ResponseEntity<?> delete(@RequestHeader("apiKey") UUID apiKey, @RequestHeader("memberId") UUID memberId, @RequestBody AccountDeleteRequestDto req) {
        String accountId = accountService.delete(apiKey, memberId, req);
        return ResponseEntity.ok(ApiResponse.success("계좌 해지에 성공했습니다.", accountId));
    }

    @PostMapping("/balance")
    public ResponseEntity<?> getBalance(@RequestHeader("apiKey") UUID apiKey, @RequestHeader("memberId") UUID memberId, @RequestBody AccountGetBalanceRequestDto req) {
        AccountGetBalanceResponseDto balance = accountService.getBalance(apiKey, memberId, req);
        return ResponseEntity.ok(ApiResponse.success("계좌 잔액 조회에 성공했습니다.", balance));
    }

    @PostMapping("/detail")
    public ResponseEntity<?> getDetail(@RequestHeader("apiKey") UUID apiKey, @RequestBody AccountGetDetailRequestDto req) {
        AccountGetDetailResponseDto account = accountService.getDetail(apiKey, req);
        return ResponseEntity.ok(ApiResponse.success("계좌 상세 조회에 성공했습니다.", account));
    }

    @PostMapping("/member")
    public ResponseEntity<?> getAccounts(@RequestHeader("apiKey") UUID apiKey, @RequestHeader("memberId") UUID memberId, @PageableDefault Pageable pageable) {
        Page<AccountGetAccountsResponseDto> accountsPage = accountService.getAccounts(apiKey, memberId, pageable);
        return ResponseEntity.ok(ApiResponse.success("계좌 조회에 성공했습니다.", accountsPage));
    }

    @GetMapping("/search")
    public ResponseEntity<?> search(@RequestHeader("apiKey") UUID apiKey, @ModelAttribute AccountSearchRequestDto req, @PageableDefault Pageable pageable){
        Page<AccountSearchResponseDto> accountsPage = accountService.search(apiKey, req, pageable);
        return ResponseEntity.ok(ApiResponse.success("계좌 검색에 성공했습니다.", accountsPage));
    }
}