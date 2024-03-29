package com.joa.openapi.transaction.dto.res;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;

import java.time.LocalDate;

@Getter
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class DayMoneyFlow {

    private String time;
    private Long deposit;
    private Long withdraw;
}
