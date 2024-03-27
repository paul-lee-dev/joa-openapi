package com.joa.admin.admin.service;

import com.joa.admin.admin.dto.AdminInfoDto;
import com.joa.admin.admin.dto.req.AdminEmailConfirmRequestDto;
import com.joa.admin.admin.dto.req.AdminEmailSendRequestDto;
import com.joa.admin.admin.dto.req.AdminJoinRequestDto;
import com.joa.admin.admin.dto.req.AdminLoginRequestDto;
import com.joa.admin.admin.dto.req.AdminUpdateRequestDto;
import com.joa.admin.admin.dto.res.AdminIdResponseDto;
import com.joa.admin.admin.dto.res.AdminInfoResponseDto;
import com.joa.admin.admin.dto.res.AdminLoginResponseDto;
import com.joa.admin.admin.dto.res.AdminTokenResponseDto;
import com.joa.admin.admin.entity.Admin;
import com.joa.admin.admin.entity.Api;
import com.joa.admin.admin.errorcode.AdminErrorCode;
import com.joa.admin.admin.repository.AdminRepository;
import com.joa.admin.admin.repository.ApiRepository;
import com.joa.admin.common.exception.RestApiException;
import com.joa.admin.common.security.CustomUserDetails;
import com.joa.admin.common.security.JwtUtil;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@Transactional
@ComponentScan
@RequiredArgsConstructor
public class AdminService implements UserDetailsService {

    private final AdminRepository adminRepository;
    private final ApiRepository apiRepository;
    private final ModelMapper modelMapper;
    private final PasswordEncoder encoder;
    private final JwtUtil jwtUtil;
    private JavaMailSender mailSender;

    //회원가입
    @Transactional
    public AdminIdResponseDto addAdmin(AdminJoinRequestDto request) {
        confirmEmail(request.getEmail());
        confirmPhone(request.getPhone());
        Admin admin = Admin.builder()
            .name(request.getName())
            .email(request.getEmail())
            .phone(request.getPhone())
            .build();
        admin.updatePassword(encoder.encode(request.getPassword()));
        Admin newAdmin = adminRepository.save(admin);
        AdminIdResponseDto response = new AdminIdResponseDto(newAdmin.getAdminId().toString(),
            newAdmin.getCreatedAt(), newAdmin.getUpdatedAt());
        return response;
    }

    //이메일 중복 검증
    @Transactional
    public boolean confirmEmail(String email) {
        Admin admin = adminRepository.findByEmail(email);
        if (admin != null) {
            throw new RestApiException(AdminErrorCode.EMAIL_CONFLICT);
        }
        return true;
    }

    //전화번호 중복 검증
    @Transactional
    public boolean confirmPhone(String phone) {
        Admin admin = adminRepository.findByPhone(phone);
        if (admin != null) {
            throw new RestApiException(AdminErrorCode.PHONE_CONFLICT);
        }
        return true;
    }

    //로그인
    @Transactional
    public AdminLoginResponseDto login(AdminLoginRequestDto request) {
        String email = request.getEmail();
        String password = request.getPassword();
        Admin admin = adminRepository.findByEmail(email);
        if (admin == null || admin.getIsDeleted() == true) {
            throw new RestApiException(AdminErrorCode.NO_MEMBER);
        }
        if (!encoder.matches(password, admin.getPassword())) {
            throw new RestApiException(AdminErrorCode.WRONG_PASSWORD);
        }

        String adminId = admin.getAdminId().toString();
        String accessToken = jwtUtil.createAccessToken(adminId);
        String refreshToken = jwtUtil.createRefreshToken(adminId);

        Api found = apiRepository.findByAdminId(UUID.fromString(adminId));
        UUID apiKey = null;
        if (found!=null) apiKey = found.getApiKey();
        AdminLoginResponseDto response = new AdminLoginResponseDto(accessToken, refreshToken, apiKey);
        return response;
    }

    //회원정보 조회
    @Transactional(readOnly = true)
    public AdminInfoResponseDto getInfo(String adminId) {
        Admin admin = adminRepository.findByAdminId(UUID.fromString(adminId));
        AdminInfoResponseDto response = modelMapper.map(admin, AdminInfoResponseDto.class);
        return response;
    }

