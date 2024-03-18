package com.joa.openapi.dummy.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DummyMemberRequestDto<T> {
    private String name;
    private Integer count;
    private T bank;
    private T data;


}
