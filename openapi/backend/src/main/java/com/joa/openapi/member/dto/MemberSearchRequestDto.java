package com.joa.openapi.member.dto;

import com.joa.openapi.account.enums.AccountKeywordType;
import com.joa.openapi.account.enums.AccountSortBy;
import lombok.*;

import java.util.List;
import java.util.UUID;

import static com.joa.openapi.account.enums.AccountSortBy.LATEST;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class MemberSearchRequestDto {

    private UUID bankId;    //드롭다운 - 은행이름
    private String memberName;  //검색 - 고객명
    private Boolean isDummy;    //더미여부
}
