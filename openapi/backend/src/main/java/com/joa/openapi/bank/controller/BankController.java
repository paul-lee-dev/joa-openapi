package com.joa.openapi.bank.controller;

import com.joa.openapi.bank.dto.*;
import com.joa.openapi.bank.service.BankService;
import com.joa.openapi.common.entity.Api;
import com.joa.openapi.common.errorcode.CommonErrorCode;
import com.joa.openapi.common.exception.RestApiException;
import com.joa.openapi.common.repository.ApiRepository;
import com.joa.openapi.common.response.ApiResponse;
import com.joa.openapi.common.util.AuthCheckUtil;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import org.json.simple.parser.ParseException;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/v1/bank")
@RequiredArgsConstructor
public class BankController {

    private AuthCheckUtil authCheckUtil;
    private final BankService bankService;
    private ApiRepository apiRepository;

    @PostMapping
    public ResponseEntity<?> create(HttpServletRequest request, @RequestBody BankRequestDto req, @RequestHeader("apiKey") UUID apiKey) throws ParseException {

        UUID adminId = UUID.fromString(authCheckUtil.authCheck(request)); //를 추가하면 됨!
        //if (adminId==null) 일 때의 처리도 필요할 듯

        //이거 service로 옮기고 Authoriaztion함수 빼서 구현
        Api api = apiRepository.findByAdminId(adminId);
        if(!api.getApiKey().equals(apiKey)) {
            throw new RestApiException(CommonErrorCode.NO_AUTHORIZATION);
        }
        //adminId를 가지고 뭔가 해야겠지~~

        // apikey 검사하는 로직 필요
        BankResponseDto bankResponseDto = bankService.create(req, adminId);
        return ResponseEntity.ok(ApiResponse.success("은행생성에 성공했습니다.",  bankResponseDto));
    }

    @PatchMapping("/{bankId}")
    public ResponseEntity<?> update(@RequestBody BankRequestDto req, @PathVariable(value = "bankId") UUID bankId) {
        BankResponseDto bankResponseDto = bankService.update(req, bankId);
        return ResponseEntity.ok(ApiResponse.success("은행수정에 성공했습니다.", bankResponseDto));
    }

    @DeleteMapping("/{bankId}")
    public ResponseEntity<?> delete(@PathVariable(value = "bankId") UUID bankId) {
        BankResponseDto bankResponseDto = bankService.serachBank(bankId);
        bankService.delete(bankId);
        return ResponseEntity.ok(ApiResponse.success("은행삭제에 성공했습니다.", bankResponseDto));
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchAll(@RequestParam(value = "name", required = false) String name, @RequestHeader("adminId") UUID adminId) {
        List<BankResponseDto> bankResponseDtoList;
        if (name == null) bankResponseDtoList = bankService.searchAll("", adminId);
        else bankResponseDtoList = bankService.searchAll(name, adminId);
        return ResponseEntity.ok(ApiResponse.success("은행목록검색에 성공했습니다.", bankResponseDtoList));
    }

    @GetMapping("/{bankId}")
    public ResponseEntity<?> search(@PathVariable(value = "bankId") UUID bankId) {
        BankResponseDto bankResponseDto = bankService.serachBank(bankId);
        return ResponseEntity.ok(ApiResponse.success("특정은행검색에 성공했습니다.", bankResponseDto));
    }
}