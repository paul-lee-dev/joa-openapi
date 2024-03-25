package com.joa.openapi.dummy.service;

import com.joa.openapi.account.dto.AccountCreateRequestDto;
import com.joa.openapi.account.dto.AccountDeleteRequestDto;
import com.joa.openapi.account.entity.Account;
import com.joa.openapi.account.repository.AccountRepository;
import com.joa.openapi.account.service.AccountService;
import com.joa.openapi.common.exception.RestApiException;
import com.joa.openapi.dummy.dto.DummyUpdateRequestDto;
import com.joa.openapi.dummy.errorcode.DummyErrorCode;
import com.joa.openapi.dummy.dto.DummyAccountRequestDto;
import com.joa.openapi.dummy.dto.DummyMemberRequestDto;
import com.joa.openapi.dummy.dto.DummyResponseDto;
import com.joa.openapi.dummy.entity.Dummy;
import com.joa.openapi.dummy.repository.DummyRepository;
import com.joa.openapi.member.entity.Member;
import com.joa.openapi.member.repository.MemberRepository;
import com.joa.openapi.member.service.MemberService;
import com.joa.openapi.member.dto.MemberJoinRequestDto;
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
    private final NeyhuingName neyhuingName;
    public String name;

    @Transactional
    public DummyResponseDto createMember(DummyMemberRequestDto req, UUID adminId) {
        name = "멤버" + req.getCount() + "명 만들기";
        Dummy dummy = Dummy.builder()
                .name(name)
                .memberCount(req.getCount())
                .adminId(adminId)
                .build();

        dummyRepository.save(dummy);

        for (int i = 0; i < req.getCount(); i++) {
            MemberJoinRequestDto dto = MemberJoinRequestDto.builder()
                    .name(makeName(3))
                    .bankId(req.getBankId())
                    .build();
            memberService.addMember(dto, dummy.getId());
        }

        return DummyResponseDto.toDto(dummy);
    }

    @Transactional
    public DummyResponseDto createAccount(DummyAccountRequestDto req, UUID adminId) {
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
            int randomUser = random.nextInt(userCount);
            AccountCreateRequestDto dto = AccountCreateRequestDto.builder()
                    .nickname(makeName(4))
                    .password("dummy")
                    .withdrawAccount(null)
                    .dummyId(dummy.getId())
                    .build();
            accountService.create(req.getUsers().get(randomUser), dto);
        }

        return DummyResponseDto.toDto(dummy);
    }

    @Transactional
    public DummyResponseDto createTransaction(DummyMemberRequestDto req, UUID adminId) {
        name = "거래내역" + req.getCount() + "개 만들기";
        Dummy dummy = Dummy.builder()
                .name(name)
                .transactionCount(req.getCount())
                .adminId(adminId)
                .build();
        dummyRepository.save(dummy);



        return DummyResponseDto.toDto(dummy);
    }

    @Transactional
    public DummyResponseDto deleteDummy(UUID dummyId) {
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

        }
        dummy.deleteSoftly();
        return DummyResponseDto.toDto(dummy);
    }

    @Transactional
    public List<DummyResponseDto> deleteAllDummy(UUID adminId) {
        List<Dummy> dummyList = dummyRepository.findAllByAdminId(adminId);
        List<DummyResponseDto> dummyResponseDtoList = new ArrayList<>();
        for (Dummy dummy: dummyList) {
            dummyResponseDtoList.add(deleteDummy(dummy.getId()));
        }
        return dummyResponseDtoList;
    }

    @Transactional
    public DummyResponseDto update(UUID dummyId, DummyUpdateRequestDto req) {
        Dummy dummy = dummyRepository.findById(dummyId).orElseThrow(() -> new RestApiException(DummyErrorCode.NO_DUMMY));
        if (req.getName() != null) dummy.updateName(req.getName());
        return DummyResponseDto.toDto(dummy);
    }

    public DummyResponseDto search(UUID dummyId) {
        Dummy dummy = dummyRepository.findById(dummyId).orElseThrow(() -> new RestApiException(DummyErrorCode.NO_DUMMY));
        return DummyResponseDto.toDto(dummy);
    }

    public List<DummyResponseDto> searchAll(UUID adminId) {
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
}
