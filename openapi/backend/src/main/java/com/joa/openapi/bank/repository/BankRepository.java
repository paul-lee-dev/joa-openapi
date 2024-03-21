package com.joa.openapi.bank.repository;

import com.joa.openapi.bank.entity.Bank;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface BankRepository extends JpaRepository<Bank, UUID> {

    List<Bank> findByAdminId(UUID adminId);
    @Query("SELECT b FROM Bank b WHERE b.adminId = :adminId AND b.name LIKE %:name%")
    List<Bank> findByAdminIdAndNameContaining(@Param("adminId") UUID adminId, @Param("name") String name);
}
