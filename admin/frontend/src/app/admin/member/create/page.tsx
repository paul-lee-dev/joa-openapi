"use client";

import Button from "@/components/button/button";
import InputText, { CommonErrorMsg, CommonInput } from "@/components/input/inputText";
import BankSelect from "@/components/select/bankSelect";
import tw from "tailwind-styled-components";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { createMember } from "@/api/Membr";
import { useRouter } from "next/navigation";

interface CreateMemberForm {
  name: string;
  email: string;
  phone: string;
  password: string;
  password2: string;
  bankId: string;
}

export default function MemberCreate() {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: createMember,
    onSuccess: (data) => {
      console.log(data);
      alert("고객이 생성되었습니다.");
      router.replace(`/admin/member/${data.data.id}`);
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
  } = useForm<CreateMemberForm>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
      password2: "",
      bankId: "",
    },
  });

  const onSubmit = (data: CreateMemberForm) => {
    mutation.mutate({
      name: data.name,
      email: data.email,
      phone: data.phone,
      password: data.password,
      bankId: data.bankId,
    });
  };

  return (
    <CommonForm onSubmit={handleSubmit(onSubmit)}>
      <div className="p-4 flex flex-col space-y-8">
        <BankSelect
          setBankId={(value: string) => setValue("bankId", value)}
          bankId={watch("bankId")}
        />

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
        <InputText label={"이메일"}>
          <CommonInput
            className="w-80"
            {...register("email", {
              required: "이메일을 입력해주세요.",
              pattern: {
                value:
                  /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
                message: "올바른 이메일 형식이 아닙니다.",
              },
            })}
          />
          <CommonErrorMsg>{errors.email?.message}</CommonErrorMsg>
        </InputText>
        <InputText label={"전화번호"}>
          <CommonInput
            className="w-80"
            {...register("phone", {
              required: "전화번호를 입력해주세요.",
              pattern: {
                value: /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
                message: "올바른 전화번호 형식이 아닙니다.",
              },
            })}
          />
          <CommonErrorMsg>{errors.phone?.message}</CommonErrorMsg>
        </InputText>
        <div className="flex space-x-4">
          <InputText label={"비밀번호"}>
            <CommonInput
              className="w-80"
              type="password"
              {...register("password", {
                required: "비밀번호를 입력해주세요.",
              })}
            />
          </InputText>
          <InputText label={"비밀번호 확인"}>
            <CommonInput
              className="w-80"
              type="password"
              {...register("password2", {
                required: "비밀번호를 한번 더 입력해주세요.",
                validate: {
                  correct: (value) =>
                    value === getValues("password") ? true : "비밀번호가 일치하지 않습니다.",
                },
              })}
            />
          </InputText>
        </div>
        <Divider />
        <div className="flex gap-6 justify-end">
          <Button type="button" onClick={() => router.back()} id={"create"} name={"취소"} />
          <Button type="submit" id={"create"} name={"등록"} />
        </div>
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
