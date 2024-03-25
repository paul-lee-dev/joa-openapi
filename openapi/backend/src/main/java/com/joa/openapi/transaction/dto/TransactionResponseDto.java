package com.joa.openapi.transaction.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.joa.openapi.account.entity.Account;
import com.joa.openapi.transaction.entity.Transaction;
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
public class TransactionResponseDto {

    private UUID transactionId;
    private Long amount;
    private String depositorName;   //입금자명
    private String fromAccount;     //입금계좌
    private Long fromPrevBalance;   //입금전
    private Long fromBalance;       //입금후
    private String toAccount;       //출금계좌
    private Long toPrevBalance;     //입금전
    private Long toBalance;         //입금후

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime createdAt;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime updatedAt;

    public static TransactionResponseDto toDto(Transaction transaction, Long fromPrevBalance, Long fromBalance, Long toPrevBalance, Long toBalance) {
        return TransactionResponseDto.builder()
                .transactionId(transaction.getId())
                .amount(transaction.getAmount())
                .depositorName(transaction.getDepositorName())
                .fromAccount(transaction.getFromAccount())
                .fromPrevBalance(fromPrevBalance)
                .fromBalance(fromBalance)
                .toAccount(transaction.getToAccount())
                .toPrevBalance(toPrevBalance)
                .toBalance(toBalance)
                .createdAt(transaction.getCreatedAt())
                .updatedAt(transaction.getUpdatedAt())
                .build();
    }

    public static TransactionResponseDto toDepositDto(Transaction transaction, Long toPrevBalance, Long balance) {
        return TransactionResponseDto.builder()
                .transactionId(transaction.getId())
                .amount(transaction.getAmount())
                .depositorName(transaction.getDepositorName())
                .toAccount(transaction.getToAccount())
                .toPrevBalance(toPrevBalance)
                .toBalance(balance)
                .createdAt(transaction.getCreatedAt())
                .updatedAt(transaction.getUpdatedAt())
                .build();
    }

    public static TransactionResponseDto toWithdrawDto(Transaction transaction, Long fromPrevBalance, Long balance) {
        return TransactionResponseDto.builder()
                .transactionId(transaction.getId())
                .amount(transaction.getAmount())
                .depositorName(transaction.getDepositorName())
                .fromAccount(transaction.getFromAccount())
                .fromPrevBalance(fromPrevBalance)
                .fromBalance(balance)
                .createdAt(transaction.getCreatedAt())
                .updatedAt(transaction.getUpdatedAt())
                .build();
    }
}