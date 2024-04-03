
//transactionDepositContent 입금
//transactionWithdrawContent 출금 
//transactionSendContent 이체
//transaction1wonSendContent 1원이체
//transaction1wonConfirmContent 1원인증 확인
//transactionReadContent 거래내역 조회 
//transactionUpdateContent 거래내역 수정
//transactionListContent 거래내역 목록 조회/검색
//transactionDeleteContent 거래내역 삭제

export const transactionDepositContent = {
    title: '입금',
    desc: '계좌에 돈을 입금할 때 사용되는 API입니다.',
    method: 'POST',
    uri: 'transaction/deposit',
    requestParam: [
        {
            name: 'password',
            desc: '계좌 비밀번호',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'amount',
            desc: '거래 금액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'depositorName',
            desc: '입금주명',
            type: 'String',
            required: 'N',
            etc: '',
        },
        {
            name: 'toAccount',
            desc: '입금 계좌',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'dummyId',
            desc: '더미 아이디',
            type: 'String',
            required: 'N',
            etc: 'UUID',
        },
    ],
    requestExample: `
    {
        "password": "5555",
        "amount" : "5000000",
        "toAccount" : "42411027228551"
    }
    `
    ,
    responseParam: [
        {
            name: 'transactionId',
            desc: '거래내역 아이디',
            type: 'String',
            required: 'Y',
            etc: 'UUID',
        },
        {
            name: 'amount',
            desc: '거래 금액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'depositorName',
            desc: '입금주명',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'fromAccount',
            desc: '출금 계좌',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'fromPrevBalance',
            desc: '출금 계좌 이전 잔액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'fromBalance',
            desc: '출금 계좌 잔액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'toAccount',
            desc: '입금 계좌',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'toPrevBalance',
            desc: '입금 계좌 이전 잔액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'toBalance',
            desc: '입금 계좌 잔액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'dummyId',
            desc: '더미 아이디',
            type: 'String',
            required: 'N',
            etc: 'UUID',
        },
    ],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "계좌 입금에 성공했습니다.",
        "data": { "transactionId": "0f5dd9e9-d19c-4be9-8ed5-efdb079f62ab", "amount": 5000000, "depositorName": "입금", "fromAccount": null, "fromPrevBalance": null, "fromBalance": null, "toAccount": "42411027228551", "toPrevBalance": 20, "toBalance": 1520, "dummyId": null, "createdAt": "2024-04-03 10:48", "updatedAt": "2024-04-03 10:48" },
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
            name: 'NO_DUMMY',
            httpstatus: 'BAD_REQUEST',
            desc: '해당하는 더미가 없습니다.',
        },
        {
            name: 'PASSWORD_MISMATCH',
            httpstatus: 'BAD_REQUEST',
            desc: '계좌 번호가 일치하지 않습니다.',
        },
        {
            name: 'PASSWORD_REQUIRED',
            httpstatus: 'BAD_REQUEST',
            desc: '계좌 비밀번호는 필수 입력입니다.',
        },
    ],
}

