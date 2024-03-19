package com.joa.openapi.account.controller;

import com.joa.openapi.account.dto.AccountCreateRequestDto;
import com.joa.openapi.account.dto.AccountCreateResponseDto;
import com.joa.openapi.account.service.AccountService;
import com.joa.openapi.common.response.ApiResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/account")
@RequiredArgsConstructor
public class AccountController {

    private final AccountService accountService;

    @PostMapping
    public ResponseEntity<?> create(@RequestBody AccountCreateRequestDto req, @RequestHeader("memberId") String memberId) {
        AccountCreateResponseDto account = accountService.create(req, memberId);
        return new ResponseEntity<>(ApiResponse.success("계좌 개설 성공", account), HttpStatus.OK);
    }

//    @PatchMapping("/{boardId}")
//    public ResponseEntity<Void> update(@RequestBody BoardUpdateRequestDto req, @PathVariable(value = "boardId") Long boardId) {
//        String memberId = MemberUtil.getMemberId();
//        accountService.update(req, boardId, memberId);
//        return ResponseEntity.ok().build();
//    }
//
//    @DeleteMapping("/{boardId}")
//    public ResponseEntity<Void> delete(@PathVariable(value = "boardId") Long boardId){
//        String memberId = MemberUtil.getMemberId();
//        accountService.delete(boardId, memberId);
//        return ResponseEntity.ok().build();
//    }
}
