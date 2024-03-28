package com.joa.openapi.bank.dto;

import lombok.*;
import org.springframework.data.util.Pair;

import java.util.List;

@Getter
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class DashboardResponseDto {

    private Long totalTransactionCnt;
    private Long totalMemberCnt;
    private Long totalWithdrawAmount;
    private Long totalDepositAmount;
    private List<Pair<Long, Long>> totalTransactionList;
}
