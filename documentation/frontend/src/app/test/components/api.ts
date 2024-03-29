export interface JoinMemberParams {
  name: string;
  email: string;
  phone: string;
  password: string;
  bankId: string; 
}

export interface JoinMemberResponse {

}

export interface ExampleMemberParams {
  name: string; // 필수
  description: string; //필수
  uri?: string; // 선택 (은행이미지)
}

export interface ExampleMemberResponse {
  bankId: string;
  adminId: string;
  name: string;
  description: string;
  uri?: string;
  createdAt: string;
  updatedAt: string;
}
