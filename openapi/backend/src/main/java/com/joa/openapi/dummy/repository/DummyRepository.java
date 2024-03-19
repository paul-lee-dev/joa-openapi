package com.joa.openapi.dummy.repository;

import com.joa.openapi.dummy.entity.Dummy;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface DummyRepository extends JpaRepository<Dummy, UUID> {

    @Override
    Optional<Dummy> findById(UUID uuid);
}
