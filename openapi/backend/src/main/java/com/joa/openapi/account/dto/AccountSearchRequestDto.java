package com.joa.openapi.account.dto;

import com.joa.openapi.account.enums.AccountKeywordType;
import com.joa.openapi.account.enums.AccountSortBy;
import com.joa.openapi.account.enums.AccountWhether;
import lombok.*;

import java.util.List;
import java.util.UUID;

import static com.joa.openapi.account.enums.AccountSortBy.LATEST;

@Getter
@Setter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class AccountSearchRequestDto {

    private List<UUID> bankList;  //체크박스 - 은행별
    private Boolean isDormant; //체크박스 - 휴면계좌여부
    private Boolean isDummy;   //체크박스 - 더미여부

    private AccountKeywordType keywordType; // 검색키워드타입 (계좌이름별, 계좌번호별, 고객이름별, 상품이름별, 더미이름별)
    private String searchKeyword; //검색명

    private AccountSortBy sortBy = LATEST;   //정렬 (잔액적은순/많은순, 최신순/과거순, 만기가까운순/만기먼순)
}