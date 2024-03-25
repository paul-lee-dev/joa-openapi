package com.joa.openapi.account.dto;

import com.joa.openapi.account.entity.Account;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountGetBalanceResponseDto {

    private String accountId;
    private String nickname;
    private Long balance;

    public static AccountGetBalanceResponseDto toDto(Account account) {
        return AccountGetBalanceResponseDto.builder()
                .accountId(account.getId())
                .nickname(account.getName())
                .balance(account.getBalance())
                .build();
    }
}
