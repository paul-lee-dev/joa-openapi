import {axiosInstance} from '.';

export const join = async (params: any): Promise<any> => {
  const response = await axiosInstance.post('/member', params);
  return response.data;
};
