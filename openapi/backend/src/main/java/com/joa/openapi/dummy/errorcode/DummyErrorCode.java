package com.joa.openapi.dummy.errorcode;

import com.joa.openapi.common.errorcode.ErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum DummyErrorCode implements ErrorCode {

    NO_DUMMY(HttpStatus.BAD_REQUEST, "ID에 해당하는 더미가 없습니다.");

    private final HttpStatus httpStatus;
    private final String message;
}
