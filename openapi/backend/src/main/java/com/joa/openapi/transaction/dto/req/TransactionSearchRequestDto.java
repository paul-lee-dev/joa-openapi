package com.joa.openapi.transaction.dto.req;

import java.time.LocalDate;

import com.joa.openapi.transaction.enums.TransactionOrderBy;
import com.joa.openapi.transaction.enums.TransactionSearchType;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TransactionSearchRequestDto {

    private String accountId;
    private LocalDate fromDate;
    private LocalDate toDate;
    private TransactionSearchType searchType;
    private TransactionOrderBy orderBy;

}
