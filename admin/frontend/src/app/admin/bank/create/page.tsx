"use client";

import Button from "@/components/button/button";
import InputText, { CommonErrorMsg, CommonInput } from "@/components/input/inputText";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { createBank } from "@/api/Bank";
import tw from "tailwind-styled-components";
import Link from "next/link";

interface CreateBankForm {
  name: string;
  description: string;
  uri: string;
}

export default function MemberCreate() {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: createBank,
    onSuccess: (data) => {
      console.log(data);
      alert("은행이 생성되었습니다.");
      router.replace(`/admin/bank/${data.data.bankId}`);
    },
    onError: (err) => alert(err.message),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CreateBankForm>({
    defaultValues: {
      name: "",
      description: "",
      uri: "",
    },
  });

  const onSubmit = (data: CreateBankForm) => {
    mutation.mutate({
      name: data.name,
      description: data.description,
      uri: data.uri,
    });
  };

  return (
    <>
      <div className="flex flex-col py-4 h-28 justify-center">
        <div className="flex space-x-2">
          <Link
            href={"/admin/bank"}
            className="text-md font-medium text-gray-500 hover:text-pink-500"
          >
            은행
          </Link>
          <h1 className="text-md font-medium text-gray-500">/</h1>
          <Link
            href={"/admin/bank/create"}
            className="text-md font-medium text-gray-500 hover:text-pink-500"
          >
            은행생성
          </Link>
        </div>
      </div>

      <CommonForm onSubmit={handleSubmit(onSubmit)}>
        <div className="p-4 flex flex-col space-y-8">
          <div className="flex flex-col space-y-2">
            <h1 className="font-bold text-2xl">은행 생성</h1>
            <p className="font-light text-gray-400">나만의 가상 은행을 만들어보세요.</p>
          </div>
          <Divider />
          <InputText label={"은행명"}>
            <CommonInput
              className="w-80"
              {...register("name", {
                required: "은행명을 입력해주세요.",
                maxLength: {
                  value: 8,
                  message: "이름을 최대 8자이내로 작성해주세요",
                },
              })}
            />
            <CommonErrorMsg>{errors.name?.message}</CommonErrorMsg>
          </InputText>
          <InputText label={"은행 설명"}>
            <CommonInput
              className="w-full"
              {...register("description", {
                required: "은행 설명을 입력해주세요.",
              })}
            />
            <CommonErrorMsg>{errors.description?.message}</CommonErrorMsg>
          </InputText>
          <InputText label={"은행 로고 uri"}>
            <CommonInput className="w-80" {...register("uri")} />
            <CommonErrorMsg>{errors.uri?.message}</CommonErrorMsg>
          </InputText>
        </div>
        <Divider />
        <div className="flex gap-6 justify-end">
          <Button type="button" onClick={() => router.back()} id={"create"} name={"취소"} />
          <Button type="submit" id={"create"} name={"등록"} />
        </div>
      </CommonForm>
    </>
  );
}
const CommonForm = tw.form`
p-14
pt-4
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
