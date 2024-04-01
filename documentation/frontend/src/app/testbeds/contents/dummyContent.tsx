//목록 조회/검색 제외 완료 

//DummyMemberContent 더미 은행고객 자동 생성
//DummyAccountContent 더미 계좌 자동 생성
//DommyTransactionContent 더미 거래내역 자동 생성
//dummyReadContent 더미 생성내역 상세
//dummyListContent 더미 생성내역 목록 조회/검색
//dummyUpdateContent 더미 생성내역 수정
//dummyDeleteContent 더미 생성내역 삭제
//dummyDeleteAllContent 더미 전체 삭제

export const DummyMemberContent = {
  title: '더미 은행고객 자동 생성',
  desc: '특정 은행에 더미 고객 데이터를 생성하는 API입니다. 더미 고객마다 기본 계좌가 함께 생성되고, 각 계좌에는 10만원의 기본 예치금이 설정됩니다.',
  method: 'POST',
  uri: '/dummy/member',
  requestParam: [
    {
      name: 'count',
      desc: '생성할 고객 수',
      type: 'Integer',
      required: 'Y',
      etc: '',
    },
    {
      name: 'bankId',
      desc: '더미 데이터를 생성할 은행 ID',
      type: '',
      required: '',
      etc: '',
    },
  ],
  requestExample: `
    {
      "count" : 10,
      "bankId" : "ede41a11-4e6e-48bd-aae5-86086e0f2d34"
  }
    `,
  responseParam: [
    {
      name: 'dummyId',
      desc: '생성된 더미의 ID',
      type: 'String',
      required: 'Y',
      etc: 'UUID',
    },
    {
      name: 'adminId',
      desc: '생성한 관리자의 ID',
      type: 'String',
      required: 'Y',
      etc: 'UUID',
    },
    {
      name: 'name',
      desc: '생성한 더미의 이름 또는 설명',
      type: 'String',
      required: 'Y',
      etc: '',
    },
    {
      name: 'memberCount',
      desc: '생성된 더미멤버 수',
      type: 'Integer',
      required: 'Y',
      etc: '',
    },
    {
      name: 'accountCount',
      desc: '생성된 더미계좌 수',
      type: 'Integer',
      required: 'Y',
      etc: '',
    },
    {
      name: 'transctionCount',
      desc: '생성된 더미 거래내역 수',
      type: 'Integer',
      required: 'Y',
      etc: '',
    },
  ],
  responseExample: `
    {
      "status": "SUCCESS",
      "message": "멤버 더미데이터 생성 성공했습니다.",
      "data": {
          "dummyId": "d54c803c-978d-4393-b341-16a8d24f98aa",
          "adminId": "7316326a-5f90-47d2-8fbe-10bebfbdd06d",
          "name": "멤버10명 만들기",
          "memberCount": 10,
          "accountCount": null,
          "transactionCount": null,
          "createdAt": "2024-03-31 19:09",
          "updatedAt": "2024-03-31 19:09"
      },
      "page": null
  }
    `,
  errorCode: [
    {
      name: 'WRONG_APIKEY',
      httpstatus: 'BAD_REQUEST',
      desc: '잘못된 API키입니다.',
    },
    {
      name: 'NO_AUTHORIZATION',
      httpstatus: 'BAD_REQUEST',
      desc: '권한이 없습니다.',
    },
    {
      name: 'NO_BANK',
      httpstatus: 'BAD_REQUEST',
      desc: '해당 은행이 존재하지 않습니다.',
    },
  ],
}

