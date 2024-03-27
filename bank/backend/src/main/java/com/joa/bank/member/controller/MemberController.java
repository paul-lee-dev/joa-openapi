package com.joa.bank.member.controller;

import com.joa.bank.common.exception.RestApiException;
import com.joa.bank.common.response.ApiResponse;
import com.joa.bank.member.dto.MemberLoginRequestDto;
import com.joa.bank.member.errorcode.MemberErrorCode;
import com.joa.bank.member.service.MemberService;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import static org.springframework.http.ResponseEntity.ok;

@RestController
@RequestMapping("/member")
@RequiredArgsConstructor
public class MemberController {

    private final MemberService memberService;

    //로그인
    @PostMapping("/login")
    public ResponseEntity<?> login(@RequestBody MemberLoginRequestDto request) {
        memberService.login(request);
        HttpHeaders headers = new HttpHeaders();
        headers.add("memberId", request.getEmail());
        return new ResponseEntity<ApiResponse>(ApiResponse.success("로그인에 성공했습니다."), headers, HttpStatus.OK);
    }

    //로그아웃
    @GetMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request, HttpServletResponse response) {
        memberService.logout(request, response);
        HttpHeaders headers = new HttpHeaders();
        return new ResponseEntity<ApiResponse>(ApiResponse.success("로그아웃에 성공했습니다."), headers, HttpStatus.OK);
    }
}
