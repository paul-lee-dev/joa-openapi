package com.joa.openapi.dummy.controller;

import com.joa.openapi.common.response.ApiResponse;
import com.joa.openapi.dummy.dto.*;
import com.joa.openapi.dummy.service.DummyService;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/v1/dummy")
@RequiredArgsConstructor
@Slf4j
public class DummyController {

    private final DummyService dummyService;

    @PostMapping("/member")
    public ResponseEntity<?> createMember(@RequestHeader("apiKey") UUID apiKey, @RequestBody DummyMemberRequestDto req) {
        DummyResponseDto dummyResponseDto = dummyService.createMember(apiKey, req);
        return ResponseEntity.ok(ApiResponse.success("멤버 더미데이터 생성 성공했습니다.", dummyResponseDto));
    }

    @PostMapping("/account")
    public ResponseEntity<?> createAccount(@RequestHeader("apiKey") UUID apiKey, @RequestBody DummyAccountRequestDto req) {
        DummyResponseDto dummyResponseDto = dummyService.createAccount(apiKey, req);
        return ResponseEntity.ok(ApiResponse.success("계좌 더미데이터 생성 성공했습니다.", dummyResponseDto));
    }

    @PostMapping("/transaction")
    public ResponseEntity<?> createTransaction(@RequestHeader("apiKey") UUID apiKey, @RequestBody DummyTransactionRequestDto req) {
        DummyResponseDto dummyResponseDto = dummyService.createTransaction(apiKey, req);
        return ResponseEntity.ok(ApiResponse.success("거래내역 더미데이터 생성 성공했습니다.", dummyResponseDto));
    }

    @DeleteMapping("/{dummyId}")
    public ResponseEntity<?> deleteDummy(@RequestHeader("apiKey") UUID apiKey, @PathVariable(value = "dummyId") UUID dummyId) {
        DummyResponseDto dummyResponseDto = dummyService.deleteDummy(apiKey, dummyId);
        return ResponseEntity.ok(ApiResponse.success("해당 더미데이터 삭제 성공했습니다.", dummyResponseDto));
    }

    // TODO: adminId는 토큰을 통해 가져오게 하기
    @DeleteMapping()
    public ResponseEntity<?> delete(@RequestHeader("apiKey") UUID apiKey) {
        List<DummyResponseDto> dummyResponseDtoList = dummyService.deleteAllDummy(apiKey);
        return ResponseEntity.ok(ApiResponse.success("전체 더미데이터 삭제 성공했습니다.", dummyResponseDtoList));
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchAll(@ModelAttribute DummySearchRequestDto req, @RequestHeader("apiKey") UUID apiKey, @PageableDefault Pageable pageable) {
        Page<DummyResponseDto> dummyResponseDtoList = dummyService.searchAll(req, apiKey, pageable);
        return ResponseEntity.ok(ApiResponse.success("전체 더미데이터 검색 성공했습니다.", dummyResponseDtoList));
    }

    @GetMapping("/{dummyId}")
    public ResponseEntity<?> search(@RequestHeader("apiKey") UUID apiKey, @PathVariable(value = "dummyId") UUID dummyId) {
        DummyResponseDto dummyResponseDto = dummyService.search(apiKey, dummyId);
        return ResponseEntity.ok(ApiResponse.success("해당 더미데이터 검색 성공했습니다.", dummyResponseDto));
    }

    @PatchMapping("/{dummyId}")
    public ResponseEntity<?> update(@RequestHeader("apiKey") UUID apiKey, @PathVariable(value = "dummyId") UUID dummyId, @RequestBody DummyUpdateRequestDto req) {
        DummyResponseDto dummyResponseDto = dummyService.update(apiKey, dummyId, req);
        return ResponseEntity.ok(ApiResponse.success("해당 더미데이터 수정 성공했습니다.", dummyResponseDto));
    }
}