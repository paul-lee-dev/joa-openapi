package com.joa.openapi.transaction.controller;

import com.joa.openapi.common.exception.RestApiException;
import com.joa.openapi.common.response.ApiResponse;
import com.joa.openapi.transaction.dto.req.Transaction1wonConfirmRequestDto;
import com.joa.openapi.transaction.dto.req.Transaction1wonRequestDto;
import com.joa.openapi.transaction.dto.req.TransactionDeleteRequestDto;
import com.joa.openapi.transaction.dto.req.TransactionRequestDto;
import com.joa.openapi.transaction.dto.req.TransactionSearchRequestDto;
import com.joa.openapi.transaction.dto.req.TransactionUpdateRequestDto;
import com.joa.openapi.transaction.dto.res.Transaction1wonResponseDto;
import com.joa.openapi.transaction.dto.res.TransactionResponseDto;
import com.joa.openapi.transaction.dto.res.TransactionSearchResponseDto;
import com.joa.openapi.transaction.dto.res.TransactionUpdateResponseDto;
import com.joa.openapi.transaction.enums.TransactionOrderBy;
import com.joa.openapi.transaction.enums.TransactionSearchType;
import com.joa.openapi.transaction.errorcode.TransactionErrorCode;
import com.joa.openapi.transaction.service.TransactionService;
import java.time.LocalDate;
import java.util.Map;
import java.util.Optional;
import java.util.UUID;
import lombok.RequiredArgsConstructor;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.web.PageableDefault;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PatchMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestHeader;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/v1/transaction")
@RequiredArgsConstructor
public class TransactionController {

    private final TransactionService transactionService;

    @PostMapping("/deposit")
    public ResponseEntity<?> create(@RequestHeader("memberId") UUID memberId,
        @RequestBody TransactionRequestDto req) {
        TransactionResponseDto response = transactionService.deposit(memberId, req);
        return ResponseEntity.ok(ApiResponse.success("계좌 입금에 성공했습니다.", response));
    }

    @PostMapping("/withdraw")
    public ResponseEntity<?> withdraw(@RequestHeader("memberId") UUID memberId,
        @RequestBody TransactionRequestDto req) {
        TransactionResponseDto response = transactionService.withdraw(memberId, req);
        return ResponseEntity.ok(ApiResponse.success("계좌 출금에 성공했습니다.", response));
    }

    @PostMapping("/send")
    public ResponseEntity<?> send(@RequestHeader("memberId") UUID memberId,
        @RequestBody TransactionRequestDto req) {
        TransactionResponseDto response = transactionService.send(memberId, req);
        return ResponseEntity.ok(ApiResponse.success("계좌 이체에 성공했습니다.", response));
    }

    @PostMapping("/1wonSend")
    public ResponseEntity<?> oneSend(@RequestBody Transaction1wonRequestDto req) {
        Transaction1wonResponseDto res = transactionService.oneSend(req);
        return ResponseEntity.ok(ApiResponse.success("1원 인증 4글자 전송에 성공했습니다.", res));
    }

    @PostMapping("/1wonConfirm")
    public ResponseEntity<?> oneSendConfirm(@RequestBody Transaction1wonConfirmRequestDto req) {
        transactionService.oneSendConfirm(req);
        return ResponseEntity.ok(ApiResponse.success("1원 인증 4글자 확인에 성공했습니다.", req));
    }

    @PatchMapping
    public ResponseEntity<?> update(@RequestHeader("memberId") UUID memberId,
        @RequestBody TransactionUpdateRequestDto req) {
        TransactionUpdateResponseDto response = transactionService.update(memberId, req);
        return ResponseEntity.ok(ApiResponse.success("거래내역 수정에 성공했습니다.", response));
    }

    @DeleteMapping
    public ResponseEntity<?> delete(@RequestHeader("memberId") UUID memberId,
        @RequestBody TransactionDeleteRequestDto req) {
        transactionService.delete(memberId, req);
        return ResponseEntity.ok(ApiResponse.success("거래내역 삭제에 성공했습니다."));
    }

    @GetMapping("/search")
    public ResponseEntity<?> search(@RequestParam Map<String, String> allParams,
        @PageableDefault Pageable pageable) {

        // TODO : API Key 확인

        // TODO : 은행별

        // TODO : 더미여부

        // TODO : 고객이름별

        // 계좌번호
        String accountId = Optional.ofNullable(allParams.get("accountId"))
            .orElseThrow(() -> new RestApiException(TransactionErrorCode.NO_ACCOUNTID));

        // TODO : 더미이름별

        // 검색 타입 (입금, 출금, 전체)
        TransactionSearchType searchType = Optional.ofNullable(allParams.get("searchType"))
            .map(String::toUpperCase)
            .map(TransactionSearchType::valueOf)
            .orElse(TransactionSearchType.ALL);

        // 최신순 | 과거순
        TransactionOrderBy orderBy = Optional.ofNullable(allParams.get("orderBy"))
            .map(String::toUpperCase)
            .map(TransactionOrderBy::valueOf)
            .orElse(TransactionOrderBy.NEWEST); // orderBy 기본값 지정

        // 조회 날짜 범위
        LocalDate fromDate = Optional.ofNullable(allParams.get("fromDate"))
            .map(LocalDate::parse)
            .orElse(LocalDate.of(1900, 1, 1));

        LocalDate toDate = Optional.ofNullable(allParams.get("toDate"))
            .map(LocalDate::parse)
            .orElse(LocalDate.of(3000, 12, 31));

        // TODO : 금액순




        // DTO 구성
        TransactionSearchRequestDto req = TransactionSearchRequestDto.builder()
            .accountId(accountId)
            .fromDate(fromDate)
            .toDate(toDate)
            .searchType(searchType)
            .orderBy(orderBy)
            .build();

        if (!transactionService.checkAccountId(req.getAccountId())) {
            throw new RestApiException(TransactionErrorCode.NO_ACCOUNTID);
        }
        Page<TransactionSearchResponseDto> transactionsPage = transactionService.search(req,
            pageable);
        return ResponseEntity.ok(ApiResponse.success("거래내역 조회에 성공했습니다.", transactionsPage));
    }
}