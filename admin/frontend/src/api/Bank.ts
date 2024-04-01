import { localAxios } from "./http-common";

export const searchBankList = async (params: any): Promise<any> => {
  const response = await localAxios.get("/bank/search", { params });
  return response.data;
};

export const createBank = async (params: any): Promise<any> => {
  const response = await localAxios.post("/bank", params);
  return response.data;
};

export const updateBank = async (bankId: string, params: any): Promise<any> => {
  const response = await localAxios.patch(`/bank/${bankId}`, params);
  return response.data;
};

export const deleteBank = async (bankId: string): Promise<any> => {
  const response = await localAxios.delete(`/bank/${bankId}`);
  return response.data;
};

export const getBankDetail = async (bankId: string): Promise<any> => {
  const response = await localAxios.get(`/bank/${bankId}`);
  return response.data;
};
