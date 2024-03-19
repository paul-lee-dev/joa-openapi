package com.joa.admin.admin.dto;

import lombok.*;

import java.util.UUID;

@Data
public class AdminResponseDto {

    private UUID adminId;

    private String name;

    private String email;

    private String phone;
}
