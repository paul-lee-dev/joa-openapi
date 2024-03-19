package com.joa.admin.admin.errorcode;

import com.joa.admin.common.errorcode.ErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum MemberErrorCode implements ErrorCode {

    NO_MEMBER(HttpStatus.BAD_REQUEST, "ID에 해당하는 사용자가 존재하지 않습니다."),
    WRONG_PASSWORD(HttpStatus.BAD_REQUEST, "비밀번호가 일치하지 않습니다."),
    EMAIL_CONFLICT(HttpStatus)
    UNAUTHORIZED(HttpStatus.UNAUTHORIZED, "로그인 후 이용해 주세요."),
    ACCESS_DENIED(HttpStatus.FORBIDDEN, "권한이 없습니다.");

    private final HttpStatus httpStatus;
    private final String message;
}
