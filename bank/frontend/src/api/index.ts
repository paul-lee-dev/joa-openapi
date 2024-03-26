import axios from 'axios';

// const baseURL = process.env.REACT_APP_API_URL ?? `http://10.0.2.2:8080/v1`;
const baseURL = process.env.REACT_APP_API_URL ?? `http://joa13.site/v1`;

export const axiosInstance = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    memberId: '90240424-7a53-460c-8d4e-f786eda65fbb',
  },
});
