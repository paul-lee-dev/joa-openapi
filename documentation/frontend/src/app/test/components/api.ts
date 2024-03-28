import { JoinMemberParams, JoinMemberResponse } from "./params";
import { localAxios } from "./http-common";

export const joinMember = async (
  params: JoinMemberParams
): Promise<JoinMemberResponse> => {
  const url = "member";
  const response = await localAxios.post(url, params);
  return response.data;
};

