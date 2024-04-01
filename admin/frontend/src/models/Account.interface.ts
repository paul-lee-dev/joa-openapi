export interface IAccountSearch {
  accountId: string;
  accountName: string;
  balance: number;
  isDormant: boolean;
  transferLimit: number;
  startDate: string;
  endDate: string;
  term: number;
  depositAccount: string;
  withdrawAccount: string;
  amount: number;
  holderName: string;
  productName: string | null;
  dummyName: string | null;
  bankId: string;
  createdAt: string;
  updatedAt: string;
}

export interface IAccountDetail {
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
}

export type AccountTaxType = "TAX" | "NO_TAX";
