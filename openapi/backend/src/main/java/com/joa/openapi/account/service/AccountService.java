package com.joa.openapi.account.service;

import com.joa.openapi.account.dto.*;
import com.joa.openapi.account.entity.Account;
import com.joa.openapi.account.errorcode.AccountErrorCode;
import com.joa.openapi.account.repository.AccountRepository;
import com.joa.openapi.bank.entity.Bank;
import com.joa.openapi.bank.errorcode.BankErrorCode;
import com.joa.openapi.bank.repository.BankRepository;
import com.joa.openapi.common.errorcode.CommonErrorCode;
import com.joa.openapi.common.exception.RestApiException;
import com.joa.openapi.common.repository.ApiRepository;
import com.joa.openapi.dummy.entity.Dummy;
import com.joa.openapi.dummy.repository.DummyRepository;
import com.joa.openapi.member.entity.Member;
import com.joa.openapi.member.errorcode.MemberErrorCode;
import com.joa.openapi.member.repository.MemberRepository;
import com.joa.openapi.product.entity.Product;
import com.joa.openapi.product.errorcode.ProductErrorCode;
import com.joa.openapi.product.repository.ProductRepository;
import com.joa.openapi.product.service.DepositAccountService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AccountService {

    private final AccountRepository accountRepository;
    private final MemberRepository memberRepository;
    private final DummyRepository dummyRepository;
    private final ProductRepository productRepository;
    private final ApiRepository apiRepository;
    private final BankRepository bankRepository;

    @Transactional
    public AccountCreateResponseDto create(UUID apiKey, UUID memberId, AccountCreateRequestDto req) {

        bankAuthorityValidation(apiKey, req.getBankId());

        // 계좌번호 임시 랜덤 생성
        String accountId = String.valueOf(Math.random());

        System.out.println("멤버아이디 : " + memberId.toString());

        Member member = memberRepository.findById(memberId).orElseThrow(() -> new RestApiException(MemberErrorCode.NO_MEMBER));
        Product product = productRepository.findById(req.getProductId()).orElseThrow(() -> new RestApiException(ProductErrorCode.NO_PRODUCT));

        Optional<Dummy> optionalDummy = Optional.ofNullable(req.getDummyId())
                .map(dummyId -> dummyRepository.findById(dummyId).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT))); /* TODO: 더미 에러 코드로 변경 */

        String startDateStr = LocalDate.now().format(DateTimeFormatter.ofPattern("MM/dd/yyyy"));
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");
        LocalDate startDate = LocalDate.parse(startDateStr, formatter);
        String endDateStr = startDate.plusMonths(req.getTerm()).minusDays(1).format(formatter);

        if (req.getPassword() == null || req.getPassword().trim().isBlank())
            throw new RestApiException(AccountErrorCode.PASSWORD_REQUIRED);

        System.out.println("==============");
        System.out.println("계좌 금액 : " + req.getBalance());
        System.out.println("계좌 양 : " + req.getAmount());

        Account account = Account.builder()
                .id(accountId)
                .name((req.getNickname() == null) ? product.getName() : req.getNickname())
                .balance((req.getAmount() == 0) ? req.getBalance() : req.getAmount())
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
                .taxType(req.getTaxType())
                .build();

        accountRepository.save(account);

        return AccountCreateResponseDto.toDto(account);
    }

    @Transactional
    public AccountUpdateResponseDto update(UUID apiKey, UUID memberId, AccountUpdateRequestDto req) {
        Account account = accountRepository.findById(req.getAccountId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        bankAuthorityValidation(apiKey, account.getBankId());

        if (req.getNickname() != null)
            account.updateNickname(req.getNickname());
        if (req.getDepositAccount() != null) {
            accountRepository.findById(req.getDepositAccount()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_WITHDRAW_ACCOUNT));
            account.updateDepositAccount(req.getDepositAccount());
        }
        if (req.getWithdrawAccount() != null) {
            accountRepository.findById(req.getWithdrawAccount()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_WITHDRAW_ACCOUNT));
            account.updateWithdrawAccount(req.getWithdrawAccount());
        }

        accountRepository.save(account);

        return AccountUpdateResponseDto.toDto(account);
    }

    @Transactional
    public Long updateLimit(UUID apiKey, AccountUpdateRequestDto req) {
        Account account = accountRepository.findById(req.getAccountId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        bankAuthorityValidation(apiKey, account.getBankId());

        if (req.getTransferLimit() != null && req.getTransferLimit() >= 20)
            account.updateLimit(req.getTransferLimit());

        accountRepository.save(account);

        return account.getTransferLimit();
    }

    @Transactional
    public void updatePassword(UUID apiKey, UUID memberId, AccountUpdateRequestDto req) {
        Account account = accountRepository.findById(req.getAccountId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        bankAuthorityValidation(apiKey, account.getBankId());

        if (req.getPassword() != null && !req.getPassword().trim().isBlank())
            account.updatePassword(req.getPassword());

        accountRepository.save(account);
    }

    @Transactional
    public String delete(UUID apiKey, UUID memberId, AccountDeleteRequestDto req) {
        Account account = accountRepository.findById(req.getAccountId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        bankAuthorityValidation(apiKey, account.getBankId());
        checkPassword(account, req.getPassword());

        account.deleteSoftly();

        return account.getId();
    }

    public AccountGetBalanceResponseDto getBalance(UUID apiKey, UUID memberId, AccountGetBalanceRequestDto req) {
        Account account = accountRepository.findById(req.getAccountId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        bankAuthorityValidation(apiKey, account.getBankId());

        return AccountGetBalanceResponseDto.toDto(account);
    }

    public AccountGetDetailResponseDto getDetail(UUID apiKey, AccountGetDetailRequestDto req) {
        Account account = accountRepository.findById(req.getAccountId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        bankAuthorityValidation(apiKey, account.getBankId());

        return AccountGetDetailResponseDto.toDto(account);
    }

    public Page<AccountGetAccountsResponseDto> getAccounts(UUID apiKey, UUID memberId, Pageable pageable) {
        // apiKey로부터 adminId 조회
        UUID adminId = apiRepository.getByApiKey(apiKey).getAdminId();

        // memberId에 해당하는 계좌 조회
        Page<Account> accountsPage = accountRepository.findByHolderId(memberId, pageable);

        // 필터링을 위해 스트림 사용
        List<AccountGetAccountsResponseDto> filteredAccounts = accountsPage.getContent().stream()
                .filter(account -> {
                    // 각 계좌의 bankId로 은행 조회
                    Bank bank = bankRepository.findById(account.getBankId()).orElse(null);
                    // 은행의 adminId와 비교
                    return bank != null && bank.getAdminId().equals(adminId);
                })
                .map(AccountGetAccountsResponseDto::toDto)
                .collect(Collectors.toList());

        // Page 객체 생성 방법은 구현 환경에 따라 다를 수 있음
        return new PageImpl<>(filteredAccounts, pageable, filteredAccounts.size());
        //return accountsPage.map(AccountGetAccountsResponseDto.toDto(filteredAccounts));
    }

    public Page<AccountSearchResponseDto> search(UUID apiKey, AccountSearchRequestDto req, Pageable pageable) {
        return accountRepository.searchAccountCustom(req, pageable);
    }

    public void bankAuthorityValidation(UUID apiKey, UUID bankId) {
        UUID adminId = apiRepository.getByApiKey(apiKey).getAdminId();
        Bank bank = bankRepository.findById(bankId).orElseThrow(() -> new RestApiException(BankErrorCode.NO_BANK));
        if (bank.getAdminId().equals(adminId))
            throw new RestApiException(CommonErrorCode.NO_AUTHORIZATION);
    }

    public void checkPassword(Account account, String password) {
        if (!account.getPassword().equals(password))
            throw new RestApiException(AccountErrorCode.PASSWORD_MISMATCH);
    }

    /**
     * 계좌번호 생성
     * 은행 @@@@ + 상품 @@@@ + 본인 @@@@ + 체크섬 @
     */
    public String createAccountId() {
        return null;
    }
}