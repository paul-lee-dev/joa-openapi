import {API_URL, MEMBER_API_URL} from '@env';
import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const memberAxiosInstance = axios.create({
  baseURL: MEMBER_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
