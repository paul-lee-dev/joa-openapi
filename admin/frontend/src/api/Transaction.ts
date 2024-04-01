import { localAxios } from "./http-common";

export const searchTransactionList = async (params: any): Promise<any> => {
  const response = await localAxios.get("/transaction/search", { params });
  return response.data;
};
