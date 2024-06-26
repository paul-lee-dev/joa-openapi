package com.joa.openapi.bank.controller;

import com.joa.openapi.bank.dto.*;
import com.joa.openapi.bank.service.BankService;
import com.joa.openapi.common.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
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
    public ResponseEntity<?> create(@RequestBody BankRequestDto req, @RequestHeader("apiKey") UUID apiKey) {
        BankResponseDto bankResponseDto = bankService.create(req, apiKey);
        return ResponseEntity.ok(ApiResponse.success("은행생성에 성공했습니다.",  bankResponseDto));
    }

    @PatchMapping("/{bankId}")
    public ResponseEntity<?> update(@RequestBody BankRequestDto req, @RequestHeader("apiKey") UUID apiKey, @PathVariable(value = "bankId") UUID bankId) {
        BankResponseDto bankResponseDto = bankService.update(req, apiKey, bankId);
        return ResponseEntity.ok(ApiResponse.success("은행수정에 성공했습니다.", bankResponseDto));
    }

    @DeleteMapping("/{bankId}")
    public ResponseEntity<?> delete(@RequestHeader("apiKey") UUID apiKey, @PathVariable(value = "bankId") UUID bankId) {
        BankResponseDto bankResponseDto = bankService.delete(apiKey, bankId);
        return ResponseEntity.ok(ApiResponse.success("은행삭제에 성공했습니다.", bankResponseDto));
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchAll(@RequestHeader("apiKey") UUID apiKey, @RequestParam(value = "name", required = false) String name, @PageableDefault Pageable pageable) {
        Page<BankResponseDto> bankResponseDtoList = bankService.searchAll(apiKey, name, pageable);
        return ResponseEntity.ok(ApiResponse.success("은행목록검색에 성공했습니다.", bankResponseDtoList));
    }

    @GetMapping("/{bankId}")
    public ResponseEntity<?> search(@RequestHeader("apiKey") UUID apiKey, @PathVariable(value = "bankId") UUID bankId) {
        BankResponseDto bankResponseDto = bankService.searchBank(apiKey, bankId);
        return ResponseEntity.ok(ApiResponse.success("특정은행검색에 성공했습니다.", bankResponseDto));
    }

    @GetMapping("/dashboard/{bankId}")
    public ResponseEntity<?> getDashboardData(@RequestHeader("apiKey") UUID apiKey, @PathVariable(value = "bankId") UUID bankId) {
        DashboardResponseDto DashboardResponseDto = bankService.getDashboardData(apiKey, bankId);
        return ResponseEntity.ok(ApiResponse.success("대시보드 데이터 불러오기 성공했습니다.", DashboardResponseDto));
    }
}