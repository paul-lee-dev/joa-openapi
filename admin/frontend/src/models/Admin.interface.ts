export interface CreateAdminParams {
  email: string;
  name: string;
  phone: string;
  password: string;
}

export interface IAdminData {
  isLogin: boolean;
  apiKey: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

export const defaultAdminData: IAdminData = {
  isLogin: false,
  apiKey: null,
  accessToken: null,
  refreshToken: null,
};
