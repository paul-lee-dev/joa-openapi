import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage =
  typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "persistAtom",
  storage: sessionStorage,
});

interface IAdminData {
  isLogin: boolean;
  apiKey: string | null;
  accessToken: string | null;
  refreshToken: string | null;
}

const defaultAdminData: IAdminData = {
  isLogin: false,
  apiKey: null,
  accessToken: null,
  refreshToken: null,
};

export const adminDataAtom = atom<IAdminData>({
  key: "adminData",
  default: defaultAdminData,
  effects_UNSTABLE: [persistAtom],
});
