package com.joa.openapi.bank.controller;

import com.joa.openapi.bank.dto.*;
import com.joa.openapi.bank.service.BankService;
import com.joa.openapi.common.response.ApiResponse;
import com.joa.openapi.common.util.AuthCheckUtil;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/v1/bank")
@RequiredArgsConstructor
public class BankController {

    private final AuthCheckUtil authCheckUtil;
    private final BankService bankService;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody BankRequestDto req, @RequestHeader("Authorization") UUID adminId, @RequestHeader("apiKey") String apiKey) {

        //HttpServletRequest request를 parameter로 받아와서
        //String adminId = authCheckUtil.authCheck(request); 를 추가하면 됨!
        //if (adminId==null) 일 때의 처리도 필요할 듯

        // apikey 검사하는 로직 필요
        BankResponseDto bankResponseDto = bankService.create(req, adminId);
        return ResponseEntity.ok(ApiResponse.success("은행생성에 성공했습니다.",  bankResponseDto));
    }

    @PatchMapping("/{bankId}")
    public ResponseEntity<?> update(@RequestBody BankRequestDto req, @PathVariable(value = "bankId") UUID bankId) {
        BankResponseDto bankResponseDto = bankService.update(req, bankId);
        return ResponseEntity.ok(ApiResponse.success("은행수정에 성공했습니다.", bankResponseDto));
    }

    @DeleteMapping("/{bankId}")
    public ResponseEntity<?> delete(@PathVariable(value = "bankId") UUID bankId) {
        BankResponseDto bankResponseDto = bankService.serachBank(bankId);
        bankService.delete(bankId);
        return ResponseEntity.ok(ApiResponse.success("은행삭제에 성공했습니다.", bankResponseDto));
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchAll(@RequestParam(value = "name", required = false) String name, @RequestHeader("adminId") UUID adminId) {
        List<BankResponseDto> bankResponseDtoList;
        if (name == null) bankResponseDtoList = bankService.searchAll("", adminId);
        else bankResponseDtoList = bankService.searchAll(name, adminId);
        return ResponseEntity.ok(ApiResponse.success("은행목록검색에 성공했습니다.", bankResponseDtoList));
    }

    @GetMapping("/{bankId}")
    public ResponseEntity<?> search(@PathVariable(value = "bankId") UUID bankId) {
        BankResponseDto bankResponseDto = bankService.serachBank(bankId);
        return ResponseEntity.ok(ApiResponse.success("특정은행검색에 성공했습니다.", bankResponseDto));
    }
}