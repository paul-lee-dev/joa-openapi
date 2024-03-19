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
public class AccountUpdateResponseDto {

    private String id;
    private String nickname;
    private Long balance;
    private Boolean isDormant;
    private Long transferLimit;
    private String startDate;
    private String endDate;
    private Integer term;
    private String withdrawAccount;
    private Long amount;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime createdAt;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime updatedAt;

    public static AccountUpdateResponseDto toDto(Account account) {
        return AccountUpdateResponseDto.builder()
                .id(account.getId())
                .nickname(account.getNickname())
                .balance(account.getBalance())
                .isDormant(account.getIsDormant())
                .transferLimit(account.getTransferLimit())
                .startDate(account.getStartDate())
                .endDate(account.getEndDate())
                .term(account.getTerm())
                .withdrawAccount(account.getWithdrawAccount())
                .amount(account.getAmount())
                .createdAt(account.getCreatedAt())
                .updatedAt(account.getUpdatedAt())
                .build();
    }
}
