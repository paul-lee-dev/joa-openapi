package com.joa.openapi.member.entity;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLRestriction;

import static lombok.AccessLevel.PROTECTED;

@Entity
@Getter
@Builder
@AllArgsConstructor
@SQLRestriction("is_deleted = 0")
@NoArgsConstructor(access = PROTECTED)
public class Member {

    @Id
    private String id;
    private String name;
    private String password;
    private String phone;
    private Integer bankId;
    private String dummyId;
}