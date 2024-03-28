package com.joa.openapi.transaction.controller;

import com.joa.openapi.common.response.ApiResponse;
import com.joa.openapi.transaction.dto.req.Transaction1wonConfirmRequestDto;
import com.joa.openapi.transaction.dto.req.Transaction1wonRequestDto;
import com.joa.openapi.transaction.dto.req.TransactionDeleteRequestDto;
import com.joa.openapi.transaction.dto.req.TransactionRequestDto;
import com.joa.openapi.transaction.dto.req.TransactionUpdateRequestDto;
import com.joa.openapi.transaction.dto.res.Transaction1wonResponseDto;
import com.joa.openapi.transaction.dto.res.TransactionResponseDto;
import com.joa.openapi.transaction.dto.res.TransactionUpdateResponseDto;
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

    @PostMapping("/1wonSend")
    public ResponseEntity<?> oneSend(@RequestBody Transaction1wonRequestDto req) {
        Transaction1wonResponseDto res = transactionService.oneSend(req);
        return ResponseEntity.ok(ApiResponse.success("1원 인증 4글자 전송에 성공했습니다.", res));
    }

    @PostMapping("/1wonConfirm")
    public ResponseEntity<?> oneSendConfirm(@RequestBody Transaction1wonConfirmRequestDto req) {
        transactionService.oneSendConfirm(req);
        return ResponseEntity.ok(ApiResponse.success("1원 인증 4글자 확인에 성공했습니다.", req));
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