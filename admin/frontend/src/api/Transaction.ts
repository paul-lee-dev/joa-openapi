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

export const getTransactionDetail = async (
  transactionId: string
): Promise<any> => {
  const response = await localAxios.get(`/transaction/${transactionId}`);
  return response.data;
};

export const updateTransaction = async (
  transactionId: string,
  params: any
): Promise<any> => {
  const response = await localAxios.patch(
    `/transaction/${transactionId}`,
    params
  );
  return response.data;
};

export const deleteTransaction = async (
  transactionId: string
): Promise<any> => {
  const response = await localAxios.delete(`/transaction/${transactionId}`);
  return response.data;
};
