import axios, { AxiosInstance } from "axios";

const baseURL: string = "https://joa13.site/v1";
const testApi: string = "edbe9696-1dc3-44c6-a23c-33598f111e16";
export const localAxios: AxiosInstance = axios.create({
  baseURL,
  headers: {
    apiKey: testApi,
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});
