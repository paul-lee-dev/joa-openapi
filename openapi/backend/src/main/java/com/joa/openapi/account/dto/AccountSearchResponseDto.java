package com.joa.openapi.account.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.joa.openapi.account.entity.Account;
import com.joa.openapi.account.entity.QAccount;
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
public class AccountSearchResponseDto {

    private String accountId;
    private String accountName;
    private Long balance;
    private Boolean isDormant;
    private Long transferLimit;
    private String startDate;
    private String endDate;
    private Integer term;
    private String depositAccount;
    private String withdrawAccount;
    private Long amount;
    private String holderName;
    private String productName;
    private String dummyName;
    private UUID bankId;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime createdAt;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime updatedAt;

    public static AccountSearchResponseDto toDto(Account account) {
        return AccountSearchResponseDto.builder()
                .accountId(account.getId())
                .accountName(account.getName())
                .balance(account.getBalance())
                .isDormant(account.getIsDormant())
                .transferLimit(account.getTransferLimit())
                .startDate(account.getStartDate())
                .endDate(account.getEndDate())
                .term(account.getTerm())
                .depositAccount(account.getDepositAccount())
                .withdrawAccount(account.getWithdrawAccount())
                .amount(account.getAmount())
                .holderName(account.getHolder().getName())
                /* TODO productName 추가 */
                .dummyName(account.getDummy() == null ? null : account.getDummy().getName())
                .bankId(account.getBankId())
                .createdAt(account.getCreatedAt())
                .updatedAt(account.getUpdatedAt())
                .build();
    }
}