export const transactionWithdrawContent = {
    title: '출금',
    desc: '계좌에 돈을 출금할 때 사용되는 API입니다.',
    method: 'POST',
    uri: 'transaction/withdraw',
    requestParam: [
        {
            name: 'password',
            desc: '계좌 비밀번호',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'amount',
            desc: '거래 금액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'depositorName',
            desc: '입금주명',
            type: 'String',
            required: 'N',
            etc: '',
        },
        {
            name: 'fromAccount',
            desc: '출금 계좌',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'dummyId',
            desc: '더미 아이디',
            type: 'String',
            required: 'N',
            etc: 'UUID',
        },
    ],
    requestExample: `
    {
        "password": "5555",
        "amount" : "1500",
        "fromAccount" : "42411027228551"
    }
    `,
    responseParam: [
        {
            name: 'transactionId',
            desc: '거래내역 아이디',
            type: 'String',
            required: 'Y',
            etc: 'UUID',
        },
        {
            name: 'amount',
            desc: '거래 금액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'depositorName',
            desc: '입금주명',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'fromAccount',
            desc: '출금 계좌',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'fromPrevBalance',
            desc: '출금 계좌 이전 잔액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'fromBalance',
            desc: '출금 계좌 잔액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'toAccount',
            desc: '입금 계좌',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'toPrevBalance',
            desc: '입금 계좌 이전 잔액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'toBalance',
            desc: '입금 계좌 잔액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'dummyId',
            desc: '더미 아이디',
            type: 'String',
            required: 'N',
            etc: 'UUID',
        },
    ],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "계좌 출금에 성공했습니다.",
        "data": { "transactionId": "a47dbb76-1f65-4446-811f-6f598d1db02c", "amount": 1500, "depositorName": "출금", "fromAccount": "42411027228551", "fromPrevBalance": 5000020, "fromBalance": 4998520, "toAccount": null, "toPrevBalance": null, "toBalance": null, "dummyId": null, "createdAt": "2024-04-03 10:49", "updatedAt": "2024-04-03 10:49" },
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
            name: 'NO_DUMMY',
            httpstatus: 'BAD_REQUEST',
            desc: '해당하는 더미가 없습니다.',
        },
        {
            name: 'PASSWORD_MISMATCH',
            httpstatus: 'BAD_REQUEST',
            desc: '계좌 번호가 일치하지 않습니다.',
        },
        {
            name: 'PASSWORD_REQUIRED',
            httpstatus: 'BAD_REQUEST',
            desc: '계좌 비밀번호는 필수 입력입니다.',
        },
    ],
}

export const transactionSendContent = {
    title: '이체',
    desc: '한 계좌에서 다른 계좌로 금액을 이체할 수 있는 API입니다.',
    method: 'POST',
    uri: 'transaction/send',
    requestParam: [
        {
            name: 'password',
            desc: '계좌 비밀번호',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'amount',
            desc: '거래 금액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'depositorName',
            desc: '입금주명',
            type: 'String',
            required: 'N',
            etc: '',
        },
        {
            name: 'fromAccount',
            desc: '출금 계좌',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'toAccount',
            desc: '입금 계좌',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'dummyId',
            desc: '더미 아이디',
            type: 'String',
            required: 'N',
            etc: 'UUID',
        },
    ],
    requestExample: `
    {
        "password": "5555",
        "amount" : "2000",
        "fromAccount" : "42411027228551",
        "toAccount" : "42411027228551"
    }
    `,
    responseParam: [
        {
            name: 'transactionId',
            desc: '거래내역 아이디',
            type: 'String',
            required: 'Y',
            etc: 'UUID',
        },
        {
            name: 'amount',
            desc: '거래 금액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'depositorName',
            desc: '입금주명',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'fromAccount',
            desc: '출금 계좌',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'fromPrevBalance',
            desc: '출금 계좌 이전 잔액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'fromBalance',
            desc: '출금 계좌 잔액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'toAccount',
            desc: '입금 계좌',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'toPrevBalance',
            desc: '입금 계좌 이전 잔액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'toBalance',
            desc: '입금 계좌 잔액',
            type: 'Long',
            required: 'Y',
            etc: '',
        },
        {
            name: 'dummyId',
            desc: '더미 아이디',
            type: 'String',
            required: 'N',
            etc: 'UUID',
        },
    ],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "계좌 출금에 성공했습니다.",
        "data": { "transactionId": "013d21f5-2b88-49d6-b8e1-4300bba44bdf", "amount": 1500, "depositorName": "출금", "fromAccount": "42411027228551", "fromPrevBalance": 5000520, "fromBalance": 4999020, "toAccount": null, "toPrevBalance": null, "toBalance": null, "dummyId": null, "createdAt": "2024-04-03 10:54", "updatedAt": "2024-04-03 10:54" },
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
            name: 'NO_DUMMY',
            httpstatus: 'BAD_REQUEST',
            desc: '해당하는 더미가 없습니다.',
        },
        {
            name: 'PASSWORD_MISMATCH',
            httpstatus: 'BAD_REQUEST',
            desc: '계좌 번호가 일치하지 않습니다.',
        },
        {
            name: 'PASSWORD_REQUIRED',
            httpstatus: 'BAD_REQUEST',
            desc: '계좌 비밀번호는 필수 입력입니다.',
        },
    ],
}

