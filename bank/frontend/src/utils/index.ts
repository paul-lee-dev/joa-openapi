import {
  IProduct,
  ProductPaymentType,
  ProductType,
  productTypeName,
} from '@/models/product';

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

export const calculateRate = (
  product: IProduct,
  amount: number,
  term: number,
  taxType: 'TAX' | 'NO_TAX',
) => {
  let calculatedInterest = 0;
  let totalPrincipal = amount;

  if (product.productType === 'TERM_DEPOSIT') {
    // 예금 이자 계산
    calculatedInterest = calculateTermDeposit(
      amount,
      product.rate,
      term,
      product.paymentType,
    );
  } else if (product.productType === 'FIXED_DEPOSIT') {
    // 적금 이자 계산
    calculatedInterest = calculateFixedDeposit(
      amount,
      product.rate,
      term,
      product.paymentType,
    );
    totalPrincipal *= term;
  }

  let taxInterest = 0;
  if (taxType === 'TAX') {
    taxInterest = (calculatedInterest * 154) / 1000;
  }

  let totalAmount = totalPrincipal + calculatedInterest - taxInterest;

  return {
    totalPrincipal,
    calculatedInterest,
    taxInterest,
    totalAmount,
  }; // 원금합계, 계산된 이자액, 세금액, 최종 지금액
};

const calculateTermDeposit = (
  principal: number,
  rate: number,
  term: number,
  paymentType: ProductPaymentType,
) => {
  let monthlyInterestRate = rate / 12 / 100;
  let interest;
  let totalAmount;

  if (paymentType === 'SIMPLE') {
    //단리 계산 공식: 원금 * (1 + 이자율 * 예치 개월수 / 12)
    interest = principal * monthlyInterestRate * term;
  } else {
    //복리 계산
    totalAmount = principal * Math.pow(1 + monthlyInterestRate, term);
    interest = totalAmount - principal;
  }

  return interest;
};

const calculateFixedDeposit = (
  monthlyDeposit: number,
  rate: number,
  term: number,
  paymentType: ProductPaymentType,
) => {
  let interest;

  if (paymentType === 'SIMPLE') {
    // 적금 단리 이자 계산
    interest = (((monthlyDeposit * term * (term + 1)) / 2) * rate) / 12 / 100; // 단리 이자            return totalPrincipal + simpleInterest;
  } else {
    // 적금 연복리 이자 계산
    let monthlyInterestRate = rate / 12 / 100;
    interest = 0;
    for (let i = 0; i < term; i++) {
      interest +=
        monthlyDeposit * (Math.pow(1 + monthlyInterestRate, term - i) - 1);
    }
  }
  return interest;
};
