package com.joa.openapi.account.service;

import com.joa.openapi.account.dto.*;
import com.joa.openapi.account.entity.Account;
import com.joa.openapi.account.errorcode.AccountErrorCode;
import com.joa.openapi.account.repository.AccountRepository;
import com.joa.openapi.common.errorcode.CommonErrorCode;
import com.joa.openapi.common.exception.RestApiException;
import com.joa.openapi.member.entity.Member;
import com.joa.openapi.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AccountService {

    private final AccountRepository accountRepository;
    private final MemberRepository memberRepository;

    @Transactional
    public AccountCreateResponseDto create(UUID memberId, AccountCreateRequestDto req) {
        // 계좌번호 임시 랜덤 생성
        String accountId = String.valueOf(Math.random());

        Member member = memberRepository.findById(memberId);

        String startDateStr = LocalDate.now().format(DateTimeFormatter.ofPattern("MM/dd/yyyy"));
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");
        LocalDate startDate = LocalDate.parse(startDateStr, formatter);
        String endDateStr = startDate.plusMonths(req.getTerm()).minusDays(1).format(formatter);

        if(req.getPassword() == null || req.getPassword().trim().isBlank())
            throw new RestApiException(AccountErrorCode.PASSWORD_REQUIRED);

        Account account = Account.builder()
                .id(accountId)
                .nickname(req.getNickname()) /* TODO 예적금 상품 연결시키면 디폴트 닉네임 예적금 상품명 */
                .balance(req.getAmount())
                .password(req.getPassword())
                .isDormant(false)
                .transferLimit(req.getTransferLimit())
                .paymentNum(0)
                .nonPaymentNum(0)
                .startDate(startDateStr)
                .endDate(endDateStr)
                .term(req.getTerm())
                .withdrawAccount((req.getWithdrawAccount() == null) ? accountId : req.getWithdrawAccount())
                .amount(req.getAmount())
                .holder(member)
                .build();

        accountRepository.save(account);

        return AccountCreateResponseDto.toDto(account);
    }

    @Transactional
    public AccountUpdateResponseDto update(UUID memberId, AccountUpdateRequestDto req) {
        Account account = accountRepository.findById(req.getAccountId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        authorityValidation(memberId, account);

        /* TODO withdrawAccount가 존재하는지 확인 */

        if(req.getNickname() != null && !req.getPassword().trim().isBlank())
            account.updateNickname(req.getNickname());
        if (req.getWithdrawAccount() != null && !req.getPassword().trim().isBlank()){
            accountRepository.findById(req.getWithdrawAccount()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_WITHDRAW_ACCOUNT));
            account.updateWithdrawAccount(req.getWithdrawAccount());
        }

        accountRepository.save(account);

        return AccountUpdateResponseDto.toDto(account);
    }

    @Transactional
    public Long updateLimit(UUID memberId, AccountUpdateRequestDto req) {
        Account account = accountRepository.findById(req.getAccountId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        authorityValidation(memberId, account);

        if(req.getTransferLimit() != null && req.getTransferLimit() >= 20)
            account.updateLimit(req.getTransferLimit());

        accountRepository.save(account);

        return account.getTransferLimit();
    }

    @Transactional
    public void updatePassword(UUID memberId, AccountUpdateRequestDto req) {
        Account account = accountRepository.findById(req.getAccountId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        authorityValidation(memberId, account);

        if(req.getPassword() != null && !req.getPassword().trim().isBlank())
            account.updatePassword(req.getPassword());

        accountRepository.save(account);
    }

    @Transactional
    public String delete(UUID memberId, AccountDeleteRequestDto req) {
        Account account = accountRepository.findById(req.getAccountId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        authorityValidation(memberId, account);
        checkPassword(account, req.getPassword());

        account.deleteSoftly();

        return account.getId();
    }

    public void authorityValidation(UUID memberId, Account account) {
        if (!account.getHolder().getId().equals(memberId))
            throw new RestApiException(CommonErrorCode.NO_AUTHORIZATION);
    }

    public void checkPassword(Account account, String password){
        if(!account.getPassword().equals(password))
            throw new RestApiException(AccountErrorCode.PASSWORD_MISMATCH);
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
