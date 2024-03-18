package com.joa.admin.admin.config.exception.custom;

public class PreconditionFailException extends RuntimeException {
    public PreconditionFailException(String message) {
        super(message);
    }
}
