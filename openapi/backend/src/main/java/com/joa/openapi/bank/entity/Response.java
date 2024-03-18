package com.joa.openapi.bank.entity;

import lombok.Data;

@Data
public class Response {

    private StatusEnum status;
    private String message;
    private Object data;

    public Response() {
        this.status = StatusEnum.BAD_REQUEST;
        this.message = null;
        this.data = null;
    }
}
