import {ProductType, productTypeName} from '@/models/product';

export const formatAmount = (n: number) => {
  const formatter = new Intl.NumberFormat('en-US');
  return formatter.format(n);
};

export const formatDate = (date: Date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(
    2,
    '0',
  )}`;
};

export const getProductTypeName = (type: ProductType) => {
  return productTypeName.find(p => p.type === type);
};
