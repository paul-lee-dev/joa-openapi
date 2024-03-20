package com.joa.openapi.member.errorcode;

import com.joa.openapi.common.errorcode.ErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum MemberErrorCode implements ErrorCode {

    NO_MEMBER(HttpStatus.BAD_REQUEST, "ID에 해당하는 사용자가 존재하지 않습니다."),
    WRONG_PASSWORD(HttpStatus.BAD_REQUEST, "비밀번호가 일치하지 않습니다."),
    EMAIL_CONFLICT(HttpStatus.CONFLICT, "이미 등록된 이메일입니다."),
    PHONE_CONFLICT(HttpStatus.CONFLICT, "이미 등록된 휴대폰 번호입니다."),
    UNAUTHORIZED(HttpStatus.UNAUTHORIZED, "로그인 후 이용해 주세요."),
    NO_AUTH(HttpStatus.UNAUTHORIZED, "인증 정보가 없습니다."),
    ACCESS_DENIED(HttpStatus.FORBIDDEN, "권한이 없습니다."),
    TOKEN_INVALID(HttpStatus.UNAUTHORIZED, "유효하지 않은 토큰입니다.");

    private final HttpStatus httpStatus;
    private final String message;
}
