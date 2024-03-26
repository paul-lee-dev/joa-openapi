import {axiosInstance} from '.';

export const join = async (params: any): Promise<any> => {
  console.log(params);
  const response = await axiosInstance.post('/member', params);
  return response.data;
};
