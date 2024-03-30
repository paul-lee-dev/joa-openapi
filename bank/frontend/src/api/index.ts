import {API_URL, MEMBER_API_URL} from '@env';
import axios from 'axios';

const openapiBbaseURL = API_URL ?? '';
const memberBaseURL = MEMBER_API_URL ?? '';

export const axiosInstance = axios.create({
  baseURL: openapiBbaseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});

export const memberAxiosInstance = axios.create({
  baseURL: memberBaseURL,
  headers: {
    'Content-Type': 'application/json',
  },
});
