package com.joa.openapi.account.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class AccountCreateRequestDto {

    private String nickname;
    private Integer password;
    private Boolean isDormant;
    private Long transferLimit;
    private Integer term;
    private String withdrawAccount;
    private Long amount;
}
