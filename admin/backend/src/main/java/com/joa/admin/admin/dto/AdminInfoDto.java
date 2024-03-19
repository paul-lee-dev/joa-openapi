package com.joa.admin.admin.dto;

import lombok.*;

import java.util.UUID;

@Data
public class AdminInfoDto {

    private UUID adminId;

    private String name;

    private String password;

    private String email;

    private String phone;
}
