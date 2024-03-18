package com.joa.admin.admin.dto;

import io.swagger.v3.oas.annotations.media.Schema;
import lombok.AllArgsConstructor;
import lombok.Data;

@Data
@AllArgsConstructor
public class CommonResponse<T> {

    private boolean success; //성공 여부

    private String message; //응답 메시지

    private T data; //응답 데이터
}
