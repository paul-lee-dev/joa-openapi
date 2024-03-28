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

export type ProductPaymentType = 'SIMPLE' | 'COMPOUND';
export const ProductPaymentTypeName = {
  SIMPLE: '단리',
  COMPOUND: '복리',
};

export type ProductType = 'ORDINARY_DEPOSIT' | 'TERM_DEPOSIT' | 'FIXED_DEPOSIT';
interface IProductTypeName {
  type: ProductType;
  title: string;
  description: string;
}
export const productTypeName: IProductTypeName[] = [
  {
    type: 'ORDINARY_DEPOSIT',
    title: '입출금통장',
    description: '손쉬운 계좌개설',
  },
  {
    type: 'TERM_DEPOSIT',
    title: '정기예금',
    description: '만기일에 쌓인 이자를 받을 수 있어요',
  },
  {
    type: 'FIXED_DEPOSIT',
    title: '정기적금',
    description: '매월 일정한 금액 저축해요',
  },
];
