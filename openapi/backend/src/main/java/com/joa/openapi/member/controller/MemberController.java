package com.joa.openapi.member.controller;

import com.joa.openapi.common.response.ApiResponse;
import com.joa.openapi.member.dto.*;
import com.joa.openapi.member.service.MemberService;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
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
    public ResponseEntity<?> join(@RequestHeader("apiKey") UUID apiKey, @Valid @RequestBody MemberJoinRequestDto request) {
        MemberIdResponseDto response = memberService.addMember(apiKey, request);
        return ResponseEntity.ok(ApiResponse.success("회원 가입에 성공했습니다.",response));
    }

    //이메일 중복 검사
    @GetMapping("email/{keyword}/{bankId}")
    public ResponseEntity<?> confirmEmail(@RequestHeader("apiKey") UUID apiKey, @PathVariable String keyword, @PathVariable UUID bankId) {
        memberService.confirmEmail(apiKey, keyword, bankId);
        return ResponseEntity.ok(ApiResponse.success("사용 가능한 이메일입니다."));
    }

    //TODO: 휴대폰 중복 검사 API 적용
    @GetMapping("phone/{keyword}")
    public ResponseEntity<?> confirmPhone(@RequestHeader("apiKey") UUID apiKey, @PathVariable String keyword) {
        memberService.confirmPhone(apiKey, keyword);
        return ResponseEntity.ok(ApiResponse.success("사용 가능한 번호입니다."));
    }

    //내 회원정보 조회
    @GetMapping
    public ResponseEntity<?> myInfo(@RequestHeader("apiKey") UUID apiKey, @RequestHeader("memberId") UUID memberId) {
        MemberInfoResponseDto response = memberService.getInfo(apiKey, memberId);
        return ResponseEntity.ok(ApiResponse.success("회원 정보 조회에 성공했습니다.", response));
    }

    //회원정보 조회
    @GetMapping("{memberId}")
    public ResponseEntity<?> info(@RequestHeader("apiKey") UUID apiKey, @PathVariable UUID memberId) {
        MemberInfoResponseDto response = memberService.getInfo(apiKey, memberId);
        return ResponseEntity.ok(ApiResponse.success("회원 정보 조회에 성공했습니다.", response));
    }

    //내 회원정보 수정
    @PatchMapping
    public ResponseEntity<?> updateMyInfo(@RequestHeader("apiKey") UUID apiKey, @RequestHeader("memberId") UUID memberId,
                                    @RequestBody MemberUpdateRequestDto request) {
        MemberInfoResponseDto response = memberService.update(apiKey, memberId, request);
        return ResponseEntity.ok(ApiResponse.success("회원 정보 수정에 성공했습니다.", response));
    }

    //회원정보 수정
    @PatchMapping("{memberId}")
    public ResponseEntity<?> update(@RequestHeader("apiKey") UUID apiKey, @PathVariable UUID memberId, @RequestBody MemberUpdateRequestDto request) {
        MemberInfoResponseDto response = memberService.update(apiKey, memberId, request);
        return ResponseEntity.ok(ApiResponse.success("회원 정보 수정에 성공했습니다.", response));
    }

    //TODO: 은행별 고객 전체 조회, 검색
    @GetMapping("search")
    public ResponseEntity<?> search(@RequestHeader("apiKey") UUID apiKey, @ModelAttribute MemberSearchRequestDto req, @PageableDefault Pageable pageable) {
        Page<MemberSearchResponseDto> membersPage = memberService.search(apiKey, req, pageable);
        return ResponseEntity.ok(ApiResponse.success("회원 검색에 성공했습니다.", membersPage));
    }

    //회원 탈퇴
    @DeleteMapping("{memberId}")
    public ResponseEntity<?> delete(@RequestHeader("apiKey") UUID apiKey, @PathVariable("memberId") UUID memberId) {
        MemberIdResponseDto response = memberService.delete(apiKey, memberId);
        return ResponseEntity.ok(ApiResponse.success("회원 탈퇴에 성공했습니다.", response));
    }
}
