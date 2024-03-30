export interface CreateAccountParams {
  nickname: string;
  password: string;
  balance: number;
  term: number;
  bankId?: string;
}
export interface CreateAccountResponse {
  accountId: string;
  nickname: string;
  balance: number;
  isDormant: boolean;
  transferLimit: number;
  startDate: string;
  endDate: string;
  term: number;
  depositAccount: string;
  withdrawAccount: string;
  amount: number;
  dummyId: string | null;
  createdAt: string;
  updatedAt: string;
}

export interface SearchAccountParams {
  bankList: string;
  isDummy: boolean;
  isDormant: boolean;
  keywordType: string;
  name: string;
  sortBy: string
  page: number | null;
}

export interface SearchAccountContent {
  accountId: string;
  nickname: string;
  balance: number;
  isDormant: boolean;
  transferLimit: number;
  startDate: string;
  endDate: string;
  term: number;
  depositAccount: string;
  withdrawAccount: string;
  amount: number;
  dummyId: string;
  createdAt: string;
  updatedAt: string;
}
export default interface SearchAccountResponse {
  content: SearchAccountContent[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
}

export interface DeleteAccountParams {
  accountId: string;
  password: number;
}

export interface DeleteAccountResponse {
  accountId: string;
  nickname: string;
  description: string;
  createdAt: string;
  updatedAt: string;
}

export interface ModifyAccountParams {
  accountId: string;
  name: string;
  description: string;
  uri?: string;
}

export interface ModifyAccountResponse {
  accountId: string;
  nickname: string;
  withdrawAccount: string;
  createdAt: string;
  updatedAt: string;
}
