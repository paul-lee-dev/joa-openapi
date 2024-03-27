package com.joa.openapi.dummy.controller;

import com.joa.openapi.common.response.ApiResponse;
import com.joa.openapi.dummy.dto.*;
import com.joa.openapi.dummy.service.DummyService;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.parser.ParseException;
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
    public ResponseEntity<?> createMember(HttpServletRequest request, @RequestHeader("apiKey") UUID apiKey, @RequestBody DummyMemberRequestDto req) throws ParseException {
        DummyResponseDto dummyResponseDto = dummyService.createMember(request, apiKey, req);
        return ResponseEntity.ok(ApiResponse.success("멤버 더미데이터 생성 성공했습니다.", dummyResponseDto));
    }

    @PostMapping("/account")
    public ResponseEntity<?> createAccount(HttpServletRequest request, @RequestHeader("apiKey") UUID apiKey, @RequestBody DummyAccountRequestDto req) throws ParseException {
        DummyResponseDto dummyResponseDto = dummyService.createAccount(request, apiKey, req);
        return ResponseEntity.ok(ApiResponse.success("계좌 더미데이터 생성 성공했습니다.", dummyResponseDto));
    }

    @PostMapping("/transaction")
    public ResponseEntity<?> createTransaction(HttpServletRequest request, @RequestHeader("apiKey") UUID apiKey, @RequestBody DummyTransactionRequestDto req) throws ParseException {
        DummyResponseDto dummyResponseDto = dummyService.createTransaction(request, apiKey, req);
        return ResponseEntity.ok(ApiResponse.success("거래내역 더미데이터 생성 성공했습니다.", dummyResponseDto));
    }

    @DeleteMapping("/{dummyId}")
    public ResponseEntity<?> deleteDummy(HttpServletRequest request, @RequestHeader("apiKey") UUID apiKey, @PathVariable(value = "dummyId") UUID dummyId) throws ParseException {
        DummyResponseDto dummyResponseDto = dummyService.deleteDummy(request, apiKey, dummyId);
        return ResponseEntity.ok(ApiResponse.success("해당 더미데이터 삭제 성공했습니다.", dummyResponseDto));
    }

    // TODO: adminId는 토큰을 통해 가져오게 하기
    @DeleteMapping()
    public ResponseEntity<?> delete(HttpServletRequest request, @RequestHeader("apiKey") UUID apiKey) throws ParseException {
        List<DummyResponseDto> dummyResponseDtoList = dummyService.deleteAllDummy(request, apiKey);
        return ResponseEntity.ok(ApiResponse.success("전체 더미데이터 삭제 성공했습니다.", dummyResponseDtoList));
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchAll(HttpServletRequest request, @RequestHeader("apiKey") UUID apiKey) throws ParseException {
        List<DummyResponseDto> dummyResponseDtoList = dummyService.searchAll(request, apiKey);
        return ResponseEntity.ok(ApiResponse.success("전체 더미데이터 검색 성공했습니다.", dummyResponseDtoList));
    }

    @GetMapping("/{dummyId}")
    public ResponseEntity<?> search(HttpServletRequest request, @RequestHeader("apiKey") UUID apiKey, @PathVariable(value = "dummyId") UUID dummyId) throws ParseException {
        DummyResponseDto dummyResponseDto = dummyService.search(request, apiKey, dummyId);
        return ResponseEntity.ok(ApiResponse.success("해당 더미데이터 검색 성공했습니다.", dummyResponseDto));
    }

    @PatchMapping("/{dummyId}")
    public ResponseEntity<?> update(HttpServletRequest request, @RequestHeader("apiKey") UUID apiKey, @PathVariable(value = "dummyId") UUID dummyId, @RequestBody DummyUpdateRequestDto req) throws ParseException {
        DummyResponseDto dummyResponseDto = dummyService.update(request, apiKey, dummyId, req);
        return ResponseEntity.ok(ApiResponse.success("해당 더미데이터 수정 성공했습니다.", dummyResponseDto));
    }
}