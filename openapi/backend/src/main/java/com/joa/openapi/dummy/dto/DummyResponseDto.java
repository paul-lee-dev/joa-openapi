package com.joa.openapi.dummy.dto;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.joa.openapi.dummy.entity.Dummy;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;
import java.util.UUID;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DummyResponseDto {

    private UUID dummyId;
    private UUID adminId;
    private String name;
    private Integer memberCount;
    private Integer accountCount;
    private Integer transactionCount;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime createdAt;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime updatedAt;

    public static DummyResponseDto toDto(Dummy dummy) {
        return DummyResponseDto.builder()
                .dummyId(dummy.getId())
                .adminId(dummy.getAdminId())
                .name(dummy.getName())
                .memberCount(dummy.getMemberCount())
                .accountCount(dummy.getAccountCount())
                .transactionCount(dummy.getTransactionCount())
                .createdAt(dummy.getCreatedAt())
                .updatedAt(dummy.getUpdatedAt())
                .build();

    }
}
