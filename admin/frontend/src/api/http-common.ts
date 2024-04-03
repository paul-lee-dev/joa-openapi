import axios, { AxiosInstance } from "axios";

const openapiBaseURL: string = "https://joa13.site/v1";
const adminBaseURL: string = "https://joa13.site/admin";

export const localAxios: AxiosInstance = axios.create({
  baseURL: openapiBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

export const adminLocalAxios: AxiosInstance = axios.create({
  baseURL: adminBaseURL,
  headers: {
    "Content-Type": "application/json",
  },
  // withCredentials: true,
});

localAxios.interceptors.request.use(
  (config) => {
    const persistAtom = sessionStorage.getItem("persistAtom");
    if (persistAtom) {
      const json = JSON.parse(persistAtom);
      config.headers["apiKey"] = json.adminData.apiKey;
      config.headers["Authorization"] = `Bearer ${json.adminData.accessToken}`;
      config.headers[
        "Authorization-refresh"
      ] = `Bearer ${json.adminData.refreshToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

adminLocalAxios.interceptors.request.use(
  (config) => {
    const persistAtom = sessionStorage.getItem("persistAtom");
    if (persistAtom) {
      const json = JSON.parse(persistAtom);
      config.headers["Authorization"] = `Bearer ${json.adminData.accessToken}`;
      config.headers[
        "Authorization-refresh"
      ] = `Bearer ${json.adminData.refreshToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
