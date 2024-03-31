package com.joa.openapi.member.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.joa.openapi.account.dto.AccountSearchResponseDto;
import com.joa.openapi.account.entity.Account;
import com.joa.openapi.member.entity.Member;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MemberSearchResponseDto {

    private String memberName;
    private UUID memberId;
    private String email;
    private String phone;
    private String bankName;

    @JsonFormat(pattern = "yyyy/MM/dd")
    private LocalDateTime createdAt;

    public static MemberSearchResponseDto toDto(Member member) {
        return MemberSearchResponseDto.builder()
                .memberName(member.getName())
                .memberId(member.getId())
                .email(member.getEmail())
                .phone(member.getPhone())
                .bankName(member.getBank().getName())
                .createdAt(member.getCreatedAt())
                .build();
    }
}
