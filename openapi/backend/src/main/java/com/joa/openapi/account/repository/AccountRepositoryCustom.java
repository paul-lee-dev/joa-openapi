package com.joa.openapi.account.repository;

import java.util.List;
import java.util.UUID;

import com.joa.openapi.account.dto.AccountSearchRequestDto;
import com.joa.openapi.account.dto.AccountSearchResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface AccountRepositoryCustom {
    Page<AccountSearchResponseDto> searchAccountCustom(List<UUID> bankIds, AccountSearchRequestDto req, Pageable pageable);

}
