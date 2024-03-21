package com.joa.openapi.member.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.joa.openapi.account.dto.AccountCreateResponseDto;
import com.joa.openapi.account.entity.Account;
import com.joa.openapi.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;

import java.time.LocalDateTime;

@Data
@Builder
@AllArgsConstructor
public class MemberIdResponseDto {

    private String id;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime createdAt;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime updatedAt;

    public static MemberIdResponseDto toDto(Member member) {
        return MemberIdResponseDto.builder()
                .id(member.getId().toString())
                .createdAt(member.getCreatedAt())
                .updatedAt(member.getUpdatedAt())
                .build();
    }
}
