package com.joa.admin.admin.repository;

import com.joa.admin.admin.entity.Api;
import java.util.UUID;
import org.springframework.boot.autoconfigure.sendgrid.SendGridProperties;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ApiRepository extends JpaRepository<Api, String> {

    @Modifying
    @Query(value = "UPDATE api SET api_key = :apiKey AND is_deleted = 0 WHERE admin_id = :adminId", nativeQuery = true)
    void updateApiKey(@Param("adminId")String adminId, @Param("apiKey")String apiKey);

    @Query(value = "SELECT COUNT(*) FROM api WHERE admin_id = :adminId AND is_deleted = 0", nativeQuery = true)
    Integer countByAdminId(UUID adminId);

    Api findByAdminId(UUID adminId);
}
