"use client";

import Button from "@/components/button/button";
import InputText, { CommonErrorMsg, CommonInput } from "@/components/input/inputText";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { createBank } from "@/api/Bank";
import tw from "tailwind-styled-components";

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
    <CommonForm onSubmit={handleSubmit(onSubmit)}>
      <div className="p-4 flex flex-col space-y-8">
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
  );
}
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
