package com.joa.admin.admin.controller;

import com.joa.admin.admin.dto.*;
import com.joa.admin.admin.service.AdminService;
import com.joa.admin.common.response.ApiResponse;
import com.joa.admin.common.security.SecurityUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin")
public class AdminController {

    private final AdminService adminService;

    //회원가입
    @PostMapping
    public ResponseEntity<?> join(@Valid @RequestBody AdminJoinRequestDto request) {
        AdminIdResponseDto response = adminService.addAdmin(request);
        return ResponseEntity.ok(ApiResponse.success("회원 가입에 성공했습니다.",response));
    }
    //

    //이메일 중복 검사
    @GetMapping("email/{keyword}")
    public ResponseEntity<?> confirmEmail(@PathVariable String keyword) {
        adminService.confirmEmail(keyword);
        return ResponseEntity.ok(ApiResponse.success("사용 가능한 이메일입니다."));
    }

    //TODO: 휴대폰 중복 검사 API 적용
    @GetMapping("phone/{keyword}")
    public ResponseEntity<?> confirmPhone(@PathVariable String keyword) {
        adminService.confirmPhone(keyword);
        return ResponseEntity.ok(ApiResponse.success("사용 가능한 번호입니다."));
    }

    //로그인
    @PostMapping("login")
    public ResponseEntity<?> login(@Valid @RequestBody AdminLoginRequestDto request) {
        AdminTokenResponseDto response = adminService.login(request);
        return ResponseEntity.ok(ApiResponse.success("로그인에 성공했습니다.", response));
    }

    //access token 갱신
    @GetMapping("reissue")
    public ResponseEntity<?> refreshAccessToken(HttpServletRequest request, HttpServletResponse httpServletResponse) {
        AdminTokenResponseDto response = adminService.reissueAccessToken(request, httpServletResponse);
        return ResponseEntity.ok(ApiResponse.success("액세스 토큰 갱신에 성공했습니다.", response));
    }

    //로그아웃
    @GetMapping("logout")
    public ResponseEntity<?> logout(HttpServletRequest request) {
        adminService.logout(request);
        return ResponseEntity.ok(ApiResponse.success("로그아웃에 성공했습니다."));
    }

    //회원정보 조회
    @GetMapping
    public ResponseEntity<?> info() {
        String adminId = SecurityUtil.getCurrentAdminId();
        AdminInfoResponseDto response = adminService.getInfo(adminId);
        return ResponseEntity.ok(ApiResponse.success("회원 정보 조회에 성공했습니다.", response));
    }

    //회원정보 수정
    @PatchMapping
    public ResponseEntity<?> update(@RequestBody AdminUpdateRequestDto request) {
        String adminId = SecurityUtil.getCurrentAdminId();
        AdminInfoResponseDto response = adminService.update(adminId, request);
        return ResponseEntity.ok(ApiResponse.success("회원 정보 수정에 성공했습니다.", response));
    }

    //회원 탈퇴
    @DeleteMapping
    public ResponseEntity<?> delete() {
        String adminId = SecurityUtil.getCurrentAdminId();
        AdminIdResponseDto response = adminService.delete(adminId);
        return ResponseEntity.ok(ApiResponse.success("회원 탈퇴에 성공했습니다.", response));
    }
}