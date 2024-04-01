export interface ITransaction {
  transactionId: string;
  amount: number;
  depositorName: string;
  fromAccount: string;
  toAccount: string;
  createdAt: string;
}
