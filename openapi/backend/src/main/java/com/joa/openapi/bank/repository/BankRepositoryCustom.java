package com.joa.openapi.bank.repository;

import com.joa.openapi.bank.dto.BankRequestDto;
import com.joa.openapi.bank.dto.BankResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.repository.query.Param;

import java.util.UUID;

public interface BankRepositoryCustom {

    Page<BankResponseDto> findByAdminIdAndNameContaining(UUID adminId, String name, Pageable pageable);
}
