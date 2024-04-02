"use client";

import Button from "@/components/button/button";
import InputText, { CommonErrorMsg, CommonInput } from "@/components/input/inputText";
import BankSelect from "@/components/select/bankSelect";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";
import { depositTransaction, sendTransaction, withdrawTransaction } from "@/api/Transaction";

interface CreateDummyAccountForm {
  name: string;
  count: number;
  bankId: string;
  productId: string;
  users: string[];
}

export default function CreateDummyAccount() {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: sendTransaction,
    onSuccess: (data) => {
      console.log(data);
      alert("더미 계좌가 생성되었습니다.");
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
  } = useForm<CreateDummyAccountForm>({
    defaultValues: {
      name: "",
      count: 0,
      bankId: "",
      productId: "",
      users: [],
    },
  });

  const onSubmit = (data: CreateDummyAccountForm) => {
    console.log(data);
    return;
    mutation.mutate({});
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-4 flex flex-col space-y-8">
        <BankSelect setBankId={(value) => setValue("bankId", value)} bankId={watch("bankId")} />
        <MemberSelect
          bankId={watch("bankId")}
          setMemberId={(value: string) => setValue("memberId", value)}
          memberId={watch("memberId")}
        />
        <InputText label={"생성내역 이름"}>
          <CommonInput
            className="w-80"
            {...register("name", {
              required: "더미 생성내역 이름을 입력해주세요.",
            })}
          />
          <CommonErrorMsg>{errors.name?.message}</CommonErrorMsg>
        </InputText>
        <InputText label={"생성 고객 수"}>
          <CommonInput
            className="w-80"
            type="number"
            {...register("count", {
              required: "생성할 더미 고객 수을 입력해주세요.",
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
