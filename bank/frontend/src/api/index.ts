import axios from 'axios';

const baseURL = process.env.REACT_APP_API_URL ?? `http://10.0.2.2:8080/v1`;

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    memberId: '0e2b474f-b58e-4560-95ac-d5ae60f59d2c',
  },
});
