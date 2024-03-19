package com.joa.admin.admin.service;

import com.joa.admin.admin.dto.*;
import com.joa.admin.admin.entity.Admin;
import com.joa.admin.admin.errorcode.AdminErrorCode;
import com.joa.admin.admin.repository.AdminRepository;
import com.joa.admin.common.security.CustomUserDetails;
import com.joa.admin.common.security.JwtUtil;
import com.joa.admin.common.exception.RestApiException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;


@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class AdminService implements UserDetailsService {

    private final AdminRepository adminRepository;

    private final ModelMapper modelMapper;

    private final PasswordEncoder encoder;

    private final JwtUtil jwtUtil;

    //회원가입
    @Transactional
    public String addAdmin(AdminJoinRequestDto request) {
        Admin admin = Admin.builder()
                        .name(request.getName())
                        .email(request.getEmail())
                        .phone(request.getPhone())
                        .build();
        admin.setPassword(encoder.encode(request.getPassword()));
        return adminRepository.save(admin).getAdminId().toString();
    }

    //이메일 중복 검증
    @Transactional
    public boolean confirmEmail(String email) {
        Admin admin = adminRepository.findByEmail(email);
        if (admin!=null) throw new RestApiException(AdminErrorCode.EMAIL_CONFLICT);
        return true;
    }

    //전화번호 중복 검증
    @Transactional
    public boolean confirmPhone(String phone) {
        Admin admin = adminRepository.findByPhone(phone);
        if (admin!=null) throw new RestApiException(AdminErrorCode.PHONE_CONFLICT);
        return true;
    }

    //로그인
    @Transactional
    public AdminTokenResponseDto login(AdminLoginRequestDto request) {
        String email = request.getEmail();
        String password = request.getPassword();
        Admin admin = adminRepository.findByEmail(email);
        if (admin == null || admin.getIsDeleted() == true) throw new RestApiException(AdminErrorCode.NO_MEMBER);
        if (!encoder.matches(password, admin.getPassword())) throw new RestApiException(AdminErrorCode.WRONG_PASSWORD);

        String adminId = admin.getAdminId().toString();
        String accessToken = jwtUtil.createAccessToken(adminId);
        String refreshToken = jwtUtil.createRefreshToken(adminId);
        AdminTokenResponseDto response = new AdminTokenResponseDto(accessToken, refreshToken);
        return response;
    }

    //회원정보 조회
    @Transactional(readOnly = true)
    public AdminInfoResponseDto getAdminInfo(String adminId) {
        Admin admin = adminRepository.findByAdminId(UUID.fromString(adminId));
        AdminInfoResponseDto response = modelMapper.map(admin, AdminInfoResponseDto.class);
        return response;
    }

    //회원정보 수정
    @Transactional
    public AdminInfoResponseDto updateAdminInfo(String adminId, AdminUpdateRequestDto request) {
        Admin admin = adminRepository.findByAdminId(UUID.fromString(adminId));
        if (request.getName()!=null) admin.changeName(request.getName());
        if (request.getPassword()!=null) admin.setPassword(encoder.encode(request.getPassword()));
        if (request.getEmail()!=null) admin.changeEmail(request.getEmail());
        if (request.getPhone()!=null) admin.changePhone(request.getPhone());
        adminRepository.save(admin);
        AdminInfoResponseDto response = modelMapper.map(admin, AdminInfoResponseDto.class);
        return response;
    }

    //회원 탈퇴
    @Transactional
    public String deleteAdminInfo(String adminId) {
        Admin admin = adminRepository.findByAdminId(UUID.fromString(adminId));
        admin.deleteSoftly();
        return admin.getAdminId().toString();
    }

    //access token 갱신
    @Transactional
    public AdminTokenResponseDto reissueAccessToken(HttpServletRequest request, HttpServletResponse response) {
        String refreshToken = jwtUtil.extractRefreshToken(request).orElseThrow();
        if (!jwtUtil.validateToken(refreshToken)) throw new RestApiException(AdminErrorCode.TOKEN_INVALID);
        String id = jwtUtil.getUserId(refreshToken);
        String newAccessToken = jwtUtil.createAccessToken(id); //access token을 재발급
        response.setHeader("Authorization", "BEARER "+ newAccessToken);
        log.info("Access Token sent in header, newAccessToken: {}", newAccessToken);
        return new AdminTokenResponseDto(newAccessToken, refreshToken);
    }

    //로그아웃
    @Transactional
    public void logout(HttpServletRequest request) {
        String refreshToken = jwtUtil.extractRefreshToken(request).orElseThrow();
        if (!jwtUtil.validateToken(refreshToken)) throw new RestApiException(AdminErrorCode.TOKEN_INVALID);
        String adminId = jwtUtil.getUserId(refreshToken);
        jwtUtil.logout(adminId);
    }

    //로그인 유저의 권한 인증을 위한 로직
    @Override
    public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
        Admin admin = adminRepository.findByAdminId(UUID.fromString(id));
        if (admin == null) throw new RestApiException(AdminErrorCode.NO_MEMBER);

        AdminInfoDto dto = modelMapper.map(admin, AdminInfoDto.class);
        return new CustomUserDetails(dto);
    }
}
