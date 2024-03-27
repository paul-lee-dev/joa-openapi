package com.joa.openapi.bank.service;

import com.joa.openapi.bank.dto.BankRequestDto;
import com.joa.openapi.bank.dto.BankResponseDto;
import com.joa.openapi.bank.entity.Bank;
import com.joa.openapi.bank.errorcode.BankErrorCode;
import com.joa.openapi.bank.repository.BankRepository;
import com.joa.openapi.common.entity.Api;
import com.joa.openapi.common.errorcode.CommonErrorCode;
import com.joa.openapi.common.exception.RestApiException;
import com.joa.openapi.common.repository.ApiRepository;
import com.joa.openapi.common.util.AuthCheckUtil;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.parser.ParseException;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class BankService {

    private final AuthCheckUtil authCheckUtil;
    private final ApiRepository apiRepository;
    private final BankRepository bankRepository;

    @Transactional
    public BankResponseDto create(HttpServletRequest request, BankRequestDto req, UUID apiKey) throws ParseException {
        UUID adminId = AuthoriaztionAPI(request, apiKey);
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
    public BankResponseDto update(HttpServletRequest request, BankRequestDto req, UUID apiKey, UUID bankId) throws ParseException {
        UUID adminId = AuthoriaztionAPI(request, apiKey);
        Bank bank = bankRepository.findById(bankId).orElseThrow(() -> new RestApiException(BankErrorCode.NO_BANK));
        AuthoriaztionBank(bank.getAdminId(), adminId);
        bank.update(req);

        return BankResponseDto.toDto(bank);
    }

    @Transactional
    public BankResponseDto delete(HttpServletRequest request, UUID apiKey, UUID bankId) throws ParseException {
        UUID adminId = AuthoriaztionAPI(request, apiKey);
        Bank bank = bankRepository.findById(bankId).orElseThrow(() -> new RestApiException(BankErrorCode.NO_BANK));
        AuthoriaztionBank(bank.getAdminId(), adminId);
        bank.deleteSoftly();

        return BankResponseDto.toDto(bank);
    }

    public List<BankResponseDto> searchAll(HttpServletRequest request, UUID apiKey, String name) throws ParseException {
        UUID adminId = AuthoriaztionAPI(request, apiKey);
        List<Bank> bankList = bankRepository.findByAdminIdAndNameContaining(adminId, name);
        List<BankResponseDto> bankResponseDtoList = new ArrayList<>();
        for (Bank bank:bankList) {
            bankResponseDtoList.add(BankResponseDto.toDto(bank));
        }

        return bankResponseDtoList;
    }

    public BankResponseDto serachBank(HttpServletRequest request, UUID apiKey, UUID bankId) throws ParseException {
        UUID adminId = AuthoriaztionAPI(request, apiKey);
        Bank bank = bankRepository.findById(bankId).orElseThrow(() -> new RestApiException(BankErrorCode.NO_BANK));
        AuthoriaztionBank(bank.getAdminId(), adminId);

        return BankResponseDto.toDto(bank);
    }

    // 관리자가 가지고 있는 ApiKey가 유효한지
    public UUID AuthoriaztionAPI(HttpServletRequest request, UUID apiKey) throws ParseException {
        UUID adminId = UUID.fromString(authCheckUtil.authCheck(request));
        Api api = apiRepository.findByAdminId(adminId);
        if(!api.getApiKey().equals(apiKey)) {
            throw new RestApiException(CommonErrorCode.NO_AUTHORIZATION);
        }

        return adminId;
    }

    // 관리자 아이디가 만든 은행인지
    public void AuthoriaztionBank(UUID bankAdminId, UUID adminId) {
        if (!bankAdminId.equals(adminId)) {
            throw new RestApiException(CommonErrorCode.NO_AUTHORIZATION);
        }
    }
}