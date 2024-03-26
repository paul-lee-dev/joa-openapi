import axios, { AxiosInstance } from "axios";

const baseURL: string = "http://joa13.site/v1";

export const localAxios: AxiosInstance = axios.create({
  baseURL,
  headers: {
    adminId: "c11599f2-4fe1-42df-aa9a-ef378b0b8e3f",
    "Content-Type": "application/json",
  },
  withCredentials: true,
});
