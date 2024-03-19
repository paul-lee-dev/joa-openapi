package com.joa.openapi.account.dto;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountCreateRequestDto {

    private String nickname;
    private Integer password;
    private final Long transferLimit = 100L;
    private final Integer term = 12;
    private String withdrawAccount;
    private final Long amount = 0L;
}