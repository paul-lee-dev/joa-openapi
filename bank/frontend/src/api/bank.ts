import {axiosInstance} from '.';

export const getBankDetail = async ({
  bankId,
  apiKey,
}: {
  bankId: string;
  apiKey: string;
}): Promise<any> => {
  const response = await axiosInstance.get(`/bank/${bankId}`, {
    headers: {apiKey},
  });
  return response.data;
};
