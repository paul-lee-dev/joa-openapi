package com.joa.openapi.product.errorcode;

import com.joa.openapi.common.errorcode.ErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum ProductErrorCode implements ErrorCode {

    NO_PRODUCT(HttpStatus.UNAUTHORIZED, "해당 상품이 존재하지 않습니다."),
    ALREADY_DONE(HttpStatus.UNAUTHORIZED, "해당 상품은 이미 종료되었습니다."),
    CANT_DONE(HttpStatus.UNAUTHORIZED, "해당 상품에 계좌가 연결되어 있어 종료할 수 없습니다.");

    private final HttpStatus httpStatus;
    private final String message;
}