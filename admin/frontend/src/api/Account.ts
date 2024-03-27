import SearchBankResponse, {
  CreateBankParams,
  CreateBankResponse,
  DeleteBankParams,
  DeleteBankResponse,
  ModifyBankParams,
  ModifyBankResponse,
  SearchBankParams,
} from "@/models/Bank.interface";
import { accountAxios } from "./http-common";

export const createBank = async (
  params: CreateBankParams
): Promise<CreateBankResponse> => {
  const url = "bank";
  const response = await accountAxios.post(url, params);
  return response.data;
};

export const searchBank = async (): Promise<SearchBankResponse> => {
  const url = "bank/search";
  const response = await accountAxios.get(url);
  return response.data;
};

export const searchBankbyName = async (
  params: SearchBankParams
): Promise<SearchBankResponse> => {
  const url = `bank/search?name=${params.name}`;
  const response = await accountAxios.post(url, params);
  return response.data;
};

export const modifyBank = async (
  params: ModifyBankParams
): Promise<ModifyBankResponse> => {
  const { bankId } = params;
  const url = `bank/${bankId}`;
  const response = await accountAxios.patch(url, params);
  return response.data;
};


export const deleteBank = async (
  params: DeleteBankParams
): Promise<DeleteBankResponse> => {
  const url = `bank/${params.bankId}`;
  const response = await accountAxios.delete(url);
  return response.data;
};