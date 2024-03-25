package com.joa.openapi.transaction.errorcode;

import com.joa.openapi.common.errorcode.ErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum TransactionErrorCode implements ErrorCode {

    NO_BALANCE(HttpStatus.BAD_REQUEST, "출금하려는 계좌에 잔액이 부족합니다.");

    private final HttpStatus httpStatus;
    private final String message;
}
