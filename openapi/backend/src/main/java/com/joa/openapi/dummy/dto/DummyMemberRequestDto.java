package com.joa.openapi.dummy.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DummyMemberRequestDto {

    private String name;
    private Integer count;
    private UUID bankId;
}
