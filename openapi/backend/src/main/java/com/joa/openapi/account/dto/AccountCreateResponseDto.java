package com.joa.openapi.account.dto;

import com.joa.openapi.account.entity.Account;
import lombok.*;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountCreateResponseDto {

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

    public static AccountCreateResponseDto toDto(Account account) {
        return AccountCreateResponseDto.builder()
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
                .build();
    }
}
