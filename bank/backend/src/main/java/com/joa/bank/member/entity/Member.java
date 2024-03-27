package com.joa.bank.member.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLRestriction;

import java.util.UUID;

import static lombok.AccessLevel.PROTECTED;

@Entity
@Getter
@SQLRestriction("is_deleted = 0")
@NoArgsConstructor(access = PROTECTED)
public class Member {

    @Id
    private String email;
    private String password;
    private Boolean isDeleted;
    private UUID bankId;
}
