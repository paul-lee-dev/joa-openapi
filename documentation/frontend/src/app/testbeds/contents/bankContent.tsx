//에러코드 제외 완료

//bankCreateContent
//bankreadContent
//bankUpdateContent
//bankListContent
//bankDeleteContent

export const bankCreateContent = {
  title: "은행 생성",
  desc: "관리자가 은행을 생성하는 API입니다.",
  method: "POST",
  uri: "bank",
  requestParam: [
    {
      name: "name",
      desc: "은행명",
      type: "String",
      required: "Y",
      etc: "",
    },
    {
      name: "description",
      desc: "은행 설명",
      type: "String",
      required: "Y",
      etc: "",
    },
    {
      name: "uri",
      desc: "은행 로고",
      type: "String",
      required: "N",
      etc: "",
    },
  ],
  requestExample: `
    {
        "name" : "신한은행",
        "description" : "신뢰도가 높은 은행",
        "uri" : "test.test"
    }
    `,
  responseParam: [
    {
      name: "bankId",
      desc: "은행 코드",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "adminId",
      desc: "관리자 Id",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "name",
      desc: "은행 이름",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "decription",
      desc: "은행 설명",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "uri",
      desc: "은행 로고",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "createdAt",
      desc: "생성일시",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "updatedAt",
      desc: "최종 수정일시",
      type: "String",
      required: "",
      etc: "",
    },
  ],
  responseExample: `
    {
        "status": "SUCCESS",
        "message": "은행생성에 성공했습니다.",
        "data": {
            "bankId": "6a34a566-2fca-4db1-9dde-f36c9c9e2fef",
            "adminId": "258726fe-e344-4df9-92ba-7edd23190cf2",
            "name": "신한은행",
            "description": "신뢰도가 높은 은행",
            "uri": "test.test",
            "createdAt": "2024-03-30 19:15",
            "updatedAt": "2024-03-30 19:15"
        },
        "page": null
    }
    `,
  errorCode: [],
};

export const bankReadContent = {
  title: "은행 정보 조회",
  desc: "관리자가 특정 은행을 조회하는 API입니다.",
  method: "GET",
  uri: "bank/{bankId}",
  requestParam: [],
  requestExample: "",
  responseParam: [
    {
      name: "bankId",
      desc: "은행 코드",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "adminId",
      desc: "관리자 Id",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "name",
      desc: "은행 이름",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "decription",
      desc: "은행 설명",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "uri",
      desc: "은행 로고",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "createdAt",
      desc: "생성일시",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "updatedAt",
      desc: "최종 수정일시",
      type: "String",
      required: "",
      etc: "",
    },
  ],
  responseExample: `
    {
        "status": "SUCCESS",
        "message": "특정은행검색에 성공했습니다.",
        "data": {
            "bankId": "044664ab-9889-456c-816d-7a0c817733d5",
            "adminId": "258726fe-e344-4df9-92ba-7edd23190cf2",
            "name": "신한은행",
            "description": "신뢰도가 높은 은행",
            "uri": "test.test",
            "createdAt": "2024-03-30 19:18",
            "updatedAt": "2024-03-30 19:18"
        },
        "page": null
    }
    `,
  errorCode: [],
};