export const DummyAccountContent = {
  title: '더미 계좌 자동 생성',
  desc: '은행의 고객을 선택해 더미 계좌를 생성하는 API입니다. 각 계좌에는 10만원의 기본 예치금이 설정됩니다. 관리자 대시보드 페이지에서는 더미 고객에만 더미 계좌 생성이 가능합니다.',
  method: 'POST',
  uri: '/dummy/account',
  requestParam: [
    {
      name: 'count',
      desc: '생성할 계좌 수',
      type: 'Integer',
      required: 'Y',
      etc: '',
    },
    {
      name: 'bankId',
      desc: '생성할 은행 아이디',
      type: 'String',
      required: 'Y',
      etc: 'UUID',
    },
    {
      name: 'users',
      desc: '계좌를 생성할 고객 ID',
      type: 'List<String>',
      required: 'Y',
      etc: '',
    },
  ],
  requestExample: `
    {
      "count" : 10,
      "bankId" : "5ed3b36b-0f67-4559-907e-c8de72596a72",
      "users" : ["09436f28-c9f7-42fb-a83c-6599901409ee",
                "228c8680-324e-4b44-9c25-f77ad93e7d6e",
                "390a4af0-f902-4744-abca-bf7d1cc38aa9",
                "533959cc-0dfa-4a2f-9529-ac721d616081",
                "576cf967-41d0-4071-b318-63060ec72d2b",
                "6741a8ae-c190-422f-8881-f2cb8eea3f2a",
                "71924425-a40a-48cf-95af-9790b29d0dc7",
                "9422f351-58a9-4ca8-94db-08279c6576cf",
                "fa06c8ed-cda5-4c63-ad0a-c1b0b83689b6",
                "fce65ccc-8eba-42c5-a76d-269f0d743ecc"
                ]
  }
    `,
  responseParam: [
    {
      name: 'dummyId',
      desc: '생성된 더미의 ID',
      type: 'String',
      required: 'Y',
      etc: 'UUID',
    },
    {
      name: 'adminId',
      desc: '생성한 관리자의 ID',
      type: 'String',
      required: 'Y',
      etc: 'UUID',
    },
    {
      name: 'name',
      desc: '생성한 더미의 이름 또는 설명',
      type: 'String',
      required: 'Y',
      etc: '',
    },
    {
      name: 'memberCount',
      desc: '생성된 더미멤버 수',
      type: 'Integer',
      required: 'Y',
      etc: '',
    },
    {
      name: 'accountCount',
      desc: '생성된 더미계좌 수',
      type: 'Integer',
      required: 'Y',
      etc: '',
    },
    {
      name: 'transctionCount',
      desc: '생성된 더미 거래내역 수',
      type: 'Integer',
      required: 'Y',
      etc: '',
    },
  ],
  responseExample: `
    {
      "status": "SUCCESS",
      "message": "계좌 더미데이터 생성 성공했습니다.",
      "data": {
          "dummyId": "80791105-3bff-426b-b5dd-7ed977d33b93",
          "adminId": "e704b400-e27c-4244-8f97-09160313bb7e",
          "name": "계좌10개 만들기",
          "memberCount": null,
          "accountCount": 10,
          "transactionCount": null,
          "createdAt": "2024-03-31 19:23",
          "updatedAt": "2024-03-31 19:23"
      },
      "page": null
  }
    `,
  errorCode: [
    {
      name: 'WRONG_APIKEY',
      httpstatus: 'BAD_REQUEST',
      desc: '잘못된 API키입니다.',
    },
    {
      name: 'NO_AUTHORIZATION',
      httpstatus: 'BAD_REQUEST',
      desc: '권한이 없습니다.',
    },
    {
      name: 'NO_BANK',
      httpstatus: 'BAD_REQUEST',
      desc: '해당 은행이 존재하지 않습니다.',
    },
    {
      name: 'NO_MEMBER',
      httpstatus: 'BAD_REQUEST',
      desc: 'ID에 해당하는 사용자가 존재하지 않습니다.',
    },
  ],
}

