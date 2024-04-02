//DummyMemberContent 더미 은행고객 자동 생성
//DummyAccountContent 더미 계좌 자동 생성
//DommyTransactionContent 더미 거래내역 자동 생성
//DummyReadContent 더미 생성내역 상세
//DummyListContent 더미 생성내역 목록 조회/검색
//DummyUpdateContent 더미 생성내역 수정
//DummyDeleteContent 더미 생성내역 삭제
//DummyDeleteAllContent 더미 전체 삭제

export interface DummyMemberParams {
    count: number;
    bankId: string;
}

export interface DummyMemberResponse {
    data: ResponseType;
}

export interface DummyAccountParams {
    count: number;
    bankId: string;
    users: string;
}

export interface DummyAccountResponse {
    data: ResponseType;
}

export interface DommyTransactionParams {
    count: number;
    name?: string;
    term?: string;  //enum도 string?
    bankId: string;
    users: Array<string>;
}

export interface DommyTransactionResponse {
    data: ResponseType;
}

export interface DummyReadParams {
    dummyId: string; //queryString
}

export interface DummyReadResponse {
    data: ResponseType;
}

export interface DummyListParams {
    searchKeyWord: string; //queryString
    isMember?: boolean; //queryString
    isAccount?: boolean; //queryString
    isTransaction?: boolean; //queryString
}

export interface DummyListResponse {
    page: PageType;
}

export interface DummyUpdateParams {
    dummyId: string; //queryString
    name: string;
}

export interface DummyUpdateResponse {
    data: ResponseType;
}

export interface DummyDeleteParams {
    dummyId: string; //queryString
}

export interface DummyDeleteResponse {
    data: ResponseType;
}

export interface DummyDeleteAllParams {
    
}

export interface DummyDeleteAllResponse {
    data: Array<ResponseType>
}

interface PageType {
    content: Array<ResponseType>;
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
    last: boolean;
}

interface ResponseType {
    dummyId: string;
    adminId: string;
    name: string;
    memberCount: number;
    accountCount: number;
    transactionCount: number;
}