package com.joa.openapi.dummy.ErrorCode;

import com.joa.openapi.common.errorcode.ErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum DummyErrorCode implements ErrorCode {
    NO_DUMMY(HttpStatus.BAD_REQUEST, "해당 더미가 존재하지 않습니다.");

    private final HttpStatus httpStatus;
    private final String message;
}
