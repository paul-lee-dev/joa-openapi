package com.joa.openapi.bank.dto;

import com.joa.openapi.transaction.dto.res.DayMoneyFlow;
import com.querydsl.core.Tuple;
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
    private List<DayMoneyFlow> totalTransactionList;
}
