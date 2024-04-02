"use client";

import { doneProduct, deleteProduct, getProductDetail } from "@/api/Product";
import Button from "@/components/button/button";
import { LoadingSpinner } from "@/components/loadingSpinner";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import tw from "tailwind-styled-components";
import { HiCurrencyDollar } from "react-icons/hi";
import { deleteDummy, getDummyDetail, updateDummy } from "@/api/Dummy";
import { useForm } from "react-hook-form";
import { CommonInput } from "@/components/input/inputText";
import { useEffect } from "react";

interface IProps {
  params: {
    dummyId: string;
  };
}

interface UpdateDummyForm {
  name: string;
}

export default function DummyDetail({ params: { dummyId } }: IProps) {
  const router = useRouter();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["DummyDetail", dummyId],
    queryFn: async () => {
      const res = await getDummyDetail(dummyId);
      setValue("name", res.data.name);
      return res;
    },
  });

  const updateMutation = useMutation({
    mutationFn: (params: any) => updateDummy(dummyId, params),
    onSuccess: (data) => {
      alert("더미 생성내역이 수정되었습니다.");
      console.log(data);
      refetch();
    },
    onError: (err) => alert(err.message),
  });

  const deleteMutation = useMutation({
    mutationFn: () => deleteDummy(dummyId),
    onSuccess: (data) => {
      console.log(data);
      alert("더미 생성내역이 삭제되었습니다.");
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
  } = useForm<UpdateDummyForm>({
    defaultValues: {
      name: "",
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  const onSubmit = (formData: UpdateDummyForm) => {
    let result = confirm("정말로 더미 생성내역을 수정하시겠습니까?");
    if (result) {
      updateMutation.mutate(formData);
    }
  };

  const deleteDummyConfirm = () => {
    let result = confirm("정말로 더미 생성내역을 삭제하시겠습니까?");
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
                  <h1 className="font-bold text-2xl">{watch("name")}</h1>
                </div>
                <h1 className="font-light text-xs text-gray-400">
                  {data?.data.dummyId}
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
                <Label htmlFor="name">더미 생성내역 이름</Label>
                <InputContainer>
                  <CommonInput
                    className="w-80"
                    {...register("name", {
                      required: "더미 생성내역 이름을 입력해주세요.",
                    })}
                  />
                  <ErrorMsg>{errors.name?.message}</ErrorMsg>
                </InputContainer>
              </div>
            </div>
            <Divider />
            <div className="p-4 flex flex-col space-y-4 text-gray-800 font-semibold">
              <h1>
                생성한 더미 고객 수:{" "}
                <DetailSpan>{data?.data.memberCount ?? "없음"}</DetailSpan>
              </h1>
              <h1>
                생성한 더미 계좌 수:{" "}
                <DetailSpan>{data?.data.accountCount ?? "없음"}</DetailSpan>
              </h1>
              <h1>
                생성한 더미 거래내역 수:{" "}
                <DetailSpan>{data?.data.transactionCount ?? "없음"}</DetailSpan>
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
