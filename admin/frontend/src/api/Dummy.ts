import { localAxios } from "./http-common";

export const searchDummyList = async (params: any): Promise<any> => {
  const response = await localAxios.get("/dummy/search", { params });
  return response.data;
};
