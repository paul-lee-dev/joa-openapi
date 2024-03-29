export interface CreateBankParams {
  name: string; // 필수
  description: string; //필수
  uri?: string; // 선택 (은행이미지)
}

export interface CreateBankResponse {
  bankId: string;
  adminId: string;
  name: string;
  description: string;
  uri?: string;
  createdAt: string;
  updatedAt: string;
}

export interface SearchBankParams {
  name: string;
  page?: number;
}

export interface SearchBankContent {
  bankId: string;
  adminId: string;
  name: string;
  description: string;
  uri?: string;
  createdAt: string;
  updatedAt: string;
}
export default interface SearchBankResponse {
  data: SearchBankContent[];
  page?: number;
}

export interface DeleteBankParams {
  bankId: string;
}

export interface DeleteBankResponse {
  bankId?: string;
  adminId: string;
  name: string;
  description: string;
  uri?: string;
  createdAt: string;
  updatedAt: string;
}

export interface ModifyBankParams {
  bankId?: string;
  name: string;
  description: string;
  uri?: string;
}

export interface ModifyBankResponse {
  bankId: string;
  adminId: string;
  name: string;
  description: string;
  uri?: string;
  createdAt: string;
  updatedAt: string;
}
