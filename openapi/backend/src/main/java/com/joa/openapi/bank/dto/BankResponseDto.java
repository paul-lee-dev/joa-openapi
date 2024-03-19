package com.joa.openapi.bank.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.joa.openapi.bank.entity.Bank;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BankResponseDto {

    private UUID bankId;
    private UUID adminId;
    private String name;
    private String description;
    private String uri;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime createdAt;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime updatedAt;

    public static BankResponseDto toDto(Bank bank) {
        return BankResponseDto.builder()
                .bankId(bank.getBankId())
                .adminId(bank.getAdminId())
                .name(bank.getName())
                .description(bank.getDescription())
                .uri(bank.getUri())
                .createdAt(bank.getCreatedAt())
                .updatedAt(bank.getUpdatedAt())
                .build();
    }
}
