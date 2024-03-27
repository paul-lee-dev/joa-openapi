import { CreateDummyMemberParams, CreateDummyMemberResponse } from "@/models/Dummy.interface";
import { localAxios } from "./http-common";

export const createCustomers = async (
  params: CreateDummyMemberParams
): Promise<CreateDummyMemberResponse> => {
  const url = "bank";
  const response = await localAxios.post(url, params);
  return response.data;
};
