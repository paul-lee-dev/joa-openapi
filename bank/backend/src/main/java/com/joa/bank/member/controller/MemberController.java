package com.joa.bank.member.controller;

import com.joa.bank.common.response.ApiResponse;
import com.joa.bank.member.dto.MemberLoginRequestDto;
import com.joa.bank.member.dto.MemberLoginResponseDto;
import com.joa.bank.member.service.MemberService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@Slf4j
@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    //로그인
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody MemberLoginRequestDto request) {
        MemberLoginResponseDto response = memberService.login(request);
        HttpHeaders headers = new HttpHeaders();
        headers.add("memberId", request.getEmail());
        return new ResponseEntity<ApiResponse>(ApiResponse.success("로그인에 성공했습니다.",response), headers, HttpStatus.OK);
    }

    //로그아웃
    @GetMapping("/logout")
    public ResponseEntity<?> logout() {
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<ApiResponse>(ApiResponse.success("로그아웃에 성공했습니다."), headers, HttpStatus.OK);
    }
}
