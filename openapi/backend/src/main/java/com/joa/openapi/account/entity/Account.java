package com.joa.openapi.account.entity;

import com.joa.openapi.common.entity.BaseEntity;
import com.joa.openapi.member.entity.Member;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import org.hibernate.annotations.Fetch;
import org.hibernate.annotations.SQLRestriction;

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
    private String nickname;
    private Long balance;
    private Integer password;
    private Boolean isDormant;
    private Long transferLimit;
    private Integer paymentNum;
    private Integer nonPaymentNum;
    private String startDate;
    private String endDate;
    private Integer term;
    private String withdrawAccount;
    private Long amount;

    @ManyToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "member_id")
    private Member holder;
}