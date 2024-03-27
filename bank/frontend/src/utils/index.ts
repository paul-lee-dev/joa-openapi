export const formatAmount = (n: number) => {
  const formatter = new Intl.NumberFormat('en-US');
  return formatter.format(n);
};
