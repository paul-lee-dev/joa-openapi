package com.joa.bank.common.handler;

import com.joa.bank.common.errorcode.ErrorCode;
import com.joa.bank.common.exception.RestApiException;
import com.joa.bank.common.response.ApiResponse;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

@Slf4j
@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

    // 커스텀된 에러 리턴을 위한 메서드
    @ExceptionHandler(RestApiException.class)
    public ResponseEntity<Object> handleCustomArgument(RestApiException e) {
        log.warn("RestApiException : {}", e.getMessage());
        log.warn("RestApiException : {}", (Object) e.getStackTrace());
        ErrorCode errorCode = e.getErrorCode();
        return handleExceptionInternal(errorCode, e.getMessage());
    }

    private ResponseEntity<Object> handleExceptionInternal(ErrorCode errorCode, String message) {
        return new ResponseEntity<>(ApiResponse.error(message), errorCode.getHttpStatus());
    }
}
