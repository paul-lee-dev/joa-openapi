"use client";

import { doneProduct, deleteProduct, getProductDetail } from "@/api/Product";
import Button from "@/components/button/button";
import { LoadingSpinner } from "@/components/loadingSpinner";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import tw from "tailwind-styled-components";
import { HiCurrencyDollar } from "react-icons/hi";
import { useForm } from "react-hook-form";
import { CommonInput } from "@/components/input/inputText";
import { useEffect } from "react";
import {
  deleteTransaction,
  getTransactionDetail,
  updateTransaction,
} from "@/api/Transaction";
import { formatAmount } from "@/util";

interface IProps {
  params: {
    transactionId: string;
  };
}

interface UpdateTransactionForm {
  depositorName: string;
}

export default function TransactionDetail({
  params: { transactionId },
}: IProps) {
  const router = useRouter();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["TransactionDetail", transactionId],
    queryFn: async () => {
      const res = await getTransactionDetail(transactionId);
      setValue("depositorName", res.data.depositorName);
      return res;
    },
  });

  const updateMutation = useMutation({
    mutationFn: (params: any) => updateTransaction(transactionId, params),
    onSuccess: (data) => {
      alert("거래내역이 수정되었습니다.");
      console.log(data);
      refetch();
    },
    onError: (err) => alert(err.message),
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteTransaction(transactionId),
    onSuccess: (data) => {
      console.log(data);
      alert("거래내역이 삭제되었습니다.");
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
  } = useForm<UpdateTransactionForm>({
    defaultValues: {
      depositorName: "",
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  const onSubmit = (formData: UpdateTransactionForm) => {
    let result = confirm("정말로 거래내역을 수정하시겠습니까?");
    if (result) {
      updateMutation.mutate(formData);
    }
  };

  const deleteDummyConfirm = () => {
    let result = confirm("정말로 거래내역을 삭제하시겠습니까?");
    if (result) {
      deleteMutation.mutate();
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <CommonForm onSubmit={handleSubmit(onSubmit)}>
            <div className="p-4 pb-0 flex justify-between items-end">
              <div className="flex flex-col space-y-2">
                <div className="flex space-x-4 items-center text-gray-600">
                  <HiCurrencyDollar className="w-10 h-10" />
                  <h1 className="font-bold text-2xl">
                    {watch("depositorName")}
                  </h1>
                </div>
                <h1 className="font-light text-xs text-gray-400">
                  {data?.data.transactionId}
                </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm font-light">
                  생성:{" "}
                  <span className="text-gray-500">{data?.data?.createdAt}</span>
                </h1>
              </div>
            </div>
            <Divider />
            <div className="p-4 flex flex-col space-y-8">
              <div>
                <Label htmlFor="name">입금주명</Label>
                <InputContainer>
                  <CommonInput
                    className="w-80"
                    {...register("depositorName", {
                      required: "입금주명을 입력해주세요.",
                    })}
                  />
                  <ErrorMsg>{errors.depositorName?.message}</ErrorMsg>
                </InputContainer>
              </div>
            </div>
            <Divider />
            <div className="p-4 flex flex-col space-y-4 text-gray-800 font-semibold">
              <h1>
                출금 계좌번호:{" "}
                <DetailSpan>{data?.data.fromAccount ?? "없음"}</DetailSpan>
              </h1>
              <h1>
                입금 계좌번호:{" "}
                <DetailSpan>{data?.data.toAccount ?? "없음"}</DetailSpan>
              </h1>
              <h1>
                금액:{" "}
                <DetailSpan>{`${formatAmount(
                  data?.data.amount
                )}원`}</DetailSpan>
              </h1>
            </div>
            <div className="flex gap-6 justify-end">
              <Button id={"edit"} name={"수정"} type="submit"></Button>
              <Button
                id={"delete"}
                name={"삭제"}
                onClick={deleteDummyConfirm}
                type="button"
              ></Button>
            </div>
          </CommonForm>
        </>
      )}
    </>
  );
}
const DetailSpan = tw.span`
  text-gray-500
  font-light
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

const InputContainer = tw.div`
mt-2
`;

const Label = tw.label`
block text-sm font-medium leading-6 text-gray-500
`;

const ErrorMsg = tw.span`
text-sm
text-red-400
`;
