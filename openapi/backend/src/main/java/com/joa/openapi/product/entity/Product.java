package com.joa.openapi.product.entity;

import com.joa.openapi.account.entity.Account;
import com.joa.openapi.common.entity.BaseEntity;
import com.joa.openapi.product.enums.PaymentType;
import com.joa.openapi.product.enums.ProductType;
import jakarta.persistence.*;
import lombok.AllArgsConstructor;
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
@Builder
@AllArgsConstructor
@SQLRestriction("is_deleted = 0")
@NoArgsConstructor(access = PROTECTED)
public class Product extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(columnDefinition = "BINARY(16)")
    private UUID id;
    private String name;
    private String description;
    private Long minAmount;
    private Long maxAmount;
    private Double rate;
    private ProductType productType;
    private PaymentType paymentType;
    private Boolean isDone;

    @OneToMany(mappedBy = "product")
    private List<Account> accountList = new ArrayList<>();

    public void updateIsDone(Boolean isDone) {
        this.isDone = isDone;
    }
}
