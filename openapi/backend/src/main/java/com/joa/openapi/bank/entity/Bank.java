package com.joa.openapi.bank.entity;

import com.joa.openapi.bank.dto.BankRequestDto;
import com.joa.openapi.common.entity.BaseEntity;
import com.joa.openapi.member.entity.Member;
import com.joa.openapi.product.entity.Product;
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
public class Bank extends BaseEntity {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    @Column(columnDefinition = "BINARY(16)")
    private UUID id;
    private String name;
    private String description;
    private String uri;

    @OneToMany(mappedBy = "bank")
    private List<Member> memberList = new ArrayList<>();

    @OneToMany(mappedBy = "productsBank")
    private List<Product> productList = new ArrayList<>();

//    @ManyToOne(fetch = FetchType.LAZY)
//    @JoinColumn(name = "admin_id")
    private UUID adminId;

    public void update(BankRequestDto req) {
        if(req.getName() != null)
            this.name = req.getName();
        if(req.getDescription() != null)
            this.description = req.getDescription();
        if(req.getUri() != null)
            this.uri = req.getUri();
    }
}
