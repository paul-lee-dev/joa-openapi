package com.joa.openapi.account.service;

import com.joa.openapi.account.dto.AccountCreateRequestDto;
import com.joa.openapi.account.dto.AccountCreateResponseDto;
import com.joa.openapi.account.entity.Account;
import com.joa.openapi.account.repository.AccountRepository;
import com.joa.openapi.member.errorcode.MemberErrorCode;
import com.joa.openapi.common.exception.RestApiException;
import com.joa.openapi.member.entity.Member;
import com.joa.openapi.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AccountService {

    private final AccountRepository accountRepository;
    private final MemberRepository memberRepository;

    public AccountCreateResponseDto create(AccountCreateRequestDto req, String memberId) {
        String accountId = "12345";

        Member member = memberRepository.findById(memberId).orElseThrow(() -> new RestApiException(MemberErrorCode.NO_MEMBER));

        Account account = Account.builder()
                .id(accountId)
                .nickname(req.getNickname())
                .password(req.getPassword())
                .isDormant(req.getIsDormant())
                .transferLimit(req.getTransferLimit())
                .term(req.getTerm())
                .withdrawAccount(req.getWithdrawAccount())
                .amount(req.getAmount())
                .holder(member)
                .build();

        accountRepository.save(account);

        return AccountCreateResponseDto.toDto(account);
    }

    public String createAccountId(){
        return null;
    }
}
