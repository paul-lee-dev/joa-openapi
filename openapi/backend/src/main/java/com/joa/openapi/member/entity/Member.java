package com.joa.openapi.member.entity;

import com.joa.openapi.account.entity.Account;
import com.joa.openapi.common.entity.BaseEntity;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import jakarta.persistence.OneToMany;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLRestriction;

import java.util.ArrayList;
import java.util.List;

import static lombok.AccessLevel.PROTECTED;

@Entity
@Getter
@Builder
@AllArgsConstructor
@SQLRestriction("is_deleted = 0")
@NoArgsConstructor(access = PROTECTED)
public class Member extends BaseEntity {

    @Id
    private String id;
    private String name;
    private String password;
    private String phone;
    private Integer bankId;
    private String dummyId;

    @OneToMany(mappedBy = "holder")
    private List<Account> accountList = new ArrayList<>();
}