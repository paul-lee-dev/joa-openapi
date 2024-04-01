import { localAxios } from "@/api/http-common";

export const searchProductList = async (params: any): Promise<any> => {
  const response = await localAxios.get("/product/search", { params });
  return response.data;
};

export const createProduct = async (params: any): Promise<any> => {
  const response = await localAxios.post("/product", params);
  return response.data;
};

export const doneProduct = async (productId: string): Promise<any> => {
  const response = await localAxios.patch(`/product/${productId}`);
  return response.data;
};

export const deleteProduct = async (productId: string): Promise<any> => {
  const response = await localAxios.delete(`/product/${productId}`);
  return response.data;
};

export const getProductDetail = async (productId: string): Promise<any> => {
  const response = await localAxios.get(`/product/${productId}`);
  return response.data;
};
