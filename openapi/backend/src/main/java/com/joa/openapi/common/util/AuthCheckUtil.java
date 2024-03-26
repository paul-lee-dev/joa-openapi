package com.joa.openapi.common.util;

import jakarta.servlet.http.HttpServletRequest;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;

import java.util.Base64;
import java.util.Optional;

public class AuthCheckUtil {

    //Header에서 Access Token 추출
    public Optional<String> extractAccessToken(HttpServletRequest request) {
        return Optional.ofNullable(request.getHeader("Authorization"))
                .filter(token -> token.startsWith("Bearer "))
                .map(token -> token.replace("Bearer ", ""));
    }

    //Access Token에서 adminId를 추출
    public String authCheck(HttpServletRequest request) throws ParseException {
        String accessToken = extractAccessToken(request).orElseThrow();
        if (accessToken==null) return null;

        String[] parts = accessToken.split("\\."); // JWT 토큰 파싱
        byte[] decodedBytes = Base64.getUrlDecoder().decode(parts[1]); // 디코딩
        String decodedPayload = new String(decodedBytes);
        JSONParser parser = new JSONParser();
        JSONObject payload = (JSONObject) parser.parse(decodedPayload);
        return payload.get("id").toString();
    }
}
