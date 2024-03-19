package com.joa.openapi.account.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountUpdateRequestDto {

    private String id;
    private String nickname;
    private Integer password;
    private Long transferLimit;
    private String withdrawAccount;
}