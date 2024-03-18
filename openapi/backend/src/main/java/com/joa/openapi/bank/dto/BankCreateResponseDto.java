package com.joa.openapi.bank.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class BankCreateResponseDto<T> {

    private String status;
    private String message;
    private T data;

    public static<T> BankCreateResponseDto<T> toBankCreateResponseDto(String status, String message, T t) {
        return BankCreateResponseDto.<T>builder()
                .status(status)
                .message(message)
                .data(t)
                .build();
    }
}