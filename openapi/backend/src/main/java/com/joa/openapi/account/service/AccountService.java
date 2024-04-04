package com.joa.openapi.account.service;

import com.joa.openapi.account.dto.*;
import com.joa.openapi.account.entity.Account;
import com.joa.openapi.account.errorcode.AccountErrorCode;
import com.joa.openapi.account.repository.AccountRepository;
import com.joa.openapi.bank.entity.Bank;
import com.joa.openapi.bank.errorcode.BankErrorCode;
import com.joa.openapi.bank.repository.BankRepository;
import com.joa.openapi.common.entity.Api;
import com.joa.openapi.common.errorcode.CommonErrorCode;
import com.joa.openapi.common.exception.RestApiException;
import com.joa.openapi.common.repository.ApiRepository;
import com.joa.openapi.dummy.entity.Dummy;
import com.joa.openapi.dummy.repository.DummyRepository;
import com.joa.openapi.member.entity.Member;
import com.joa.openapi.member.errorcode.MemberErrorCode;
import com.joa.openapi.member.repository.MemberRepository;
import com.joa.openapi.product.entity.Product;
import com.joa.openapi.product.errorcode.ProductErrorCode;
import com.joa.openapi.product.repository.ProductRepository;
import com.joa.openapi.product.service.DepositAccountService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageImpl;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.LocalDate;
import java.time.LocalTime;
import java.time.format.DateTimeFormatter;
import java.util.List;
import java.util.Optional;
import java.util.UUID;
import java.util.stream.Collectors;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional(readOnly = true)
public class AccountService {

    private final AccountRepository accountRepository;
    private final MemberRepository memberRepository;
    private final DummyRepository dummyRepository;
    private final ProductRepository productRepository;
    private final ApiRepository apiRepository;
    private final BankRepository bankRepository;

