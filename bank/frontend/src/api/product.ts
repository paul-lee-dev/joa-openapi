import {axiosInstance} from '.';

export const getProductList = async (): Promise<any> => {
  const response = await axiosInstance.get('/product/search');
  return response.data;
};