    //회원정보 수정
    @Transactional
    public AdminInfoResponseDto update(String adminId, AdminUpdateRequestDto request) {
        Admin admin = adminRepository.findByAdminId(UUID.fromString(adminId));
        if (request.getName() != null) {
            admin.updateName(request.getName());
        }
        if (request.getPassword() != null) {
            admin.updatePassword(encoder.encode(request.getPassword()));
        }
        if (request.getEmail() != null) {
            admin.updateEmail(request.getEmail());
        }
        if (request.getPhone() != null) {
            admin.updatePhone(request.getPhone());
        }
        Admin updatedAdmin = adminRepository.save(admin);
        AdminInfoResponseDto response = modelMapper.map(updatedAdmin, AdminInfoResponseDto.class);
        return response;
    }

    //회원 탈퇴
    @Transactional
    public AdminIdResponseDto delete(String adminId) {
        Admin admin = adminRepository.findByAdminId(UUID.fromString(adminId));
        admin.deleteSoftly();
        AdminIdResponseDto response = new AdminIdResponseDto(admin.getAdminId().toString(),
            admin.getCreatedAt(), admin.getUpdatedAt());
        return response;
    }

    //access token 갱신
    @Transactional
    public AdminTokenResponseDto reissueAccessToken(HttpServletRequest request,
        HttpServletResponse response) {
        String refreshToken = jwtUtil.extractRefreshToken(request).orElseThrow();
        if (!jwtUtil.validateToken(refreshToken)) {
            throw new RestApiException(AdminErrorCode.TOKEN_INVALID);
        }
        String id = jwtUtil.getUserId(refreshToken);
        String newAccessToken = jwtUtil.createAccessToken(id); //access token을 재발급
        response.setHeader("Authorization", "BEARER " + newAccessToken);
        log.info("Access Token sent in header, newAccessToken: {}", newAccessToken);
        return new AdminTokenResponseDto(newAccessToken, refreshToken);
    }

    //로그아웃
    @Transactional
    public void logout(HttpServletRequest request) {
        String refreshToken = jwtUtil.extractRefreshToken(request).orElseThrow();
        if (!jwtUtil.validateToken(refreshToken)) {
            throw new RestApiException(AdminErrorCode.TOKEN_INVALID);
        }
        String adminId = jwtUtil.getUserId(refreshToken);
        jwtUtil.logout(adminId);
    }

    //로그인 유저의 권한 인증을 위한 로직
    @Override
    public UserDetails loadUserByUsername(String id) throws UsernameNotFoundException {
        Admin admin = adminRepository.findByAdminId(UUID.fromString(id));
        if (admin == null) {
            throw new RestApiException(AdminErrorCode.NO_MEMBER);
        }

        AdminInfoDto dto = modelMapper.map(admin, AdminInfoDto.class);
        return new CustomUserDetails(dto);
    }

    // API key 발급
    @Transactional
    public String issuedApiKey(String adminId) {
        Integer apiCount = apiRepository.countByAdminId(UUID.fromString(adminId));

        if(apiCount > 0) {
            throw new RestApiException(AdminErrorCode.ALREADY_API_KEY);
        }

        UUID apiKey = UUID.randomUUID();
        Api api = Api.builder()
            .apiKey(apiKey)
            .adminId(UUID.fromString(adminId))
            .build();

        apiRepository.save(api);

        return apiKey.toString();
    }

    // API key 재발급
    @Transactional
    public String reissuedApiKey(String adminId) {
        Integer apiCount = apiRepository.countByAdminId(UUID.fromString(adminId));

        if (apiCount < 1) {
            throw new RestApiException(AdminErrorCode.NO_API_KEY);
        }

        UUID newApiKey = UUID.randomUUID();

        apiRepository.updateApiKey(adminId, newApiKey.toString());

        return newApiKey.toString();
    }

    // API key 삭제
    @Transactional
    public void deleteApiKey(String adminId) {

        Api api = apiRepository.findByAdminId(UUID.fromString(adminId));

        if(apiRepository.countByAdminId(UUID.fromString(adminId)) < 1) {
            throw new RestApiException(AdminErrorCode.NO_API_KEY);
        }

        api.deleteSoftly();

    }

}
