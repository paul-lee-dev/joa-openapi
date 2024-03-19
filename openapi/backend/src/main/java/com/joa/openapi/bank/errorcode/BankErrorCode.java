package com.joa.openapi.bank.errorcode;

import com.joa.openapi.common.errorcode.ErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum BankErrorCode implements ErrorCode {

    NO_BANK(HttpStatus.BAD_REQUEST, "해당 은행이 존재하지 않습니다.");

    private final HttpStatus httpStatus;
    private final String message;
}
