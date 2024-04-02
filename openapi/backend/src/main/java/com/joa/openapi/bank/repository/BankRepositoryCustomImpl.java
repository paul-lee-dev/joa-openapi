package com.joa.openapi.bank.repository;

import com.joa.openapi.bank.dto.BankRequestDto;
import com.joa.openapi.bank.dto.BankResponseDto;
import com.joa.openapi.bank.entity.Bank;
import com.querydsl.jpa.impl.JPAQuery;
import com.querydsl.jpa.impl.JPAQueryFactory;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

import static com.joa.openapi.bank.entity.QBank.bank;

@Repository
@RequiredArgsConstructor
@Slf4j
public class BankRepositoryCustomImpl implements BankRepositoryCustom {
    private final JPAQueryFactory jpaQueryFactory;

    @Override
    public Page<BankResponseDto> findByAdminIdAndNameContaining (UUID adminId, String name, Pageable pageable) {
        JPAQuery<Bank> query = jpaQueryFactory
                .selectFrom(bank)
                .where(bank.adminId.eq(adminId), bank.name.likeIgnoreCase("%" + name + "%"));

        long total = query.fetchCount();

        List<Bank> banks = query
                .offset(pageable.getOffset()) //반환되는 행의 시작점
                .limit(pageable.getPageSize())	//반환되는 행의 수
                .fetch();

        List<BankResponseDto> res = banks.stream().map(BankResponseDto::toDto).collect(Collectors.toList());

        return new PageImpl<>(res, pageable, total);
    }
}