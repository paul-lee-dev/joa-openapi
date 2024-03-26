import { CreateBankParams, SearchBankParams } from "@/models/Bank.interface";
import { localAxios } from "./http-common";

export const createBank = async (params: CreateBankParams) => {
  const url = 'bank';
  const response = await localAxios.post(url, params);
  return response.data;
}

export const searchBank = async (params: SearchBankParams) => {
  
 }