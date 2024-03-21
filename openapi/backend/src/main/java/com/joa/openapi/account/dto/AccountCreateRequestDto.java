package com.joa.openapi.account.dto;

import lombok.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountCreateRequestDto {

    private String nickname;
    private String password;
    private final Long transferLimit = 100L;
    private final Integer term = 12;
    private String depositAccount;
    private String withdrawAccount;
    private final Long amount = 0L;
}