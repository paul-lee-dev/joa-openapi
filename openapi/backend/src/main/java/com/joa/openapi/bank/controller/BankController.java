package com.joa.openapi.bank.controller;

import com.joa.openapi.bank.dto.*;
import com.joa.openapi.bank.entity.Bank;
import com.joa.openapi.bank.service.BankService;
import com.joa.openapi.common.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/v1/bank")
@RequiredArgsConstructor
public class BankController {

    private final BankService bankService;

    @PostMapping
    public ResponseEntity<ApiResponse> create(@RequestBody BankCreateRequestDto req, @RequestHeader("Authorization") UUID adminId, @RequestHeader("apiKey") String apiKey) {
        // apikey 검사하는 로직 필요
        System.out.println("관리자 : " + adminId + ", apikey : " + apiKey);
        Bank bank = bankService.create(req, adminId);
        return ResponseEntity.ok(ApiResponse.success("은행생성에 성공했습니다.",  bank));
    }

    @PatchMapping("/{bankId}")
    public ResponseEntity<ApiResponse> update(@RequestBody BankUpdateRequestDto req, @PathVariable(value = "bankId") UUID bankId) {
        Bank bank = bankService.update(req, bankId);
        return ResponseEntity.ok(ApiResponse.success("은행수정에 성공했습니다.", bank));
    }

    @DeleteMapping("/{bankId}")
    public ResponseEntity<ApiResponse> delete(@PathVariable(value = "bankId") UUID bankId) {
        System.out.println(bankId);
        bankService.delete(bankId);
        return ResponseEntity.ok(ApiResponse.success("은행삭제에 성공했습니다.", bankId));
    }

    @GetMapping("/search")
    public ResponseEntity<ApiResponse> searchAll(@RequestHeader("Authorization") UUID adminId) {
        List<Bank> bankList = bankService.searchAll(adminId);
        return ResponseEntity.ok(ApiResponse.success("은행목록검색에 성공했습니다.", bankList));
    }

    @GetMapping("/{bankId}")
    public ResponseEntity<ApiResponse> search(@PathVariable(value = "bankId") UUID bankId) {
        Bank bank = bankService.serachBank(bankId);
        return ResponseEntity.ok(ApiResponse.success("특정은행검색에 성공했습니다.", bank));
    }
}