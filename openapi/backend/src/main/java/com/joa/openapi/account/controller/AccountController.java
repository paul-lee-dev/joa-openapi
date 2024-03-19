package com.joa.openapi.account.controller;

import com.joa.openapi.account.dto.AccountCreateRequestDto;
import com.joa.openapi.account.dto.AccountCreateResponseDto;
import com.joa.openapi.account.dto.AccountUpdateRequestDto;
import com.joa.openapi.account.dto.AccountUpdateResponseDto;
import com.joa.openapi.account.service.AccountService;
import com.joa.openapi.common.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/account")
@RequiredArgsConstructor
public class AccountController {

    private final AccountService accountService;

    @PostMapping
    public ResponseEntity<?> create(@RequestHeader("memberId") String memberId, @RequestBody AccountCreateRequestDto req) {
        AccountCreateResponseDto account = accountService.create(req, memberId);
        return ResponseEntity.ok(ApiResponse.success("계좌 개설에 성공했습니다.", account));
    }

    @PatchMapping
    public ResponseEntity<?> update(@RequestHeader("memberId") String memberId, @RequestBody AccountUpdateRequestDto req) {
        AccountUpdateResponseDto account = accountService.update(req, memberId);
        return ResponseEntity.ok(ApiResponse.success("계좌 수정에 성공했습니다.", account));
    }

    @PatchMapping("/limit")
    public ResponseEntity<?> updateLimit(@RequestHeader("memberId") String memberId, @RequestBody AccountUpdateRequestDto req) {
        AccountUpdateResponseDto account = accountService.update(req, memberId);
        return ResponseEntity.ok(ApiResponse.success("이체한도 변경에 성공했습니다.", account));
    }


//    @DeleteMapping("/{boardId}")
//    public ResponseEntity<Void> delete(@PathVariable(value = "boardId") Long boardId){
//        String memberId = MemberUtil.getMemberId();
//        accountService.delete(boardId, memberId);
//        return ResponseEntity.ok().build();
//    }
}