export const transaction1wonSendContent = {
    title: '1원 전송',
    desc: '본인 확인을 위해 사용하는 1원 인증 API입니다. 고객의 거래내역의 입금주명에 4글자 단어를 전송해줍니다. ',
    method: 'POST',
    uri: 'transaction/1wonSend',
    requestParam: [
        {
            name: 'accountId',
            desc: '계좌 아이디',
            type: 'String',
            required: 'Y',
            etc: '',
        },
    ],
    requestExample: `
    {
        "accountId" : "42411027228551"
    }
    `,
    responseParam: [
        {
            name: 'word',
            desc: '인증을 위해 입력해야 할 4글자',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'transactionId',
            desc: '거래내역 아이디',
            type: 'String',
            required: 'Y',
            etc: '',
        },
    ],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "1원 인증 4글자 전송에 성공했습니다.",
        "data": { "word": "두루마리", "transactionId": "bc5c657b-d820-4d9c-b0bc-1ad262149b6e" },
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

export const transaction1wonConfirmContent = {
    title: '1원인증 확인',
    desc: '1원 인증을 확인하는 API입니다. 1원 인증에서 보낸 4글자가 일치하는지 확인합니다.',
    method: 'POST',
    uri: 'transaction/1wonConfirm',
    requestParam: [
        {
            name: 'accountId',
            desc: '계좌 아이디',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'transactionId',
            desc: '거래내역 아이디',
            type: 'String',
            required: 'Y',
            etc: '',
        },
    ],
    requestExample: `
    {
        "word" : "두루마리",
        "transactionId" : "bc5c657b-d820-4d9c-b0bc-1ad262149b6e"
    }
    `,
    responseParam: [],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "1원 인증 4글자 확인에 성공했습니다.",
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
        {
            name: 'MISMATCH',
            httpstatus: 'BAD_REQUEST',
            desc: '1원 인증 4글자가 불일치합니다.',
        },
        {
            name: 'NO_TRANSACTION',
            httpstatus: 'BAD_REQUEST',
            desc: '해당 거래내역은 존재하지 않습니다.',
        },
    ],
}

