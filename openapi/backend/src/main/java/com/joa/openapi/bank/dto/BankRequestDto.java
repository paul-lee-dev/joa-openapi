package com.joa.openapi.bank.dto;

import com.joa.openapi.bank.entity.Bank;
import lombok.*;

import java.util.UUID;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BankRequestDto {

    private UUID bankId;
    private UUID adminId;
    private String name;
    private String description;
    private String uri;

    public static BankRequestDto toDto(Bank bank) {
        return BankRequestDto.builder()
                .bankId(bank.getBankId())
                .adminId(bank.getAdminId())
                .name(bank.getName())
                .description(bank.getDescription())
                .uri(bank.getUri())
                .build();
    }
}
