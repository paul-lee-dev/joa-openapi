import { localAxios } from "@/api/http-common";

export const searchProduct = async (): Promise<any> => {
  const response = await localAxios.get("/product/search");
  return response.data;
};