export const DommyTransactionContent = {
  title: '더미 거래내역 자동 생성',
  desc: '해당 고객의 계좌를 랜덤으로 지정하여 더미 거래내역을 생성하는 API입니다. 입/출금액은 선택된 유저가 소유한 계좌의 잔액을 넘지 않습니다. 반복 주기를 선택하면 그 주기마다 거래내역을 자동으로 생성합니다.',
  method: 'POST',
  uri: '/dummy/transaction',
  requestParam: [
    {
      name: 'count',
      desc: '생성할 거래내역 수',
      type: 'Integer',
      required: 'Y',
      etc: '',
    },
    {
      name: 'name',
      desc: '더미 이름',
      type: 'String',
      required: 'N',
      etc: '',
    },
    {
      name: 'term',
      desc: '반복 주기',
      type: 'ENUM',
      required: 'N',
      etc: 'MINUTE:1분, HOUR:1시간, DAY:1일마다 반복',
    },
    {
      name: 'bankId',
      desc: '은행 아이디',
      type: 'String',
      required: 'Y',
      etc: 'UUID',
    },
    {
      name: 'users',
      desc: '거래내역을 생성할 고객 ID',
      type: 'List<String>',
      required: 'Y',
      etc: '',
    },
  ],
  requestExample: `
    {
      "count" : 25,
      "name" : null,
      "term" : null,
      "bankId" : "60520162-9139-43aa-87e4-aaaa0af77cf6",
      "users" : ["76f55a51-1dbf-4130-a586-fd2e98df346a",
                "b6ef6401-858d-44ed-8386-a51170bb0b8d",
                "4a5960f0-ae41-4d65-b484-9e6fa91dd40e",
                "fa37dc82-914f-49bb-b129-a8e880d6695d",
                "fced4414-4ed0-4f2b-bdce-0a141fce2de3",
                "444d663c-ba36-4904-b92d-e70d9d409b7e",
                "6bf822ca-f1a4-4fa1-bb78-8f0dadcbbc51",
                "ebace22a-f4f3-42f0-8430-109d8c404c29",
                "6f19772f-57dc-45ab-a0d6-d5969afd5021",
                "19c68b26-73f1-4506-aadd-e804d25cd0ff"]
  }
    `,
  responseParam: [
    {
      name: 'dummyId',
      desc: '생성된 더미의 ID',
      type: 'String',
      required: 'Y',
      etc: 'UUID',
    },
    {
      name: 'adminId',
      desc: '생성한 관리자의 ID',
      type: 'String',
      required: 'Y',
      etc: 'UUID',
    },
    {
      name: 'name',
      desc: '생성한 더미의 이름 또는 설명',
      type: 'String',
      required: 'Y',
      etc: '',
    },
    {
      name: 'memberCount',
      desc: '생성된 더미멤버 수',
      type: 'Integer',
      required: 'Y',
      etc: '',
    },
    {
      name: 'accountCount',
      desc: '생성된 더미계좌 수',
      type: 'Integer',
      required: 'Y',
      etc: '',
    },
    {
      name: 'transctionCount',
      desc: '생성된 더미 거래내역 수',
      type: 'Integer',
      required: 'Y',
      etc: '',
    },
  ],
  responseExample: `
    {
      "status": "SUCCESS",
      "message": "거래내역 더미데이터 생성 성공했습니다.",
      "data": {
          "dummyId": "6ee99d0a-f264-475b-8ecc-beb572c76690",
          "adminId": "e704b400-e27c-4244-8f97-09160313bb7e",
          "name": "거래내역25개 만들기",
          "memberCount": null,
          "accountCount": null,
          "transactionCount": 25,
          "createdAt": "2024-03-31 19:29",
          "updatedAt": "2024-03-31 19:29"
      },
      "page": null
  }
    `,
  errorCode: [
    {
      name: 'WRONG_APIKEY',
      httpstatus: 'BAD_REQUEST',
      desc: '잘못된 API키입니다.',
    },
    {
      name: 'NO_AUTHORIZATION',
      httpstatus: 'BAD_REQUEST',
      desc: '권한이 없습니다.',
    },
    {
      name: 'NO_BANK',
      httpstatus: 'BAD_REQUEST',
      desc: '해당 은행이 존재하지 않습니다.',
    },
    {
      name: 'NO_MEMBER',
      httpstatus: 'BAD_REQUEST',
      desc: 'ID에 해당하는 사용자가 존재하지 않습니다.',
    },
  ],
}

