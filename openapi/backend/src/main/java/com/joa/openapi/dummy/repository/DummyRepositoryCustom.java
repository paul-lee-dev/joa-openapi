package com.joa.openapi.dummy.repository;

import com.joa.openapi.dummy.dto.DummyResponseDto;
import com.joa.openapi.dummy.dto.DummySearchRequestDto;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.UUID;

public interface DummyRepositoryCustom {
    Page<DummyResponseDto> searchDummyCustom(DummySearchRequestDto req, UUID adminId, Pageable pageable);
}
