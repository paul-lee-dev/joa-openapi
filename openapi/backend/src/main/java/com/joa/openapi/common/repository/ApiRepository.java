package com.joa.openapi.common.repository;

import com.joa.openapi.common.entity.Api;
import com.joa.openapi.common.errorcode.CommonErrorCode;
import com.joa.openapi.common.exception.RestApiException;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface ApiRepository extends JpaRepository<Api, String> {

    @Modifying
    @Query(value = "UPDATE api SET api_key = :apiKey AND is_deleted = 0 WHERE admin_id = :adminId", nativeQuery = true)
    void updateApiKey(@Param("adminId")String adminId, @Param("apiKey")String apiKey);

    @Query(value = "SELECT COUNT(*) FROM api WHERE admin_id = :adminId AND is_deleted = 0", nativeQuery = true)
    Integer countByAdminId(UUID adminId);

    Api findByAdminId(UUID adminId);
    Optional<Api> findByApiKey(UUID apiKey);
    default Api getByApiKey(UUID apiKey) {
        return findByApiKey(apiKey).orElseThrow(() -> new RestApiException(CommonErrorCode.WRONG_APIKEY));
    }

}
