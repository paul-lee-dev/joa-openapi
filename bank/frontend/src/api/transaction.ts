import {axiosInstance} from '.';

export const transferSend = async (params: any): Promise<any> => {
  const response = await axiosInstance.post('/transaction/send', params);
  return response.data;
};
