"use client";

import Button from "@/components/button/button";
import InputText, { CommonErrorMsg, CommonInput } from "@/components/input/inputText";
import BankSelect from "@/components/select/bankSelect";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";
import { useState } from "react";
import AccountSelect from "@/components/select/accountSelect";
import { depositTransaction, sendTransaction, withdrawTransaction } from "@/api/Transaction";

interface CreateTransactionForm {
  password: string;
  amount: number;
  depositorName: string; //입금자명
  fromAccount: string; //입금계좌
  toAccount: string; //출금계좌
}

export default function TransactionCreate() {
  const router = useRouter();
  const depositMutation = useMutation({
    mutationFn: depositTransaction,
    onSuccess: (data) => {
      console.log(data);
      alert("거래내역이 생성되었습니다.");
      router.replace("/admin/transaction");
    },
    onError: (err) => alert(err.message),
  });
  const withdrawMutation = useMutation({
    mutationFn: withdrawTransaction,
    onSuccess: (data) => {
      console.log(data);
      alert("거래내역이 생성되었습니다.");
      router.replace("/admin/transaction");
    },
    onError: (err) => alert(err.message),
  });
  const sendMutation = useMutation({
    mutationFn: sendTransaction,
    onSuccess: (data) => {
      console.log(data);
      alert("거래내역이 생성되었습니다.");
      router.replace("/admin/transaction");
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
  } = useForm<CreateTransactionForm>({
    defaultValues: {
      password: "",
      amount: 0,
      depositorName: "", //입금자명
      fromAccount: "", //입금계좌
      toAccount: "", //출금계좌
    },
  });
  const [fromBankId, setFromBankId] = useState<string>("");
  const [toBankId, setToBankId] = useState<string>("");

  const onSubmit = (data: CreateTransactionForm) => {
    if (data.fromAccount === "" && data.toAccount === "") {
      alert("입금 또는 출금 계좌를 선택해주세요");
    } else if (data.fromAccount === "") {
      depositMutation.mutate(data);
    } else if (data.toAccount === "") {
      withdrawMutation.mutate(data);
    } else {
      sendMutation.mutate(data);
    }
  };

  return (
    <CommonForm onSubmit={handleSubmit(onSubmit)}>
      <div className="p-4 flex flex-col space-y-8">
        <div className="p-4 space-y-4">
          <InputText label={"출금 계좌 (from)"}>
            <div className="p-4 flex space-x-4">
              <BankSelect setBankId={setFromBankId} bankId={fromBankId} />
              <AccountSelect
                bankId={fromBankId}
                label="출금 계좌"
                accountId={watch("fromAccount")}
                setAccountId={(value) => setValue("fromAccount", value)}
              />
            </div>
          </InputText>
          <InputText label={"입금 계좌 (to)"}>
            <div className="p-4 flex space-x-4">
              <BankSelect setBankId={setToBankId} bankId={toBankId} />
              <AccountSelect
                bankId={toBankId}
                label="입금 계좌"
                accountId={watch("toAccount")}
                setAccountId={(value) => setValue("toAccount", value)}
              />
            </div>
          </InputText>
        </div>
        <Divider />
        <div className="p-4 space-y-4">
          <InputText label={"입금자명"}>
            <CommonInput
              className="w-80"
              {...register("depositorName", {
                required: "입금자명을 입력해주세요.",
              })}
            />
            <CommonErrorMsg>{errors.depositorName?.message}</CommonErrorMsg>
          </InputText>
          <InputText label={"금액 (원)"}>
            <CommonInput
              className="w-80"
              type="number"
              {...register("amount", {
                required: "상품 이름을 입력해주세요.",
              })}
            />
            <CommonErrorMsg>{errors.amount?.message}</CommonErrorMsg>
          </InputText>
        </div>
        <Divider />
      </div>

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

const RadioSelect = tw.div`
w-full
px-2
py-4
flex
flex-col
justify-around
`;

const RadioContainer = tw.div`
flex
space-x-4
items-center
w-full
h-20
cursor-pointer
`;

const RadioTitleContainer = tw.div`
flex
flex-col
space-y-2
`;

const RadioTitle = tw.h1`
text-md
font-semibold
`;

const RadioDescription = tw.p`
text-sm
font-light
`;

const RadioInput = tw.input`
checked:bg-primary
focus:outline-primary
`;
