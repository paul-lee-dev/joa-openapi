"use client";

import InputText, { CommonErrorMsg, CommonInput } from "@/components/input/inputText";
import BankSelect from "@/components/select/bankSelect";
import tw from "tailwind-styled-components";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createAccount } from "@/api/Account";
import ProductSelect from "@/components/select/productSelect";
import { getProductDetail } from "@/api/Product";
import MemberSelect from "@/components/select/memberSelect";
import AccountSelect from "@/components/select/accountSelect";
import { ChangeEventHandler } from "react";
import Button from "@/components/button/button";
import Link from "next/link";

interface CreateAccountForm {
  memberId: string;
  nickname: string;
  password: string;
  password2: string;
  term: number;
  withdrawAccount: string;
  amount: number;
  bankId: string;
  productId: string;
  taxType: string;
}

export default function AccountCreate() {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: (params: any) => createAccount(getValues("memberId"), params),
    onSuccess: (data) => {
      console.log(data);
      alert("계좌가 개설되었습니다.");
      router.replace(`/admin/account/${data.data.accountId}`);
    },
    onError: (err) => console.log(err),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    getValues,
    watch,
  } = useForm<CreateAccountForm>({
    defaultValues: {
      memberId: "",
      nickname: "",
      password: "",
      term: 12,
      withdrawAccount: "",
      amount: 0,
      bankId: "",
      productId: "",
      taxType: "TAX",
    },
  });
  const {
    data: productData,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["ProductDetail", watch("productId")],
    queryFn: () => {
      return getProductDetail(watch("productId"));
    },
  });

  const onChangeTaxType: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setValue("taxType", e.target.value);
  };

  const onSubmit = (data: CreateAccountForm) => {
    mutation.mutate({
      memberId: data.memberId,
      nickname: data.nickname,
      password: data.password,
      term: data.term,
      withdrawAccount: data.withdrawAccount,
      amount: data.amount,
      bankId: data.bankId,
      productId: data.productId,
      taxType: data.taxType,
    });
  };

  return (
    <>
      <div className="flex flex-col py-4 h-28 justify-center">
        <div className="flex space-x-2">
          <Link
            href={"/admin/account"}
            className="text-md font-medium text-gray-500 hover:text-pink-500"
          >
            계좌
          </Link>
          <h1 className="text-md font-medium text-gray-500">/</h1>
          <Link
            href={"/admin/account/create"}
            className="text-md font-medium text-gray-500 hover:text-pink-500"
          >
            계좌생성
          </Link>
        </div>
      </div>
      <CommonForm onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col space-y-2">
          <h1 className="font-bold text-2xl">계좌 생성</h1>
          <p className="font-light text-gray-400">
            내가 만든 은행의 상품과 고객을 선택해 계좌를 개설할 수 있어요.
          </p>
        </div>
        <Divider />
        <div className="p-4 flex flex-col space-y-8">
          <BankSelect
            setBankId={(value: string) => setValue("bankId", value)}
            bankId={watch("bankId")}
          />
          <div className="flex space-x-4">
            <ProductSelect
              bankId={watch("bankId")}
              setProductId={(value: string) => setValue("productId", value)}
              productId={watch("productId")}
            />
            <MemberSelect
              bankId={watch("bankId")}
              setMemberId={(value: string) => setValue("memberId", value)}
              memberId={watch("memberId")}
            />
          </div>
          <InputText label={"계좌 이름"}>
            <CommonInput
              className="w-80"
              {...register("nickname", {
                required: "계좌 이름을 입력해주세요.",
              })}
            />
            <CommonErrorMsg>{errors.nickname?.message}</CommonErrorMsg>
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
        </div>
        <Divider />
        {productData?.data?.productType &&
          productData?.data?.productType !== "ORDINARY_DEPOSIT" && (
            <>
              <div className="p-4 flex flex-col space-y-8">
                <AccountSelect
                  label="출금계좌"
                  bankId={watch("bankId")}
                  setAccountId={(value: string) => setValue("withdrawAccount", value)}
                  accountId={watch("withdrawAccount")}
                />
                <InputText label={"기간 (개월)"}>
                  <CommonInput
                    type="number"
                    className="w-80"
                    {...register("term", {
                      required: "기간을 입력해주세요.",
                    })}
                  />
                  <CommonErrorMsg>{errors.nickname?.message}</CommonErrorMsg>
                </InputText>
                <InputText label={"시작금액 (원)"}>
                  <CommonInput
                    type="number"
                    className="w-80"
                    {...register("amount", {
                      required: "기간을 입력해주세요.",
                    })}
                  />
                  <CommonErrorMsg>{errors.nickname?.message}</CommonErrorMsg>
                </InputText>
                <Wrapper>
                  <Label htmlFor="taxType">지급 방식</Label>
                  <InputContainer>
                    <Select id="taxType" value={watch("taxType")} onChange={onChangeTaxType}>
                      <option key={"TAX"} value={"TAX"}>
                        과세
                      </option>
                      <option key={"NO_TAX"} value={"NO_TAX"}>
                        비과세
                      </option>
                    </Select>
                  </InputContainer>
                </Wrapper>
              </div>
              <Divider />
            </>
          )}
        <div className="flex gap-6 justify-end">
          <Button type="button" onClick={() => router.back()} id={"create"} name={"취소"} />
          <Button type="submit" id={"create"} name={"등록"} />
        </div>
      </CommonForm>
    </>
  );
}

const Wrapper = tw.div`
w-40
flex
flex-col
space-y-4
`;

const InputContainer = tw.div`
`;

const Label = tw.label`
block
text-sm
font-semibold
text-gray-500
`;

const Select = tw.select`
block 
w-full 
rounded-md 
border-0 
px-1.5
py-1.5
text-gray-700
ring-1
ring-inset 
ring-gray-300 
placeholder:text-gray-400 
focus:outline-none
focus:ring-2 
focus:ring-inset 
focus:ring-pink-500 
sm:text-sm 
sm:leading-6
`;
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
