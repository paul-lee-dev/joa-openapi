import {axiosInstance, memberAxiosInstance} from '.';

export const join = async (params: any): Promise<any> => {
  console.log(params);
  const response = await axiosInstance.post('/member', params);
  return response.data;
};

export const login = async (params: any): Promise<any> => {
  console.log(params);
  const response = await memberAxiosInstance.post('/member/login', params);
  return response.data;
};

export const logout = async (): Promise<any> => {
  const response = await memberAxiosInstance.get('/member/logout');
  return response.data;
};

export const emailConfirm = async (email: string): Promise<any> => {
  const response = await axiosInstance.get(`/member/email/${email}`);
  return response.data;
};

export const phoneConfirm = async (phone: string): Promise<any> => {
  const response = await axiosInstance.get(`/member/phone/${phone}`);
  return response.data;
};
