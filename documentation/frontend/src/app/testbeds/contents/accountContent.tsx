//목록 조회/검색 제외 완료 

//accountCreateContent 계좌 개설 
//accountReadContent 계좌 상세 조회
//accountRemainReadContent 계좌 잔액 조회
//accountUpdateContent 계좌 정보 수정
//acoountLimitUpdateContent 계좌 이체 한도 변경
//accountPasswordUpdateContent 계좌 비밀번호 변경
//accountMemberListContent 고객 계좌 목록 조회
//accountListContent 계좌 목록 조회/검색
//accountDeleteContent 계좌 해지 

export const accountCreateContent = {
    title: '계좌 개설',
    desc: '은행에 가입하여 계좌를 등록하는 API입니다. 해당 은행에 등록된 예적금상품을 바탕으로 등록할 수 있습니다.',
    method: 'POST',
    uri: '/account/{bankId}',
    requestParam: [
        {
            name: 'nickname',
            desc: '계좌이름',
            type: 'String',
            required: 'N',
            etc: '',
        },
        {
            name: 'balance',
            desc: '잔액',
            type: 'Long',
            required: 'N',
            etc: '계좌 생성 시 기본 잔액',
        },
        {
            name: 'password',
            desc: '계좌 비밀번호',
            type: 'String',
            required: 'Y',
            etc: '숫자만 입력 가능',
        },
        {
            name: 'term',
            desc: '계약 기간',
            type: 'String',
            required: 'Y',
            etc: '개월 단위',
        },
        {
            name: 'transferLimit',
            desc: '이체 한도',
            type: 'String',
            required: 'N',
            etc: '만 원 단위',
        },
        {
            name: 'depositAccount',
            desc: '입금 계좌',
            type: 'String',
            required: 'N',
            etc: '예적금 만기시 입금 계좌',
        },
        {
            name: 'withdrawAccount',
            desc: '출금 계좌',
            type: 'String',
            required: 'N',
            etc: '예적금 출금시 출금 계좌',
        },
        {
            name: 'amount',
            desc: '거래 금액',
            type: 'Long',
            required: 'N',
            etc: '예금의 경우 예치금, 적금의 경우 단위별 입금액',
        },
        {
            name: 'dummyId',
            desc: '더미 아이디',
            type: 'String',
            required: 'N',
            etc: 'UUID',
        },
        {
            name: 'bankId',
            desc: '은행 아이디',
            type: 'String',
            required: 'Y',
            etc: 'UUID',
        },
        {
            name: 'productId',
            desc: '상품 아이디',
            type: 'String',
            required: 'Y',
            etc: 'UUID',
        },
        {
            name: 'taxType',
            desc: '과세 타입',
            type: 'String',
            required: 'Y',
            etc: 'TAX, NO_TAX',
        },
    ],
    requestExample: `
    {
        "nickname": "기본 계좌",
        "password": "1234",
        "balance" : 3000,
        "term" : 30,
        "bankId": "ef67408b-3107-45b8-9ff5-ac1305a34b47",
        "productId" : "64f8f3ce-103a-4815-a388-eddaf2333cfb",
        "taxType": "NO_TAX"
    }
    `,
    responseParam: [
        {
            name: 'accountId',
            desc: '계좌번호',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'productName',
            desc: '상품이름',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'nickname',
            desc: '계좌이름',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'balance',
            desc: '잔액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'isDormant',
            desc: '휴면계좌 여부',
            type: 'Boolean',
            required: 'Y',
            etc: '',
        },
        {
            name: 'transferLimit',
            desc: '이체 한도',
            type: 'String',
            required: 'Y',
            etc: '만 원 단위',
        },
        {
            name: 'startDate',
            desc: '시작일',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'endDate',
            desc: '만기일',
            type: 'String',
            required: 'Y',
            etc: '개월',
        },
        {
            name: 'term',
            desc: '계약 기간',
            type: 'String',
            required: 'Y',
            etc: '개월 단위',
        },
        {
            name: 'depositAccount',
            desc: '입금 계좌',
            type: 'String',
            required: 'Y',
            etc: '예적금 만기시 입금 계좌',
        },
        {
            name: 'withdrawAccount',
            desc: '출금 계좌',
            type: 'String',
            required: 'Y',
            etc: '예적금 출금시 출금 계좌',
        },
        {
            name: 'amount',
            desc: '거래 금액',
            type: 'Long',
            required: 'Y',
            etc: '예금의 경우 예치금, 적금의 경우 단위별 입금액',
        },
        {
            name: 'dummyId',
            desc: '더미 아이디',
            type: 'String',
            required: 'Y',
            etc: 'UUID',
        },
        {
            name: 'bankId',
            desc: '은행 아이디',
            type: 'String',
            required: 'Y',
            etc: 'UUID',
        },
        {
            name: 'productId',
            desc: '상품 아이디',
            type: 'String',
            required: 'Y',
            etc: 'UUID',
        },
        {
            name: 'taxType',
            desc: '과세 타입',
            type: 'String',
            required: 'Y',
            etc: 'TAX, NO_TAX',
        },
    ],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "계좌 개설에 성공했습니다.",
        "data": {
            "accountId": "5781660823306134",
            "productName": "보통예금",
            "nickname": "예시 설명",
            "balance": 0,
            "isDormant": 1000000,
            "transferLimit": 5.0,
            "startDate": "03/30/2024",
            "endDate": "03/30/2025",
            "term": 12,
            "depositAccount": "5781660823306134",
            "withdrawAccount": "5781660823306134",
            "amount": 0,
            "dummyId": null,
            "bankId": "ef67408b-3107-45b8-9ff5-ac1305a34b47",
            "productId": "64f8f3ce-103a-4815-a388-eddaf2333cfb",
            "taxType": "NO_TAX"
        },
        "page": null
    }
    `,
    errorCode: [
        {
            name: 'NO_WITHDRAW_ACCOUNT',
            httpstatus: 'BAD_REQUEST',
            desc: '출금 계좌가 존재하지 않습니다.',
        },
        {
            name: 'PASSWORD_MISMATCH',
            httpstatus: 'BAD_REQUEST',
            desc: '비밀번호가 일치하지 않습니다.',
        },
        {
            name: 'PASSWORD_REQUIRED',
            httpstatus: 'BAD_REQUEST',
            desc: '계좌 비밀번호는 필수 입력입니다.',
        },
    ],
}

export const accountReadContent = {
    title: '계좌 상세 조회',
    desc: '해당 은행에 등록된 고객의 특정 계좌 정보를 조회하여 확인할 수 있는 API입니다.',
    method: 'POST',
    uri: '/account/detail',
    requestParam: [
        {
            name: 'accountId',
            desc: '계좌번호',
            type: 'String',
            required: 'Y',
            etc: '',
        },
    ],
    requestExample: `
    {
        "accountId":"5781660823306134"
    }
    `,
    responseParam: [
        {
            name: 'accountId',
            desc: '계좌번호',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'productName',
            desc: '상품이름',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'nickname',
            desc: '계좌이름',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'balance',
            desc: '잔액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'isDormant',
            desc: '휴면계좌 여부',
            type: 'Boolean',
            required: 'Y',
            etc: '',
        },
        {
            name: 'transferLimit',
            desc: '이체 한도',
            type: 'String',
            required: 'Y',
            etc: '만 원 단위',
        },
        {
            name: 'startDate',
            desc: '시작일',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'endDate',
            desc: '만기일',
            type: 'String',
            required: 'Y',
            etc: '개월',
        },
        {
            name: 'term',
            desc: '계약 기간',
            type: 'String',
            required: 'Y',
            etc: '개월 단위',
        },
        {
            name: 'depositAccount',
            desc: '입금 계좌',
            type: 'String',
            required: 'Y',
            etc: '예적금 만기시 입금 계좌',
        },
        {
            name: 'withdrawAccount',
            desc: '출금 계좌',
            type: 'String',
            required: 'Y',
            etc: '예적금 출금시 출금 계좌',
        },
        {
            name: 'amount',
            desc: '거래 금액',
            type: 'Long',
            required: 'Y',
            etc: '예금의 경우 예치금, 적금의 경우 단위별 입금액',
        },
        {
            name: 'dummyId',
            desc: '더미 아이디',
            type: 'String',
            required: 'Y',
            etc: 'UUID',
        },
        {
            name: 'bankId',
            desc: '은행 아이디',
            type: 'String',
            required: 'Y',
            etc: 'UUID',
        },
        {
            name: 'productId',
            desc: '상품 아이디',
            type: 'String',
            required: 'Y',
            etc: 'UUID',
        },
        {
            name: 'taxType',
            desc: '과세 타입',
            type: 'String',
            required: 'Y',
            etc: 'TAX, NO_TAX',
        },
    ],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "계좌 상세 조회에 성공했습니다.",
        "data": {
            "accountId": "5781660823306134",
            "productName": "보통예금",
            "nickname": "예시 설명",
            "balance": 0,
            "isDormant": 1000000,
            "transferLimit": 5.0,
            "startDate": "03/30/2024",
            "endDate": "03/30/2025",
            "term": 12,
            "depositAccount": "5781660823306134",
            "withdrawAccount": "5781660823306134",
            "amount": 0,
            "dummyId": null,
            "bankId": "ef67408b-3107-45b8-9ff5-ac1305a34b47",
            "productId": "64f8f3ce-103a-4815-a388-eddaf2333cfb",
            "taxType": "NO_TAX"
        },
        "page": null
    }
    `,
    errorCode: [
        {
            name: 'NO_ACCOUNT',
            httpstatus: 'BAD_REQUEST',
            desc: 'ID에 해당하는 계좌가 존재하지 않습니다.',
        },
        {
            name: 'NO_WITHDRAW_ACCOUNT',
            httpstatus: 'BAD_REQUEST',
            desc: '출금 계좌가 존재하지 않습니다.',
        },
        {
            name: 'PASSWORD_MISMATCH',
            httpstatus: 'BAD_REQUEST',
            desc: '비밀번호가 일치하지 않습니다.',
        },
        {
            name: 'PASSWORD_REQUIRED',
            httpstatus: 'BAD_REQUEST',
            desc: '계좌 비밀번호는 필수 입력입니다.',
        },
    ],
}

