package com.joa.admin.admin.config.exception;

import com.fasterxml.jackson.annotation.JsonInclude;
import io.swagger.v3.oas.annotations.media.Schema;
import lombok.Data;
import lombok.RequiredArgsConstructor;

import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;


@RequiredArgsConstructor
@Data
@JsonInclude(JsonInclude.Include.NON_NULL)
@Schema(title = "ERR_RES_01 : 예외발생 DTO")
public class ErrorResponseDto {

    @Schema(description = "HTTP Status")
    private final int status;

    @Schema(description = "Error Message")
    private final String message;

    @Schema(description = "Timestamp")
    private final LocalDateTime time;

    @Schema(description = "Stack trace")
    private String stackTrace;

    @Schema(description = "Validation Errors")
    private List<ValidationError> validErrors;


    @Data
    @RequiredArgsConstructor
    @Schema(title = "ERR_RES_02 : Validate 오류필드 DTO")
    private static class ValidationError {
        private final String field;
        private final String message;
    }

    public void addValidationError(String field, String message){
        if(Objects.isNull(validErrors)){
            validErrors = new ArrayList<>();
        }
        validErrors.add(new ValidationError(field, message));
    }
}