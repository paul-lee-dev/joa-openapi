//목록 조회/검색 제외 완료

//memberCreateContent
//emailCheckContent
//phoneCheckContent
//memberReadContent
//memberUpdateContent
//memberListContent
//memberDeleteContent

export const memberCreateContent = {
    title: '고객 가입',
    desc: '은행에 가입하여 고객 정보를 등록하는 API입니다. 가입을 통해 은행 고객이 되면 해당 은행 내에서 계좌 생성, 거래내역 조회 등이 가능합니다.',
    method: 'POST',
    uri: 'member',
    requestParam: [
        {
            name: 'email',
            desc: '고객 이메일',
            type: 'String',
            required: 'Y',
            etc: '이메일 형식, 중복 불가',
        },
        {
            name: 'phone',
            desc: '고객 휴대폰 번호',
            type: 'String',
            required: 'Y',
            etc: '중복 불가 ',
        },
        {
            name: 'password',
            desc: '고객 비밀번호',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'name',
            desc: '고객 성명',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'bankId',
            desc: '은행 ID',
            type: 'String',
            required: 'Y',
            etc: 'UUID',
        },
    ],
    requestExample: `
    {
        "email":"samsungwa@do.com",
        "phone":"01095955959",
        "password":"1234",
        "name":"틱낫한",
        "bankId":"3cf6f866-3fbd-46c8-85a1-96ab39551a35"
    }
    `,
    responseParam: [],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "회원 가입에 성공했습니다.",
        "data": null,
        "page": null
    }
    `,
    errorCode: [
        {
            name: 'EMAIL_CONFLICT',
            httpstatus: 'CONFLICT',
            desc: '이미 등록된 이메일입니다. ',
        },
        {
            name: 'PHONE_CONFLICT',
            httpstatus: 'CONFLICT',
            desc: '이미 등록된 휴대폰 번호입니다. ',
        },
        {
            name: 'NO_BANK',
            httpstatus: 'BAD_REQUEST',
            desc: '해당 은행이 존재하지 않습니다. ',
        },
    ],
}

export const emailCheckContent = {
    title: '이메일 중복 검사',
    desc: '이메일 중복 검사를 통해 해당 이메일이 이미 은행에 가입되어 있는지 확인을 진행하는 api입니다.  ',
    method: 'GET',
    uri: 'member/email/{keyword}/{bankId}',
    requestParam: [],
    requestExample: '',
    responseParam: [],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "사용 가능한 이메일입니다.",
        "data": null,
        "page": null
    }
    `,
    errorCode: [
        {
            name: 'EMAIL_CONFLICT',
            httpstatus: 'CONFLICT',
            desc: '이미 등록된 이메일입니다. ',
        },
    ],
}

export const phoneCheckContent = {
    title: '전화번호 중복 검사',
    desc: '전화번호 중복 검사를 통해 해당 전화번호가 이미 은행에 등록되어 있는지 확인을 진행하는 api입니다.  ',
    method: 'GET',
    uri: 'member/phone/{keyword}',
    requestParam: [],
    requestExample: '',
    responseParam: [],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "사용 가능한 번호입니다.",
        "data": null,
        "page": null
    }
    `,
    errorCode: [
        {
            name: 'PHONE_CONFLICT',
            httpstatus: 'CONFLICT',
            desc: '이미 등록된 휴대폰 번호입니다. ',
        },
    ],
}

export const memberReadContent = {
    title: '고객 정보 조회',
    desc: '해당 은행에 등록된 고객의 정보를 조회하여 확인할 수 있는 API입니다. ',
    method: 'GET',
    uri: 'member/{memberId}',
    requestParam: [],
    requestExample: '',
    responseParam: [
        {
            name: 'email',
            desc: '고객 이메일',
            type: 'String',
            required: 'Y',
            etc: '이메일 형식, 중복 불가',
        },
        {
            name: 'phone',
            desc: '고객 휴대폰 번호',
            type: 'String',
            required: 'Y',
            etc: '중복 불가 ',
        },
        {
            name: 'name',
            desc: '고객 성명',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'createdAt',
            desc: '고객 가입일시',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'updatedAt',
            desc: '고객 정보 최종 수정일시',
            type: 'String',
            required: 'Y',
            etc: '',
        },
    ],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "회원 정보 조회에 성공했습니다.",
        "data": {
            "name": "조쌒피",
            "email": "chocho@ssafy.com",
            "phone": "01098765432",
            "createdAt": "2024-03-30T16:02:30.043151",
            "updatedAt": "2024-03-30T16:02:30.043151"
        },
        "page": null
    }
    `,
    errorCode: [
        {
            name: 'NO_MEMBER',
            httpstatus: 'BAD_REQUEST',
            desc: 'ID에 해당하는 사용자가 존재하지 않습니다.',
        },
    ],
}