export const accountRemainReadContent = {
    title: '계좌 잔액 조회',
    desc: '해당 계좌의 잔액을 조회하는 API입니다.',
    method: 'POST',
    uri: '/account/balance',
    requestParam: [
        {
            name: 'accountId',
            desc: '계좌번호',
            type: 'String',
            required: 'Y',
            etc: '',
        },
    ],
    requestExample: `
    {
        "accountId":"5781660823306134"
    }
    `,
    responseParam: [
        {
            name: 'accountId',
            desc: '계좌번호',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'nickname',
            desc: '계좌명',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'balance',
            desc: '잔액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
    ],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "계좌 잔액 조회에 성공했습니다.",
        "data": {
            "accountId": "5781660823306134",
            "nickname": "예시 설명",
            "balance": 10000
        },
        "page": null
    }
    `,
    errorCode: [
        {
            name: 'NO_ACCOUNT',
            httpstatus: 'BAD_REQUEST',
            desc: 'ID에 해당하는 계좌가 존재하지 않습니다.',
        },
    ],
}

export const accountUpdateContent = {
    title: '계좌 정보 수정',
    desc: '계좌 정보를 수정하는 API입니다. 계좌이름, 입금 계좌 변경, 출금 계좌 변경이 가능합니다.',
    method: 'PATCH',
    uri: '/account',
    requestParam: [
        {
            name: 'accountId',
            desc: '계좌번호',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'nickname',
            desc: '계좌이름',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'depositAccount',
            desc: '입금 계좌',
            type: 'String',
            required: 'Y',
            etc: '예적금 만기시 입금 계좌',
        },
        {
            name: 'withdrawAccount',
            desc: '출금 계좌',
            type: 'String',
            required: 'Y',
            etc: '예적금 출금시 출금 계좌',
        },
        {
            name: 'dummyId',
            desc: '더미 아이디',
            type: 'String',
            required: 'Y',
            etc: 'UUID',
        },
    ],
    requestExample: `
    {
        "accountId": "8363553868882094",
        "nickname": "수정된 계좌 이름"
    }
    `,
    responseParam: [
        {
            name: 'accountId',
            desc: '계좌번호',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'nickname',
            desc: '계좌이름',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'balance',
            desc: '잔액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'isDormant',
            desc: '휴면계좌 여부',
            type: 'Boolean',
            required: 'Y',
            etc: '',
        },
        {
            name: 'transferLimit',
            desc: '이체 한도',
            type: 'String',
            required: 'Y',
            etc: '만 원 단위',
        },
        {
            name: 'startDate',
            desc: '시작일',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'endDate',
            desc: '만기일',
            type: 'String',
            required: 'Y',
            etc: '개월',
        },
        {
            name: 'term',
            desc: '계약 기간',
            type: 'String',
            required: 'Y',
            etc: '개월 단위',
        },
        {
            name: 'depositAccount',
            desc: '입금 계좌',
            type: 'String',
            required: 'Y',
            etc: '예적금 만기시 입금 계좌',
        },
        {
            name: 'withdrawAccount',
            desc: '출금 계좌',
            type: 'String',
            required: 'Y',
            etc: '예적금 출금시 출금 계좌',
        },
        {
            name: 'amount',
            desc: '거래 금액',
            type: 'Long',
            required: 'Y',
            etc: '예금의 경우 예치금, 적금의 경우 단위별 입금액',
        },
        {
            name: 'dummyId',
            desc: '더미 아이디',
            type: 'String',
            required: 'Y',
            etc: 'UUID',
        },
        {
            name: 'createdAt',
            desc: '계좌 생성일시',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'updatedAt',
            desc: '계좌 정보 최종 수정일시',
            type: 'String',
            required: 'Y',
            etc: '',
        },
    ],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "계좌 수정에 성공했습니다.",
        "data": {
            "accountId": "8363553868882094",
            "nickname": "수정된 계좌 이름",
            "balance": 100000,
            "isDormant": false,
            "transferLimit": 100,
            "startDate": "03/30/2024",
            "endDate": "03/29/2025",
            "term": 12,
            "depositAccount": "8363553868882094",
            "withdrawAccount": "8363553868882094",
            "amount": 0,
            "dummyId": "195127ce-39f7-442e-b3ff-6b737650c33d",
            "createdAt": "2024-03-30 21:57",
            "updatedAt": "2024-03-30 21:57"
        },
        "page": null
    }
    `,
    errorCode: [
        {
            name: 'NO_ACCOUNT',
            httpstatus: 'BAD_REQUEST',
            desc: 'ID에 해당하는 계좌가 존재하지 않습니다.',
        },
    ],
}

