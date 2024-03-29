import axios, { AxiosInstance } from "axios";

const baseURL: string = "https://joa13.site/v1";
const testApi: string = "9b5c450f-abd4-419f-b092-bcd96e66392f";
export const localAxios: AxiosInstance = axios.create({
  baseURL,
  headers: {
    apiKey: testApi,
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});
