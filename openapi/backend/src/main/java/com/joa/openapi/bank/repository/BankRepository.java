package com.joa.openapi.bank.repository;

import com.joa.openapi.bank.entity.Bank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface BankRepository extends JpaRepository<Bank, UUID> {

    List<Bank> findByAdminId(UUID adminId);
    // 은행uuid로 은행이름찾기
    String findBankName(UUID bankId);
}
