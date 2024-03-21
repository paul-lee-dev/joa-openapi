package com.joa.openapi.account.errorcode;

import com.joa.openapi.common.errorcode.ErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum AccountErrorCode implements ErrorCode {

    NO_ACCOUNT(HttpStatus.BAD_REQUEST, "ID에 해당하는 계좌가 존재하지 않습니다."),
    NO_WITHDRAW_ACCOUNT(HttpStatus.BAD_REQUEST, "출금 계좌가 존재하지 않습니다."),
    PASSWORD_MISMATCH(HttpStatus.BAD_REQUEST, "계좌 번호가 일치하지 않습니다."),
    PASSWORD_REQUIRED(HttpStatus.BAD_REQUEST, "계좌 비밀번호는 필수 입력입니다.");


    private final HttpStatus httpStatus;
    private final String message;
}
