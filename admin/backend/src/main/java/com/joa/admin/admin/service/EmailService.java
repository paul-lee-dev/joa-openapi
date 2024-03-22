package com.joa.admin.admin.service;

import com.joa.admin.admin.dto.req.AdminEmailConfirmRequestDto;
import com.joa.admin.admin.dto.req.AdminEmailSendRequestDto;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.mail.SimpleMailMessage;
import org.springframework.mail.javamail.JavaMailSender;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

@Slf4j
@Service
@Transactional
@ComponentScan
@RequiredArgsConstructor
public class EmailService {

    private final JavaMailSender mailSender;

    public void sendEmailCode(AdminEmailSendRequestDto request) {

        char[] charSet = new char[] { '0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F',
            'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' };

        String code= "";

        int idx = 0;
        for (int i = 0; i < 10; i++) {
            idx = (int) (charSet.length * Math.random());
            code += charSet[idx];
        }

        SimpleMailMessage message = new SimpleMailMessage();

        try {
            message.setTo(request.getEmail());
            message.setFrom("joa13site");
            message.setSubject("[JOA] 인증번호 안내 이메일입니다.");
            message.setText("안녕하세요.\n"
                + "JOA 인증번호 안내 관련 이메일 입니다.\n"
                + "인증번호를 발급하오니 사이트에 접속하셔서 \n"
                + "아래 인증번호를 확인하신 후 이메일 인증절차를 완료해주세요.\n\n"
                + "인증번호 : " + code);
        } catch (Exception e) {
            log.error("이메일 전송 오류 : {}", e.getMessage());
        }
        mailSender.send(message);

    }

    public void confirmEmailCode(AdminEmailConfirmRequestDto request) {
    }

}
