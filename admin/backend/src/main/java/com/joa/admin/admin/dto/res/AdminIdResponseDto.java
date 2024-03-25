package com.joa.admin.admin.dto.res;

import jakarta.persistence.Column;
import lombok.AllArgsConstructor;
import lombok.Data;
import org.springframework.data.annotation.CreatedDate;
import org.springframework.data.annotation.LastModifiedDate;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;
import java.util.UUID;

@Data
@AllArgsConstructor
public class AdminIdResponseDto {

    private String adminId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
