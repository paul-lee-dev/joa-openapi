package com.joa.openapi.bank.controller;

import com.joa.openapi.bank.dto.*;
import com.joa.openapi.bank.service.BankService;
import com.joa.openapi.common.response.ApiResponse;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.json.simple.parser.ParseException;
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
    public ResponseEntity<?> create(HttpServletRequest request, @RequestBody BankRequestDto req, @RequestHeader("apiKey") UUID apiKey) throws ParseException {
        BankResponseDto bankResponseDto = bankService.create(request, req, apiKey);
        return ResponseEntity.ok(ApiResponse.success("은행생성에 성공했습니다.",  bankResponseDto));
    }

    @PatchMapping("/{bankId}")
    public ResponseEntity<?> update(HttpServletRequest request, @RequestBody BankRequestDto req, @RequestHeader("apiKey") UUID apiKey, @PathVariable(value = "bankId") UUID bankId) throws ParseException {
        BankResponseDto bankResponseDto = bankService.update(request, req, apiKey, bankId);
        return ResponseEntity.ok(ApiResponse.success("은행수정에 성공했습니다.", bankResponseDto));
    }

    @DeleteMapping("/{bankId}")
    public ResponseEntity<?> delete(HttpServletRequest request, @RequestHeader("apiKey") UUID apiKey, @PathVariable(value = "bankId") UUID bankId) throws ParseException {
        BankResponseDto bankResponseDto = bankService.delete(request, apiKey, bankId);
        return ResponseEntity.ok(ApiResponse.success("은행삭제에 성공했습니다.", bankResponseDto));
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchAll(HttpServletRequest request, @RequestHeader("apiKey") UUID apiKey, @RequestParam(value = "name", required = false) String name) throws ParseException {
        // 프론트에서 이름 없을 때 null말고 "" 넘겨주게 처리?
        List<BankResponseDto> bankResponseDtoList = bankService.searchAll(request, apiKey, name);
//        if (name == null) bankResponseDtoList = bankService.searchAll("", adminId);
//        else bankResponseDtoList = bankService.searchAll(name, adminId);
        return ResponseEntity.ok(ApiResponse.success("은행목록검색에 성공했습니다.", bankResponseDtoList));
    }

    @GetMapping("/{bankId}")
    public ResponseEntity<?> search(HttpServletRequest request, @RequestHeader("apiKey") UUID apiKey, @PathVariable(value = "bankId") UUID bankId) throws ParseException {
        BankResponseDto bankResponseDto = bankService.serachBank(request, apiKey, bankId);
        return ResponseEntity.ok(ApiResponse.success("특정은행검색에 성공했습니다.", bankResponseDto));
    }
}