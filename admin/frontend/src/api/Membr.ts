import { localAxios } from "./http-common";

export const searchMemberList = async (params: any): Promise<any> => {
  const response = await localAxios.get("/member/search", { params });
  return response.data;
};
