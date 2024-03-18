package com.joa.openapi.bank.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BankDeleteResponseDto<T> {

    private String status;
    private String message;
    private T data;

    public static<T> BankDeleteResponseDto<T> toBankDeleteResponseDto(String status, String message, T t) {
        return BankDeleteResponseDto.<T>builder()
                .status(status)
                .message(message)
                .data(t)
                .build();
    }
}
