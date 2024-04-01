import { localAxios } from "./http-common";

export const searchAccountList = async (params: any): Promise<any> => {
  const response = await localAxios.get("/account/search", { params });
  return response.data;
};
