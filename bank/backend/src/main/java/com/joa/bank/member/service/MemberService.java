package com.joa.bank.member.service;

import com.joa.bank.common.exception.RestApiException;
import com.joa.bank.member.dto.MemberLoginRequestDto;
import com.joa.bank.member.dto.MemberLoginResponseDto;
import com.joa.bank.member.entity.Member;
import com.joa.bank.member.errorcode.MemberErrorCode;
import com.joa.bank.member.repository.MemberRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.modelmapper.ModelMapper;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.UUID;

@Service
@Transactional
@Slf4j
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;
    private final ModelMapper modelMapper;

    public MemberLoginResponseDto login(MemberLoginRequestDto request) {
        if (request.getEmail()==null) throw new RestApiException(MemberErrorCode.NO_EMAIL);
        if (request.getPassword()==null) throw new RestApiException(MemberErrorCode.NO_PASSWORD);
        String email = request.getEmail();
        String password = request.getPassword();
        UUID bankId = request.getBankId();
        Member member = memberRepository.findByEmail(email).orElseThrow(() -> new RestApiException(MemberErrorCode.NO_MEMBER));
        if (member.getIsDeleted()==true) throw new RestApiException(MemberErrorCode.NO_MEMBER);
        if (!password.equals(member.getPassword())) throw new RestApiException(MemberErrorCode.WRONG_PASSWORD);
        if (!bankId.equals(member.getBankId())) throw new RestApiException(MemberErrorCode.NO_MEMBER);
        MemberLoginResponseDto response = modelMapper.map(member, MemberLoginResponseDto.class);
        log.info("memberInfo:{}",response.getName());
        return response;
    }
}
