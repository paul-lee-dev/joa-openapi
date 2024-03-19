package com.joa.admin.common.config.exception.custom;


import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(HttpStatus.FORBIDDEN)
public class AuthenticationCredientialException extends RuntimeException {
    public AuthenticationCredientialException(String message) {
        super(message);
    }
}
