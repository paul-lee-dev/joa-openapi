export interface IAccount {
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

export type AccountTaxType = "TAX" | "NO_TAX";
