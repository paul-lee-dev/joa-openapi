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
export const ProductPaymentTypeName = {
  SIMPLE: "단리",
  COMPOUND: "복리",
};

export type ProductType = "ORDINARY_DEPOSIT" | "TERM_DEPOSIT" | "FIXED_DEPOSIT";
export const ProductTypeName = {
  ORDINARY_DEPOSIT: "입출금통장",
  TERM_DEPOSIT: "정기예금",
  FIXED_DEPOSIT: "정기적금",
};
