import { localAxios } from "./http-common";

export const searchTransactionList = async (params: any): Promise<any> => {
  const response = await localAxios.get("/transaction/search", { params });
  return response.data;
};

export const depositTransaction = async (params: any): Promise<any> => {
  const response = await localAxios.post("/transaction/deposit", params);
  return response.data;
};

export const withdrawTransaction = async (params: any): Promise<any> => {
  const response = await localAxios.post("/transaction/withdraw", params);
  return response.data;
};

export const sendTransaction = async (params: any): Promise<any> => {
  const response = await localAxios.post("/transaction/send", params);
  return response.data;
};
