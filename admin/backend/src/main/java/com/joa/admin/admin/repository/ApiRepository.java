package com.joa.admin.admin.repository;

import com.joa.admin.admin.entity.Api;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface ApiRepository extends JpaRepository<Api, String> {

    @Modifying
    @Query(value = "UPDATE api SET api_key = :apiKey WHERE admin_id = :adminId", nativeQuery = true)
    void updateApiKey(@Param("adminId")String adminId, @Param("apiKey")String apiKey);

}
