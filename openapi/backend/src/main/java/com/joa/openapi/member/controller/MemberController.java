package com.joa.openapi.member.controller;

import com.joa.openapi.common.response.ApiResponse;
import com.joa.openapi.member.dto.*;
import com.joa.openapi.member.service.MemberService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.UUID;

@RestController
@RequiredArgsConstructor
@RequestMapping("/v1/member")
public class MemberController {

    private final MemberService memberService;

    //회원가입
    @PostMapping
    public ResponseEntity<?> join(@Valid @RequestBody MemberJoinRequestDto request) {
        MemberIdResponseDto response = memberService.addMember(request);
        return ResponseEntity.ok(ApiResponse.success("회원 가입에 성공했습니다.",response));
    }

    //이메일 중복 검사
    @GetMapping("email/{keyword}")
    public ResponseEntity<?> confirmEmail(@PathVariable String keyword) {
        memberService.confirmEmail(keyword);
        return ResponseEntity.ok(ApiResponse.success("사용 가능한 이메일입니다."));
    }

    //TODO: 휴대폰 중복 검사 API 적용
    @GetMapping("phone/{keyword}")
    public ResponseEntity<?> confirmPhone(@PathVariable String keyword) {
        memberService.confirmPhone(keyword);
        return ResponseEntity.ok(ApiResponse.success("사용 가능한 번호입니다."));
    }

    //회원정보 조회
    @GetMapping
    public ResponseEntity<?> info(@RequestHeader("memberId") UUID memberId) {
        MemberInfoResponseDto response = memberService.getInfo(memberId);
        return ResponseEntity.ok(ApiResponse.success("회원 정보 조회에 성공했습니다.", response));
    }

    //회원정보 수정
    @PatchMapping
    public ResponseEntity<?> update(@RequestHeader("memberId") UUID memberId,
                                    @RequestBody MemberUpdateRequestDto request) {
        MemberInfoResponseDto response = memberService.update(memberId, request);
        return ResponseEntity.ok(ApiResponse.success("회원 정보 수정에 성공했습니다.", response));
    }

    //회원 탈퇴
    @DeleteMapping
    public ResponseEntity<?> delete(@RequestHeader("memberId") UUID memberId) {
        MemberIdResponseDto response = memberService.delete(memberId);
        return ResponseEntity.ok(ApiResponse.success("회원 탈퇴에 성공했습니다.", response));
    }
}