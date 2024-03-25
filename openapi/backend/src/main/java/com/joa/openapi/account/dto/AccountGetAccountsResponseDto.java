package com.joa.openapi.account.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.joa.openapi.account.entity.Account;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountGetAccountsResponseDto {

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
    private UUID dummyId;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime createdAt;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime updatedAt;

    public static AccountGetAccountsResponseDto toDto(Account account) {
        return AccountGetAccountsResponseDto.builder()
                .accountId(account.getId())
                .nickname(account.getName())
                .balance(account.getBalance())
                .isDormant(account.getIsDormant())
                .transferLimit(account.getTransferLimit())
                .startDate(account.getStartDate())
                .endDate(account.getEndDate())
                .term(account.getTerm())
                .depositAccount(account.getDepositAccount())
                .withdrawAccount(account.getWithdrawAccount())
                .amount(account.getAmount())
                .dummyId((account.getDummy() == null) ? null : account.getDummy().getId())
                .createdAt(account.getCreatedAt())
                .updatedAt(account.getUpdatedAt())
                .build();
    }
}
