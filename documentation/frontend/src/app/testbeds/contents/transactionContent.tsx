//목록 조회/검색 제외 완료 

//transactionDepositContent 입금
//transactionWithdrawContent 출금 
//transactionSendContent 이체
//transaction1wonSendContent 1원이체
//transaction1wonConfirmContent 1원인증 확인
//transactionUpdateContent 거래내역 수정
//transactionListContent 거래내역 목록 조회/검색
//transactionDeleteContent 거래내역 삭제

export const transactionDepositContent = {
    title: '입금',
    desc: '계좌에 돈을 입금할 때 사용되는 API입니다.',
    method: 'POST',
    uri: '/transaction/deposit',
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
        "password": "1234",
        "amount" : 1500,
        "toAccount" : "07519673423949533"
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
        "message": "계좌 입금에 성공했습니다.",
        "data": {
            "transactionId": "3e08c449-21f8-4ec8-bb9c-c84f15117155",
            "amount": 1500,
            "depositorName": "입금주명",
            "fromAccount": null,
            "fromPrevBalance": null,
            "fromBalance": null,
            "toAccount": "5091018390",
            "toPrevBalance": 3000,
            "toBalance": 4500,
            "dummyId": null,
            "createdAt": "2024-03-30 18:37",
            "updatedAt": "2024-03-30 18:37"
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
    uri: '/transaction/withdraw',
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
        "password": "1234",
        "amount" : 1500,
        "fromAccount" : "07519673423949533"
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
        "data": {
            "transactionId": "3e08c449-21f8-4ec8-bb9c-c84f15117155",
            "amount": 1500,
            "depositorName": "입금주명",
            "fromAccount": 07519673423949533,
            "fromPrevBalance": null,
            "fromBalance": null,
            "toAccount": null,
            "toPrevBalance": 3000,
            "toBalance": 1500,
            "dummyId": null,
            "createdAt": "2024-03-30 18:37",
            "updatedAt": "2024-03-30 18:37"
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
    uri: '/transaction/send',
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
        "password": "1234",
        "amount" : 1500,
        "fromAccount" : "07519673423949533"
        "toAccount" : "06588471019380"
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
        "data": {
            "transactionId": "3e08c449-21f8-4ec8-bb9c-c84f15117155",
            "amount" : 1500,
            "depositorName": "입금주명",
            "fromAccount": 07519673423949533,
            "fromPrevBalance": 3000,
            "fromBalance": 1500,
            "toAccount": 06588471019380,
            "toPrevBalance": 5000,
            "toBalance": 6500,
            "dummyId": null,
            "createdAt": "2024-03-30 18:37",
            "updatedAt": "2024-03-30 18:37"
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
    uri: '/transaction/1wonSend',
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
        "accountId" : "07519673423949533"
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
        "message": "계좌 출금에 성공했습니다.",
        "data": {
            "word": "노란우산",
            "transactionId": "1d20aba9-ee39-4444-92e4-c542a6aa417d"
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

export const transaction1wonConfirmContent = {
    title: '1원인증 확인',
    desc: '1원 인증을 확인하는 API입니다. 1원 인증에서 보낸 4글자가 일치하는지 확인합니다.',
    method: 'POST',
    uri: '/transaction/1wonConfirm',
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
        "word" : "노란우산",
        "transactionId" : "1d20aba9-ee39-4444-92e4-c542a6aa417d"
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

export const transactionUpdateContent = {
    title: '거래내역 수정',
    desc: '거래 내역을 수정하는 API입니다. 관리자는 프로젝트 개발의 편의를 위해 필요한 경우 자신의 은행에 속한 고객의 거래 내역을 임의로 수정할 수 있습니다.',
    method: 'PATCH',
    uri: '/v1/transaction/{transactionId}',
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
        "transactionId" : "c4dadcf5-a8b0-42cc-bc9d-103d00d1637b",
        "amount" : 3333,
        "depositorName" : "거래내역 수정(입금)",
        "fromAccount": "0.22887087866260403",
        "toAccount" : "0.44020096888170424"
      }
    `,
    responseParam: [],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "거래내역 수정에 성공했습니다.",
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
            name: 'NO_AUTHORIZATION',
            httpstatus: 'BAD_REQUEST',
            desc: '권한이 없습니다.',
        },
    ],
}


export const transactionListContent = {
    title: '거래내역 목록 조회/검색',
    desc: '',
    method: '',
    uri: '',
    requestParam: [],
    requestExample: '',
    responseParam: [],
    responseExample: '',
    errorCode: [],
}

export const transactionDeleteContent = {
    title: '거래내역 삭제',
    desc: '특정 거래 내역을 삭제하는 API입니다. 관리자는 프로젝트 개발의 편의를 위해 필요한 경우 자신의 은행에 속한 고객의 거래 내역을 임의로 수정할 수 있습니다.',
    method: 'DELETE',
    uri: '/v1/transaction',
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
        "transactionId" : "1d20aba9-ee39-4444-92e4-c542a6aa417d"
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