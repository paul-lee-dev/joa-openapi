package com.joa.openapi.account.errorcode;

import com.joa.openapi.common.errorcode.ErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum AccountErrorCode implements ErrorCode {

    NO_ACCOUNT(HttpStatus.BAD_REQUEST, "ID에 해당하는 계좌가 존재하지 않습니다.");

    private final HttpStatus httpStatus;
    private final String message;
}
