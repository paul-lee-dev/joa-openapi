package com.joa.admin.admin.dto.res;

import lombok.Data;

import java.time.LocalDateTime;

@Data
public class AdminInfoResponseDto {

    private String name;
    private String email;
    private String phone;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
