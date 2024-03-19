package com.joa.openapi.bank.service;

import com.joa.openapi.bank.dto.BankRequestDto;
import com.joa.openapi.bank.dto.BankResponseDto;
import com.joa.openapi.bank.entity.Bank;
import com.joa.openapi.bank.errorcode.BankErrorCode;
import com.joa.openapi.bank.repository.BankRepository;
import com.joa.openapi.common.exception.RestApiException;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class BankService {

    private final BankRepository bankRepository;

    @Transactional
    public BankResponseDto create(BankRequestDto req, UUID adminId) {
        Bank bank = Bank.builder()
                .adminId(adminId)
                .description(req.getDescription())
                .name(req.getName())
                .uri(req.getUri())
                .build();

        bankRepository.save(bank);

        return BankResponseDto.toDto(bank);
    }

    @Transactional
    public BankResponseDto update(BankRequestDto req, UUID uuid) {
        Optional<Bank> Optional = bankRepository.findById(uuid);
        Bank bank = Optional.orElseThrow(() -> new RestApiException(BankErrorCode.NO_BANK));
        bank.update(req);
        return BankResponseDto.toDto(bank);
    }

    @Transactional
    public void delete(UUID uuid) {
        Optional<Bank> Optional = bankRepository.findById(uuid);
        Bank bank = Optional.orElseThrow(() -> new RestApiException(BankErrorCode.NO_BANK));
        bank.deleteSoftly();
    }

    public List<BankResponseDto> searchAll(UUID adminId) {
        List<Bank> bankList = bankRepository.findByAdminId(adminId);
        List<BankResponseDto> bankResponseDtoList = new ArrayList<>();
        for (Bank bank:bankList) {
            bankResponseDtoList.add(BankResponseDto.toDto(bank));
        }
        return bankResponseDtoList;
    }

    public BankResponseDto serachBank(UUID uuid) {
        Optional<Bank> Optional = bankRepository.findById(uuid);
        Bank bank = Optional.orElseThrow(() -> new RestApiException(BankErrorCode.NO_BANK));
        return BankResponseDto.toDto(bank);
    }
}