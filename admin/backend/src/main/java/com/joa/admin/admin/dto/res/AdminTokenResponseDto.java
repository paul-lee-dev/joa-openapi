package com.joa.admin.admin.dto.res;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.util.UUID;

@Data
@AllArgsConstructor
public class AdminTokenResponseDto {

    private String accessToken;
    private String refreshToken;
}