export const transactionReadContent = {
    title: '거래내역 조회',
    desc: '거래 내역 상세 정보를 조회하는 API입니다. 은행 고객이 본인의 거래 내역을 조회할 수 있으며, 관리자는 자신의 은행에 한해 고객의 거래 내역을 조회할 수 있습니다.',
    method: 'GET',
    uri: 'transaction/{transactionId}',
    requestParam: [],
    requestExample: '',
    responseParam: [
        {
            name: 'transactionId',
            desc: '거래내역 아이디',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'amount',
            desc: '금액',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'depositorName',
            desc: '입금주명',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'fromAccount',
            desc: '보내는 계좌번호',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'toAccount',
            desc: '받는 계좌번호',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'createdAt',
            desc: '거래내역 발생일',
            type: 'String',
            required: 'Y',
            etc: '',
        },
    ],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "거래내역 상세 조회에 성공했습니다."
        "data": { "transactionId": "013d21f5-2b88-49d6-b8e1-4300bba44bdf", "amount": 500, "depositorName": "거래내역 수정", "fromAccount": "42411027228551", "toAccount": "42411027228551", "createdAt": "2024-04-03 10:54" },
        "page": null
    }
    `,
    errorCode: [],
}

export const transactionUpdateContent = {
    title: '거래내역 수정',
    desc: '거래 내역을 수정하는 API입니다. 관리자는 프로젝트 개발의 편의를 위해 필요한 경우 자신의 은행에 속한 고객의 거래 내역을 임의로 수정할 수 있습니다.',
    method: 'PATCH',
    uri: 'transaction/{transactionId}',
    requestParam: [
        {
            name: 'transactionId',
            desc: '거래내역 아이디',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'amount',
            desc: '금액',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'depositorName',
            desc: '입금주명',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'fromAccount',
            desc: '보내는 계좌번호',
            type: 'String',
            required: 'N',
            etc: '',
        },
        {
            name: 'toAccount',
            desc: '받는 계좌번호',
            type: 'String',
            required: 'N',
            etc: '',
        },
    ],
    requestExample: `
    {
        "transactionId" : "0f5dd9e9-d19c-4be9-8ed5-efdb079f62ab",
        "amount" : "500",
        "depositorName" : "거래내역 수정",
        "fromAccount": "42411027228551",
        "toAccount" : "42411027228551"
      }
    `,
    responseParam: [],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "거래내역 수정에 성공했습니다.",
        "data": { "transactionId": "013d21f5-2b88-49d6-b8e1-4300bba44bdf", "amount": 500, "depositorName": "거래내역 수정", "fromAccount": "42411027228551", "fromPrevBalance": 4999021, "fromBalance": 4999021, "toAccount": "42411027228551", "toPrevBalance": 4999021, "toBalance": 4999021, "isDummy": false, "createdAt": "2024-04-03 10:54", "updatedAt": "2024-04-03 11:08" },
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
            name: 'NO_AUTHORIZATION',
            httpstatus: 'BAD_REQUEST',
            desc: '권한이 없습니다.',
        },
    ],
}


export const transactionListContent = {
    title: '거래내역 목록 조회/검색',
    desc: '거래 내역을 검색하고, 조회하는 API입니다. 은행 고객 본인의 거래 내역을 조회할 수 있으며, 관리자는 본인의 은행에 한해 고객의 거래 내역을 조회할 수 있습니다.',
    method: 'GET',
    uri: 'transaction/search',
    requestParam: [],
    requestExample: '',
    responseParam: [
        {
            name: 'transactionId',
            desc: '거래내역 아이디',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'amount',
            desc: '금액',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'depositorName',
            desc: '입금주명',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'fromAccount',
            desc: '보내는 계좌번호',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'toAccount',
            desc: '받는 계좌번호',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'createdAt',
            desc: '거래내역 발생일',
            type: 'String',
            required: 'Y',
            etc: '',
        },
    ],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "거래내역 조회에 성공했습니다."
        "data": null,
        "page": { "content": [ { "transactionId": "bc5c657b-d820-4d9c-b0bc-1ad262149b6e", "amount": 1, "depositorName": "두루마리", "fromAccount": null, "toAccount": "42411027228551", "createdAt": "2024-04-03 10:55" }, { "transactionId": "013d21f5-2b88-49d6-b8e1-4300bba44bdf", "amount": 500, "depositorName": "거래내역 수정", "fromAccount": "42411027228551", "toAccount": "42411027228551", "createdAt": "2024-04-03 10:54" }, { "transactionId": "6972aa39-2496-4fca-8705-06166caa4aac", "amount": 2000, "depositorName": "이싸피", "fromAccount": "42411027228551", "toAccount": "42411027228551", "createdAt": "2024-04-03 10:51" }, { "transactionId": "a47dbb76-1f65-4446-811f-6f598d1db02c", "amount": 1500, "depositorName": "출금", "fromAccount": "42411027228551", "toAccount": null, "createdAt": "2024-04-03 10:49" } ], "page": 0, "size": 10, "totalElements": 13, "totalPages": 2, "last": false }
    }
    `,
    errorCode: [],
}

export const transactionDeleteContent = {
    title: '거래내역 삭제',
    desc: '특정 거래 내역을 삭제하는 API입니다. 관리자는 프로젝트 개발의 편의를 위해 필요한 경우 자신의 은행에 속한 고객의 거래 내역을 임의로 수정할 수 있습니다.',
    method: 'DELETE',
    uri: 'transaction',
    requestParam: [
        {
            name: 'transactionId',
            desc: '거래내역 번호',
            type: 'String',
            required: 'Y',
            etc: '',
        },
    ],
    requestExample: `
    {
        "transactionId": "48b5712f-82d4-475d-9be8-0e59ecfe05c9"
    }
    `,
    responseParam: [],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "거래내역 삭제에 성공했습니다.",
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