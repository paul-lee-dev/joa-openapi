import axios, { AxiosInstance } from "axios";

const baseURL: string = "http://localhost:8080/v1";

export const localAxios: AxiosInstance = axios.create({
  baseURL,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});