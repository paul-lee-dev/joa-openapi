package com.joa.openapi.account.repository;

import com.joa.openapi.account.dto.AccountSearchRequestDto;
import com.joa.openapi.account.dto.AccountSearchResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface AccountRepositoryCustom {
    Page<AccountSearchResponseDto> searchAccountCustom(AccountSearchRequestDto req, Pageable pageable);

}
