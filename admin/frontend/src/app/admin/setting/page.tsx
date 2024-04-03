"use client";

import Button from "@/components/button/button";
import tw from "tailwind-styled-components";
import InputText, { CommonInput } from "@/components/input/inputText";
import { useRecoilState, useRecoilValue } from "recoil";
import { adminDataAtom } from "@/store/atom";
import { useMutation } from "@tanstack/react-query";
import { issuedApiKey, reissuedApiKey } from "@/api/Admin";

export default function Profile() {
  const [adminData, setAdminData] = useRecoilState(adminDataAtom);
  const issuedMutation = useMutation({
    mutationFn: issuedApiKey,
    onSuccess: (data) => {
      console.log(data);
      alert("API 키가 발급되었습니다.");
      setAdminData({ ...adminData, apiKey: data.data });
    },
    onError: (err) => alert(err.message),
  });
  const reissuedMutation = useMutation({
    mutationFn: reissuedApiKey,
    onSuccess: (data) => {
      console.log(data);
      alert("API 키가 재발급되었습니다.");
      setAdminData({ ...adminData, apiKey: data.data });
    },
    onError: (err) => alert(err.message),
  });

  const getApiKey = () => {
    if (adminData.apiKey) {
      reissuedMutation.mutate();
    } else {
      issuedMutation.mutate();
    }
  };

  return (
    <Container>
      <div className="flex flex-col space-y-2">
        <h1 className="font-bold text-2xl">설정</h1>
        <p className="font-light text-gray-400">
          API 키를 발급 / 재발급받을 수 있어요.
        </p>
      </div>
      <Divider />
      <InputText label={"API 키"}>
        <div className="flex space-x-2">
          <CommonInput
            disabled
            className="w-80"
            value={adminData.apiKey ?? "API키 없음"}
          />
          <Button
            type="button"
            id={"create"}
            name={"발급"}
            onClick={getApiKey}
          />
        </div>
      </InputText>
    </Container>
  );
}

const Container = tw.div`
p-14
w-full
flex
flex-col
space-y-8
`;
const CommonForm = tw.form`
p-14
w-full
flex
flex-col
space-y-8
`;

const Divider = tw.div`
w-full
h-[1px]
bg-slate-300
my-4
`;
