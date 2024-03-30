import axios from 'axios';

// const baseURL = process.env.REACT_APP_API_URL ?? `http://10.0.2.2:8080/v1`;
const openapiBbaseURL = process.env.REACT_APP_API_URL ?? `http://joa13.site/v1`;
const memberBaseURL = process.env.REACT_APP_API_URL ?? `http://joa13.site:8010`;

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
