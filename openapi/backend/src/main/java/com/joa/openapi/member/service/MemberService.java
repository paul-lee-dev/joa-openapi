package com.joa.openapi.member.service;


import com.joa.openapi.common.exception.RestApiException;
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
    private final ModelMapper modelMapper;

    //회원가입
    @Transactional
    public MemberIdResponseDto addMember(MemberJoinRequestDto request) {
        Member member = Member.builder()
                .name(request.getName())
                .password(request.getPassword())
                .email(request.getEmail())
                .phone(request.getPhone())
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
    public MemberInfoResponseDto getInfo(String memberId) {
        Member member = memberRepository.findByMemberId(UUID.fromString(memberId));
        MemberInfoResponseDto response = modelMapper.map(member, MemberInfoResponseDto.class);
        return response;
    }

    //회원정보 수정
    @Transactional
    public MemberInfoResponseDto update(String memberId, MemberUpdateRequestDto request) {
        Member member = memberRepository.findByMemberId(UUID.fromString(memberId));
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
    public MemberIdResponseDto delete(String memberId) {
        Member member = memberRepository.findByMemberId(UUID.fromString(memberId));
        member.deleteSoftly();
        MemberIdResponseDto response = new MemberIdResponseDto(member.getId().toString(),
                member.getCreatedAt(), member.getUpdatedAt());
        return response;
    }
}
