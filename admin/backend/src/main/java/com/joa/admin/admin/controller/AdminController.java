package com.joa.admin.admin.controller;

import com.joa.admin.admin.dto.req.AdminEmailConfirmRequestDto;
import com.joa.admin.admin.dto.req.AdminEmailSendRequestDto;
import com.joa.admin.admin.dto.req.AdminJoinRequestDto;
import com.joa.admin.admin.dto.req.AdminLoginRequestDto;
import com.joa.admin.admin.dto.req.AdminUpdateRequestDto;
import com.joa.admin.admin.dto.res.AdminIdResponseDto;
import com.joa.admin.admin.dto.res.AdminInfoResponseDto;
import com.joa.admin.admin.dto.res.AdminLoginResponseDto;
import com.joa.admin.admin.dto.res.AdminTokenResponseDto;
import com.joa.admin.admin.service.AdminService;
import com.joa.admin.admin.service.EmailService;
import com.joa.admin.common.response.ApiResponse;
import com.joa.admin.common.security.SecurityUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import jakarta.validation.Valid;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequiredArgsConstructor
@RequestMapping("/admin")
public class AdminController {

    private final AdminService adminService;
    private final EmailService emailService;

    //회원가입
    @PostMapping
    public ResponseEntity<?> join(@Valid @RequestBody AdminJoinRequestDto request) {
        AdminIdResponseDto response = adminService.addAdmin(request);
        return ResponseEntity.ok(ApiResponse.success("회원 가입에 성공했습니다.",response));
    }

    //이메일 중복 검사
    @GetMapping("/email/{keyword}")
    public ResponseEntity<?> confirmEmail(@PathVariable String keyword) {
        adminService.confirmEmail(keyword);
        return ResponseEntity.ok(ApiResponse.success("사용 가능한 이메일입니다."));
    }

    //TODO: 휴대폰 중복 검사 API 적용
    @GetMapping("/phone/{keyword}")
    public ResponseEntity<?> confirmPhone(@PathVariable String keyword) {
        adminService.confirmPhone(keyword);
        return ResponseEntity.ok(ApiResponse.success("사용 가능한 번호입니다."));
    }

    //로그인
    @PostMapping("/login")
    public ResponseEntity<?> login(@Valid @RequestBody AdminLoginRequestDto request) {
        AdminLoginResponseDto response = adminService.login(request);
        return ResponseEntity.ok(ApiResponse.success("로그인에 성공했습니다.", response));
    }

    //access token 갱신
    @GetMapping("/reissue")
    public ResponseEntity<?> refreshAccessToken(HttpServletRequest request, HttpServletResponse httpServletResponse) {
        AdminTokenResponseDto response = adminService.reissueAccessToken(request, httpServletResponse);
        return ResponseEntity.ok(ApiResponse.success("액세스 토큰 갱신에 성공했습니다.", response));
    }

    //로그아웃
    @GetMapping("/logout")
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

    // API Key 발급
    @PostMapping("/issuedApiKey")
    public ResponseEntity<?> issuedApiKey() {
        String adminId = SecurityUtil.getCurrentAdminId();
        String response = adminService.issuedApiKey(adminId);
        // API key 정보 반환
        return ResponseEntity.ok(ApiResponse.success("API Key 발급에 성공했습니다.", UUID.fromString(response)));
    }

    // API Key 재발급
    @PostMapping("/reissuedApiKey")
    public ResponseEntity<?> reissuedApiKey() {
        String adminId = SecurityUtil.getCurrentAdminId();
        String response = adminService.reissuedApiKey(adminId);
        // API key 정보 반환
        return ResponseEntity.ok(ApiResponse.success("API Key 재발급에 성공했습니다.", UUID.fromString(response)));
    }

    // API Key 삭제
    @DeleteMapping("/deleteApiKey")
    public ResponseEntity<?> deleteApiKey() {
        String adminId = SecurityUtil.getCurrentAdminId();
        adminService.deleteApiKey(adminId);
        return ResponseEntity.ok(ApiResponse.success("API Key 삭제에 성공했습니다."));
    }

    // 이메일 전송
    @PostMapping("/emailSend")
    public ResponseEntity<?> sendEmail(@RequestBody AdminEmailSendRequestDto request) {
        emailService.sendEmailCode(request);
        return ResponseEntity.ok(ApiResponse.success("이메일로 코드가 전송되었습니다. 이메일을 확인해주십시오."));
    }

    // 이메일 인증 확인
    @PostMapping("/emailConfirm")
    public ResponseEntity<?> confirmEmail(@RequestBody AdminEmailConfirmRequestDto request) {
        emailService.confirmEmailCode(request);
        return ResponseEntity.ok(ApiResponse.success("이메일 인증에 성공했습니다."));
    }

}