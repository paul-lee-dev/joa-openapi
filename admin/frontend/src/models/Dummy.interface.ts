export interface CreateDummyAccountParams {
  count: number;
  users?: string[];
}

export interface CreateDummyMemberParams {
  count: number;
  bankId: string;
}

export interface CreateDummyTransactionParams {
  count: number;
  users?: string[];
}

export interface SearchDummyParams {
  dummyId: string;
  page?: number;
}

export interface SearchDummyContent {
  dummyId: string;
  adminId: string;
  name: string;
  memberCount?: number;
  accountCount?: number;
  transactionCount?: number;
  createdAt: string;
  updatedAt: string;
}

export interface CreateDummyMemberResponse {}

export default interface SearchDummyResponse {
  data: SearchDummyContent[];
  page?: number;
}

export interface DeleteAllDummyParams {
  bankId: string;
}

export interface ModifyDummyParams {
  bankId: string;
  name: string;
  description: string;
  uri?: string;
}

export interface ModifyDummyResponse {
  bankId: string;
  adminId: string;
  name: string;
  description: string;
  uri?: string;
  createdAt: string;
  updatedAt: string;
}

export interface DeleteDummyParams {
  dummyId?: string;
}
export default interface DeleteDummyResponse {
  dummyId: string;
  adminId: string;
  name: string;
  memberCount?: number;
  accountCount?: number;
  transactionCount?: number;
  createdAt: string;
  updatedAt: string;
}
