package com.joa.openapi.transaction.dto.req;

import java.time.LocalDate;
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

    public enum TransactionSearchType {
        ALL, DEPOSIT_ONLY, WITHDRAWAL_ONLY
    }

    public enum TransactionOrderBy {
        NEWEST, OLDEST
    }
}
