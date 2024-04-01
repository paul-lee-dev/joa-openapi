"use client";

import { deleteAccount, getAccountDetail, updateAccount } from "@/api/Account";
import Button from "@/components/button/button";
import InputText from "@/components/input/inputText";
import { LoadingSpinner } from "@/components/loadingSpinner";
import DormantSelect from "@/components/select/dormant";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import tw from "tailwind-styled-components";

interface IProps {
  params: {
    accountId: string;
  };
}

export default function AccountDetail({ params: { accountId } }: IProps) {
  const router = useRouter();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["AccountDetail", accountId],
    queryFn: () => {
      return getAccountDetail(accountId);
    },
  });

  const updateMutation = useMutation({
    mutationFn: updateAccount,
    onSuccess: (data) => {
      console.log(data);
      refetch();
    },
    onError: (err) => console.log(err),
  });
  const deleteMutation = useMutation({
    mutationFn: deleteAccount,
    onSuccess: (data) => {
      console.log(data);
      router.replace("/admin/account");
    },
    onError: (err) => console.log(err),
  });

  const updateAccountConfirm = () => {
    let result = confirm("정말로 계좌를 종료하시겠습니까?");
    if (result) {
      updateMutation.mutate(accountId);
    }
  };

  const deleteAccountConfirm = () => {
    let result = confirm("정말로 계좌를 삭제하시겠습니까?");
    if (result) {
      deleteMutation.mutate(accountId);
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <Form>
            <div className="grid gap-3 mb-4 md:grid-cols-2">
              <h1>{`accountId: ${data?.data.accountId}`}</h1>
              <h1>{`accountName: ${data?.data.accountName}`}</h1>
              <h1>{`balance: ${data?.data.balance}`}</h1>
              <h1>{`isDormant: ${data?.data.isDormant}`}</h1>
              <h1>{`transferLimit: ${data?.data.transferLimit}`}</h1>
              <h1>{`startDate: ${data?.data.startDate}`}</h1>
              <h1>{`endDate: ${data?.data.endDate}`}</h1>
              <h1>{`term: ${data?.data.term}`}</h1>
              <h1>{`depositAccount: ${data?.data.depositAccount}`}</h1>
              <h1>{`withdrawAccount: ${data?.data.withdrawAccount}`}</h1>
              <h1>{`amount: ${data?.data.amount}`}</h1>
              <h1>{`holderName: ${data?.data.holderName}`}</h1>
              <h1>{`productName: ${data?.data.productName}`}</h1>
              <h1>{`dummyName: ${data?.data.dummyName}`}</h1>
              <h1>{`bankId: ${data?.data.bankId}`}</h1>
              <h1>{`createdAt: ${data?.data.createdAt}`}</h1>
              <h1>{`updatedAt: ${data?.data.updatedAt}`}</h1>
            </div>
            {data?.data.isDone ? (
              <div className="flex gap-6 justify-end">
                <Button
                  onClick={deleteAccountConfirm}
                  id={"delete"}
                  name={"삭제"}
                  type="button"
                ></Button>
              </div>
            ) : (
              <div className="flex gap-6 justify-end">
                <Button
                  onClick={updateAccountConfirm}
                  id={"update"}
                  name={"수정"}
                  type="button"
                ></Button>
              </div>
            )}
          </Form>
        </>
      )}
    </>
  );
}
const Form = tw.form`

`;
