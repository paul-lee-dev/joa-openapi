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

{"accountId": "0.1514230302908227", "amount": 0, "balance": 0, "bankId": null, "depositAccount": "0.1514230302908227", "dummyId": null, "endDate": "09/26/2026", "isDormant": false, "nickname": "기본 계좌", "productId": 
"00a97e09-9e28-4b2f-8a00-2aa69745fa0b", "productName": "보통예금", "startDate": "03/27/2024", "term": 30, "transferLimit": 100, "withdrawAccount": "0.1514230302908227"}, "message": "계좌 개설에 성공했습니다.", "page": null, "status": 
"SUCCESS"}