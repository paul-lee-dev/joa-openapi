package com.joa.openapi.bank.dto;

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
}
