package com.joa.openapi.transaction.dto.res;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

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
