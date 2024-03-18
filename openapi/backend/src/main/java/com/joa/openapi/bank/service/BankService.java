package com.joa.openapi.bank.service;

import com.joa.openapi.bank.dto.BankCreateRequestDto;
import com.joa.openapi.bank.dto.BankUpdateRequestDto;
import com.joa.openapi.bank.entity.Bank;
import com.joa.openapi.bank.repository.BankRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class BankService {

    private final BankRepository bankRepository;

    @Transactional
    public Bank create(BankCreateRequestDto req, UUID adminId) {
        Bank bank = Bank.builder()
                .adminId(adminId)
                .description(req.getDescription())
                .name(req.getName())
                .uri(req.getUri())
                .build();

        return bankRepository.save(bank);
    }

    @Transactional
    public Bank update(BankUpdateRequestDto req, UUID uuid) {
        Optional<Bank> Optional = bankRepository.findById(uuid);
        Bank bank = Optional.orElseThrow(() -> new RuntimeException("은행없음"));
        bank.update(req);
        return bank;
    }

    @Transactional
    public void delete(UUID uuid) {
        Optional<Bank> Optional = bankRepository.findById(uuid);
        Bank bank = Optional.orElseThrow(() -> new RuntimeException("은행없음"));
        bank.deleteSoftly();
    }

    @Transactional
    public List<Bank> searchAll(UUID adminId) {
        return bankRepository.findByAdminId(adminId);
    }

    @Transactional
    public Bank serachBank(UUID uuid) {
        Optional<Bank> Optional = bankRepository.findById(uuid);
        return Optional.orElseThrow(() -> new RuntimeException("은행없음"));
    }
}