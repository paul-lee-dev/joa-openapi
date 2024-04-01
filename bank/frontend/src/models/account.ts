export interface IAccount {
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
