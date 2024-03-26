import {axiosInstance} from '.';

export const createAccount = async (params: any): Promise<any> => {
  const response = await axiosInstance.post('/account', params);
  return response.data;
};

export const getAccountList = async (): Promise<any> => {
  const response = await axiosInstance.post('/account/member');
  return response.data;
};

export const updateAccount = async (params: any): Promise<any> => {
  const response = await axiosInstance.patch('/account', params);
  return response.data;
};
