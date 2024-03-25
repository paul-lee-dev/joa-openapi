package com.joa.openapi.transaction.service;

import com.joa.openapi.account.dto.*;
import com.joa.openapi.account.entity.Account;
import com.joa.openapi.account.errorcode.AccountErrorCode;
import com.joa.openapi.account.repository.AccountRepository;
import com.joa.openapi.common.errorcode.CommonErrorCode;
import com.joa.openapi.common.exception.RestApiException;
import com.joa.openapi.dummy.entity.Dummy;
import com.joa.openapi.dummy.repository.DummyRepository;
import com.joa.openapi.transaction.dto.TransactionRequestDto;
import com.joa.openapi.transaction.dto.TransactionResponseDto;
import com.joa.openapi.transaction.entity.Transaction;
import com.joa.openapi.transaction.errorcode.TransactionErrorCode;
import com.joa.openapi.transaction.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class TransactionService {

    private final TransactionRepository transactionRepository;
    private final AccountRepository accountRepository;
    private final DummyRepository dummyRepository;

    @Transactional
    public TransactionResponseDto deposit(UUID memberId, TransactionRequestDto req) {

        String to = req.getToAccount();

        Account account = accountRepository.findById(to).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        authorityValidation(memberId, account);
        checkPassword(account, req.getPassword());

        Long toPrevBalance = account.getBalance();

        if (req.getAmount() != null){
            account.updateBalance(account.getBalance() + req.getAmount());
        }

        Transaction transaction = Transaction.builder()
                .amount(req.getAmount())
                .depositorName(req.getDepositorName())
                .fromAccount(null)
                .toAccount(req.getToAccount())
                .build();

        transactionRepository.save(transaction);
        accountRepository.save(account);

        return TransactionResponseDto.toDepositDto(transaction, toPrevBalance, account.getBalance());
    }


    @Transactional
    public TransactionResponseDto withdraw(UUID memberId, TransactionRequestDto req) {

        String from = req.getFromAccount();

        Account account = accountRepository.findById(from).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        authorityValidation(memberId, account);
        checkPassword(account, req.getPassword());

        if(account.getBalance() < req.getAmount())
            throw new RestApiException(TransactionErrorCode.NO_BALANCE);

        Long fromPrevBalance = account.getBalance();

        account.updateBalance(account.getBalance() - req.getAmount());


        Transaction transaction = Transaction.builder()
                .amount(req.getAmount())
                .depositorName(req.getDepositorName())
                .fromAccount(req.getFromAccount())
                .toAccount(null)
                .build();

        transactionRepository.save(transaction);
        accountRepository.save(account);

        return TransactionResponseDto.toWithdrawDto(transaction, fromPrevBalance, account.getBalance());
    }


    @Transactional
    public TransactionResponseDto send(UUID memberId, TransactionRequestDto req) {

        String from = req.getFromAccount();
        String to = req.getToAccount();

        Account fromAccount = accountRepository.findById(from).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));
        Account toAccount = accountRepository.findById(to).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        authorityValidation(memberId, fromAccount);
        checkPassword(fromAccount, req.getPassword());

        if(fromAccount.getBalance() < req.getAmount())
            throw new RestApiException(TransactionErrorCode.NO_BALANCE);

        Long fromPrevBalance = fromAccount.getBalance();
        Long toPrevBalance = toAccount.getBalance();

        fromAccount.updateBalance(fromAccount.getBalance() - req.getAmount());
        toAccount.updateBalance(toAccount.getBalance() + req.getAmount());

        Transaction transaction = Transaction.builder()
                .amount(req.getAmount())
                .depositorName(req.getDepositorName())
                .fromAccount(req.getFromAccount())
                .toAccount(req.getToAccount())
                .build();

        transactionRepository.save(transaction);
        accountRepository.save(fromAccount);
        accountRepository.save(toAccount);

        return TransactionResponseDto.toDto(transaction, fromPrevBalance, fromAccount.getBalance(), toPrevBalance, toAccount.getBalance());
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
