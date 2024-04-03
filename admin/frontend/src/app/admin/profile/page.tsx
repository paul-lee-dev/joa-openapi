"use client";

import Button from "@/components/button/button";
import tw from "tailwind-styled-components";
import InputText, {
  CommonErrorMsg,
  CommonInput,
} from "@/components/input/inputText";
import { useRecoilState, useRecoilValue } from "recoil";
import { adminDataAtom } from "@/store/atom";
import { useMutation, useQuery } from "@tanstack/react-query";
import { deleteAdmin, getAdminDetail, logout, updateAdmin } from "@/api/Admin";
import { HiEmojiHappy } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { defaultAdminData } from "@/models/Admin.interface";
import { redirect } from "next/navigation";

interface UpdateAdminForm {
  name: string;
  phone: string;
}

export default function Profile() {
  const [adminData, setAdminData] = useRecoilState(adminDataAtom);
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["Profile"],
    queryFn: async () => {
      const res = await getAdminDetail();
      setValue("name", res.data.name);
      setValue("phone", res.data.phone);
      return res;
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    watch,
  } = useForm<UpdateAdminForm>({
    defaultValues: {
      name: "",
      phone: "",
    },
  });
  const updateMutation = useMutation({
    mutationFn: updateAdmin,
    onSuccess: (data) => {
      console.log(data);
      alert("관리자 정보가 수정되었습니다.");
      refetch();
    },
    onError: (err) => alert(err.message),
  });
  const deleteMutation = useMutation({
    mutationFn: deleteAdmin,
    onSuccess: (data) => {
      console.log(data);
      alert("관리자가 탈퇴되었습니다.");
      logoutMutation.mutate();
    },
    onError: (err) => alert(err.message),
  });
  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      setAdminData(defaultAdminData);
      redirect("/");
    },
    onError: (err) => alert(err.message),
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  const onSubmit = (formData: UpdateAdminForm) => {
    updateMutation.mutate(formData);
  };

  const deleteAdminConfirm = () => {
    let result = confirm("정말로 탈퇴하시겠습니까?");
    if (result) {
      deleteMutation.mutate();
    }
  };

  return (
    <Container>
      <div className="flex items-end justify-between w-full pr-4">
        <div className="flex flex-col space-y-2">
          <h1 className="font-bold text-2xl">마이페이지</h1>
          <p className="font-light text-gray-400">
            관리자 회원정보를 수정할 수 있어요
          </p>
        </div>
        <button
          className="text-gray-500 font-sm hover:text-pink-500"
          onClick={() => logoutMutation.mutate()}
        >
          로그아웃
        </button>
      </div>
      <Divider />
      <CommonForm onSubmit={handleSubmit(onSubmit)}>
        <div className="p-4 pb-0 flex justify-between items-end">
          <div className="flex flex-col space-y-2">
            <div className="flex space-x-4 items-center text-gray-600">
              <HiEmojiHappy className="w-10 h-10" />
              <h1 className="font-bold text-2xl">{watch("name")}</h1>
            </div>
            <h1 className="font-light text-xs text-gray-400">
              {data?.data?.memberId}
            </h1>
          </div>
          <div className="flex flex-col">
            <h1 className="text-sm font-light">
              생성:{" "}
              <span className="text-gray-500">{data?.data?.createdAt}</span>
            </h1>
            <h1 className="text-sm font-light">
              수정:{" "}
              <span className="text-gray-500">{data?.data?.updatedAt}</span>
            </h1>
          </div>
        </div>
        <Divider />
        <div className="p-4 flex flex-col space-y-8">
          <InputText label={"고객 이름"}>
            <CommonInput
              className="w-80"
              {...register("name", {
                required: "고객 이름을 입력해주세요.",
                maxLength: {
                  value: 8,
                  message: "이름을 최대 8자이내로 작성해주세요",
                },
              })}
            />
            <CommonErrorMsg>{errors.name?.message}</CommonErrorMsg>
          </InputText>
          <InputText label={"전화번호"}>
            <CommonInput
              className="w-80"
              {...register("phone", {
                required: "전화번호를 입력해주세요.",
                pattern: {
                  value:
                    /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
                  message: "올바른 전화번호 형식이 아닙니다.",
                },
              })}
            />
            <CommonErrorMsg>{errors.phone?.message}</CommonErrorMsg>
          </InputText>
        </div>
        <Divider />
        <div className="flex gap-6 justify-between">
          <h1 className="text-xs text-gray-500">
            탈퇴하시려면{" "}
            <span
              onClick={deleteAdminConfirm}
              className="underline cursor-pointer"
            >
              여기
            </span>
            를 누르세요
          </h1>
          <Button id={"edit"} name={"수정"} type="submit"></Button>
        </div>
      </CommonForm>
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

const ErrorMsg = tw.span`
text-sm
text-red-400
`;
