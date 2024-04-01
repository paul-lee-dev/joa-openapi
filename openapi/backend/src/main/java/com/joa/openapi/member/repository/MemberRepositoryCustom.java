package com.joa.openapi.member.repository;

import com.joa.openapi.member.dto.MemberSearchRequestDto;
import com.joa.openapi.member.dto.MemberSearchResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.UUID;

public interface MemberRepositoryCustom {

    Page<MemberSearchResponseDto> searchMemberCustom(UUID apiKey, MemberSearchRequestDto req, Pageable pageable);
}
