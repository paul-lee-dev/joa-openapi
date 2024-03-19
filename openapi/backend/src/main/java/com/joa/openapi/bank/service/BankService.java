package com.joa.openapi.bank.service;

import com.joa.openapi.bank.dto.BankRequestDto;
import com.joa.openapi.bank.entity.Bank;
import com.joa.openapi.bank.repository.BankRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BankService {

    private final BankRepository bankRepository;

    @Transactional
    public BankRequestDto create(BankRequestDto req, UUID adminId) {
        Bank bank = Bank.builder()
                .adminId(adminId)
                .description(req.getDescription())
                .name(req.getName())
                .uri(req.getUri())
                .build();

        return BankRequestDto.toDto(bank);
    }

    @Transactional
    public BankRequestDto update(BankRequestDto req, UUID uuid) {
        Optional<Bank> Optional = bankRepository.findById(uuid);
        Bank bank = Optional.orElseThrow(() -> new RuntimeException("은행없음"));
        bank.update(req);
        return BankRequestDto.toDto(bank);
    }

    @Transactional
    public void delete(UUID uuid) {
        Optional<Bank> Optional = bankRepository.findById(uuid);
        Bank bank = Optional.orElseThrow(() -> new RuntimeException("은행없음"));
        bank.deleteSoftly();
    }

    @Transactional
    public List<BankRequestDto> searchAll(UUID adminId) {
        List<Bank> bankList = bankRepository.findByAdminId(adminId);
        List<BankRequestDto> bankRequestDtoList = new ArrayList<>();
        for (Bank bank:bankList) {
            bankRequestDtoList.add(BankRequestDto.toDto(bank));
        }
        return bankRequestDtoList;
    }

    @Transactional
    public BankRequestDto serachBank(UUID uuid) {
        Optional<Bank> Optional = bankRepository.findById(uuid);
        Bank bank = Optional.orElseThrow(() -> new RuntimeException("은행없음"));
        return BankRequestDto.toDto(bank);
    }

    // 은행 이름 검색
    @Transactional
    public String serachBankName(UUID uuid) {
        return bankRepository.findBankName(uuid);
    }
}