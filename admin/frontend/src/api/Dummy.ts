import { localAxios } from "./http-common";

export const searchDummyList = async (params: any): Promise<any> => {
  const response = await localAxios.get("/dummy/search", { params });
  return response.data;
};

export const createDummyMember = async (params: any): Promise<any> => {
  const response = await localAxios.post("/dummy/member", params);
  return response.data;
};
export const createDummyAccount = async (params: any): Promise<any> => {
  const response = await localAxios.post("/dummy/account", params);
  return response.data;
};
export const createDummyTransaction = async (params: any): Promise<any> => {
  const response = await localAxios.post("/dummy/transaction", params);
  return response.data;
};

export const getDummyDetail = async (dummyId: string): Promise<any> => {
  const response = await localAxios.get(`/dummy/${dummyId}`);
  return response.data;
};

export const updateDummy = async (
  dummyId: string,
  params: any
): Promise<any> => {
  const response = await localAxios.patch(`/dummy/${dummyId}`, params);
  return response.data;
};

export const deleteDummy = async (dummyId: string): Promise<any> => {
  const response = await localAxios.delete(`/dummy/${dummyId}`);
  return response.data;
};
