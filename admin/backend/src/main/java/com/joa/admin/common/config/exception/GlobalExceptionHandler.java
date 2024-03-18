package com.joa.admin.admin.config.exception;

import com.joa.admin.admin.config.exception.custom.*;
import io.swagger.v3.oas.annotations.Hidden;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.lang3.exception.ExceptionUtils;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.AccessDeniedException;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestControllerAdvice;
import org.springframework.web.context.request.WebRequest;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import java.time.LocalDateTime;
import java.util.Objects;

@Slf4j(topic = "GLOBAL_EXCEPTION_HANDLER")
@RestControllerAdvice
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler implements GlobalExceptionHandlerInterface {

    public static final String TRACE = "trace";

    @Value("${error.printStackTrace}")
    private boolean printStackTrace;

    @Override
    protected ResponseEntity<Object> handleExceptionInternal(Exception ex, Object body, HttpHeaders headers, HttpStatusCode statusCode, WebRequest request) {
        return buildErrorResponse(ex, ex.getMessage(), HttpStatus.valueOf(statusCode.value()), request);
    }

    private ResponseEntity<Object> buildErrorResponse(Exception exception,
                                                      String message,
                                                      HttpStatus httpStatus,
                                                      WebRequest request) {
        ErrorResponseDto errorResponseDto = new ErrorResponseDto(httpStatus.value(), message, LocalDateTime.now());
        if (printStackTrace && isTraceOn(request)) {
            errorResponseDto.setStackTrace(ExceptionUtils.getStackTrace(exception));
        }
        return ResponseEntity.status(httpStatus).body(errorResponseDto);
    }

    private boolean isTraceOn(WebRequest request) {
        String[] value = request.getParameterValues(TRACE);
        return Objects.nonNull(value)
                && value.length > 0
                && value[0].contentEquals("true");
    }

    // 412 Validate Exception
    @Override
    @Hidden
    @ResponseStatus(HttpStatus.UNPROCESSABLE_ENTITY)
    protected ResponseEntity<Object> handleMethodArgumentNotValid(MethodArgumentNotValidException ex, HttpHeaders headers, HttpStatusCode status, WebRequest request) {
        ErrorResponseDto errorResponseDto = new ErrorResponseDto(HttpStatus.UNPROCESSABLE_ENTITY.value(), "Validation error. Check 'errors' field for details.", LocalDateTime.now());
        for (FieldError fieldError : ex.getBindingResult().getFieldErrors()) {
            errorResponseDto.addValidationError(fieldError.getField(), fieldError.getDefaultMessage());
        }
        return ResponseEntity.unprocessableEntity().body(errorResponseDto);
    }


    // 403 Access Denied Exception
    @ExceptionHandler(AccessDeniedException.class)
    @Hidden
    @ResponseStatus(HttpStatus.FORBIDDEN) // 403 Forbidden
    public ResponseEntity<Object> handleAccessDeniedException(AccessDeniedException exception, WebRequest request) {
        log.error("Access denied", exception);
        return buildErrorResponse(exception, "Access denied", HttpStatus.FORBIDDEN, request);
    }



    // 404 NoSuchElementFoundException
    @ExceptionHandler(NoSuchElementFoundException.class)
    @Hidden
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<Object> handleNoSuchElementFoundException(NoSuchElementFoundException noSuchElementFoundException, WebRequest request) {
        log.error("Failed to find the request element", noSuchElementFoundException);
        return buildErrorResponse(noSuchElementFoundException, noSuchElementFoundException.getMessage(), HttpStatus.NOT_FOUND, request);
    }

    // 409 AlreadyExistElementException
    @ExceptionHandler(AlreadyExistElementException.class)
    @Hidden
    @ResponseStatus(HttpStatus.CONFLICT)
    public ResponseEntity<Object> handleAlreadyExistElementException(AlreadyExistElementException alreadyExistElementException, WebRequest request){
        log.error("Failed to element is already exist", alreadyExistElementException);
        return buildErrorResponse(alreadyExistElementException, alreadyExistElementException.getMessage(), HttpStatus.CONFLICT, request);
    }



    // 403 AuthForbiddenException
    @ExceptionHandler(AuthForbiddenException.class)
    @Hidden
    @ResponseStatus(HttpStatus.FORBIDDEN)
    public ResponseEntity<Object> handleAuthForbiddenException(AuthForbiddenException authForbiddenException, WebRequest request) {
        log.error("Failed to Auth fail", authForbiddenException);
        return buildErrorResponse(authForbiddenException, authForbiddenException.getMessage(), HttpStatus.FORBIDDEN, request);
    }

    // 404 FileDownloadException
    @ExceptionHandler(FileDownloadException.class)
    @Hidden
    @ResponseStatus(HttpStatus.NOT_FOUND)
    public ResponseEntity<Object> handleFileDownloadException(FileDownloadException fileDownloadException, WebRequest request) {
        log.error("Failed to while file download", fileDownloadException);
        return buildErrorResponse(fileDownloadException, fileDownloadException.getMessage(), HttpStatus.NOT_FOUND, request);
    }


    // 500 FileUploadException
    @ExceptionHandler(FileUploadException.class)
    @Hidden
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<Object> handleFileUploadException(FileUploadException fileUploadException, WebRequest request) {
        log.error("Failed to while file upload", fileUploadException);
        return buildErrorResponse(fileUploadException, fileUploadException.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, request);
    }

    // 412 PreconditionFailException
    @ExceptionHandler(PreconditionFailException.class)
    @Hidden
    @ResponseStatus(HttpStatus.PRECONDITION_FAILED)
    public ResponseEntity<Object> handlePreconditionFailException(PreconditionFailException preconditionFailException, WebRequest request) {
        log.error("Failed to doesn't match precondition", preconditionFailException);
        return buildErrorResponse(preconditionFailException, preconditionFailException.getMessage(), HttpStatus.PRECONDITION_FAILED, request);
    }

    // 412 ExpireException
    @ExceptionHandler(ExpireException.class)
    @ResponseStatus(HttpStatus.PRECONDITION_FAILED)
    public ResponseEntity<Object> handleSubscribeExpireException(ExpireException subscribeExpireException, WebRequest request) {
        log.error("Failed to doesn't match precondition", subscribeExpireException);
        return buildErrorResponse(subscribeExpireException, subscribeExpireException.getMessage(), HttpStatus.PRECONDITION_FAILED, request);
    }


    // 401 AuthenticationCredientialException
    @ExceptionHandler(AuthenticationCredientialException.class)
    @ResponseStatus(HttpStatus.UNAUTHORIZED)
    public ResponseEntity<Object> handleUnauthenticationCredException(AuthenticationCredientialException authCredientialException, WebRequest request) {
        log.error("Failed to authorization", authCredientialException);
        return buildErrorResponse(authCredientialException, authCredientialException.getMessage(), HttpStatus.UNAUTHORIZED, request);
    }

    /** 필요시 ExceptionHandler 추가 - 예상가는 오류 있다면 전부 ExceptionHandler 이용해 처리. **/



    // 500 Uncaught Exception
    @ExceptionHandler(Exception.class)
    @Hidden
    @ResponseStatus(HttpStatus.INTERNAL_SERVER_ERROR)
    public ResponseEntity<Object> handleAllUncaughtException(Exception exception, WebRequest request) {
        log.error("Internal error occurred", exception);
        return buildErrorResponse(exception, exception.getMessage(), HttpStatus.INTERNAL_SERVER_ERROR, request);
    }

}


