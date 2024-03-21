package com.joa.openapi.dummy.service;

import com.joa.openapi.account.dto.AccountCreateRequestDto;
import com.joa.openapi.account.service.AccountService;
import com.joa.openapi.dummy.dto.DummyAccountRequestDto;
import com.joa.openapi.dummy.dto.DummyMemberRequestDto;
import com.joa.openapi.dummy.dto.DummyResponseDto;
import com.joa.openapi.dummy.entity.Dummy;
import com.joa.openapi.dummy.repository.DummyRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Random;
import java.util.UUID;

@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class DummyService {

    private final DummyRepository dummyRepository;
    private final AccountService accountService;
    private final MakeNeyhuingName makeNeyhuingName;

    @Transactional
    public DummyResponseDto createMember(DummyMemberRequestDto req, UUID bankId, UUID adminId) {
        String dummyName = "멤버" + req.getCount() + "명 만들기";
        Dummy dummy = Dummy.builder()
                .dummyName(dummyName)
                .userCount(req.getCount())
                .adminId(adminId)
                .build();

        dummyRepository.save(dummy);

        return DummyResponseDto.toDto(dummy);
    }

    @Transactional
    public DummyResponseDto createAccount(DummyAccountRequestDto req, UUID bankId, UUID adminId, UUID productId) {
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
        String dummyName = "계좌" + req.getCount() + "개 만들기";
        Dummy dummy = Dummy.builder()
                .dummyName(dummyName)
                .accountCount(req.getCount())
                .adminId(adminId)
                .build();

        dummyRepository.save(dummy);

        return DummyResponseDto.toDto(dummy);
    }

    @Transactional
    public DummyResponseDto createTransaction(DummyMemberRequestDto req, UUID bankId, UUID adminId) {
        String dummyName = "거래내역" + req.getCount() + "개 만들기";
        Dummy dummy = Dummy.builder()
                .dummyName(dummyName)
                .transactionCount(req.getCount())
                .adminId(adminId)
                .build();

        dummyRepository.save(dummy);

        return DummyResponseDto.toDto(dummy);
    }

    public String makeName(int cnt) {
        return makeNeyhuingName.makeNeyhuing(cnt);
    }
}
