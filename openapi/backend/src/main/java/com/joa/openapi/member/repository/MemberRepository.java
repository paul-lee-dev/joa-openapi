package com.joa.openapi.member.repository;

import com.joa.openapi.member.entity.Member;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.UUID;

@Repository
public interface MemberRepository extends JpaRepository<Member, String> {

    Member findByMemberId(UUID memberId);
    Member findByEmail(String email);
    Member findByPhone(String phone);
}
