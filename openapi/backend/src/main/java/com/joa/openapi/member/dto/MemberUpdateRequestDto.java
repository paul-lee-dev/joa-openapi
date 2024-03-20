package com.joa.openapi.member.dto;

import lombok.Data;

@Data
public class MemberUpdateRequestDto {

    private String name;
    private String password;
    private String email;
    private String phone;
}
