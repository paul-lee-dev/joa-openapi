package com.joa.openapi.dummy.controller;

import com.joa.openapi.common.response.ApiResponse;
import com.joa.openapi.dummy.dto.DummyMemberRequestDto;
import com.joa.openapi.dummy.service.DummyService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/dummy")
@RequiredArgsConstructor
public class DummyController {

    private final DummyService dummyService;

    @PostMapping("/member")
    public ResponseEntity<ApiResponse> createMember(@RequestBody DummyMemberRequestDto req) {
        System.out.println(req.getCount());
        for (int i = 0; i < req.getCount(); i++) {
            System.out.println(req.getBankId() + "은행에" + i + "번째 유저 생성");
        }

        return ResponseEntity.ok(ApiResponse.success("유저 더미데이터 생성 성공"));
    }
}
