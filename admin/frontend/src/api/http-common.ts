import axios, { AxiosInstance } from "axios";

const baseURL: string = "http://joa13.site/v1";
const testAdmin: string = "c11599f2-4fe1-42df-aa9a-ef378b0b8e3f";
const testMember: string = "36a5b0b6-a0a2-46a6-bc11-647f40a162e2";
export const localAxios: AxiosInstance = axios.create({
  baseURL,
  headers: {
    adminId: testAdmin,
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const accountAxios: AxiosInstance = axios.create({
  baseURL,
  headers: {
    adminId: testMember,
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export const dummyAxios: AxiosInstance = axios.create({
  baseURL,
  headers: {
    adminId: testMember,
    "Content-Type": "application/json",
  },
  withCredentials: true,
});