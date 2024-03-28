import {ProductType, productTypeName} from '@/models/product';

export const formatAmount = (n: number) => {
  const formatter = new Intl.NumberFormat('en-US');
  return formatter.format(n);
};

export const getProductTypeName = (type: ProductType) => {
  return productTypeName.find(p => p.type === type);
};
