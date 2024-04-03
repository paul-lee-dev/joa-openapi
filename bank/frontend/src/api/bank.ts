import {API_URL} from '@env';
import axios from 'axios';

export const getBankDetail = async ({
  bankId,
  apiKey,
}: {
  bankId: string;
  apiKey: string;
}): Promise<any> => {
  const response = await axios.get(`${API_URL}/bank/${bankId}`, {
    headers: {'Content-Type': 'application/json', apiKey},
  });
  return response.data;
};
