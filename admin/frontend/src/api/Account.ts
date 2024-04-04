import { localAxios } from "./http-common";

export const searchAccountList = async (params: any): Promise<any> => {
  const response = await localAxios.get("/account/search", { params });
  return response.data;
};

export const createAccount = async (
  memberId: string,
  params: any
): Promise<any> => {
  const response = await localAxios.post("/account", params, {
    headers: {
      memberId,
    },
  });
  return response.data;
};

export const updateAccount = async (params: any): Promise<any> => {
  const response = await localAxios.patch("/account", params);
  return response.data;
};

export const deleteAccount = async (params: any): Promise<any> => {
  const response = await localAxios.delete("/account/", params);
  return response.data;
};

export const getAccountDetail = async (accountId: string): Promise<any> => {
  const response = await localAxios.post(`/account/detail`, { accountId });
  return response.data;
};