export const BankUpdateContent = {
  title: "은행 정보 수정",
  desc: "관리자가 은행정보를 수정하는 API입니다.",
  method: "PATCH",
  uri: "bank/{bankId}",
  requestParam: [
    {
      name: "name",
      desc: "은행명",
      type: "String",
      required: "Y",
      etc: "",
    },
    {
      name: "description",
      desc: "은행 설명",
      type: "String",
      required: "Y",
      etc: "",
    },
    {
      name: "uri",
      desc: "은행 로고",
      type: "String",
      required: "N",
      etc: "",
    },
  ],
  requestExample: `
    {
        "name" : "우리은행",
        "description" : "우리의 은행이다",
        "uri" : "test.test"
    }
    `,
  responseParam: [
    {
      name: "bankId",
      desc: "은행 코드",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "adminId",
      desc: "관리자 Id",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "name",
      desc: "은행 이름",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "decription",
      desc: "은행 설명",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "uri",
      desc: "은행 로고",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "createdAt",
      desc: "생성일시",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "updatedAt",
      desc: "최종 수정일시",
      type: "String",
      required: "",
      etc: "",
    },
  ],
  responseExample: `
    {
        "status": "SUCCESS",
        "message": "은행수정에 성공했습니다.",
        "data": {
            "bankId": "ceb18e0b-b6f2-4931-9b82-2a23db6333de",
            "adminId": "258726fe-e344-4df9-92ba-7edd23190cf2",
            "name": "우리은행",
            "description": "우리의 은행이다",
            "uri": "testuri",
            "createdAt": "2024-03-30 19:18",
            "updatedAt": "2024-03-30 19:28"
        },
        "page": null
    }
    `,
  errorCode: [],
};

export const BankListContent = {
  title: "은행 목록 조회/검색",
  desc: "관리자가 은행을 은행 명으로 검색하여 은행 목록을 보는 API입니다.",
  method: "GET",
  uri: "bank/search",
  requestParam: [],
  requestExample: "",
  responseParam: [
    {
      name: "bankId",
      desc: "은행 코드",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "adminId",
      desc: "관리자 Id",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "name",
      desc: "은행 이름",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "decription",
      desc: "은행 설명",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "uri",
      desc: "은행 로고",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "createdAt",
      desc: "생성일시",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "updatedAt",
      desc: "최종 수정일시",
      type: "String",
      required: "",
      etc: "",
    },
  ],
  responseExample: `
    {
        "status": "SUCCESS",
        "message": "은행목록검색에 성공했습니다.",
        "data": [
            {
                "bankId": "9a8b8dec-191e-43ee-942b-e5ce1749560c",
                "adminId": "258726fe-e344-4df9-92ba-7edd23190cf2",
                "name": "신한은행",
                "description": "신뢰도가 높은 은행",
                "uri": "test.test",
                "createdAt": "2024-03-30 19:02",
                "updatedAt": "2024-03-30 19:02"
            },
            {
                "bankId": "ceb18e0b-b6f2-4931-9b82-2a23db6333de",
                "adminId": "258726fe-e344-4df9-92ba-7edd23190cf2",
                "name": "우리은행",
                "description": "우리의 은행이다",
                "uri": "testuri",
                "createdAt": "2024-03-30 19:18",
                "updatedAt": "2024-03-30 19:28"
            }
        ],
        "page": null
    `,
  errorCode: [],
};

export const BankDeleteContent = {
  title: "은행 삭제",
  desc: "관리자가 은행을 삭제하는 API입니다.",
  method: "DELETE",
  uri: "bank/{bankId}",
  requestParam: [],
  requestExample: "",
  responseParam: [
    {
      name: "bankId",
      desc: "은행 코드",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "adminId",
      desc: "관리자 Id",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "name",
      desc: "은행 이름",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "decription",
      desc: "은행 설명",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "uri",
      desc: "은행 로고",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "createdAt",
      desc: "생성일시",
      type: "String",
      required: "",
      etc: "",
    },
    {
      name: "updatedAt",
      desc: "최종 수정일시",
      type: "String",
      required: "",
      etc: "",
    },
  ],
  responseExample: `
    {
        "status": "SUCCESS",
        "message": "은행삭제에 성공했습니다.",
        "data": {
            "bankId": "6a34a566-2fca-4db1-9dde-f36c9c9e2fef",
            "adminId": "258726fe-e344-4df9-92ba-7edd23190cf2",
            "name": "신한은행",
            "description": "신뢰도가 높은 은행",
            "uri": "test.test",
            "createdAt": "2024-03-30 19:15",
            "updatedAt": "2024-03-30 19:33"
        },
        "page": null
    }
    `,
  errorCode: [],
};
