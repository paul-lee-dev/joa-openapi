"use client";

import { deleteAccount, getAccountDetail, updateAccount } from "@/api/Account";
import Button from "@/components/button/button";
import InputText, { CommonInput } from "@/components/input/inputText";
import { LoadingSpinner } from "@/components/loadingSpinner";
import DormantSelect from "@/components/select/dormant";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";
import { MdAccountBalanceWallet } from "react-icons/md";
import { formatAmount } from "@/util";
import { useEffect } from "react";

interface IProps {
  params: {
    accountId: string;
  };
}

interface UpdateAccountForm {
  nickname: string;
}

export default function AccountDetail({ params: { accountId } }: IProps) {
  const router = useRouter();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["AccountDetail", accountId],
    queryFn: async () => {
      const res = await getAccountDetail(accountId);
      setValue("nickname", res.data.nickname);
      return res;
    },
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    setValue,
    watch,
  } = useForm<UpdateAccountForm>({
    defaultValues: {
      nickname: "",
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  const updateMutation = useMutation({
    mutationFn: updateAccount,
    onSuccess: (data) => {
      console.log(data);
      alert("계좌가 수정되었습니다.");
      refetch();
    },
    onError: (err) => console.log(err),
  });
  const deleteMutation = useMutation({
    mutationFn: deleteAccount,
    onSuccess: (data) => {
      console.log(data);
      alert("계좌가 삭제되었습니다.");
      router.replace("/admin/account");
    },
    onError: (err) => console.log(err),
  });

  const deleteAccountConfirm = () => {
    let result = confirm("정말로 계좌를 삭제하시겠습니까?");
    if (result) {
      deleteMutation.mutate(accountId);
    }
  };

  const onSubmit = (data: UpdateAccountForm) => {
    let result = confirm("정말로 계좌를 수정하시겠습니까?");
    if (result) {
      updateMutation.mutate({ accountId, ...data });
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
                  <MdAccountBalanceWallet className="w-10 h-10" />
                  <h1 className="font-bold text-2xl">{watch("nickname")}</h1>
                </div>
                <h1 className="font-light text-xs text-gray-400">
                  {data?.data?.accountId}
                </h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm font-light">
                  생성:{" "}
                  <span className="text-gray-500">{data?.data?.createdAt}</span>
                </h1>
                <h1 className="text-sm font-light">
                  수정:{" "}
                  <span className="text-gray-500">{data?.data?.updatedAt}</span>
                </h1>
              </div>
            </div>
            <Divider />
            <div className="p-4 flex flex-col space-y-8">
              <div>
                <Label htmlFor="name">계좌 별명</Label>
                <InputContainer>
                  <CommonInput
                    className="w-80"
                    {...register("nickname", {
                      required: "계좌 별명을 입력해주세요.",
                    })}
                  />
                  <ErrorMsg>{errors.nickname?.message}</ErrorMsg>
                </InputContainer>
              </div>
            </div>
            <Divider />
            <div className="p-4 flex flex-col space-y-4 text-gray-800 font-semibold">
              <h1>
                잔액:{" "}
                <DetailSpan>{formatAmount(data?.data.balance)}원</DetailSpan>
              </h1>
              <h1>
                휴면계좌 여부:{" "}
                <DetailSpan>{data?.data.isDormant ? "Y" : "N"}</DetailSpan>
              </h1>
              <h1>
                이체 한도:{" "}
                <DetailSpan>
                  {formatAmount(data?.data.transferLimit)}원
                </DetailSpan>
              </h1>
              <h1>
                개설일: <DetailSpan>{data?.data.startDate}</DetailSpan>
              </h1>
              <h1>
                만기일: <DetailSpan>{data?.data.endDate}</DetailSpan>
              </h1>
              <h1>
                기간: <DetailSpan>{data?.data.term}개월</DetailSpan>
              </h1>
              <h1>
                입금 계좌: <DetailSpan>{data?.data.depositAccount}</DetailSpan>
              </h1>
              <h1>
                출금 계좌: <DetailSpan>{data?.data.withdrawAccount}</DetailSpan>
              </h1>
              <h1>
                시작 금액:{" "}
                <DetailSpan>{formatAmount(data?.data.amount)}원</DetailSpan>
              </h1>
              {data?.data.dummyId && (
                <h1>
                  더미 아이디: <DetailSpan>{data?.data.dummyId}</DetailSpan>
                </h1>
              )}
            </div>
            <div className="flex gap-6 justify-end">
              <Button id={"edit"} name={"수정"} type="submit"></Button>
              <Button
                id={"delete"}
                name={"삭제"}
                onClick={deleteAccountConfirm}
                type="button"
              ></Button>
            </div>
          </CommonForm>
        </>
      )}
    </>
  );
}

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
