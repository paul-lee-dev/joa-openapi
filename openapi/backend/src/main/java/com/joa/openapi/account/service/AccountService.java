package com.joa.openapi.account.service;

import com.joa.openapi.account.dto.*;
import com.joa.openapi.account.entity.Account;
import com.joa.openapi.account.errorcode.AccountErrorCode;
import com.joa.openapi.account.repository.AccountRepository;
import com.joa.openapi.common.errorcode.CommonErrorCode;
import com.joa.openapi.common.exception.RestApiException;
import com.joa.openapi.dummy.entity.Dummy;
import com.joa.openapi.dummy.repository.DummyRepository;
import com.joa.openapi.member.entity.Member;
import com.joa.openapi.member.errorcode.MemberErrorCode;
import com.joa.openapi.member.repository.MemberRepository;
import com.joa.openapi.product.entity.Product;
import com.joa.openapi.product.repository.ProductRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.Optional;
import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AccountService {

    private final AccountRepository accountRepository;
    private final MemberRepository memberRepository;
    private final DummyRepository dummyRepository;
    private final ProductRepository productRepository;

    @Transactional
    public AccountCreateResponseDto create(UUID memberId, AccountCreateRequestDto req) {
        // 계좌번호 임시 랜덤 생성
        String accountId = String.valueOf(Math.random());

        Member member = memberRepository.findById(memberId).orElseThrow(() -> new RestApiException(MemberErrorCode.NO_MEMBER));
        Product product = productRepository.findById(req.getProductId()).orElseThrow(() -> new RestApiException(MemberErrorCode.NO_MEMBER));

        Optional<Dummy> optionalDummy = Optional.ofNullable(req.getDummyId())
                .map(dummyId -> dummyRepository.findById(dummyId).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT))); /* TODO: 더미 에러 코드로 변경 */

        String startDateStr = LocalDate.now().format(DateTimeFormatter.ofPattern("MM/dd/yyyy"));
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");
        LocalDate startDate = LocalDate.parse(startDateStr, formatter);
        String endDateStr = startDate.plusMonths(req.getTerm()).minusDays(1).format(formatter);

        if(req.getPassword() == null || req.getPassword().trim().isBlank())
            throw new RestApiException(AccountErrorCode.PASSWORD_REQUIRED);

        Account account = Account.builder()
                .id(accountId)
                .name(req.getNickname()) /* TODO 예적금 상품 연결시키면 디폴트 닉네임 예적금 상품명 */
                .balance(req.getBalance())
                .password(req.getPassword())
                .isDormant(false)
                .transferLimit(req.getTransferLimit())
                .paymentNum(0)
                .nonPaymentNum(0)
                .startDate(startDateStr)
                .endDate(endDateStr)
                .term(req.getTerm())
                .depositAccount((req.getWithdrawAccount() == null) ? accountId : req.getWithdrawAccount())
                .withdrawAccount((req.getWithdrawAccount() == null) ? accountId : req.getWithdrawAccount())
                .amount(req.getAmount())
                .bankId(req.getBankId())
                .holder(member)
                .dummy(optionalDummy.orElse(null))
                .product(product)
                .build();

        accountRepository.save(account);

        return AccountCreateResponseDto.toDto(account);
    }

    @Transactional
    public AccountUpdateResponseDto update(UUID memberId, AccountUpdateRequestDto req) {
        Account account = accountRepository.findById(req.getAccountId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        authorityValidation(memberId, account);

        if(req.getNickname() != null && !req.getPassword().trim().isBlank())
            account.updateNickname(req.getNickname());
        if (req.getDepositAccount() != null && !req.getPassword().trim().isBlank()){
            accountRepository.findById(req.getDepositAccount()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_WITHDRAW_ACCOUNT));
            account.updateDepositAccount(req.getDepositAccount());
        }
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

    public AccountGetBalanceResponseDto getBalance(UUID memberId, AccountGetBalanceRequestDto req) {
        Account account = accountRepository.findById(req.getAccountId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        authorityValidation(memberId, account);

        return AccountGetBalanceResponseDto.toDto(account);
    }

    public Page<AccountGetAccountsResponseDto> getAccounts(UUID memberId, Pageable pageable) {
        Page<Account> accountsPage = accountRepository.findByHolderId(memberId, pageable);
        return accountsPage.map(AccountGetAccountsResponseDto::toDto);
    }

    public Page<AccountSearchResponseDto> search(AccountSearchRequestDto req, Pageable pageable) {
        return accountRepository.searchAccountCustom(req, pageable);
    }

    public void authorityValidation(UUID memberId, Account account) {
        if(account.getDummy() != null){
            Dummy dummy = dummyRepository.findById(account.getDummy().getId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT)); /* TODO: 더미 에러 코드로 변경 */
            if(!dummy.getAdminId().equals(memberId))
                throw new RestApiException(CommonErrorCode.NO_AUTHORIZATION);
        } else{
            if (!account.getHolder().getId().equals(memberId))
                throw new RestApiException(CommonErrorCode.NO_AUTHORIZATION);
        }
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
