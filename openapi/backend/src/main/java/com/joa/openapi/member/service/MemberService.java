package com.joa.openapi.member.service;

import com.joa.openapi.bank.entity.Bank;
import com.joa.openapi.bank.errorcode.BankErrorCode;
import com.joa.openapi.bank.repository.BankRepository;
import com.joa.openapi.common.exception.RestApiException;
import com.joa.openapi.dummy.entity.Dummy;
import com.joa.openapi.dummy.errorcode.DummyErrorCode;
import com.joa.openapi.dummy.repository.DummyRepository;
import com.joa.openapi.member.dto.*;
import com.joa.openapi.member.entity.Member;
import com.joa.openapi.member.errorcode.MemberErrorCode;
import com.joa.openapi.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;


@Slf4j
@Service
@Transactional
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final BankRepository bankRepository;
    private final DummyRepository dummyRepository;
    private final ModelMapper modelMapper;

    //회원가입
    @Transactional
    public MemberIdResponseDto addMember(MemberJoinRequestDto request) {

        if(memberRepository.findByEmail(request.getEmail())!=null) throw new RestApiException(MemberErrorCode.EMAIL_CONFLICT);
        if(memberRepository.findByPhone(request.getPhone())!=null) throw new RestApiException(MemberErrorCode.PHONE_CONFLICT);

        Bank bank = bankRepository.findById(request.getBankId()).orElseThrow(()->new RestApiException(BankErrorCode.NO_BANK));
        Member member = Member.builder()
                .name(request.getName())
                .password(request.getPassword())
                .email(request.getEmail())
                .phone(request.getPhone())
                .bank(bank)
                .build();

        memberRepository.save(member);
        return MemberIdResponseDto.toDto(member);
    }

    @Transactional
    public MemberIdResponseDto addMember(MemberJoinRequestDto request, UUID dummyId) {
        log.info("dummyId:{}",dummyId);
        Bank bank = bankRepository.findById(request.getBankId()).orElseThrow(()->new RestApiException(BankErrorCode.NO_BANK));
        Dummy dummy = dummyRepository.findById(dummyId).orElseThrow(()->new RestApiException(DummyErrorCode.NO_DUMMY));
        Member member = Member.builder()
                .name(request.getName())
                .password(request.getPassword())
                .email(request.getEmail())
                .phone(request.getPhone())
                .bank(bank)
                .dummy(dummy)
                .build();

        memberRepository.save(member);
        return MemberIdResponseDto.toDto(member);
    }

    //이메일 중복 검증
    @Transactional
    public boolean confirmEmail(String email) {
        Member member = memberRepository.findByEmail(email);
        if (member!=null) throw new RestApiException(MemberErrorCode.EMAIL_CONFLICT);
        return true;
    }

    //전화번호 중복 검증
    @Transactional
    public boolean confirmPhone(String phone) {
        Member member = memberRepository.findByPhone(phone);
        if (member!=null) throw new RestApiException(MemberErrorCode.PHONE_CONFLICT);
        return true;
    }

    //회원정보 조회
    @Transactional(readOnly = true)
    public MemberInfoResponseDto getInfo(UUID memberId) {
        Member member = memberRepository.findById(memberId).orElseThrow(()->new RestApiException(MemberErrorCode.NO_MEMBER));
        MemberInfoResponseDto response = modelMapper.map(member, MemberInfoResponseDto.class);
        return response;
    }

    //회원정보 수정
    @Transactional
    public MemberInfoResponseDto update(UUID memberId, MemberUpdateRequestDto request) {
        Member member = memberRepository.findById(memberId).orElseThrow(()->new RestApiException(MemberErrorCode.NO_MEMBER));
        if (request.getName()!=null) member.updateName(request.getName());
        if (request.getPassword() !=null) member.updatePassword(request.getPassword());
//        if (request.getPassword()!=null) member.updatePassword(encoder.encode(request.getPassword()));
        if (request.getEmail()!=null) member.updateEmail(request.getEmail());
        if (request.getPhone()!=null) member.updatePhone(request.getPhone());
        Member updatedMember = memberRepository.save(member);
        MemberInfoResponseDto response = modelMapper.map(updatedMember, MemberInfoResponseDto.class);
        return response;
    }

    //회원 탈퇴
    @Transactional
    public MemberIdResponseDto delete(UUID memberId) {
        Member member = memberRepository.findById(memberId).orElseThrow(()->new RestApiException(MemberErrorCode.NO_MEMBER));
        member.deleteSoftly();
        MemberIdResponseDto response = new MemberIdResponseDto(member.getId().toString(),
                member.getCreatedAt(), member.getUpdatedAt());
        return response;
    }
}
