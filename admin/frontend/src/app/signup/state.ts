import { atom } from "recoil";

const ModalState = atom({
  key: "modalState",
  default: false,
});

const VerificationState = atom({
  key: "verificationState",
  default: "",
});

export { ModalState, VerificationState };
