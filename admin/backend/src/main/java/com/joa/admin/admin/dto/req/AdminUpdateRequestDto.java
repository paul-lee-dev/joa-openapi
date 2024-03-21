package com.joa.admin.admin.dto.req;

import lombok.Data;

import java.util.UUID;

@Data
public class AdminUpdateRequestDto {

    private String name;
    private String password;
    private String email;
    private String phone;
}
