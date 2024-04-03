import { adminLocalAxios } from "./http-common";

export const join = async (params: any): Promise<any> => {
  const response = await adminLocalAxios.post("", params);
  return response.data;
};

export const login = async (params: any): Promise<any> => {
  const response = await adminLocalAxios.post("/login", params);
  return response.data;
};

export const logout = async (): Promise<any> => {
  const response = await adminLocalAxios.get("/logout");
  return response.data;
};

export const issuedApiKey = async (): Promise<any> => {
  const response = await adminLocalAxios.post("/issuedApiKey");
  return response.data;
};

export const reissuedApiKey = async (): Promise<any> => {
  const response = await adminLocalAxios.post("/reissuedApiKey");
  return response.data;
};

export const getAdminDetail = async (): Promise<any> => {
  const response = await adminLocalAxios.get("");
  return response.data;
};

export const updateAdmin = async (params: any): Promise<any> => {
  const response = await adminLocalAxios.patch("", params);
  return response.data;
};

export const deleteAdmin = async (): Promise<any> => {
  const response = await adminLocalAxios.delete("");
  return response.data;
};
