package com.joa.openapi.account.entity;

import com.joa.openapi.common.entity.BaseEntity;
import com.joa.openapi.dummy.entity.Dummy;
import com.joa.openapi.member.entity.Member;
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
public class Account extends BaseEntity {

    @Id
    private String id;
    private String name;
    private Long balance;
    private String password;
    private Boolean isDormant;
    private Long transferLimit;
    private Integer paymentNum;
    private Integer nonPaymentNum;
    private String startDate;
    private String endDate;
    private Integer term;
    private String depositAccount;
    private String withdrawAccount;
    private Long amount;
    private UUID bankId;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member holder;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "dummy_id")
    private Dummy dummy;

    public void updateNickname(String nickname) {
        this.name = nickname;
    }

    public void updateDepositAccount(String withdrawAccount) {
        this.withdrawAccount = withdrawAccount;
    }

    public void updateWithdrawAccount(String withdrawAccount) {
        this.withdrawAccount = withdrawAccount;
    }

    public void updateLimit(Long limit) {
        this.transferLimit = limit;
    }

    public void updatePassword(String password) {
        this.password = password;
    }
}