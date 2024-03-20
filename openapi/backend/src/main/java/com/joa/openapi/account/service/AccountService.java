package com.joa.openapi.account.service;

import com.joa.openapi.account.dto.AccountCreateRequestDto;
import com.joa.openapi.account.dto.AccountCreateResponseDto;
import com.joa.openapi.account.dto.AccountUpdateRequestDto;
import com.joa.openapi.account.dto.AccountUpdateResponseDto;
import com.joa.openapi.account.entity.Account;
import com.joa.openapi.account.errorcode.AccountErrorCode;
import com.joa.openapi.account.repository.AccountRepository;
import com.joa.openapi.common.errorcode.CommonErrorCode;
import com.joa.openapi.member.errorcode.MemberErrorCode;
import com.joa.openapi.common.exception.RestApiException;
import com.joa.openapi.member.entity.Member;
import com.joa.openapi.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AccountService {

    private final AccountRepository accountRepository;
    private final MemberRepository memberRepository;

    @Transactional
    public AccountCreateResponseDto create(String memberId, AccountCreateRequestDto req) {
        String accountId = "1234";

        log.info("memberId:{}",memberId);

        Member member = memberRepository.findById(memberId).orElseThrow(() -> new RestApiException(MemberErrorCode.NO_MEMBER));

        String startDateStr = LocalDate.now().format(DateTimeFormatter.ofPattern("MM/dd/yyyy"));
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");
        LocalDate startDate = LocalDate.parse(startDateStr, formatter);
        String endDateStr = startDate.plusMonths(req.getTerm()).minusDays(1).format(formatter);

        Account account = Account.builder()
                .id(accountId)
                .nickname(req.getNickname())
                .balance(req.getAmount())
                .password(req.getPassword())
                .isDormant(false)
                .transferLimit(req.getTransferLimit())
                .paymentNum(0)
                .nonPaymentNum(0)
                .startDate(startDateStr)
                .endDate(endDateStr)
                .term(req.getTerm())
                .withdrawAccount(req.getWithdrawAccount())
                .amount(req.getAmount())
                .holder(member)
                .build();

        accountRepository.save(account);

        return AccountCreateResponseDto.toDto(account);
    }

    @Transactional
    public AccountUpdateResponseDto update(String memberId, AccountUpdateRequestDto req) {
        Account account = accountRepository.findById(req.getId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        authorityValidation(memberId, account);

        if(req.getNickname() != null)
            account.updateNickname(req.getNickname());
        if (req.getWithdrawAccount() != null)
            account.updateWithdrawAccount(req.getWithdrawAccount());

        accountRepository.save(account);

        return AccountUpdateResponseDto.toDto(account);
    }

    @Transactional
    public Long updateLimit(String memberId, AccountUpdateRequestDto req) {
        Account account = accountRepository.findById(req.getId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        authorityValidation(memberId, account);

        if(req.getTransferLimit() != null)
            account.updateLimit(req.getTransferLimit());

        accountRepository.save(account);

        return account.getTransferLimit();
    }

    @Transactional
    public void updatePassword(String memberId, AccountUpdateRequestDto req) {
        Account account = accountRepository.findById(req.getId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        authorityValidation(memberId, account);

        if(req.getPassword() != null)
            account.updatePassword(req.getPassword());

        accountRepository.save(account);
    }

    public void authorityValidation(String memberId, Account account) {
        if (!account.getHolder().getId().equals(memberId))
            throw new RestApiException(CommonErrorCode.NO_AUTHORIZATION);
    }

    /**
     *
     * 계좌번호 생성
     * 은행 @@@@ + 상품 @@@@ + 본인 @@@@ + 체크섬 @
     */
    public String createAccountId(){
        return null;
    }
}
