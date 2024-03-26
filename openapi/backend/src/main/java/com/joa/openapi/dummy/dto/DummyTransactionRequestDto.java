package com.joa.openapi.dummy.dto;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.util.List;
import java.util.UUID;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DummyTransactionRequestDto {

    private Integer count;
    private UUID bankId;
    private List<UUID> users;
}
