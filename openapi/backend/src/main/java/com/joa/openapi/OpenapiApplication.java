package com.joa.openapi;

import jakarta.annotation.PostConstruct;
import lombok.extern.slf4j.Slf4j;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

import java.time.LocalDateTime;
import java.util.TimeZone;

@SpringBootApplication
@EnableJpaAuditing
@Slf4j
public class OpenapiApplication {

	@PostConstruct
	public void timezone(){
		TimeZone.setDefault(TimeZone.getTimeZone("Asia/Seoul"));
		log.info("현재 시간 : {}", LocalDateTime.now());
	}

	public static void main(String[] args) {
		SpringApplication.run(OpenapiApplication.class, args);
	}

}
