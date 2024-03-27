import {axiosInstance} from '.';

export const getProductList = async (): Promise<any> => {
  const response = await axiosInstance.post('/product');
  return response.data;
};
