package com.joa.openapi.dummy.service;

import com.joa.openapi.account.dto.AccountCreateRequestDto;
import com.joa.openapi.account.dto.AccountDeleteRequestDto;
import com.joa.openapi.account.entity.Account;
import com.joa.openapi.account.repository.AccountRepository;
import com.joa.openapi.account.service.AccountService;
import com.joa.openapi.common.errorcode.CommonErrorCode;
import com.joa.openapi.common.exception.RestApiException;
import com.joa.openapi.common.repository.ApiRepository;
import com.joa.openapi.dummy.dto.*;
import com.joa.openapi.dummy.entity.Dummy;
import com.joa.openapi.dummy.errorcode.DummyErrorCode;
import com.joa.openapi.dummy.repository.DummyRepository;
import com.joa.openapi.member.entity.Member;
import com.joa.openapi.member.errorcode.MemberErrorCode;
import com.joa.openapi.member.repository.MemberRepository;
import com.joa.openapi.member.service.MemberService;
import com.joa.openapi.member.dto.MemberJoinRequestDto;
import com.joa.openapi.transaction.dto.req.TransactionDeleteRequestDto;
import com.joa.openapi.transaction.dto.req.TransactionRequestDto;
import com.joa.openapi.transaction.entity.Transaction;
import com.joa.openapi.transaction.repository.TransactionRepository;
import com.joa.openapi.transaction.service.TransactionService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
@Slf4j
public class DummyService {

    private final DummyRepository dummyRepository;
    private final MemberService memberService;
    private final MemberRepository memberRepository;
    private final AccountService accountService;
    private final AccountRepository accountRepository;
    private final TransactionService transactionService;
    private final TransactionRepository transactionRepository;
    private final ApiRepository apiRepository;
    private final NeyhuingName neyhuingName;
    public String name;

    @Transactional
    public DummyResponseDto createMember(UUID apiKey, DummyMemberRequestDto req) {
        UUID adminId = apiRepository.getByApiKey(apiKey).getAdminId();
        name = "멤버" + req.getCount() + "명 만들기";
        Dummy dummy = Dummy.builder()
                .name(name)
                .memberCount(req.getCount())
                .adminId(adminId)
                .build();

        dummyRepository.save(dummy);

        for (int i = 0; i < req.getCount(); i++) {
            // 더미 멤버 생성
            MemberJoinRequestDto MJRdto = MemberJoinRequestDto.builder()
                    .name(makeName(3))
                    .bankId(req.getBankId())
                    .build();
            UUID memberId = UUID.fromString(memberService.addMember(MJRdto, dummy.getId()).getId());
            // 더미 멤버 별 기본 입출금 계좌 생성
            AccountCreateRequestDto ACRdto = AccountCreateRequestDto.builder()
                    .nickname(makeName(4))
                    .password("dummy")
                    .withdrawAccount(null)
                    .dummyId(dummy.getId())
                    .build();
            String accountId = accountService.create(memberId, ACRdto).getAccountId();
            // 계좌 별 기본금 10만원 입금
            TransactionRequestDto TRdto = TransactionRequestDto.builder()
                    .amount(100000L)
                    .toAccount(accountId)
                    .password("dummy")
                    .dummyId(dummy.getId())
                    .build();
            transactionService.deposit(adminId, TRdto);
        }

        return DummyResponseDto.toDto(dummy);
    }

