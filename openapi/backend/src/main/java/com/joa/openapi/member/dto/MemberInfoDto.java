package com.joa.openapi.member.dto;

import lombok.Data;

import java.util.UUID;

@Data
public class MemberInfoDto {

    private UUID memberId;
    private String name;
    private String password;
    private String email;
    private String phone;
}
