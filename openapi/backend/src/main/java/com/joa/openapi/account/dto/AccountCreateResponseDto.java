package com.joa.openapi.account.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.joa.openapi.account.entity.Account;
import lombok.*;

import java.time.LocalDateTime;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountCreateResponseDto {

    private String accountId;
    private String nickname;
    private Long balance;
    private Boolean isDormant;
    private Long transferLimit;
    private String startDate;
    private String endDate;
    private Integer term;
    private String depositAccount;
    private String withdrawAccount;
    private Long amount;

    public static AccountCreateResponseDto toDto(Account account) {
        return AccountCreateResponseDto.builder()
                .accountId(account.getId())
                .nickname(account.getNickname())
                .balance(account.getBalance())
                .isDormant(account.getIsDormant())
                .transferLimit(account.getTransferLimit())
                .startDate(account.getStartDate())
                .endDate(account.getEndDate())
                .term(account.getTerm())
                .depositAccount(account.getDepositAccount())
                .withdrawAccount(account.getWithdrawAccount())
                .amount(account.getAmount())
                .build();
    }
}
