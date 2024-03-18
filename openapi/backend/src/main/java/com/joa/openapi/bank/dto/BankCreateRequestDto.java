package com.joa.openapi.bank.dto;

import lombok.*;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BankCreateRequestDto {

    private String name;
    private String description;
    private String uri;
}
