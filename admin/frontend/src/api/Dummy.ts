import { CreateDummyAccountParams, CreateDummyTransactionParams, DeleteDummyParams, SearchDummyContent, SearchDummyParams } from './../models/Dummy.interface';
import { CreateDummyMemberParams, CreateDummyMemberResponse } from "@/models/Dummy.interface";
import { localAxios } from "./http-common";

export const createDummyMembers = async (
  params: CreateDummyMemberParams
): Promise<CreateDummyMemberResponse> => {
  const url = "dummy";
  const response = await localAxios.post(url, params);
  return response.data;
};

export const createDummyAccounts = async (
  params: CreateDummyAccountParams
) => {
  const url = "dummy";
  const response = await localAxios.post(url, params);
  return response.data;
};

export const createDummyTransactions = async (
  params: CreateDummyTransactionParams
) => {
  const url = "dummy";
  const response = await localAxios.post(url, params);
  return response.data;
};

export const searchDummy = async (params: SearchDummyParams) => {
  const url = "dummy";
  const response = await localAxios.get(url);
  return response.data;
}
 
export const deleteDummy = async (params: DeleteDummyParams) => {

  

 }

