"use client";

import Button from "@/components/button/button";
import InputText, { CommonErrorMsg, CommonInput } from "@/components/input/inputText";
import { LoadingSpinner } from "@/components/loadingSpinner";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";
import { deleteMember, getMemberDetail, updateMember } from "@/api/Membr";
import { FaUserFriends } from "react-icons/fa";
import { useEffect } from "react";
import Link from "next/link";

interface IProps {
  params: {
    memberId: string;
  };
}

interface UpdateMemberForm {
  name: string;
  email: string;
  phone: string;
  password: string;
}

export default function MemberDetail({ params: { memberId } }: IProps) {
  const router = useRouter();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["MemberDetail", memberId],
    queryFn: async () => {
      const res = await getMemberDetail(memberId);
      setValue("name", res.data.name);
      setValue("email", res.data.email);
      setValue("phone", res.data.phone);
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
  } = useForm<UpdateMemberForm>({
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      password: "",
    },
  });

  const updateMutation = useMutation({
    mutationFn: (params: any[]) => updateMember(params[0], params[1]),
    onSuccess: (data) => {
      console.log(data);
      alert("고객이 수정되었습니다.");
      refetch();
    },
    onError: (err) => alert(err.message),
  });
  const deleteMutation = useMutation({
    mutationFn: deleteMember,
    onSuccess: (data) => {
      console.log(data);
      alert("고객이 삭제되었습니다.");
      router.replace("/admin/member");
    },
    onError: (err) => alert(err.message),
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  const deleteMemberConfirm = () => {
    let result = confirm("정말로 고객을 삭제하시겠습니까?");
    if (result) {
      deleteMutation.mutate(memberId);
    }
  };

  const onSubmit = (formData: UpdateMemberForm) => {
    let result = confirm("정말로 고객을 수정하시겠습니까?");
    if (result) {
      updateMutation.mutate([
        memberId,
        {
          name: data.data.name === formData.name ? "" : formData.name,
          password: "",
          email: data.data.email === formData.email ? "" : formData.email,
          phone: data.data.phone === formData.phone ? "" : formData.phone,
        },
      ]);
    }
  };

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex flex-col py-4 h-28 justify-center">
            <div className="flex space-x-2">
              <Link
                href={"/admin/member"}
                className="text-md font-medium text-gray-500 hover:text-pink-500"
              >
                고객
              </Link>
              <h1 className="text-md font-medium text-gray-500">/</h1>
              <Link
                href={`/admin/member/${memberId}`}
                className="text-md font-medium text-gray-500 hover:text-pink-500"
              >
                {data.data.name}
              </Link>
            </div>
          </div>
          <CommonForm onSubmit={handleSubmit(onSubmit)}>
            <div className="p-4 pb-0 flex justify-between items-end">
              <div className="flex flex-col space-y-2">
                <div className="flex space-x-4 items-center text-gray-600">
                  <FaUserFriends className="w-10 h-10" />
                  <h1 className="font-bold text-2xl">{watch("name")}</h1>
                </div>
                <h1 className="font-light text-xs text-gray-400">{data?.data?.memberId}</h1>
              </div>
              <div className="flex flex-col">
                <h1 className="text-sm font-light">
                  생성: <span className="text-gray-500">{data?.data?.createdAt}</span>
                </h1>
                <h1 className="text-sm font-light">
                  수정: <span className="text-gray-500">{data?.data?.updatedAt}</span>
                </h1>
              </div>
            </div>
            <Divider />
            <div className="p-4 flex flex-col space-y-8">
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
            </div>
            <Divider />
            <div className="flex gap-6 justify-end">
              <Button id={"edit"} name={"수정"} type="submit"></Button>
              <Button
                id={"delete"}
                name={"삭제"}
                onClick={deleteMemberConfirm}
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
