import {axiosInstance} from '.';

export const getProductList = async (params: any): Promise<any> => {
  const response = await axiosInstance.get('/product/search', {params});
  return response.data;
};
