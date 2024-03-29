package com.joa.openapi.transaction.dto.req;

import com.joa.openapi.transaction.enums.TransactionOrderBy;
import com.joa.openapi.transaction.enums.TransactionSearchType;
import java.time.LocalDate;
import java.util.UUID;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class TransactionSearchRequestDto {

    private UUID apiKey;
    private UUID bankId;
    private boolean isDummy; // (dummyId가 존재하면)
    private String depositorNameKeyword;   //입금자명
    private String accountId;
    private String dummyName;
    private Long fromAmount;
    private Long toAmount;
    private LocalDate fromDate;
    private LocalDate toDate;
    private TransactionSearchType searchType;
    private TransactionOrderBy orderBy;

}
