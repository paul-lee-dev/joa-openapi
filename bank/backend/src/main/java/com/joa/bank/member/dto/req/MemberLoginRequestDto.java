package com.joa.bank.member.dto.req;

import lombok.Getter;

import java.util.UUID;

@Getter
public class MemberLoginRequestDto {

    private UUID bankId;
    private String email;
    private String password;
    private Boolean isDeleted;
}
