package com.joa.admin.admin.dto.res;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class AdminLoginResponseDto {

    private String accessToken;
    private String refreshToken;
    private UUID apiKey;
}
