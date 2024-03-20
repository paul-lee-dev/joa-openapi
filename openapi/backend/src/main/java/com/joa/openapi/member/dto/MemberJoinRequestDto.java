package com.joa.openapi.member.dto;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
@AllArgsConstructor
public class MemberJoinRequestDto {

    @NotBlank(message = "사용자 이메일을 입력해주세요.")
    @Email(message = "이메일 형식에 맞지 않습니다.")
    private String email;
    @NotBlank(message = "사용자 이름을 입력해주세요.")
    private String name;
    @NotBlank(message = "비밀번호를 입력해주세요.")
    private String password;
    @NotBlank(message = "휴대폰 번호를 입력해주세요.")
    private String phone;
}
