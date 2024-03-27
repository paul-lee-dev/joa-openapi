export type ProductType = 'ORDINARY_DEPOSIT' | 'TERM_DEPOSIT' | 'FIXED_DEPOSIT';
export type ProductPaymentType = 'SIMPLE' | 'COMPOUND';

export const productTypeName = {
  ORDINARY_DEPOSIT: '입출금통장',
  TERM_DEPOSIT: '정기예금',
  FIXED_DEPOSIT: '정기적금',
};

export interface IProduct {
  productId: string;
  name: string;
  description: string;
  minAmount: number;
  maxAmount: number;
  rate: null;
  productType: ProductType;
  paymentType: ProductPaymentType;
  isDone: boolean;
  createdAt: string;
  updatedAt: string;
}
