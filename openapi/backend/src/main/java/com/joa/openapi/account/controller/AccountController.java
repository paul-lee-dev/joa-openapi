package com.joa.openapi.account.controller;

import com.joa.openapi.account.dto.AccountCreateRequestDto;
import com.joa.openapi.account.entity.Account;
import com.joa.openapi.account.service.AccountService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/v1/account")
@RequiredArgsConstructor
public class AccountController {

    private final AccountService accountService;

    @PostMapping
    public ResponseEntity<String> create(@RequestBody AccountCreateRequestDto req, @RequestHeader String memberId) {
        Account account = accountService.create(req, memberId);
        return ResponseEntity.ok(account.getId());
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
