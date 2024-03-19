package com.joa.openapi.bank.controller;

import com.joa.openapi.bank.dto.*;
import com.joa.openapi.bank.entity.Bank;
import com.joa.openapi.bank.service.BankService;
import com.joa.openapi.common.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/v1/bank")
@RequiredArgsConstructor
public class BankController {

    private final BankService bankService;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody BankRequestDto req, @RequestHeader("Authorization") UUID adminId, @RequestHeader("apiKey") String apiKey) {
        // apikey 검사하는 로직 필요
        BankRequestDto bankRequestDto = bankService.create(req, adminId);
        return ResponseEntity.ok(ApiResponse.success("은행생성에 성공했습니다.",  bankRequestDto));
    }

    @PatchMapping("/{bankId}")
    public ResponseEntity<?> update(@RequestBody BankRequestDto req, @PathVariable(value = "bankId") UUID bankId) {
        BankRequestDto bankRequestDto = bankService.update(req, bankId);
        return ResponseEntity.ok(ApiResponse.success("은행수정에 성공했습니다.", bankRequestDto));
    }

    @DeleteMapping("/{bankId}")
    public ResponseEntity<?> delete(@PathVariable(value = "bankId") UUID bankId) {
        bankService.delete(bankId);
        String bankName = bankService.serachBankName(bankId);
        return ResponseEntity.ok(ApiResponse.success(bankName + "은행삭제에 성공했습니다. \n 삭제일시 : " + LocalDateTime.now(), bankId));
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchAll(@RequestHeader("Authorization") UUID adminId) {
        List<BankRequestDto> bankRequestDtoList = bankService.searchAll(adminId);
        return ResponseEntity.ok(ApiResponse.success("은행목록검색에 성공했습니다.", bankRequestDtoList));
    }

    @GetMapping("/{bankId}")
    public ResponseEntity<?> search(@PathVariable(value = "bankId") UUID bankId) {
        BankRequestDto bankRequestDto = bankService.serachBank(bankId);
        return ResponseEntity.ok(ApiResponse.success("특정은행검색에 성공했습니다.", bankRequestDto));
    }
}