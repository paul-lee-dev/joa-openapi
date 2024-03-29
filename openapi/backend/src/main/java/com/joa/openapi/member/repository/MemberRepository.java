package com.joa.openapi.member.repository;

import com.joa.openapi.dummy.entity.Dummy;
import com.joa.openapi.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Repository
public interface MemberRepository extends JpaRepository<Member, UUID> {

    Member findByEmail(String email);
    Member findByPhone(String phone);
    List<Member> findByDummy(Dummy dummy);
    List<Member> findByDummyId(UUID dummyId);
    List<Member> findByBankId(UUID bankId);
}
