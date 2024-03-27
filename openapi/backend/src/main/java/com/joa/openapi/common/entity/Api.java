package com.joa.openapi.common.entity;

import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.SQLRestriction;

import java.util.UUID;

@Entity
@Getter
@Builder
@AllArgsConstructor
@SQLRestriction("is_deleted = 0")
@Table
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Api extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(columnDefinition = "BINARY(16)")
    private UUID apiKey;

    private UUID adminId;

    public void updateApiKey(UUID apiKey) {
        this.apiKey = apiKey;
    }
}
