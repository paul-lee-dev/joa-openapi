package com.joa.admin.common.security;

import com.joa.admin.admin.errorcode.AdminErrorCode;
import com.joa.admin.common.exception.RestApiException;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;

public class SecurityUtil {

    //현재 로그인한 유저의 ID를 얻어옴
    public static String getCurrentAdminId() {
        final Authentication authentication = SecurityContextHolder.getContext().getAuthentication();
        if (authentication == null || authentication.getName() == null) throw new RestApiException(AdminErrorCode.NO_AUTH);
        CustomUserDetails userDetails = (CustomUserDetails) authentication.getPrincipal();
        String adminId = userDetails.getUsername();
        return adminId;
    }
}