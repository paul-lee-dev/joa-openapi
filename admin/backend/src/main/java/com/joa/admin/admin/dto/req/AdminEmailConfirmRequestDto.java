package com.joa.admin.admin.dto.req;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdminEmailConfirmRequestDto {

    @NotNull(message = "이메일을 입력해주세요.")
    @Email
    private String email;

    private String code;

}
