package com.joa.openapi.transaction.controller;

import com.joa.openapi.account.dto.*;
import com.joa.openapi.common.response.ApiResponse;
import com.joa.openapi.transaction.dto.TransactionRequestDto;
import com.joa.openapi.transaction.dto.TransactionResponseDto;
import com.joa.openapi.transaction.service.TransactionService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequestMapping("/v1/transaction")
@RequiredArgsConstructor
public class TransactionController {

    private final TransactionService transactionService;

    @PostMapping("/deposit")
    public ResponseEntity<?> create(@RequestHeader("memberId") UUID memberId, @RequestBody TransactionRequestDto req) {
        TransactionResponseDto response = transactionService.deposit(memberId, req);
        return ResponseEntity.ok(ApiResponse.success("계좌 입금에 성공했습니다.", response));
    }

    @PostMapping("/withdraw")
    public ResponseEntity<?> update(@RequestHeader("memberId") UUID memberId, @RequestBody TransactionRequestDto req) {
        TransactionResponseDto response = transactionService.withdraw(memberId, req);
        return ResponseEntity.ok(ApiResponse.success("계좌 출금에 성공했습니다.", response));
    }

    @PostMapping("/send")
    public ResponseEntity<?> send(@RequestHeader("memberId") UUID memberId, @RequestBody TransactionRequestDto req) {
        TransactionResponseDto response = transactionService.send(memberId, req);
        return ResponseEntity.ok(ApiResponse.success("계좌 이체에 성공했습니다.", response));
    }


    @PatchMapping("/limit")
    public ResponseEntity<?> updateLimit(@RequestHeader("memberId") UUID memberId, @RequestBody AccountUpdateRequestDto req) {
        Long limit = transactionService.updateLimit(memberId, req);
        return ResponseEntity.ok(ApiResponse.success("이체한도 변경에 성공했습니다.", limit));
    }

    @PatchMapping("/password")
    public ResponseEntity<?> updatePassword(@RequestHeader("memberId") UUID memberId, @RequestBody AccountUpdateRequestDto req) {
        transactionService.updatePassword(memberId, req);
        return ResponseEntity.ok(ApiResponse.success("비밀번호 변경에 성공했습니다."));
    }

    @DeleteMapping
    public ResponseEntity<?> delete(@RequestHeader("memberId") UUID memberId, @RequestBody AccountDeleteRequestDto req) {
        String accountId = transactionService.delete(memberId, req);
        return ResponseEntity.ok(ApiResponse.success("계좌 해지에 성공했습니다.", accountId));
    }

    @PostMapping("/balance")
    public ResponseEntity<?> getBalance(@RequestHeader("memberId") UUID memberId, @RequestBody AccountGetBalanceRequestDto req) {
        AccountGetBalanceResponseDto balance = transactionService.getBalance(memberId, req);
        return ResponseEntity.ok(ApiResponse.success("계좌 잔액 조회에 성공했습니다.", balance));
    }

    @PostMapping("/member")
    public ResponseEntity<?> getAccounts(@RequestHeader("memberId") UUID memberId, @PageableDefault Pageable pageable) {
        Page<AccountGetAccountsResponseDto> accountsPage = transactionService.getAccounts(memberId, pageable);
        return ResponseEntity.ok(ApiResponse.success("계좌 조회에 성공했습니다.", accountsPage));
    }

    @GetMapping("/search")
    public ResponseEntity<?> search(@ModelAttribute AccountSearchRequestDto req, @PageableDefault Pageable pageable){
        Page<AccountSearchResponseDto> accountsPage = transactionService.search(req, pageable);
        return ResponseEntity.ok(ApiResponse.success("계좌 검색에 성공했습니다.", accountsPage));
    }
}
