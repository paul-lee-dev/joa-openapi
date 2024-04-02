import { IAdminData, defaultAdminData } from "@/models/Admin.interface";
import { atom } from "recoil";
import { recoilPersist } from "recoil-persist";

const sessionStorage = typeof window !== "undefined" ? window.sessionStorage : undefined;

const { persistAtom } = recoilPersist({
  key: "persistAtom",
  storage: sessionStorage,
});

export const adminDataAtom = atom<IAdminData>({
  key: "adminData",
  default: defaultAdminData,
  effects_UNSTABLE: [persistAtom],
});
