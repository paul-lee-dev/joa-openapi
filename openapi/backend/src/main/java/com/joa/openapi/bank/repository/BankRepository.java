package com.joa.openapi.bank.repository;

import com.joa.openapi.bank.dto.BankResponseDto;
import com.joa.openapi.bank.entity.Bank;
import java.util.List;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface BankRepository extends JpaRepository<Bank, UUID>, BankRepositoryCustom {

    Page<Bank> findByAdminId(UUID adminId, Pageable pageable);

    List<Bank> findByAdminId(UUID adminId);
}