    @Transactional
    public DummyResponseDto createAccount(UUID apiKey, DummyAccountRequestDto req) {
        UUID adminId = apiRepository.getByApiKey(apiKey).getAdminId();
        name = "계좌" + req.getCount() + "개 만들기";
        Dummy dummy = Dummy.builder()
                .name(name)
                .accountCount(req.getCount())
                .adminId(adminId)
                .build();
        dummyRepository.save(dummy);

        int userCount = req.getUsers().size();
        Random random = new Random();
        for (int i = 0; i < req.getCount(); i++) {
            int randomMember = random.nextInt(userCount);
            AccountCreateRequestDto dto = AccountCreateRequestDto.builder()
                    .nickname(makeName(4))
                    .password("dummy")
                    .withdrawAccount(null)
                    .dummyId(dummy.getId())
                    .build();
            String accountId = accountService.create(req.getUsers().get(randomMember), dto).getAccountId();
            // 계좌 별 기본금 10만원 입금
            TransactionRequestDto TRdto = TransactionRequestDto.builder()
                    .amount(100000L)
                    .toAccount(accountId)
                    .password("dummy")
                    .dummyId(dummy.getId())
                    .build();
            transactionService.deposit(adminId, TRdto);
        }

        return DummyResponseDto.toDto(dummy);
    }

    @Transactional
    public DummyResponseDto createTransaction(UUID apiKey, DummyTransactionRequestDto req) {
        UUID adminId = apiRepository.getByApiKey(apiKey).getAdminId();
        name = "거래내역" + req.getCount() + "개 만들기";
        Dummy dummy = Dummy.builder()
                .name(name)
                .transactionCount(req.getCount())
                .adminId(adminId)
                .build();
        dummyRepository.save(dummy);

        int userCount = req.getUsers().size();
        Random random = new Random();
        for (int i = 0; i < req.getCount(); i++) {
            // 입금 할지, 출금 할지, 송금 할지
            int type = random.nextInt(3);
            // 대상 멤버 번호
            int fromMemberNum = random.nextInt(userCount);
            // 대상 멤버
            Member fromMember = memberRepository.findById(req.getUsers().get(fromMemberNum)).orElseThrow(() -> new RestApiException(MemberErrorCode.NO_MEMBER));
            // 대상 멤버의 계좌들
            List<Account> accountListFrom = accountRepository.findByHolderId(fromMember.getId());
            // 대상 멤버의 랜덤 계좌
            int fromAccountNum = random.nextInt(accountListFrom.size());
            Account accountFrom = accountListFrom.get(fromAccountNum);
            // 그 계좌의 잔액
            Long amount = (long) Math.floor(accountFrom.getBalance() * Math.random());
            TransactionRequestDto dto = TransactionRequestDto.builder().build();
            switch (type) {
                // 입금
                case 0 :
                    dto = TransactionRequestDto.builder()
                            .amount(random.nextLong(1000000))
                            .depositorName(fromMember.getName())
                            .toAccount(accountFrom.getId())
                            .password("dummy")
                            .dummyId(dummy.getId())
                            .build();
                    transactionService.deposit(adminId, dto);
                    break;
                // 출금
                case 1 :
                    dto = TransactionRequestDto.builder()
                            .amount(amount)
                            .depositorName(fromMember.getName())
                            .fromAccount(accountFrom.getId())
                            .password("dummy")
                            .dummyId(dummy.getId())
                            .build();
                    transactionService.withdraw(adminId, dto);
                    break;
                // 송금
                case 2 :
                    int toMemberNum = -1;
                    while (toMemberNum == -1 || fromMemberNum == toMemberNum) {
                        toMemberNum = random.nextInt(userCount);
                    }
                    Member toMember = memberRepository.findById(req.getUsers().get(toMemberNum)).orElseThrow(() -> new RestApiException(MemberErrorCode.NO_MEMBER));
                    List<Account> accountListTo = accountRepository.findByHolderId(toMember.getId());
                    int toAccountNum = random.nextInt(accountListTo.size());
                    Account accountTo = accountListTo.get(toAccountNum);
                    dto = TransactionRequestDto.builder()
                            .amount(amount)
                            .depositorName(fromMember.getName())
                            .toAccount(accountTo.getId())
                            .fromAccount(accountFrom.getId())
                            .password("dummy")
                            .dummyId(dummy.getId())
                            .build();
                    transactionService.send(adminId, dto);
                    break;
            }
        }

        return DummyResponseDto.toDto(dummy);
    }

