"use client";

import { createProduct } from "@/api/Product";
import Button from "@/components/button/button";
import InputText, {
  CommonErrorMsg,
  CommonInput,
  CommonTextarea,
} from "@/components/input/inputText";
import BankSelect from "@/components/select/bankSelect";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";
import { HiCreditCard, HiChartBar, HiFlag, HiCurrencyDollar, HiCalculator } from "react-icons/hi";
import { ProductPaymentType, ProductType } from "@/models/Product.interface";

interface CreateProductForm {
  name: string;
  description: string;
  minAmount: number;
  maxAmount: number;
  productType: ProductType;
  paymentType: ProductPaymentType;
  bankId: string;
  rate: number;
}

export default function ProductCreate() {
  const router = useRouter();
  const mutation = useMutation({
    mutationFn: createProduct,
    onSuccess: (data) => {
      console.log(data);
      alert("상품이 생성되었습니다.");
      router.replace(`/admin/product/${data.data.productId}`);
    },
    onError: (err) => console.log(err),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    watch,
  } = useForm<CreateProductForm>({
    defaultValues: {
      name: "",
      description: "",
      minAmount: 0,
      maxAmount: 100,
      productType: "ORDINARY_DEPOSIT",
      paymentType: "SIMPLE",
      bankId: "",
      rate: 0.0,
    },
  });

  const onSubmit = (data: CreateProductForm) => {
    mutation.mutate(data);
  };

  return (
    <CommonForm onSubmit={handleSubmit(onSubmit)}>
      <div className="p-4 flex flex-col space-y-8">
        <BankSelect
          setBankId={(value: string) => setValue("bankId", value)}
          bankId={watch("bankId")}
        />
        <InputText label={"상품 이름"}>
          <CommonInput
            className="w-80"
            {...register("name", {
              required: "상품 이름을 입력해주세요.",
            })}
          />
          <CommonErrorMsg>{errors.name?.message}</CommonErrorMsg>
        </InputText>
        <InputText label={"상품 설명"}>
          <CommonInput className="w-full" {...register("description")} />
        </InputText>
      </div>
      <Divider />
      <div className="p-4 flex flex-col space-y-4">
        <RadioSelect>
          <RadioContainer onClick={() => setValue("productType", "ORDINARY_DEPOSIT")}>
            <RadioInput
              name="productType"
              type="radio"
              checked={watch("productType") === "ORDINARY_DEPOSIT"}
              readOnly
            />
            <HiCreditCard className="w-10 h-10" />
            <RadioTitleContainer>
              <RadioTitle>입출금통장</RadioTitle>
              <RadioDescription>아무때나 돈을 넣고 뺼 수 있는 통장입니다.</RadioDescription>
            </RadioTitleContainer>
          </RadioContainer>
          <RadioContainer onClick={() => setValue("productType", "TERM_DEPOSIT")}>
            <RadioInput
              name="productType"
              type="radio"
              checked={watch("productType") === "TERM_DEPOSIT"}
              readOnly
            />
            <HiChartBar className="w-10 h-10" />
            <RadioTitleContainer>
              <RadioTitle>정기 예금</RadioTitle>
              <RadioDescription>
                일정금액을 계약기간동안 1년에 1번 납입하여 한번 입금 후에는 그 기간동안에 찾지않는
                조건으로 이루어지는 예금입니다.
              </RadioDescription>
            </RadioTitleContainer>
          </RadioContainer>
          <RadioContainer onClick={() => setValue("productType", "FIXED_DEPOSIT")}>
            <RadioInput
              name="productType"
              type="radio"
              checked={watch("productType") === "FIXED_DEPOSIT"}
              readOnly
            />
            <HiFlag className="w-10 h-10" />
            <RadioTitleContainer>
              <RadioTitle>정기 적금</RadioTitle>
              <RadioDescription>
                매월 일정금액을 정기적으로 납입하고 만기일에 원리금을 지급받는 상품으로 푼돈을 모아
                목돈을 마련하는데 가장 보편적인 장기저축 상품입니다.
              </RadioDescription>
            </RadioTitleContainer>
          </RadioContainer>
        </RadioSelect>
      </div>
      <Divider />
      <div className="p-4 flex flex-col space-y-4">
        <InputText label={"이자율 (%)"}>
          <CommonInput
            className="w-80"
            type="number"
            step="0.01"
            {...register("rate", {
              required: "이자율을 입력해주세요.",
            })}
          />
        </InputText>
        <div className="flex space-x-4">
          <InputText label={"최소 금액 (원)"}>
            <CommonInput
              className="w-80"
              type="number"
              {...register("minAmount", {
                required: "최소 금액을 입력해주세요.",
              })}
            />
          </InputText>
          <InputText label={"최대 금액 (원)"}>
            <CommonInput
              className="w-80"
              type="number"
              {...register("maxAmount", {
                required: "최대 금액을 입력해주세요.",
              })}
            />
          </InputText>
        </div>
      </div>
      <div>
        <Divider />
        <div className="p-4 flex flex-col space-y-4">
          <RadioSelect>
            <RadioContainer onClick={() => setValue("paymentType", "SIMPLE")}>
              <RadioInput type="radio" checked={watch("paymentType") === "SIMPLE"} readOnly />
              <HiCurrencyDollar className="w-10 h-10" />
              <RadioTitleContainer>
                <RadioTitle>단리</RadioTitle>
                <RadioDescription>
                  단순한 이자라는 뜻으로, 원금에 대해서만 이자를 계산합니다.
                </RadioDescription>
              </RadioTitleContainer>
            </RadioContainer>
            <RadioContainer onClick={() => setValue("paymentType", "COMPOUND")}>
              <RadioInput type="radio" checked={watch("paymentType") === "COMPOUND"} readOnly />
              <HiCalculator className="w-10 h-10" />
              <RadioTitleContainer>
                <RadioTitle>복리</RadioTitle>
                <RadioDescription>
                  또 주는 이자라는 뜻으로, 원금에 붙은 이자의 이자까지 계산합니다.
                </RadioDescription>
              </RadioTitleContainer>
            </RadioContainer>
          </RadioSelect>
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
export const CommonForm = tw.form`
p-14
w-full
flex
flex-col
space-y-8
`;

export const Divider = tw.div`
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
