package com.joa.openapi.dummy.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.UUID;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DummySearchResponseDto {

    private UUID dummyId;
    private String dummyName;
    private UUID adminId;
}
