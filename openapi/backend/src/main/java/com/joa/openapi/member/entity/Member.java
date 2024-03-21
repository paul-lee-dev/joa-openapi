package com.joa.openapi.member.entity;

import com.joa.openapi.account.entity.Account;
import com.joa.openapi.bank.entity.Bank;
import com.joa.openapi.common.entity.BaseEntity;
import com.joa.openapi.dummy.entity.Dummy;
import jakarta.persistence.*;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLRestriction;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static lombok.AccessLevel.PROTECTED;

@Entity
@Getter
@SQLRestriction("is_deleted = 0")
@NoArgsConstructor(access = PROTECTED)
public class Member extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(columnDefinition = "BINARY(16)")
    private UUID id;
    private String name;
    private String password;
    private String phone;
    private String email;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "bank_id")
    private Bank bankHolder;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dummy_id")
    private Dummy dummyHolder;

    @OneToMany(mappedBy = "holder")
    private List<Account> accountList = new ArrayList<>();

    @Builder
    public Member(String name, String password, String email, String phone, Dummy dummyHolder, Bank bankHolder) {
        this.name = name;
        this.password = password;
        this.email = email;
        this.phone = phone;
        this.dummyHolder = dummyHolder;
        this.bankHolder = bankHolder;
    }

    public void updatePassword(String password) {
        this.password = password;
    }

    public void updateName(String name) {
        this.name = name;
    }

    public void updateEmail(String email) {
        this.email = email;
    }

    public void updatePhone(String phone) {
        this.phone = phone;
    }
}