package com.joa.openapi.transaction.repository;

import com.joa.openapi.transaction.entity.Transaction;
import java.util.List;
import java.util.UUID;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface TransactionRepository extends JpaRepository<Transaction, UUID>,
    TransactionRepositoryCustom {

    List<Transaction> findByDummyId(UUID uuid);

    @Query(value = "SELECT COUNT(*) FROM api WHERE api_key = :apiKey", nativeQuery = true)
    Integer existsByApiKey(UUID apiKey);

}
