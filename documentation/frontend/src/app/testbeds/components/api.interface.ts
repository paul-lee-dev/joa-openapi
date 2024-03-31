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
  