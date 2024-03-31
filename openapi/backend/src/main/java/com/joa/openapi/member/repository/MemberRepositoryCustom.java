package com.joa.openapi.member.repository;

import com.joa.openapi.member.dto.MemberSearchRequestDto;
import com.joa.openapi.member.dto.MemberSearchResponseDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

public interface MemberRepositoryCustom {

    Page<MemberSearchResponseDto> searchMemberCustom(MemberSearchRequestDto req, Pageable pageable);
}
