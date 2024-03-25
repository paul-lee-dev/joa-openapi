import axios from 'axios';
import {axiosInstance} from '.';

export const createAccount = (params: any): Promise<any> => {
  console.log(params);
  return axiosInstance.post('/account', params);
};
