import {axiosInstance} from '.';

export const createAccount = async (params: any): Promise<any> => {
  const response = await axiosInstance.post('/v1/account', params);
  return response.data;
};
