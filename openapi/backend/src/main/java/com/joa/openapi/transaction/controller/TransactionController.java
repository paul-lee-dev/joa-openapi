package com.joa.openapi.transaction.controller;

import com.joa.openapi.common.response.ApiResponse;
import com.joa.openapi.transaction.dto.*;
import com.joa.openapi.transaction.service.TransactionService;
import lombok.RequiredArgsConstructor;
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
    public ResponseEntity<?> withdraw(@RequestHeader("memberId") UUID memberId, @RequestBody TransactionRequestDto req) {
        TransactionResponseDto response = transactionService.withdraw(memberId, req);
        return ResponseEntity.ok(ApiResponse.success("계좌 출금에 성공했습니다.", response));
    }

    @PostMapping("/send")
    public ResponseEntity<?> send(@RequestHeader("memberId") UUID memberId, @RequestBody TransactionRequestDto req) {
        TransactionResponseDto response = transactionService.send(memberId, req);
        return ResponseEntity.ok(ApiResponse.success("계좌 이체에 성공했습니다.", response));
    }

    @PatchMapping
    public ResponseEntity<?> update(@RequestHeader("memberId") UUID memberId, @RequestBody TransactionUpdateRequestDto req) {
        TransactionUpdateResponseDto response = transactionService.update(memberId, req);
        return ResponseEntity.ok(ApiResponse.success("거래내역 수정에 성공했습니다.", response));
    }

    @DeleteMapping
    public ResponseEntity<?> delete(@RequestHeader("memberId") UUID memberId, @RequestBody TransactionDeleteRequestDto req) {
        transactionService.delete(memberId, req);
        return ResponseEntity.ok(ApiResponse.success("거래내역 삭제에 성공했습니다."));
    }
}