export const dummyReadContent = {
  title: '더미 생성내역 상세',
  desc: '특정 더미데이터 생성내역 정보를 조회하는 API입니다.',
  method: 'GET',
  uri: '/dummy/{DummyId}',
  requestParam: '',
  requestExample: '',
  responseParam: [
    {
      name: 'dummyId',
      desc: '더미의 ID',
      type: 'String',
      required: 'Y',
      etc: 'UUID',
    },
    {
      name: 'adminId',
      desc: '생성한 관리자의 ID',
      type: 'String',
      required: 'Y',
      etc: 'UUID',
    },
    {
      name: 'name',
      desc: '더미의 이름 또는 설명',
      type: 'String',
      required: 'Y',
      etc: '',
    },
    {
      name: 'memberCount',
      desc: '더미멤버 수',
      type: 'Integer',
      required: 'N',
      etc: '',
    },
    {
      name: 'accountCount',
      desc: '더미계좌 수',
      type: 'Integer',
      required: 'N',
      etc: '',
    },
    {
      name: 'transctionCount',
      desc: '더미 거래내역 수',
      type: 'Integer',
      required: 'N',
      etc: '',
    },
  ],
  responseExample: `
    {
      "status": "SUCCESS",
      "message": "해당 더미데이터 검색 성공했습니다.",
      "data": {
          "dummyId": "6ee99d0a-f264-475b-8ecc-beb572c76690",
          "adminId": "e704b400-e27c-4244-8f97-09160313bb7e",
          "name": "거래내역25개 만들기",
          "memberCount": null,
          "accountCount": null,
          "transactionCount": 25,
          "createdAt": "2024-03-31 19:29",
          "updatedAt": "2024-03-31 19:29"
      },
      "page": null
  }
    `,
  errorCode: [
    {
      name: 'NO_DUMMY',
      httpstatus: 'BAD_REQUEST',
      desc: '해당하는 더미가 없습니다.',
    },
  ],
}

export const dummyUpdateContent = {
  title: '더미 생성내역 수정',
  desc: '특정 더미데이터 생성내역 정보 중 생성내역의 이름을 수정하는 API입니다.',
  method: 'PATCH',
  uri: '/dummy/{DummyId}',
  requestParam: [
    {
      name: 'name',
      desc: '수정할 더미의 이름',
      type: 'String',
      required: 'Y',
      etc: '',
    },
  ],
  requestExample: `
  {
    "name" : "수정테스트"
}
  `,
  responseParam: [
    {
      name: 'dummyId',
      desc: '더미의 ID',
      type: 'String',
      required: 'Y',
      etc: 'UUID',
    },
    {
      name: 'adminId',
      desc: '생성한 관리자의 ID',
      type: 'String',
      required: 'Y',
      etc: 'UUID',
    },
    {
      name: 'name',
      desc: '더미의 이름 또는 설명',
      type: 'String',
      required: 'Y',
      etc: '',
    },
    {
      name: 'memberCount',
      desc: '더미멤버 수',
      type: 'Integer',
      required: 'N',
      etc: '',
    },
    {
      name: 'accountCount',
      desc: '더미계좌 수',
      type: 'Integer',
      required: 'N',
      etc: '',
    },
    {
      name: 'transctionCount',
      desc: '더미 거래내역 수',
      type: 'Integer',
      required: 'N',
      etc: '',
    }
  ],
  responseExample: `
  {
    "status": "SUCCESS",
    "message": "해당 더미데이터 수정 성공했습니다.",
    "data": {
        "dummyId": "6ee99d0a-f264-475b-8ecc-beb572c76690",
        "adminId": "e704b400-e27c-4244-8f97-09160313bb7e",
        "name": "수정테스트",
        "memberCount": null,
        "accountCount": null,
        "transactionCount": 25,
        "createdAt": "2024-03-31 19:29",
        "updatedAt": "2024-03-31 19:29"
    },
    "page": null
}
  `,
  errorCode: [
    {
      name: 'NO_DUMMY',
      httpstatus: 'BAD_REQUEST',
      desc: '해당하는 더미가 없습니다.',
    },
  ],
}


