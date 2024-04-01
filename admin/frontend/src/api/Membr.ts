import { localAxios } from "./http-common";

export const searchMemberList = async (params: any): Promise<any> => {
  const response = await localAxios.get("/member/search", { params });
  return response.data;
};

export const createMember = async (params: any): Promise<any> => {
  const response = await localAxios.post("/member", params);
  return response.data;
};

export const updateMember = async (
  memberId: string,
  params: any
): Promise<any> => {
  const response = await localAxios.patch(`/member/${memberId}`, params);
  return response.data;
};

export const deleteMember = async (memberId: string): Promise<any> => {
  const response = await localAxios.delete(`/member/${memberId}`);
  return response.data;
};

export const getMemberDetail = async (memberId: string): Promise<any> => {
  const response = await localAxios.get(`/member/${memberId}`);
  return response.data;
};
