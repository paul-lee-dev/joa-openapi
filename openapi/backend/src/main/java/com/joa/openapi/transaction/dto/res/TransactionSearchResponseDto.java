package com.joa.openapi.transaction.dto.res;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.joa.openapi.transaction.entity.Transaction;
import java.time.LocalDateTime;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TransactionSearchResponseDto {

    private UUID transactionId;
    private Long amount;
    private String depositorName;   //입금자명
    private String fromAccount;     //입금계좌
    private String toAccount;       //출금계좌
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime createdAt;

    public static TransactionSearchResponseDto toDto(Transaction transaction) {
        return TransactionSearchResponseDto.builder()
                .transactionId(transaction.getId())
                .amount(transaction.getAmount())
                .depositorName(transaction.getDepositorName())
                .fromAccount(transaction.getFromAccount())
                .toAccount(transaction.getToAccount())
                .createdAt(transaction.getCreatedAt())
                .build();
    }
}