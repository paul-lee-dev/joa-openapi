package com.joa.openapi.transaction.entity;

import com.joa.openapi.common.entity.BaseEntity;
import com.joa.openapi.dummy.entity.Dummy;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.SQLRestriction;

import java.util.UUID;

import static lombok.AccessLevel.PROTECTED;

@Entity
@Getter
@Builder
@AllArgsConstructor
@SQLRestriction("is_deleted = 0")
@NoArgsConstructor(access = PROTECTED)
public class Transaction extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(columnDefinition = "BINARY(16)")
    private UUID id;
    private Long amount;
    private String depositorName;   //입금자명
    private String fromAccount;            //입금계좌
    private String toAccount;              //출금계좌

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dummy_id")
    private Dummy dummy;

    public void updateAmount(Long amount) {
        this.amount = amount;
    }

    public void updateDepositorName(String name) {
        this.depositorName = name;
    }

    public void updateFromAccount(String fromAccount) {
        this.fromAccount = fromAccount;
    }

    public void updateToAccount(String toAccount) {
        this.toAccount = toAccount;
    }
}