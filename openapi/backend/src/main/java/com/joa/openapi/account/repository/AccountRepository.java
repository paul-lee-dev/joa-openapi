package com.joa.openapi.account.repository;

import com.joa.openapi.account.dto.AccountSearchRequestDto;
import com.joa.openapi.account.dto.AccountSearchResponseDto;
import com.joa.openapi.account.entity.Account;
import com.joa.openapi.dummy.entity.Dummy;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;

@Repository
public interface AccountRepository extends JpaRepository<Account, String>, AccountRepositoryCustom {

    Page<Account> findByHolderId(UUID memberId, Pageable pageable);
    List<Account> findByDummyId(UUID dummyId);
}
