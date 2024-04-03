"use client";

import Button from "@/components/button/button";
import InputText, { CommonErrorMsg, CommonInput } from "@/components/input/inputText";
import BankSelect from "@/components/select/bankSelect";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";
import { createDummyMember } from "@/api/Dummy";

interface CreateDummyMemberForm {
  name: string;
  count: number;
  bankId: string;
}

export default function CreateDummyMember() {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: createDummyMember,
    onSuccess: (data) => {
      console.log(data);
      alert("더미 고객이 생성되었습니다.");
      router.replace("/admin/dummy");
    },
    onError: (err) => alert(err.message),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    watch,
  } = useForm<CreateDummyMemberForm>({
    defaultValues: {
      name: "",
      count: 0,
      bankId: "",
    },
  });

  const onSubmit = (data: CreateDummyMemberForm) => {
    console.log(data);
    if (data.bankId === "") {
      setError("bankId", { type: "empty", message: "은행을 선택해주세요." });
      return;
    }
    mutation.mutate({
      ...data,
      name: data.name || null,
    });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-4 flex flex-col space-y-8">
        <div className="relative">
          <BankSelect setBankId={(value) => setValue("bankId", value)} bankId={watch("bankId")} />
          <CommonErrorMsg>{errors.bankId?.message}</CommonErrorMsg>
        </div>
        <InputText label={"생성내역 이름 (선택)"}>
          <CommonInput className="w-80" {...register("name")} />
          <CommonErrorMsg>{errors.name?.message}</CommonErrorMsg>
        </InputText>
        <InputText label={"생성할 더미 고객 수"}>
          <CommonInput
            className="w-80"
            type="number"
            {...register("count", {
              required: "생성할 더미 고객 수을 입력해주세요.",
              validate: {
                minimum: (value) => (value > 0 ? true : "생성할 더미 고객 수를 입력해주세요"),
              },
            })}
          />
          <CommonErrorMsg>{errors.count?.message}</CommonErrorMsg>
        </InputText>
        <Divider />
      </div>

      <div className="flex gap-6 justify-end">
        <Button type="button" onClick={() => router.back()} id={"create"} name={"취소"} />
        <Button type="submit" id={"create"} name={"등록"} />
      </div>
    </form>
  );
}

const Divider = tw.div`
w-full
h-[1px]
bg-slate-300
my-4
`;
