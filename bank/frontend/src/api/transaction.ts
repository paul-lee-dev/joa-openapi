import {axiosInstance} from '.';

export const transferSend = async (params: any): Promise<any> => {
  const response = await axiosInstance.post('/transaction/send', params);
  return response.data;
};

export const getTransactionList = async (params: any): Promise<any> => {
  console.log(params);
  const response = await axiosInstance.get('/transaction/search', {params});
  return response.data;
};
