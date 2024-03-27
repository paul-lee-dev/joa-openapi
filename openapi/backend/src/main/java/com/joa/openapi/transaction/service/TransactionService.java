package com.joa.openapi.transaction.service;

import com.joa.openapi.account.entity.Account;
import com.joa.openapi.account.errorcode.AccountErrorCode;
import com.joa.openapi.account.repository.AccountRepository;
import com.joa.openapi.common.errorcode.CommonErrorCode;
import com.joa.openapi.common.exception.RestApiException;
import com.joa.openapi.dummy.entity.Dummy;
import com.joa.openapi.dummy.repository.DummyRepository;
import com.joa.openapi.transaction.dto.*;
import com.joa.openapi.transaction.entity.Transaction;
import com.joa.openapi.transaction.errorcode.TransactionErrorCode;
import com.joa.openapi.transaction.repository.TransactionRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
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

        Optional<Dummy> optionalDummy = Optional.ofNullable(req.getDummyId())
                .map(dummyId -> dummyRepository.findById(dummyId).orElseThrow(() -> new RestApiException(DummyErrorCode.NO_DUMMY)));

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
                .dummy(optionalDummy.orElse(null))
                .build();

        transactionRepository.save(transaction);
        accountRepository.save(account);

        return TransactionResponseDto.toDepositDto(transaction, toPrevBalance, account.getBalance());
    }


    @Transactional
    public TransactionResponseDto withdraw(UUID memberId, TransactionRequestDto req) {

        String from = req.getFromAccount();

        Account account = accountRepository.findById(from).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        Optional<Dummy> optionalDummy = Optional.ofNullable(req.getDummyId())
                .map(dummyId -> dummyRepository.findById(dummyId).orElseThrow(() -> new RestApiException(DummyErrorCode.NO_DUMMY)));

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
                .dummy(optionalDummy.orElse(null))
                .build();

        transactionRepository.save(transaction);
        accountRepository.save(account);

        return TransactionResponseDto.toWithdrawDto(transaction, fromPrevBalance, account.getBalance());
    }


    @Transactional
    public TransactionResponseDto send(UUID memberId, TransactionRequestDto req) {

        Account fromAccount = accountRepository.findById(req.getFromAccount()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));
        Account toAccount = accountRepository.findById(req.getToAccount()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        Optional<Dummy> optionalDummy = Optional.ofNullable(req.getDummyId())
                .map(dummyId -> dummyRepository.findById(dummyId).orElseThrow(() -> new RestApiException(DummyErrorCode.NO_DUMMY)));

        authorityValidation(memberId, fromAccount);
        checkPassword(fromAccount, req.getPassword());

        if(fromAccount.getBalance() < req.getAmount())
            throw new RestApiException(TransactionErrorCode.NO_BALANCE);

        Long fromPrevBalance = fromAccount.getBalance();
        Long toPrevBalance = toAccount.getBalance();

        fromAccount.updateBalance(fromPrevBalance - req.getAmount());
        toAccount.updateBalance(toPrevBalance + req.getAmount());

        Transaction transaction = Transaction.builder()
                .amount(req.getAmount())
                .depositorName(req.getDepositorName())
                .fromAccount(req.getFromAccount())
                .toAccount(req.getToAccount())
                .dummy(optionalDummy.orElse(null))
                .build();

        transactionRepository.save(transaction);
        accountRepository.save(fromAccount);
        accountRepository.save(toAccount);

        return TransactionResponseDto.toDto(transaction, fromPrevBalance, fromAccount.getBalance(), toPrevBalance, toAccount.getBalance());
    }

    @Transactional
    public TransactionUpdateResponseDto update(UUID memberId, TransactionUpdateRequestDto req) {
        Transaction transaction = transactionRepository.findById(req.getTransactionId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

//        if(transaction.getDummy() == null)
//            throw new RestApiException(CommonErrorCode.NO_AUTHORIZATION);
//        if(!memberId.equals(transaction.getDummy().getAdminId()))
//            throw new RestApiException(CommonErrorCode.NO_AUTHORIZATION);


        Long fromPrevBalance = 0L;
        Long fromBalance = 0L;
        Long toPrevBalance = 0L;
        Long toBalance = 0L;

        if(req.getDepositorName() != null)
            transaction.updateDepositorName(transaction.getDepositorName());
        transaction.updateAmount(req.getAmount());
        transaction.updateFromAccount(null);
        transaction.updateToAccount(transaction.getToAccount());

        if(req.getFromAccount() == null && req.getToAccount() != null){
            Account toAccount = accountRepository.findById(req.getToAccount()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));
            toPrevBalance = toAccount.getBalance();
            toBalance = updateDeposit(req);
        }

        else if(req.getFromAccount() != null && req.getToAccount() == null){
            Account fromAccount = accountRepository.findById(req.getFromAccount()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));
            fromPrevBalance = fromAccount.getBalance();
            fromBalance = updateWithdraw(req);
        }

        else if(req.getFromAccount() != null){
            Account fromAccount = accountRepository.findById(req.getFromAccount()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));
            Account toAccount = accountRepository.findById(req.getToAccount()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));
            toPrevBalance = toAccount.getBalance();
            fromPrevBalance = fromAccount.getBalance();
            Long[] balance = updateSend(req);
            fromBalance = balance[0];
            toBalance = balance[1];
        }

        transactionRepository.save(transaction);

        return TransactionUpdateResponseDto.toDto(transaction, fromPrevBalance, fromBalance, toPrevBalance, toBalance);
    }

    public Long updateDeposit(TransactionUpdateRequestDto req) {
        Account account = accountRepository.findById(req.getToAccount()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        if (req.getAmount() != null) {
            //refund(req);
            account.updateBalance(account.getBalance() + req.getAmount());
        }

        accountRepository.save(account);

        return account.getBalance();
    }

    public Long updateWithdraw(TransactionUpdateRequestDto req) {
        Account account = accountRepository.findById(req.getFromAccount()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        if(account.getBalance() < req.getAmount())
            throw new RestApiException(TransactionErrorCode.NO_BALANCE);

        //refund(req);
        account.updateBalance(account.getBalance() - req.getAmount());

        accountRepository.save(account);

        return account.getBalance();
    }

    public Long[] updateSend(TransactionUpdateRequestDto req) {
        Account fromAccount = accountRepository.findById(req.getFromAccount()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));
        Account toAccount = accountRepository.findById(req.getToAccount()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        if(fromAccount.getBalance() < req.getAmount())
            throw new RestApiException(TransactionErrorCode.NO_BALANCE);

        //refund(req);

        fromAccount.updateBalance(fromAccount.getBalance() - req.getAmount());
        toAccount.updateBalance(toAccount.getBalance() + req.getAmount());

        accountRepository.save(fromAccount);
        accountRepository.save(toAccount);

        return new Long[] {fromAccount.getBalance(), toAccount.getBalance()};
    }

    @Transactional
    public void refund(TransactionUpdateRequestDto req) {
        Transaction transaction = transactionRepository.findById(req.getTransactionId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));
        Account fromAccount = accountRepository.findById(req.getFromAccount()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));
        Account toAccount = accountRepository.findById(req.getToAccount()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        Long preAmount = transaction.getAmount();

        if(toAccount.getBalance() < preAmount){
            throw new RestApiException(TransactionErrorCode.NO_REFUND);
        }

        fromAccount.updateBalance(fromAccount.getBalance() + preAmount);
        toAccount.updateBalance(toAccount.getBalance() - preAmount);

        if(req.getAmount() == null)
            throw new RestApiException(TransactionErrorCode.NO_AMOUNT);
        transaction.updateAmount(req.getAmount());
        transaction.updateDepositorName(req.getDepositorName());
        transaction.updateFromAccount(req.getFromAccount());
        transaction.updateFromAccount(req.getToAccount());

        transactionRepository.save(transaction);
        accountRepository.save(fromAccount);
        accountRepository.save(toAccount);
    }

    @Transactional
    public void delete(UUID memberId, TransactionDeleteRequestDto req) {
        Transaction transaction = transactionRepository.findById(req.getTransactionId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

//        if(transaction.getDummy() == null)
//            throw new RestApiException(CommonErrorCode.NO_AUTHORIZATION);
//        if(!memberId.equals(transaction.getDummy().getAdminId()))
//            throw new RestApiException(CommonErrorCode.NO_AUTHORIZATION);

        transaction.deleteSoftly();
    }

    public void authorityValidation(UUID memberId, Account account) {
        if (account.getDummy() != null) {
            Dummy dummy = dummyRepository.findById(account.getDummy().getId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT)); /* TODO: 더미 에러 코드로 변경 */
            if (!dummy.getAdminId().equals(memberId))
                throw new RestApiException(CommonErrorCode.NO_AUTHORIZATION);
        } else {
            if (!account.getHolder().getId().equals(memberId))
                throw new RestApiException(CommonErrorCode.NO_AUTHORIZATION);
        }
    }

    public void checkPassword(Account account, String password){
        if (!account.getPassword().equals(password))
            throw new RestApiException(AccountErrorCode.PASSWORD_MISMATCH);
    }
}
