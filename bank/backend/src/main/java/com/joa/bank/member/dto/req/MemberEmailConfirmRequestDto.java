package com.joa.bank.member.dto.req;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MemberEmailConfirmRequestDto {

    private String email;
    private String code;

}