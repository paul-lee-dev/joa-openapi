//accountCreateContent 계좌 개설 
//accountReadContent 계좌 상세 조회
//accountRemainReadContent 계좌 잔액 조회
//accountUpdateContent 계좌 정보 수정
//accountLimitUpdateContent 계좌 이체 한도 변경
//accountPasswordUpdateContent 계좌 비밀번호 변경
//accountMemberListContent 고객 계좌 목록 조회
//accountListContent 계좌 목록 조회/검색
//accountDeleteContent 계좌 해지

export interface accountCreateContentParams {
    nickname?: string;
    balance?: bigint;
    password: string;
    term: string;
    transferLimit?: string;
    depositAccount?: string;
    withdrawAccount?: string;
    amount?: bigint;
    dummyId?: string;   //UUID
    bankId: string;     //UUID
    productId: string;  //UUID
    taxType: string;
}

export interface accountCreateContentResponse {
    data: AccountResponseType;
}

export interface accountReadContentParams {
    accountId: string;
}

export interface accountReadContentResponse {
    data: AccountResponseType;
}

export interface accountRemainReadContentParams {
    accountId: string;
}

export interface accountRemainReadContentResponse {
    accountId: string;
    nickname: string;
    balance: bigint;
}

export interface accountUpdateContentParams {
    accountId: string;  //UUID
    nickname?: string;
    depositAccount?: string;
    withdrawAccount?: string;
    dummyId?: string;
}

export interface accountUpdateContentResponse {
    accountId: string;
    nickname: string;
    balance: bigint;
    isDormant: boolean;
    transferLimit: bigint; 
    startDate: string;
    endDate: string;
    term: string;
    depositAccount: string;
    withdrawAccount: string;
    amount: bigint;
    dummyId: string;
}

export interface accountLimitUpdateContentParams {

}

export interface accountLimitUpdateContentResponse {

}

export interface accountPasswordUpdateContentParams {

}

export interface accountPasswordUpdateContentResponse {

}

export interface accountMemberListContentParams {

}

export interface accountMemberListContentResponse {

}

export interface accountListContentParams {

}

export interface accountListContentResponse {

}

export interface accountDeleteContentParams {

}

export interface accountDeleteContentResponse {

}


interface AccountResponseType {
    accountId: string;
    productName: string;
    nickname: string;
    balance: bigint;
    isDormant: boolean;
    transferLimit: bigint;
    startDate: string;
    endDate: string;
    term: string;
    depositAccount: string;
    withdrawAccount: string;
    amount: bigint;
    dummyId: string;    //UUID
    bankId: string;     //UUID
    productId: string;  //UUID
    taxType: string;
}