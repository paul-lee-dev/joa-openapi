package com.joa.openapi.transaction.dto;

import com.joa.openapi.transaction.entity.Transaction;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

import static com.joa.openapi.transaction.entity.QTransaction.transaction;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class Transaction1wonResponseDto {

    private String word;
    private UUID transactionId;

    public static Transaction1wonResponseDto toDto(String word, UUID transactionId) {
        return Transaction1wonResponseDto.builder()
                .word(word)
                .transactionId(transactionId)
                .build();
    }
}