export const memberUpdateContent = {
    title: '고객 정보 수정',
    desc: '해당 은행에 등록된 고객의 정보를 수정할 수 있는 API입니다. ',
    method: 'PATCH',
    uri: 'member/{memberId}',
    requestParam: [
        {
            name: 'email',
            desc: '고객 이메일',
            type: 'String',
            required: 'Y',
            etc: '이메일 형식, 중복 불가',
        },
        {
            name: 'phone',
            desc: '고객 휴대폰 번호',
            type: 'String',
            required: 'Y',
            etc: '중복 불가 ',
        },
        {
            name: 'password',
            desc: '고객 비밀번호',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'name',
            desc: '고객 성명',
            type: 'String',
            required: 'Y',
            etc: '',
        },
    ],
    requestExample: `
    {
        "name": "조쌒히",
        "email": "",
        "phone": "",
        "password":"1234"
    }
    `,
    responseParam: [
        {
            name: 'email',
            desc: '고객 이메일',
            type: 'String',
            required: 'Y',
            etc: '이메일 형식, 중복 불가',
        },
        {
            name: 'phone',
            desc: '고객 휴대폰 번호',
            type: 'String',
            required: 'Y',
            etc: '중복 불가 ',
        },
        {
            name: 'name',
            desc: '고객 성명',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'createdAt',
            desc: '고객 가입일시',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'updatedAt',
            desc: '고객 정보 최종 수정일시',
            type: 'String',
            required: 'Y',
            etc: '',
        },
    ],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "회원 정보 수정에 성공했습니다.",
        "data": {
            "name": "조쌒히",
            "email": "chocho@ssafy.com",
            "phone": "01098765432",
            "createdAt": "2024-03-30T16:02:30.043151",
            "updatedAt": "2024-03-30T16:39:05.819411"
        },
        "page": null
    }
    `,
    errorCode: [
        {
            name: 'EMAIL_CONFLICT',
            httpstatus: 'CONFLICT',
            desc: '이미 등록된 이메일입니다. ',
        },
        {
            name: 'PHONE_CONFLICT',
            httpstatus: 'CONFLICT',
            desc: '이미 등록된 휴대폰 번호입니다. ',
        },
        {
            name: 'NO_MEMBER',
            httpstatus: 'BAD_REQUEST',
            desc: 'ID에 해당하는 사용자가 존재하지 않습니다.',
        },
    ],
}

export const memberListContent = {
    title: '고객 목록 조회/검색',
    desc: '개발자가 자신이 생성한 모든 은행에 대한 고객 목록을 조회, 검색할 수 있는 API입니다.',
    method: 'GET',
    uri: 'member/search',
    requestParam: [],
    requestExample: '',
    responseParam: [
        {
            name: 'memberName',
            desc: '고객 성명',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'memberId',
            desc: '고객 ID',
            type: 'String',
            required: 'Y',
            etc: '',
        },
        {
            name: 'email',
            desc: '고객 이메일',
            type: 'String',
            required: 'Y',
            etc: '이메일 형식, 중복 불가',
        },
        {
            name: 'phone',
            desc: '고객 휴대폰 번호',
            type: 'String',
            required: 'Y',
            etc: '중복 불가 ',
        },
        {
            name: 'bankName',
            desc: '은행 이름',
            type: 'String',
            required: 'Y',
            etc: '',
        },
    ],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "회원 정보 조회에 성공했습니다.",
        "data": {
            "name": "조쌒피",
            "email": "chocho@ssafy.com",
            "phone": "01098765432",
            "createdAt": "2024-03-30T16:02:30.043151",
            "updatedAt": "2024-03-30T16:02:30.043151"
        },
        "page": null
    }
    `,
    errorCode: [
        {
            name: 'NO_MEMBER',
            httpstatus: 'BAD_REQUEST',
            desc: 'ID에 해당하는 사용자가 존재하지 않습니다.',
        },
    ],
}

export const memberDeleteContent = {
    title: '고객 탈퇴',
    desc: '은행에 가입하여 고객 정보를 등록하는 API입니다. 가입을 통해 은행 고객이 되면 해당 은행 내에서 계좌 생성, 거래내역 조회 등이 가능합니다. ',
    method: 'DELETE',
    uri: 'member/{memberId}',
    requestParam: [],
    requestExample: '',
    responseParam: [],
    responseExample: `
    {
        "status": "SUCCESS",
        "message": "회원 탈퇴에 성공했습니다.",
        "data": {
            "id": "fc43095b-da24-4dc1-ad4e-731c057c9804",
            "createdAt": "2024-03-30T16:02:30.043151",
            "updatedAt": "2024-03-30T16:02:30.043151"
        },
        "page": null
    }
    `,
    errorCode: [
        {
            name: 'NO_MEMBER',
            httpstatus: 'BAD_REQUEST',
            desc: 'ID에 해당하는 사용자가 존재하지 않습니다.',
        },
    ],
}
