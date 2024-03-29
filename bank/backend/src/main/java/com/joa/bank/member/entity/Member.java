package com.joa.bank.member.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLRestriction;
import org.springframework.data.annotation.CreatedDate;

import java.time.LocalDateTime;
import java.util.UUID;

import static lombok.AccessLevel.PROTECTED;

@Entity
@Getter
@SQLRestriction("is_deleted = 0")
@NoArgsConstructor(access = PROTECTED)
public class Member {

    @Id
    private UUID id;
    private String name;
    private String password;
    private String phone;
    private String email;
    private Boolean isDeleted;
    private UUID bankId;
    private LocalDateTime createdAt;
    private LocalDateTime updatedAt;
}
