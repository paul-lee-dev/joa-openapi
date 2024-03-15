package com.joa.openapi.error.errorcode;

import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum MemberErrorCode implements ErrorCode{

    NO_MEMBER(HttpStatus.BAD_REQUEST, "ID에 해당하는 사용자가 존재하지 않습니다");
    private final HttpStatus httpStatus;
    private final String message;
}
