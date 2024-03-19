package com.joa.admin.admin.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class AdminLoginRequestDto {

    @NotNull(message = "이메일을 입력해주세요.")
    @Email
    private String email;
    @NotNull(message = "비밀번호를 입력해주세요.")
    private String password;
}
