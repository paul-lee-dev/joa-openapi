package com.joa.openapi.product.dto.res;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.joa.openapi.product.entity.Product;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDateTime;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class ProductUpdateIsDoneResponseDto {

    private String name;
    private Boolean isDone;

    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime createdAt;
    @JsonFormat(pattern = "yyyy-MM-dd HH:mm")
    private LocalDateTime updatedAt;

    public static ProductUpdateIsDoneResponseDto toDto(Product product) {
        return ProductUpdateIsDoneResponseDto.builder()
                .name(product.getName())
                .isDone(product.getIsDone())
                .createdAt(product.getCreatedAt())
                .updatedAt(product.getUpdatedAt())
                .build();
    }
}
