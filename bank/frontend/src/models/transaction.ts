export interface ITransaction {
  transactionId: string;
  amount: number;
  depositorName: string;
  fromAccount: string | null;
  toAccount: string | null;
  createdAt: string;
}
