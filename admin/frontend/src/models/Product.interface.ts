export interface IProduct {
  productId: string;
  name: string;
  description: string;
  minAmount: number;
  maxAmount: number;
  rate: number;
  productType: ProductType;
  paymentType: ProductPaymentType;
  isDone: boolean;
  bankId: string;
}

export type ProductPaymentType = "SIMPLE" | "COMPOUND";

export type ProductType = "ORDINARY_DEPOSIT" | "TERM_DEPOSIT" | "FIXED_DEPOSIT";
