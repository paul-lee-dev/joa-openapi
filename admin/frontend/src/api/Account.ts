import SearchAccountResponse, {
  CreateAccountParams,
  CreateAccountResponse,
  DeleteAccountParams,
  DeleteAccountResponse,
  ModifyAccountParams,
  ModifyAccountResponse,
  SearchAccountParams,
} from "@/models/Account.interface";
import { localAxios } from "./http-common";

export const createAccount = async (
  params: CreateAccountParams
): Promise<CreateAccountResponse> => {
  const url = "account";
  const response = await localAxios.post(url, params);
  return response.data;
};

export const searchAccount = async (): Promise<SearchAccountResponse> => {
  const url = "account/search";
  const response = await localAxios.get(url);
  return response.data;
};

export const searchAccountbyName = async (
  params: SearchAccountParams
): Promise<SearchAccountResponse> => {
  const url = `account/search?name=${params.name}`;
  const response = await localAxios.post(url, params);
  return response.data;
};

export const modifyAccount = async (
  params: ModifyAccountParams
): Promise<ModifyAccountResponse> => {
  const { accountId } = params;
  const url = `account/${accountId}`;
  const response = await localAxios.patch(url, params);
  return response.data;
};

export const deleteAccount = async (
  params: DeleteAccountParams
): Promise<DeleteAccountResponse> => {
  const url = `account/${params.accountId}`;
  const response = await localAxios.delete(url);
  return response.data;
};

export const getAccountList = async (): Promise<any> => {
  const response = await localAxios.post("/account/member");
  return response.data;
};
