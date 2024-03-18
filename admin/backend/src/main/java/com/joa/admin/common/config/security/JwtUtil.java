package com.joa.admin.common.config.security.jwt;

import com.joa.admin.admin.dto.AdminInfoDto;
import com.joa.admin.common.config.security.user.CustomUserDetailsService;
import io.jsonwebtoken.*;
import jakarta.servlet.http.HttpServletRequest;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.redis.core.RedisTemplate;
import org.springframework.stereotype.Component;

import java.time.ZonedDateTime;
import java.util.Date;
import java.util.Optional;
import java.util.concurrent.TimeUnit;

@Slf4j
@Component
@RequiredArgsConstructor
public class JwtUtil {

    private final RedisTemplate<String, String> redisTemplate;

    private static final String BEARER = "Bearer ";

    @Value("${jwt.secret}")
    private String secretKey;

    @Value("${jwt.access.expiration}")
    private long accessTokenExpTime;

    @Value("${jwt.refresh.expiration}")
    private long refreshTokenExpTime;

    @Value("${jwt.access.header}")
    private String accessHeader;

    @Value("${jwt.refresh.header}")
    private String refreshHeader;

    //Access Token 생성
    public String createAccessToken(AdminInfoDto admin) {
        return createToken(admin, accessTokenExpTime);
    }

    //Refresh Token 생성
    public String createRefreshToken(AdminInfoDto admin) {
        String refreshToken = createToken(admin, refreshTokenExpTime);

        //redis에 저장
        redisTemplate.opsForValue().set(
                admin.getEmail(),
                refreshToken,
                refreshTokenExpTime,
                TimeUnit.MILLISECONDS
        );
        return refreshToken;
    }

    //JWT 생성
    private String createToken(AdminInfoDto admin, long expireTime) {
        Claims claims = Jwts.claims();
        claims.put("email", admin.getEmail());

        ZonedDateTime now = ZonedDateTime.now();
        ZonedDateTime tokenValidity = now.plusSeconds(expireTime);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(Date.from(now.toInstant()))
                .setExpiration(Date.from(tokenValidity.toInstant()))
                .signWith(SignatureAlgorithm.HS256, secretKey)
                .compact();
    }

    //Refresh Token 추출
    public Optional<String> extractRefreshToken(HttpServletRequest request) {
        return Optional.ofNullable(request.getHeader(refreshHeader))
                .filter(token -> token.startsWith(BEARER))
                .map(token -> token.replace(BEARER, ""));
    }

    //Token에서 admin email 추출
    public String getUserId(String token) {
        return parseClaims(token).get("email", String.class);
    }

    //JWT 검증
    public boolean validateToken(String token) {
        try {
            Jwts.parserBuilder().setSigningKey(secretKey).build().parseClaimsJws(token);
            return true;
        } catch (io.jsonwebtoken.security.SecurityException | MalformedJwtException e) {
            log.info("Invalid JWT Token", e);
        } catch (ExpiredJwtException e) {
            log.info("Expired JWT Token", e);
        } catch (UnsupportedJwtException e) {
            log.info("Unsupported JWT Token", e);
        } catch (IllegalArgumentException e) {
            log.info("JWT claims string is empty.", e);
        }
        return false;
    }

    //JWT Claim 추출
    public Claims parseClaims(String token) {
        try {
            return Jwts.parserBuilder().setSigningKey(secretKey).build().parseClaimsJws(token).getBody();
        } catch (ExpiredJwtException e) {
            return e.getClaims();
        }
    }

    public void logout(String email) {
        // Redis에서 해당 userId로 저장된 Refresh Token이 있는지 여부 확인
        if ( redisTemplate.opsForValue().get(email) != null) redisTemplate.delete(email); // Refresh Token 삭제
    }
}