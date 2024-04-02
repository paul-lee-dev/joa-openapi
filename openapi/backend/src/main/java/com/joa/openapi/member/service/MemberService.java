package com.joa.openapi.member.service;

import com.joa.openapi.account.dto.AccountSearchRequestDto;
import com.joa.openapi.account.dto.AccountSearchResponseDto;
import com.joa.openapi.bank.entity.Bank;
import com.joa.openapi.bank.errorcode.BankErrorCode;
import com.joa.openapi.bank.repository.BankRepository;
import com.joa.openapi.common.entity.Api;
import com.joa.openapi.common.errorcode.CommonErrorCode;
import com.joa.openapi.common.exception.RestApiException;
import com.joa.openapi.common.repository.ApiRepository;
import com.joa.openapi.dummy.entity.Dummy;
import com.joa.openapi.dummy.errorcode.DummyErrorCode;
import com.joa.openapi.dummy.repository.DummyRepository;
import com.joa.openapi.member.dto.*;
import com.joa.openapi.member.entity.Member;
import com.joa.openapi.member.errorcode.MemberErrorCode;
import com.joa.openapi.member.repository.MemberRepository;
import com.joa.openapi.product.entity.Product;
import java.util.List;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
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
    private final ApiRepository apiRepository;

    //회원가입
    @Transactional
    public MemberIdResponseDto addMember(UUID apiKey, MemberJoinRequestDto request) {

        // 이메일이 이미 사용 중인지 확인
        if (memberRepository.findByEmail(request.getEmail()) != null) {
            throw new RestApiException(MemberErrorCode.EMAIL_CONFLICT);
        }

        // 전화번호가 이미 사용 중인지 확인
        if (memberRepository.findByPhone(request.getPhone()) != null) {
            throw new RestApiException(MemberErrorCode.PHONE_CONFLICT);
        }

        Bank bank = bankRepository.findById(request.getBankId()).orElseThrow(()->new RestApiException(BankErrorCode.NO_BANK));
        bankAuthorityValidation(apiKey, bank.getId());
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
    public void confirmEmail(UUID apiKey, String email, UUID bankId) {
        Api api = apiRepository.findByApiKey(apiKey).orElseThrow(()->new RestApiException(CommonErrorCode.NO_AUTHORIZATION));
        // 은행에 이미 존재하는 이메일인지 확인
        Member member = memberRepository.findByBankIdAndEmail(bankId, email);
        if(member!= null && member.getBank().getId().equals(bankId)) {
            throw new RestApiException(MemberErrorCode.EMAIL_CONFLICT);
        }
    }

    //전화번호 중복 검증
    @Transactional
    public void confirmPhone(UUID apiKey, String phone) {
        Api api = apiRepository.findByApiKey(apiKey).orElseThrow(()->new RestApiException(CommonErrorCode.NO_AUTHORIZATION));
        System.out.println(api.getAdminId());
        Member member = memberRepository.findByPhone(phone);
        if (member!=null) throw new RestApiException(MemberErrorCode.PHONE_CONFLICT);
    }

    //회원정보 조회
    @Transactional(readOnly = true)
    public MemberInfoResponseDto getInfo(UUID apiKey, UUID memberId) {
        Member member = memberRepository.findById(memberId).orElseThrow(()->new RestApiException(MemberErrorCode.NO_MEMBER));
        bankAuthorityValidation(apiKey, member.getBank().getId());
        MemberInfoResponseDto response = modelMapper.map(member, MemberInfoResponseDto.class);
        return response;
    }

    //회원정보 수정
    @Transactional
    public MemberInfoResponseDto update(UUID apiKey, UUID memberId, MemberUpdateRequestDto request) {
        Member member = memberRepository.findById(memberId).orElseThrow(()->new RestApiException(MemberErrorCode.NO_MEMBER));
        bankAuthorityValidation(apiKey, member.getBank().getId());
        if (!request.getName().equals("")) member.updateName(request.getName());
        if (!request.getPassword().equals("")) member.updatePassword(request.getPassword());
//        if (request.getPassword()!=null) member.updatePassword(encoder.encode(request.getPassword()));
        if (!request.getEmail().equals("")) {
            Member foundByEmail = memberRepository.findByEmail(request.getEmail());
            if (foundByEmail!=null) throw new RestApiException(MemberErrorCode.EMAIL_CONFLICT);
            member.updateEmail(request.getEmail());
        }
        if (!request.getPhone().equals("")) {
            Member foundByPhone = memberRepository.findByPhone(request.getPhone());
            if (foundByPhone!=null) throw new RestApiException(MemberErrorCode.PHONE_CONFLICT);
            member.updatePhone(request.getPhone());
        }
        Member updatedMember = memberRepository.save(member);
        MemberInfoResponseDto response = modelMapper.map(updatedMember, MemberInfoResponseDto.class);
        return response;
    }

    //회원 탈퇴
    @Transactional
    public MemberIdResponseDto delete(UUID apiKey, UUID memberId) {
        Member member = memberRepository.findById(memberId).orElseThrow(()->new RestApiException(MemberErrorCode.NO_MEMBER));
        bankAuthorityValidation(apiKey, member.getBank().getId());
        member.deleteSoftly();
        MemberIdResponseDto response = new MemberIdResponseDto(member.getId().toString(),
                member.getCreatedAt(), member.getUpdatedAt());
        return response;
    }

    public Page<MemberSearchResponseDto> search(UUID apiKey, MemberSearchRequestDto req, Pageable pageable) {
        Api api = apiRepository.findByApiKey(apiKey)
                .orElseThrow(() -> new RestApiException(CommonErrorCode.NO_AUTHORIZATION));
        return memberRepository.searchMemberCustom(api.getAdminId(), req, pageable);
    }

    public void bankAuthorityValidation(UUID apiKey, UUID bankId) {
        UUID adminId = apiRepository.getByApiKey(apiKey).getAdminId();
        Bank bank = bankRepository.findById(bankId).orElseThrow(() -> new RestApiException(BankErrorCode.NO_BANK));
        if (!bank.getAdminId().equals(adminId))
            throw new RestApiException(CommonErrorCode.NO_AUTHORIZATION);
    }

}
