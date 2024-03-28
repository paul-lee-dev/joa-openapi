package com.joa.openapi.dummy.dto;

import lombok.*;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DummySearchRequestDto {

    private String searchKeyWord;
    private Boolean isMember;
    private Boolean isAccount;
    private Boolean isTransaction;
}
