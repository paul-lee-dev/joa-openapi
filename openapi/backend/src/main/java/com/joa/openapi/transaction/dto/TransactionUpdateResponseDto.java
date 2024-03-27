package com.joa.openapi.transaction.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
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
public class TransactionUpdateResponseDto {

    private UUID transactionId;
    private Long amount;
    private String depositorName;   //입금자명
    private String fromAccount;     //입금계좌
    private Long fromPrevBalance;   //입금전
    private Long fromBalance;       //입금후
    private String toAccount;       //출금계좌
    private Long toPrevBalance;     //입금전
    private Long toBalance;         //입금후
    private Boolean isDummy;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime createdAt;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime updatedAt;

    public static TransactionUpdateResponseDto toDto(Transaction transaction, Long fromPrevBalance, Long fromBalance, Long toPrevBalance, Long toBalance) {
        return TransactionUpdateResponseDto.builder()
                .transactionId(transaction.getId())
                .amount(transaction.getAmount())
                .depositorName(transaction.getDepositorName())
                .fromAccount(transaction.getFromAccount())
                .fromPrevBalance(fromPrevBalance)
                .fromBalance(fromBalance)
                .toAccount(transaction.getToAccount())
                .toPrevBalance(toPrevBalance)
                .toBalance(toBalance)
                .isDummy(transaction.getDummy() != null)
                .createdAt(transaction.getCreatedAt())
                .updatedAt(transaction.getUpdatedAt())
                .build();
    }
}