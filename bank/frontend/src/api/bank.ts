import {axiosInstance} from '.';

export const getBankDetail = async ({
  bankId,
  apiKey,
}: {
  bankId: string;
  apiKey: string;
}): Promise<any> => {
  const response = await axiosInstance.post(`/bank/${bankId}`, {
    Headers: {apiKey},
  });
  return response.data;
};
