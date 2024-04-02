"use client";

import Button from "@/components/button/button";
import InputText, { CommonErrorMsg, CommonInput } from "@/components/input/inputText";
import BankSelect from "@/components/select/bankSelect";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";
import { depositTransaction, sendTransaction, withdrawTransaction } from "@/api/Transaction";
import MemberSelect from "../select/memberSelect";
import { useEffect, useState } from "react";
import { searchMemberList } from "@/api/Membr";
import CommonLabel from "../commonLabel";
import { IMember } from "@/models/Member.interface";

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
    getValues,
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
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["MemberList", watch("bankId")],
    queryFn: () => {
      if (watch("bankId") === "") return;
      return searchMemberList({ bankId: watch("bankId") });
    },
  });

  const onSubmit = (formData: CreateDummyAccountForm) => {
    mutation.mutate({
      name: formData.name,
      count: formData.count,
      bankId: formData.bankId,
      users: data.page.content
        .filter(
          (member: IMember) =>
            getValues("users").findIndex((user) => user === member.memberName) !== -1
        )
        .map((member: IMember) => member.memberId),
    });
  };

  const addMember = (newName: string) => {
    if (newName === "#ALL") {
      setValue(
        "users",
        data.page.content.map((member: IMember) => member.memberName)
      );
    } else {
      const old = getValues("users");
      if (old.findIndex((user) => user === newName) === -1) {
        setValue("users", [...old, newName]);
      }
    }
  };

  const removeMember = (targetName: string) => {
    const old = getValues("users");
    if (old.findIndex((user) => user === targetName) !== -1) {
      setValue(
        "users",
        old.filter((user) => user !== targetName)
      );
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="p-4 flex flex-col space-y-8">
        <BankSelect setBankId={(value) => setValue("bankId", value)} bankId={watch("bankId")} />
        <MemberSelect bankId={watch("bankId")} setMemberId={addMember} memberId={""} name all />

        <div className="flex w-full space-x-2 items-center flex-wrap">
          {watch("users").map((name) => (
            <CommonLabel key={name} title={name} onClick={() => removeMember(name)} />
          ))}
          {watch("users").length > 0 && (
            <h1
              onClick={() => setValue("users", [])}
              className="text-sm text-gray-400 cursor-pointer px-4"
            >
              초기화
            </h1>
          )}
        </div>

        <InputText label={"생성내역 이름"}>
          <CommonInput
            className="w-80"
            {...register("name", {
              required: "더미 생성내역 이름을 입력해주세요.",
            })}
          />
          <CommonErrorMsg>{errors.name?.message}</CommonErrorMsg>
        </InputText>
        <InputText label={"생성 계좌 수"}>
          <CommonInput
            className="w-80"
            type="number"
            {...register("count", {
              required: "생성할 더미 계좌 수을 입력해주세요.",
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
