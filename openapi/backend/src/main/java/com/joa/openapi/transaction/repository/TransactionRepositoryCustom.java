package com.joa.openapi.transaction.repository;

import com.joa.openapi.transaction.dto.req.TransactionSearchRequestDto;
import com.joa.openapi.transaction.dto.res.DayMoneyFlow;
import com.joa.openapi.transaction.dto.res.TransactionSearchResponseDto;
import com.querydsl.core.Tuple;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.UUID;

public interface TransactionRepositoryCustom {

    Page<TransactionSearchResponseDto> searchTransactionCustom(
        TransactionSearchRequestDto req, Pageable pageable);
    Long searchBanksTotalTransactionCustom(UUID bankId);
    Long searchBanksTotalWithdrawCustom(UUID bankId);
    Long searchBanksTotalDepositCustom(UUID bankId);
    List<DayMoneyFlow> searchBanksWeekTransactionCustom(UUID bankId);
}
