import {memberDataAtom} from '@/store/atoms';
import axios from 'axios';
import {useRecoilValue} from 'recoil';

const baseURL = process.env.REACT_APP_API_URL ?? '';

export const axiosInstance = axios.create({
  baseURL,
});

axiosInstance.interceptors.request.use(
  config => {
    const memberData = useRecoilValue(memberDataAtom);
    if (memberData.isLogin && memberData.member) {
      config.headers.memberId = memberData.member.memberId;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);
