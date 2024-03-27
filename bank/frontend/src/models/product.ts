export type ProductType = 'ORDINARY_DEPOSIT' | 'TERM_DEPOSIT' | 'FIXED_DEPOSIT';
export type ProductPaymentType = 'SIMPLE' | 'COMPOUND';

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
