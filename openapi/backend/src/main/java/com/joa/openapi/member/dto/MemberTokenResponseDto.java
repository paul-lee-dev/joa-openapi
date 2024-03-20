package com.joa.openapi.member.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class MemberTokenResponseDto {

    private String accessToken;
    private String refreshToken;
}
