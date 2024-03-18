package com.joa.admin.admin.service;

import com.joa.admin.admin.dto.AdminInfoResponse;
import com.joa.admin.admin.dto.AdminLoginRequest;
import com.joa.admin.admin.dto.AdminLogoutRequest;
import com.joa.admin.admin.dto.AdminRegistRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional
@RequiredArgsConstructor
public class AdminService {

    //회원가입
    public String addAdmin(AdminRegistRequest request) {
        return null;
    }

    //회원정보 조회
    public AdminInfoResponse getAdminInfo(String adminId) {
        return null;
    }

    //로그인
    public String login(AdminLoginRequest request) {
        return null;
    }

    //로그아웃
    public void logout(AdminLogoutRequest request) {

    }
}