    @Transactional
    public DummyResponseDto deleteDummy(UUID apiKey, UUID dummyId) {
        UUID adminId = apiRepository.getByApiKey(apiKey).getAdminId();
        AuthoriaztionDummy(dummyId, adminId);
        Dummy dummy = dummyRepository.findById(dummyId).orElseThrow(() -> new RestApiException(DummyErrorCode.NO_DUMMY));
        if (dummy.getMemberCount() != null) {
            List<Member> memberList = memberRepository.findByDummyId(dummyId);
            for (Member member: memberList) {
                memberService.delete(member.getId());
            }
        } else if (dummy.getAccountCount() != null) {
            List<Account> accountList = accountRepository.findByDummyId(dummyId);
            for (Account account: accountList) {
                AccountDeleteRequestDto dto = AccountDeleteRequestDto.builder()
                        .accountId(account.getId())
                        .password(account.getPassword())
                        .build();
                accountService.delete(account.getDummy().getAdminId(), dto);
            }
        } else if (dummy.getTransactionCount() != null) {
            List<Transaction> transactionsList = transactionRepository.findByDummyId(dummyId);
            for (Transaction transaction: transactionsList) {
                TransactionDeleteRequestDto dto = TransactionDeleteRequestDto.builder()
                        .transactionId(transaction.getId())
                        .build();
                transactionService.delete(transaction.getDummy().getAdminId(), dto);
            }
        }
        dummy.deleteSoftly();
        return DummyResponseDto.toDto(dummy);
    }

    @Transactional
    public List<DummyResponseDto> deleteAllDummy(UUID apiKey) {
        UUID adminId = apiRepository.getByApiKey(apiKey).getAdminId();
        List<Dummy> dummyList = dummyRepository.findAllByAdminId(adminId);
        List<DummyResponseDto> dummyResponseDtoList = new ArrayList<>();
        for (Dummy dummy: dummyList) {
            dummyResponseDtoList.add(deleteDummy(apiKey, dummy.getId()));
        }
        return dummyResponseDtoList;
    }

    @Transactional
    public DummyResponseDto update(UUID apiKey, UUID dummyId, DummyUpdateRequestDto req) {
        UUID adminId = apiRepository.getByApiKey(apiKey).getAdminId();
        AuthoriaztionDummy(dummyId, adminId);
        Dummy dummy = dummyRepository.findById(dummyId).orElseThrow(() -> new RestApiException(DummyErrorCode.NO_DUMMY));
        if (req.getName() != null) dummy.updateName(req.getName());
        return DummyResponseDto.toDto(dummy);
    }

    public DummyResponseDto search(UUID apiKey, UUID dummyId) {
        UUID adminId = apiRepository.getByApiKey(apiKey).getAdminId();
        AuthoriaztionDummy(dummyId, adminId);
        Dummy dummy = dummyRepository.findById(dummyId).orElseThrow(() -> new RestApiException(DummyErrorCode.NO_DUMMY));
        return DummyResponseDto.toDto(dummy);
    }

    public List<DummyResponseDto> searchAll(UUID apiKey) {
        UUID adminId = apiRepository.getByApiKey(apiKey).getAdminId();
        List<Dummy> dummyList = dummyRepository.findAllByAdminId(adminId);
        List<DummyResponseDto> dummyResponseDtoList = new ArrayList<>();
        for (Dummy dummy: dummyList) {
            dummyResponseDtoList.add(DummyResponseDto.toDto(dummy));
        }
        return dummyResponseDtoList;
    }

    public String makeName(int cnt) {
        return neyhuingName.makeNeyhuing(cnt);
    }

    // 관리자 아이디가 만든 더미인지
    public void AuthoriaztionDummy(UUID dummyId, UUID adminId) {
        if (!dummyId.equals(adminId)) {
            throw new RestApiException(CommonErrorCode.NO_AUTHORIZATION);
        }
    }
}
