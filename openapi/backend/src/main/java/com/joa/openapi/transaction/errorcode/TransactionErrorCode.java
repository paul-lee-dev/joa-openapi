package com.joa.openapi.transaction.errorcode;

import com.joa.openapi.common.errorcode.ErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum TransactionErrorCode implements ErrorCode {

    NO_BALANCE(HttpStatus.BAD_REQUEST, "출금하려는 계좌에 잔액이 부족합니다."),
    NO_AMOUNT(HttpStatus.BAD_REQUEST, "거래 금액이 없습니다."),
    NO_REFUND(HttpStatus.BAD_REQUEST, "입금했던 계좌에 잔액이 없어서 환불할 수 없습니다."),
    MiSMATCH(HttpStatus.BAD_REQUEST, "1원 인증 4글자가 불일치 합니다."),
    NO_TRANSACTION(HttpStatus.BAD_REQUEST, "해당 거래내역은 존재하지 않습니다.");

    private final HttpStatus httpStatus;
    private final String message;
}
