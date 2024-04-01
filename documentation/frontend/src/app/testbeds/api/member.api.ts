//memberListResponse 제외 작성완료 

export interface memberCreateParams {
  name: string;
  email: string;
  phone: string;
  password: string;
  bankId: string;
}

export interface memberCreateResponse {
  id: string; //필수
  createdAt?: string; //선택
  updatedAt?: string; 
}

export interface emailCheckParams {
  keyword: string; //pathVariable
}

export interface emailCheckResponse {
}

export interface phoneCheckParams {
  keyword: string; //pathVariable
}

export interface phoneCheckResponse {
}

export interface memberReadParams {
  memberId: string; //pathVariable
}

export interface memberReadResponse {
  name: string,
  email: string,
  phone: string,
  createdAt: string, 
  updatedAt: string,
}

export interface memberUpdateParams {
  name?: string,
  password?: string,
  email?: string,
  phone?: string,
}

export interface memberUpdateResponse {
  name: string,
  email: string,
  phone: string,
  createdAt: string, 
  updatedAt: string,
}

export interface memberListParams {
  bankname?: string, //queryString
  memberName?: string, //queryString
  isDummy: boolean //queryString
}

export interface memberListResponse {

}

export interface memberDeleteParams {
  memberId: string; //pathVariable
}

export interface memberDeleteResponse {
  id: string; 
  createdAt: string; 
  updatedAt: string; 
}