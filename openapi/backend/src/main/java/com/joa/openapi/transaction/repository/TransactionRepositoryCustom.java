package com.joa.openapi.transaction.repository;

import com.joa.openapi.bank.entity.Bank;
import com.joa.openapi.transaction.dto.req.TransactionSearchRequestDto;
import com.joa.openapi.transaction.dto.res.TransactionSearchResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.UUID;

public interface TransactionRepositoryCustom {

    Page<TransactionSearchResponseDto> searchTransactionCustom(
        TransactionSearchRequestDto req, Pageable pageable);
    Long searchBanksTotalTransactionCustom(UUID bankId);

}