    @Transactional
    public AccountCreateResponseDto create(UUID apiKey, UUID memberId, AccountCreateRequestDto req) {

        bankAuthorityValidation(apiKey, req.getBankId());

        String accountId = createAccountId(memberId, req);

        System.out.println("멤버아이디 : " + memberId.toString());

        Member member = memberRepository.findById(memberId).orElseThrow(() -> new RestApiException(MemberErrorCode.NO_MEMBER));
        Product product = productRepository.findById(req.getProductId()).orElseThrow(() -> new RestApiException(ProductErrorCode.NO_PRODUCT));

        Optional<Dummy> optionalDummy = Optional.ofNullable(req.getDummyId())
                .map(dummyId -> dummyRepository.findById(dummyId).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT))); /* TODO: 더미 에러 코드로 변경 */

        String startDateStr = LocalDate.now().format(DateTimeFormatter.ofPattern("MM/dd/yyyy"));
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("MM/dd/yyyy");
        LocalDate startDate = LocalDate.parse(startDateStr, formatter);
        String endDateStr = startDate.plusMonths(req.getTerm()).minusDays(1).format(formatter);

        if (req.getPassword() == null || req.getPassword().trim().isBlank())
            throw new RestApiException(AccountErrorCode.PASSWORD_REQUIRED);

        System.out.println("==============");
        System.out.println("계좌 금액 : " + req.getBalance());
        System.out.println("계좌 양 : " + req.getAmount());

        Account account = Account.builder()
                .id(accountId)
                .name((req.getNickname() == null) ? product.getName() : req.getNickname())
                .balance((req.getAmount() == 0) ? req.getBalance() : req.getAmount())
                .password(req.getPassword())
                .isDormant(false)
                .transferLimit(req.getTransferLimit())
                .paymentNum(0)
                .nonPaymentNum(0)
                .startDate(startDateStr)
                .endDate(endDateStr)
                .term(req.getTerm())
                .depositAccount((req.getWithdrawAccount() == null) ? accountId : req.getWithdrawAccount())
                .withdrawAccount((req.getWithdrawAccount() == null) ? accountId : req.getWithdrawAccount())
                .amount(req.getAmount())
                .bankId(req.getBankId())
                .holder(member)
                .dummy(optionalDummy.orElse(null))
                .product(product)
                .taxType(req.getTaxType())
                .build();

        accountRepository.save(account);

        return AccountCreateResponseDto.toDto(account);
    }

    @Transactional
    public AccountUpdateResponseDto update(UUID apiKey, AccountUpdateRequestDto req) {
        Account account = accountRepository.findById(req.getAccountId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        bankAuthorityValidation(apiKey, account.getBankId());

        if (req.getNickname() != null)
            account.updateNickname(req.getNickname());
        if (req.getDepositAccount() != null) {
            accountRepository.findById(req.getDepositAccount()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_WITHDRAW_ACCOUNT));
            account.updateDepositAccount(req.getDepositAccount());
        }
        if (req.getWithdrawAccount() != null) {
            accountRepository.findById(req.getWithdrawAccount()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_WITHDRAW_ACCOUNT));
            account.updateWithdrawAccount(req.getWithdrawAccount());
        }

        accountRepository.save(account);

        return AccountUpdateResponseDto.toDto(account);
    }

    @Transactional
    public Long updateLimit(UUID apiKey, AccountUpdateRequestDto req) {
        Account account = accountRepository.findById(req.getAccountId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        bankAuthorityValidation(apiKey, account.getBankId());

        if (req.getTransferLimit() != null && req.getTransferLimit() >= 20)
            account.updateLimit(req.getTransferLimit());

        accountRepository.save(account);

        return account.getTransferLimit();
    }

    @Transactional
    public void updatePassword(UUID apiKey, UUID memberId, AccountUpdateRequestDto req) {
        Account account = accountRepository.findById(req.getAccountId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        bankAuthorityValidation(apiKey, account.getBankId());

        if (req.getPassword() != null && !req.getPassword().trim().isBlank())
            account.updatePassword(req.getPassword());

        accountRepository.save(account);
    }

    public String delete(UUID apiKey, AccountDeleteRequestDto req) {
        Account account = accountRepository.findById(req.getAccountId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));


        bankAuthorityValidation(apiKey, account.getBankId());
        // checkPassword(account, req.getPassword());

        account.deleteSoftly();

        return account.getId();
    }


    public AccountGetBalanceResponseDto getBalance(UUID apiKey, UUID memberId, AccountGetBalanceRequestDto req) {
        Account account = accountRepository.findById(req.getAccountId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        bankAuthorityValidation(apiKey, account.getBankId());

        return AccountGetBalanceResponseDto.toDto(account);
    }

    public AccountGetDetailResponseDto getDetail(UUID apiKey, AccountGetDetailRequestDto req) {
        Account account = accountRepository.findById(req.getAccountId()).orElseThrow(() -> new RestApiException(AccountErrorCode.NO_ACCOUNT));

        bankAuthorityValidation(apiKey, account.getBankId());

        return AccountGetDetailResponseDto.toDto(account);
    }

    public Page<AccountGetAccountsResponseDto> getAccounts(UUID apiKey, UUID memberId, Pageable pageable) {
        // apiKey로부터 adminId 조회
        UUID adminId = apiRepository.getByApiKey(apiKey).getAdminId();
        List<UUID> bankIds =  bankRepository.findByAdminId(adminId, pageable).stream().map(Bank::getId).toList();

        return accountRepository.searchAccountByMemberCustom(bankIds, memberId, pageable);
        
    }



    public Page<AccountSearchResponseDto> search(UUID apiKey, AccountSearchRequestDto req, Pageable pageable) {
        UUID adminId = apiRepository.getByApiKey(apiKey).getAdminId();
        List<UUID> bankIds =  bankRepository.findByAdminId(adminId).stream().map(Bank::getId).toList();

        return accountRepository.searchAccountCustom(bankIds, req, pageable);
    }

    public void bankAuthorityValidation(UUID apiKey, UUID bankId) {
        UUID adminId = apiRepository.getByApiKey(apiKey).getAdminId();
        Bank bank = bankRepository.findById(bankId).orElseThrow(() -> new RestApiException(BankErrorCode.NO_BANK));
        if (!bank.getAdminId().equals(adminId))
            throw new RestApiException(CommonErrorCode.NO_AUTHORIZATION);
    }

    public void checkPassword(Account account, String password) {
        if (!account.getPassword().equals(password))
            throw new RestApiException(AccountErrorCode.PASSWORD_MISMATCH);
    }

    /**
     * 계좌번호 생성
     * 은행 @@ + 본인 @@ + 생성날짜 @@@@@@ + 랜덤@@@ + 체크섬 @
     */
    public String createAccountId(UUID memberId, AccountCreateRequestDto req) {
        String accountId = "";
        int bankA = convertNum(req.getBankId().toString().charAt(14)); //은행 아이디 뒤 2자리 아스키 코드
        int bankB = convertNum(req.getBankId().toString().charAt(15)); //은행 아이디 뒤 1자리 아스키 코드
        int memberA = convertNum(memberId.toString().charAt(14)); //고객 아이디 뒤 2자리 아스키 코드
        int memberB = convertNum(memberId.toString().charAt(15)); //고객 아이디 뒤 1자리 아스키 코드
        accountId = accountId + bankA + bankB + memberA + memberB;
        System.out.println(accountId);
        LocalTime now = LocalTime.now();
        DateTimeFormatter formatter = DateTimeFormatter.ofPattern("HHmmss"); //시 분 초
        accountId += now.format(formatter);
        int randomNum = (int)(Math.random() * 900) + 100; // 랜덤 3자리
        accountId += randomNum;
        accountId += calculateCheckDigit(accountId);//유효성검사 1자리
        return accountId;
    }

    private int convertNum(char num){
        int numericValue;
        if (Character.isDigit(num)) {
            numericValue = Character.getNumericValue(num);
        } else {
            numericValue = num - 'a';
        }
        return numericValue;
    }

    private int calculateCheckDigit(String accountIdWithoutCheckDigit) {
        int sum = 0;
        // 간단한 예시: 각 자리수에 대해 번갈아 가며 2 또는 1을 곱한 합 계산
        for (int i = 0; i < accountIdWithoutCheckDigit.length(); i++) {
            int digit = Character.getNumericValue(accountIdWithoutCheckDigit.charAt(i));
            if (i % 2 == 0) {
                // 짝수 인덱스에는 2를 곱합니다.
                sum += digit * 2;
            } else {
                // 홀수 인덱스에는 1을 곱합니다.
                sum += digit;
            }
        }
        // 합계를 10으로 나눈 나머지를 사용하여 유효성 검사 숫자 계산
        int checkDigit = 10 - (sum % 10);
        // 만약 결과가 10이면, 유효성 검사 숫자를 0으로 설정
        if (checkDigit == 10) {
            checkDigit = 0;
        }
        return checkDigit;
    }
}
