package com.joa.openapi.account.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountUpdateRequestDto {

    private String accountId;
    private String nickname;
    private String password;
    private Long transferLimit;
    private String depositAccount;
    private String withdrawAccount;
    private UUID dummyId;
}