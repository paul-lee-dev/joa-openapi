package com.joa.openapi.dummy.dto;

import com.joa.openapi.dummy.enums.RepeatTime;
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

    private String name;
    private Integer count;
    private RepeatTime term;
    private UUID bankId;
    private List<UUID> users;
}
