import SearchBankResponse, {
  CreateBankParams,
  CreateBankResponse,
  DeleteBankParams,
  DeleteBankResponse,
  ModifyBankParams,
  ModifyBankResponse,
  SearchBankContent,
  SearchBankParams,
} from "@/models/Bank.interface";
import { localAxios } from "./http-common";
import { AxiosResponse } from "axios";

export const createBank = async (
  params: CreateBankParams
): Promise<CreateBankResponse> => {
  const url = "bank";
  const response = await localAxios.post(url, params);
  return response.data;
};

export const searchBank = async () => {
  const url = "bank/search";
  const response: AxiosResponse<{
    status: string;
    message: string;
    data: SearchBankContent[];
    page?: number;
  }> = await localAxios.get(url);

  console.log("bank search status code: " + response.status);
  console.log(JSON.stringify(response.data));
  return response.data;
};

export const searchBankbyName = async (
  params: SearchBankParams
): Promise<SearchBankResponse> => {
  const url = `bank/search?name=${params.name}`;
  const response = await localAxios.post(url, params);
  return response.data;
};

export const modifyBank = async (
  params: ModifyBankParams
): Promise<ModifyBankResponse> => {
  const { bankId } = params;
  const url = `bank/${bankId}`;
  const response = await localAxios.patch(url, params);
  return response.data;
};

export const deleteBank = async (
  params: DeleteBankParams
): Promise<DeleteBankResponse> => {
  const { bankId } = params;
  const url = `bank/${bankId}`;
  const response = await localAxios.delete(url);
  return response.data;
};