export const dummyListContent = {
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

export const dummyDeleteContent = {
  title: '더미 생성내역 삭제',
  desc: '특정 더미데이터 생성내역을 삭제하는 API입니다. 삭제 시 해당 생성내역으로 생성한 더미데이터가 함께 삭제됩니다. 거래내역이 삭제되어도 기존의 계좌 잔액은 그대로 유지됩니다.',
  method: 'DELETE',
  uri: '/dummy/{DummyId}',
  requestParam: '',
  requestExample: '',
  responseParam: [
    {
      name: 'dummyId',
      desc: '더미의 ID',
      type: 'String',
      required: 'Y',
      etc: 'UUID',
    },
    {
      name: 'adminId',
      desc: '생성한 관리자의 ID',
      type: 'String',
      required: 'Y',
      etc: 'UUID',
    },
    {
      name: 'name',
      desc: '더미의 이름 또는 설명',
      type: 'String',
      required: 'Y',
      etc: '',
    },
    {
      name: 'memberCount',
      desc: '더미멤버 수',
      type: 'Integer',
      required: 'N',
      etc: '',
    },
    {
      name: 'accountCount',
      desc: '더미계좌 수',
      type: 'Integer',
      required: 'N',
      etc: '',
    },
    {
      name: 'transctionCount',
      desc: '더미 거래내역 수',
      type: 'Integer',
      required: 'N',
      etc: '',
    }
  ],
  responseExample: `
  {
    "status": "SUCCESS",
    "message": "해당 더미데이터 삭제 성공했습니다.",
    "data": {
        "dummyId": "6ee99d0a-f264-475b-8ecc-beb572c76690",
        "adminId": "e704b400-e27c-4244-8f97-09160313bb7e",
        "name": "수정테스트",
        "memberCount": null,
        "accountCount": null,
        "transactionCount": 25,
        "createdAt": "2024-03-31 19:29",
        "updatedAt": "2024-03-31 19:57"
    },
    "page": null
}
  `,
  errorCode: [
    {
      name: 'NO_DUMMY',
      httpstatus: 'BAD_REQUEST',
      desc: '해당하는 더미가 없습니다.',
    },
  ],
}

export const dummyDeleteAllContent = {
  title: '더미 전체 삭제',
  desc: '해당 은행에 생성된 더미데이터 전체를 삭제하는 API입니다.',
  method: 'DELETE',
  uri: '/dummy',
  requestParam: '',
  requestExample: '',
  responseParam: [
    {
      name: 'dummyId',
      desc: '더미의 ID',
      type: 'String',
      required: 'Y',
      etc: 'UUID',
    },
    {
      name: 'adminId',
      desc: '생성한 관리자의 ID',
      type: 'String',
      required: 'Y',
      etc: 'UUID',
    },
    {
      name: 'name',
      desc: '더미의 이름 또는 설명',
      type: 'String',
      required: 'Y',
      etc: '',
    },
    {
      name: 'memberCount',
      desc: '더미멤버 수',
      type: 'Integer',
      required: 'N',
      etc: '',
    },
    {
      name: 'accountCount',
      desc: '더미계좌 수',
      type: 'Integer',
      required: 'N',
      etc: '',
    },
    {
      name: 'transctionCount',
      desc: '더미 거래내역 수',
      type: 'Integer',
      required: 'N',
      etc: '',
    }
  ],
  responseExample: `
  {
    "status": "SUCCESS",
    "message": "전체 더미데이터 삭제 성공했습니다.",
    "data": [
        {
            "dummyId": "34854ef9-b0dd-454d-aa76-41a5d6f13501",
            "adminId": "e704b400-e27c-4244-8f97-09160313bb7e",
            "name": "거래내역35개 만들기",
            "memberCount": null,
            "accountCount": null,
            "transactionCount": 35,
            "createdAt": "2024-03-29 09:21",
            "updatedAt": "2024-03-31 19:58"
        },
        {
            "dummyId": "7892279b-647c-4caf-a86e-4f08d52b3efd",
            "adminId": "e704b400-e27c-4244-8f97-09160313bb7e",
            "name": "멤버10명 만들기",
            "memberCount": 10,
            "accountCount": null,
            "transactionCount": null,
            "createdAt": "2024-03-29 10:02",
            "updatedAt": "2024-03-31 19:58"
        },
        {
            "dummyId": "80791105-3bff-426b-b5dd-7ed977d33b93",
            "adminId": "e704b400-e27c-4244-8f97-09160313bb7e",
            "name": "계좌10개 만들기",
            "memberCount": null,
            "accountCount": 10,
            "transactionCount": null,
            "createdAt": "2024-03-31 19:23",
            "updatedAt": "2024-03-31 19:58"
        },
        {
            "dummyId": "8cc56cab-83c8-4d42-940c-e2792edaa7b3",
            "adminId": "e704b400-e27c-4244-8f97-09160313bb7e",
            "name": "거래내역35개 만들기",
            "memberCount": null,
            "accountCount": null,
            "transactionCount": 35,
            "createdAt": "2024-03-29 09:21",
            "updatedAt": "2024-03-31 19:58"
        },
    ],
    "page": null
}
  `,
  errorCode: '',
}