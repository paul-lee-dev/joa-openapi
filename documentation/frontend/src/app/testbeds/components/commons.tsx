
export const commonErrorCode = [
    { name: 'WRONG_APIKEY', httpstatus: 'BAD_REQUEST', desc: '잘못된 API키입니다.' },
    { name: 'NO_AUTHORIZATION', httpstatus: 'BAD_REQUEST', desc: '권한이 없습니다.' },
    { name: 'ACCESS_DENIED', httpstatus: 'FORBIDDEN', desc: '권한이 없습니다.' },
    { name: 'NO_MEMBER', httpstatus: 'BAD_REQUEST', desc: 'ID에 해당하는 사용자가 존재하지 않습니다.' },
    { name: 'UNAUTHORIZED', httpstatus: 'UNAUTHORIZED', desc: '로그인 후 이용해 주세요.' },
    { name: 'NO_AUTH', httpstatus: 'UNAUTHORIZED', desc: '인증 정보가 없습니다.' },
    { name: 'TOKEN_INVALID', httpstatus: 'UNAUTHORIZED', desc: '유효하지 않은 토큰입니다.' },
    { name: 'INVALID_PARAMETER', httpstatus: 'BAD_REQUEST', desc: '입력값이 잘못되었습니다.' },
    { name: 'WRONG_REQUEST', httpstatus: 'BAD_REQUEST', desc: '요청이 잘못되었습니다.' },
    { name: 'RESOURCE_NOT_FOUND', httpstatus: 'NOT_FOUND', desc: '요청한 리소스가 존재하지 않습니다.' },
    { name: 'INTERNAL_SERVER_ERROR', httpstatus: 'INTERNAL_SERVER_ERROR', desc: '서버 에러입니다.' }
];

export const commonHeader = [
    { name: 'apiKey', desc: '관리자의 API 키', type: 'string', required: '', etc: 'UUID' }, //모든 곳에서 필요 (member는 목록검색 외엔 필요x )
    { name: 'memberId', desc: '은행 고객의 ID', type: 'string', required: '', etc: 'UUID' }, //account에서 필요, transaction의 일부에 필요 
];

export const queryString = [
    {

    }
]
