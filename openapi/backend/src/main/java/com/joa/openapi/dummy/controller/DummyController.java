package com.joa.openapi.dummy.controller;

import com.joa.openapi.common.response.ApiResponse;
import com.joa.openapi.dummy.dto.DummyMemberRequestDto;
import com.joa.openapi.dummy.service.DummyService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/dummy")
@RequiredArgsConstructor
@Slf4j
public class DummyController {

    private final DummyService dummyService;

    @PostMapping("/member")
    public ResponseEntity<ApiResponse> createMember(@RequestBody DummyMemberRequestDto req) {
        log.info("더미유저 생성 갯수 : {}", req.getCount());
        for (int i = 0; i < req.getCount(); i++) {
            log.info("{} 은행에 {}번째 유저 생성", req.getBankId(), i+1);
        }

        return ResponseEntity.ok(ApiResponse.success("유저 더미데이터 생성 성공"));
    }
}
