
//transactionDepositContent 입금
//transactionWithdrawContent 출금 
//transactionSendContent 이체
//transaction1wonSendContent 1원이체
//transaction1wonConfirmContent 1원인증 확인
//transactionUpdateContent 거래내역 수정
//transactionListContent 거래내역 목록 조회/검색
//transactionDeleteContent 거래내역 삭제


export interface TransactionDepositParams {
    password: string;
    amount: bigint;
    depositorName?: string;
    toAccount: string;
    dummyId?: string;   //UUID
}

export interface TransactionDepositResponse {
    data: TransactionResponeType;
}

export interface TransactionWithdrawParams {
    password: string;
    amount: string;
    depositorName?: string;
    fromAccount: string;
    dummyId?: string;    //UUID
}

export interface TransactionWithdrawResponse {
    data: TransactionResponeType;
}

export interface TransactionSendParams {
    password: string;
    amount: bigint;
    depositorName?: string;
    fromAccount: string;
    toAccount: string;
    dummyId?: string;   //UUID
}

export interface TransactionSendResponse {
    data: TransactionResponeType;
}

export interface Transaction1wonSendParams {
    accountId: string;
}

export interface Transaction1wonSendResponse {
    word: string;
    transactionId: string;  //UUID
}

export interface Transaction1wonConfirmParams {
    accountId: string;
    transactionId: string;  //UUID
}

export interface Transaction1wonConfirmResponse {

}

export interface TransactionUpdateParams {
    transactionId: string;
    amount: string;
    depositorName: string;
    fromAccount?: string;
    toAccount?: string;
}

export interface TransactionUpdateResponse {

}

export interface TransactionListParams {
    transactionId: string;
}

export interface TransactionListResponse {

}

export interface TransactionDeleteParams {
    bankId?: string;    //UUID
    isDummy?: string;
    depositorNameKeyword?: string;
    accoundId?: string;
    dummyName?: string;
    fromAmount?: string;
    toAmount?: string;
    fromDate?: string;
    toDate?: string;
    searchType?: string;
    orderBy?: string;
}

export interface TransactionDeleteResponse {
    page: PageType;
}

interface PageType {
    content: Array<TransactionSearchResponseType>
    page: number;
    size: number;
    totalElements: number;
    totalPages: number;
    last: boolean;
}

interface TransactionSearchResponseType {
    transactionId: string;
    amount: string;
    depositorName: string;
    fromAccount: string;
    toAccount: string;
}

interface TransactionResponeType {
    transactionId: string;  //UUID
    amount: bigint;
    depositorName: string;
    fromAccount: string;
    fromPrevBalance: bigint;
    fromBalance: bigint;
    toAccount: string;
    toPrevBalance: bigint;
    toBalance: bigint;
    dummyId: string;    //UUID
}