package com.joa.openapi.dummy.service;

import com.joa.openapi.account.dto.AccountCreateRequestDto;
import com.joa.openapi.account.service.AccountService;
import com.joa.openapi.common.exception.RestApiException;
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
    private final NeyhuingName neyhuingName;

    @Transactional
    public DummyResponseDto createMember(DummyMemberRequestDto req, UUID adminId) {
        String dummyName = "멤버" + req.getCount() + "명 만들기";
        Dummy dummy = Dummy.builder()
                .dummyName(dummyName)
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
        String dummyName = "계좌" + req.getCount() + "개 만들기";
        Dummy dummy = Dummy.builder()
                .dummyName(dummyName)
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
                    .password(null)
                    .withdrawAccount(null)
                    .build();
            accountService.create(req.getUsers().get(randomUser), dto);
        }

        return DummyResponseDto.toDto(dummy);
    }

    @Transactional
    public DummyResponseDto createTransaction(DummyMemberRequestDto req, UUID adminId) {
        String dummyName = "거래내역" + req.getCount() + "개 만들기";
        Dummy dummy = Dummy.builder()
                .dummyName(dummyName)
                .transactionCount(req.getCount())
                .adminId(adminId)
                .build();
        dummyRepository.save(dummy);



        return DummyResponseDto.toDto(dummy);
    }

    @Transactional
    public void deleteDummy(UUID dummyId) {
        Dummy dummy = dummyRepository.findById(dummyId).orElseThrow(() -> new RestApiException(DummyErrorCode.NO_DUMMY));
        if (dummy.getMemberCount() != null) {
            List<Member> memberList = memberRepository.findByDummyHolder(dummy);
            for (Member member: memberList) {
                log.info("{}",member.getName());
            }
            memberService.delete(dummyId);
        } else if (dummy.getAccountCount() != null) {

        } else if (dummy.getTransactionCount() != null) {

        }
        dummy.deleteSoftly();
    }

    @Transactional
    public void deleteAllDummy() {

    }

    public DummyResponseDto search(UUID dummyId) {
        Dummy dummy = dummyRepository.findById(dummyId).orElseThrow(() -> new RestApiException(DummyErrorCode.NO_DUMMY));
        return DummyResponseDto.toDto(dummy);
    }

    public String makeName(int cnt) {
        return neyhuingName.makeNeyhuing(cnt);
    }
}