export const acoountLimitUpdateContent = {
    title: '계좌 이체한도 변경',
    desc: '계좌의 이체 한도를 변경하는 API입니다.',
    method: 'PATCH',
    uri: '/account',
    requestParam: [
        {
            name: 'accountId',
            desc: '계좌번호',
            type: 'String',
            required: 'Y',
            etc: 'UUID',
        },
        {
            name: 'transferLimit',
            desc: '이체한도',
            type: 'String',
            required: 'Y',
            etc: '',
        },
    ],
    requestExample: `
    {
        "accountId": "8363553868882094",
        "transferLimit": "200"
    }
    `,
    responseParam: '',
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "이체한도 변경에 성공했습니다.",
        "data": 200 //변경된 이체한도,
        "page": null
    }
    `,
    errorCode: [
        {
            name: 'NO_ACCOUNT',
            httpstatus: 'BAD_REQUEST',
            desc: 'ID에 해당하는 계좌가 존재하지 않습니다.',
        },
    ],
}

export const accountPasswordUpdateContent = {
    title: '계좌 비밀번호 변경',
    desc: '계좌 비밀번호를 수정하는 API입니다.',
    method: 'PATCH',
    uri: '/account',
    requestParam: [
        {
            name: 'accountId',
            desc: '계좌번호',
            type: 'String',
            required: 'Y',
            etc: 'UUID',
        },
        {
            name: 'password',
            desc: '비밀번호',
            type: 'String',
            required: 'Y',
            etc: '',
        },
    ],
    requestExample: `
    {
        "accountId": "8363553868882094",
        "password": "5555"
    }
    `,
    responseParam: '',
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "비밀번호 변경에 성공했습니다.",
        "data": null,
        "page": null
    }
    `,
    errorCode: [
        {
            name: 'NO_ACCOUNT',
            httpstatus: 'BAD_REQUEST',
            desc: 'ID에 해당하는 계좌가 존재하지 않습니다.',
        },
    ],
}

