package com.joa.bank.member.service;

import com.joa.bank.common.exception.RestApiException;
import com.joa.bank.common.response.ApiResponse;
import com.joa.bank.member.dto.MemberLoginRequestDto;
import com.joa.bank.member.entity.Member;
import com.joa.bank.member.errorcode.MemberErrorCode;
import com.joa.bank.member.repository.MemberRepository;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Service
@Transactional(readOnly = true)
@Slf4j
@RequiredArgsConstructor
public class MemberService {

    private final MemberRepository memberRepository;

    public void login(MemberLoginRequestDto request) {

        if (request.getEmail()==null) throw new RestApiException(MemberErrorCode.NO_EMAIL);
        if (request.getPassword()==null) throw new RestApiException(MemberErrorCode.NO_PASSWORD);
        String email = request.getEmail();
        String password = request.getPassword();
        Member member = memberRepository.findById(email).orElseThrow(() -> new RestApiException(MemberErrorCode.NO_MEMBER));
        if (member.getIsDeleted()==true) throw new RestApiException(MemberErrorCode.NO_MEMBER);
        if (!password.equals(member.getPassword())) throw new RestApiException(MemberErrorCode.WRONG_PASSWORD);
    }

    public void logout(HttpServletRequest request, HttpServletResponse response) {


    }
}
