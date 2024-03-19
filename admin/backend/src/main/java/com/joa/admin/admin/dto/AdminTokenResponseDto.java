package com.joa.admin.admin.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class AdminTokenResponseDto {

    private String accessToken;
    private String refreshToken;
}
