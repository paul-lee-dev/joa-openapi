package com.joa.openapi.account.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.joa.openapi.account.entity.Account;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountBalanceResponseDto {

    private String accountId;
    private String nickname;
    private Long balance;

    public static AccountBalanceResponseDto toDto(Account account) {
        return AccountBalanceResponseDto.builder()
                .accountId(account.getId())
                .nickname(account.getNickname())
                .balance(account.getBalance())
                .build();
    }
}
