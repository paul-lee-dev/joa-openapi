package com.joa.openapi.bank.service;

import com.joa.openapi.bank.dto.BankRequestDto;
import com.joa.openapi.bank.dto.BankResponseDto;
import com.joa.openapi.bank.dto.DashboardResponseDto;
import com.joa.openapi.bank.entity.Bank;
import com.joa.openapi.bank.errorcode.BankErrorCode;
import com.joa.openapi.bank.repository.BankRepository;
import com.joa.openapi.common.entity.Api;
import com.joa.openapi.common.errorcode.CommonErrorCode;
import com.joa.openapi.common.exception.RestApiException;
import com.joa.openapi.common.repository.ApiRepository;
import com.joa.openapi.common.util.AuthCheckUtil;
import com.joa.openapi.member.repository.MemberRepository;
import com.joa.openapi.product.dto.req.ProductCreateRequestDto;
import com.joa.openapi.product.service.ProductService;
import com.joa.openapi.transaction.dto.res.DayMoneyFlow;
import com.joa.openapi.transaction.repository.TransactionRepository;
import com.querydsl.core.Tuple;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.json.simple.parser.ParseException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.util.Pair;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.UUID;

import static com.joa.openapi.product.enums.PaymentType.SIMPLE;
import static com.joa.openapi.product.enums.ProductType.ORDINARY_DEPOSIT;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class BankService {

    private final AuthCheckUtil authCheckUtil;
    private final ApiRepository apiRepository;
    private final BankRepository bankRepository;
    private final ProductService productService;
    private final TransactionRepository transactionRepository;
    private final MemberRepository memberRepository;

    @Transactional
    public BankResponseDto create(BankRequestDto req, UUID apiKey) {
        UUID adminId = apiRepository.getByApiKey(apiKey).getAdminId();
        String bankName;
        Bank bank = Bank.builder()
                .adminId(adminId)
                .description(req.getDescription())
                .name(req.getName())
                .uri(req.getUri())
                .build();
        Bank saved = bankRepository.save(bank);
        bankName = bank.getName();
        ProductCreateRequestDto dto = ProductCreateRequestDto.builder()
                .name(bankName + " 보통 예금")
                .description("예치금액과 기간에 제한이 없는 입출금이 자유로운 통장")
                .minAmount(0L)
                .maxAmount(100000000L)
                .rate(1D)
                .productType(ORDINARY_DEPOSIT)
                .paymentType(SIMPLE)
                .bankId(saved.getId())
                .build();
        productService.create(apiKey, dto);

        return BankResponseDto.toDto(saved);
    }

    @Transactional
    public BankResponseDto update(BankRequestDto req, UUID apiKey, UUID bankId) {
        UUID adminId = apiRepository.getByApiKey(apiKey).getAdminId();
        Bank bank = bankRepository.findById(bankId).orElseThrow(() -> new RestApiException(BankErrorCode.NO_BANK));
        AuthoriaztionBank(bank.getAdminId(), adminId);
        bank.update(req);
        bankRepository.save(bank);

        return BankResponseDto.toDto(bank);
    }

    @Transactional
    public BankResponseDto delete(UUID apiKey, UUID bankId) {
        UUID adminId = apiRepository.getByApiKey(apiKey).getAdminId();
        Bank bank = bankRepository.findById(bankId).orElseThrow(() -> new RestApiException(BankErrorCode.NO_BANK));
        AuthoriaztionBank(bank.getAdminId(), adminId);
        bank.deleteSoftly();

        return BankResponseDto.toDto(bank);
    }

    public Page<BankResponseDto> searchAll(UUID apiKey, String name, Pageable pageable) {
        if (name == null) name = "";
        UUID adminId = apiRepository.getByApiKey(apiKey).getAdminId();
        return bankRepository.findByAdminIdAndNameContaining(adminId, name, pageable);
    }

    public BankResponseDto searchBank(UUID apiKey, UUID bankId) {
        UUID adminId = apiRepository.getByApiKey(apiKey).getAdminId();
        Bank bank = bankRepository.findById(bankId).orElseThrow(() -> new RestApiException(BankErrorCode.NO_BANK));
        AuthoriaztionBank(bank.getAdminId(), adminId);

        return BankResponseDto.toDto(bank);
    }

    public DashboardResponseDto getDashboardData(UUID apiKey, UUID bankId) {
        UUID adminId = apiRepository.getByApiKey(apiKey).getAdminId();
        Bank bank = bankRepository.findById(bankId).orElseThrow(() -> new RestApiException(BankErrorCode.NO_BANK));
        AuthoriaztionBank(bank.getAdminId(), adminId);
        Long totalTransactionCnt = transactionRepository.searchBanksTotalTransactionCustom(bankId);
        Long totalMemberCnt = (long) memberRepository.findByBankId(bankId).size();
        Long totalWithdrawAmount = transactionRepository.searchBanksTotalWithdrawCustom(bankId);
        Long totalDepositAmout = transactionRepository.searchBanksTotalDepositCustom(bankId);
        List<DayMoneyFlow> weekTransactionList = transactionRepository.searchBanksWeekTransactionCustom(bankId);
        return DashboardResponseDto.builder()
                .totalTransactionCnt(totalTransactionCnt)
                .totalMemberCnt(totalMemberCnt)
                .totalWithdrawAmount(totalWithdrawAmount)
                .totalDepositAmount(totalDepositAmout)
                .totalTransactionList(weekTransactionList)
                .build();
    }

    // 관리자 아이디가 만든 은행인지
    public void AuthoriaztionBank(UUID bankAdminId, UUID adminId) {
        if (!bankAdminId.equals(adminId)) {
            throw new RestApiException(CommonErrorCode.NO_AUTHORIZATION);
        }
    }
}
