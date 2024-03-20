package com.joa.openapi.member.dto;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class MemberInfoResponseDto {

    private String name;
    private String email;
    private String phone;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
