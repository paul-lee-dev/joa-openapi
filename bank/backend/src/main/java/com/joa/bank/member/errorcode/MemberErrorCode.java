package com.joa.bank.member.errorcode;

import com.joa.bank.common.errorcode.ErrorCode;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;

@Getter
@RequiredArgsConstructor
public enum MemberErrorCode implements ErrorCode {

    NO_EMAIL(HttpStatus.BAD_REQUEST, "이메일을 입력해 주세요."),
    NO_PASSWORD(HttpStatus.BAD_REQUEST, "비밀번호를 입력해 주세요."),
    NO_MEMBER(HttpStatus.BAD_REQUEST, "이메일에 해당하는 사용자가 존재하지 않습니다."),
    WRONG_PASSWORD(HttpStatus.BAD_REQUEST, "비밀번호가 일치하지 않습니다.");

    private final HttpStatus httpStatus;
    private final String message;
}
