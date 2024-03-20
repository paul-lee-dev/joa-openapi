package com.joa.openapi.member.dto;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@AllArgsConstructor
public class MemberIdResponseDto {

    private String memberId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