export const accountMemberListContent = {
    title: '고객 계좌 목록 조회',
    desc: '특정 고객이 개설한 계좌 목록을 조회할 수 있는 API입니다.',
    method: 'GET',
    uri: '/account/member',
    requestParam: '',
    requestExample: '',
    responseParam: [
        {
            name: 'accountId',
            desc: '계좌번호',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'productName',
            desc: '상품이름',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'nickname',
            desc: '계좌이름',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'balance',
            desc: '잔액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'isDormant',
            desc: '휴면계좌 여부',
            type: 'Boolean',
            required: 'Y',
            etc: '',
        },
        {
            name: 'transferLimit',
            desc: '이체 한도',
            type: 'String',
            required: 'Y',
            etc: '만 원 단위',
        },
        {
            name: 'startDate',
            desc: '시작일',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'endDate',
            desc: '만기일',
            type: 'String',
            required: 'Y',
            etc: '개월',
        },
        {
            name: 'term',
            desc: '계약 기간',
            type: 'String',
            required: 'Y',
            etc: '개월 단위',
        },
        {
            name: 'depositAccount',
            desc: '입금 계좌',
            type: 'String',
            required: 'Y',
            etc: '예적금 만기시 입금 계좌',
        },
        {
            name: 'withdrawAccount',
            desc: '출금 계좌',
            type: 'String',
            required: 'Y',
            etc: '예적금 출금시 출금 계좌',
        },
        {
            name: 'amount',
            desc: '거래 금액',
            type: 'Long',
            required: 'Y',
            etc: '예금의 경우 예치금, 적금의 경우 단위별 입금액',
        },
        {
            name: 'dummyId',
            desc: '더미 아이디',
            type: 'String',
            required: 'Y',
            etc: 'UUID',
        },
    ],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "계좌 조회에 성공했습니다.",
        "data": {
            "accountId": "5781660823306134",
            "productName": "보통예금",
            "nickname": "예시 설명",
            "balance": 0,
            "isDormant": 1000000,
            "transferLimit": 5.0,
            "startDate": "03/30/2024",
            "endDate": "03/30/2025",
            "term": 12,
            "depositAccount": "5781660823306134",
            "withdrawAccount": "5781660823306134",
            "amount": 0,
            "dummyId": null,
            "bankId": "ef67408b-3107-45b8-9ff5-ac1305a34b47",
            "productId": "64f8f3ce-103a-4815-a388-eddaf2333cfb",
            "taxType": "NO_TAX"
        },
        "page": null
    }
    `,
    errorCode: [
        {
            name: 'NO_ACCOUNT',
            httpstatus: 'BAD_REQUEST',
            desc: 'ID에 해당하는 계좌가 존재하지 않습니다.',
        },
    ],
}

export const accountListContent = {
    title: '',
    desc: '',
    method: '',
    uri: '',
    requestParam: [
        {
            name: '',
            desc: '',
            type: '',
            required: '',
            etc: '',
        },
        {
            name: '',
            desc: '',
            type: '',
            required: '',
            etc: '',
        },
        {
            name: '',
            desc: '',
            type: '',
            required: '',
            etc: '',
        },
    ],
    requestExample: '',
    responseParam: [
        {
            name: '',
            desc: '',
            type: '',
            required: '',
            etc: '',
        },
        {
            name: '',
            desc: '',
            type: '',
            required: '',
            etc: '',
        },
        {
            name: '',
            desc: '',
            type: '',
            required: '',
            etc: '',
        },
    ],
    responseExample: '',
    errorCode: [
        {
            name: '',
            httpstatus: '',
            desc: '',
        },
        {
            name: '',
            httpstatus: '',
            desc: '',
        },
        {
            name: '',
            httpstatus: '',
            desc: '',
        },
    ],
}

export const accountDeleteContent = {
    title: '계좌 해지',
    desc: '등록한 계좌를 해지하는 API입니다.',
    method: 'DELETE',
    uri: '/account',
    requestParam: [
        {
            name: 'accountId',
            desc: '계좌번호',
            type: 'String',
            required: 'Y',
            etc: 'UUID',
        },
        {
            name: 'password',
            desc: '비밀번호',
            type: 'String',
            required: 'Y',
            etc: '숫자만 입력 가능',
        },
    ],
    requestExample: `
    {
        "accountId": "0.8363553868882094",
        "password": 5555
    }
    `,
    responseParam: '',
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "계좌 해지에 성공했습니다.",
        "data": "0.8363553868882094",
        "page": null
    }
    `,
    errorCode: [
        {
            name: 'NO_ACCOUNT',
            httpstatus: 'BAD_REQUEST',
            desc: 'ID에 해당되는 계좌가 존재하지 않습니다.',
        },
        {
            name: 'PASSWORD_MISMATCH',
            httpstatus: '비밀번호가 일치하지 않습니다.',
            desc: '',
        },
    ],
}

