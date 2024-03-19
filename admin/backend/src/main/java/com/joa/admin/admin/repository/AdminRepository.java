package com.joa.admin.admin.repository;

import com.joa.admin.admin.entity.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.UUID;

public interface AdminRepository extends JpaRepository<Admin, String> {

    Admin findByAdminId(UUID adminId);

    Admin findByEmail(String email);

    Admin findByPhone(String phone);
}
