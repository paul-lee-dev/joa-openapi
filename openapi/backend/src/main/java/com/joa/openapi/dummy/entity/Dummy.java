package com.joa.openapi.dummy.entity;

import com.joa.openapi.common.entity.BaseEntity;
import com.joa.openapi.member.entity.Member;
import com.joa.openapi.transaction.entity.Transaction;
import jakarta.persistence.*;
import lombok.*;
import org.hibernate.annotations.SQLRestriction;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Entity
@Getter
@Builder
@AllArgsConstructor
@SQLRestriction("is_deleted = 0")
@NoArgsConstructor(access = AccessLevel.PROTECTED)
public class Dummy extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(columnDefinition = "BINARY(16)")
    private UUID Id;
    private String name;
    private Integer memberCount;
    private Integer accountCount;
    private Integer transactionCount;
    private UUID adminId;

    @OneToMany(mappedBy = "dummy")
    private List<Member> memberList = new ArrayList<>();

    @OneToMany(mappedBy = "dummy")
    private List<Transaction> transactionList = new ArrayList<>();

    public void updateName(String name) { this.name = name; }
}
