"use client";
import tw from "tailwind-styled-components";
import { useState, useEffect, ChangeEvent } from "react";
import BankTable from "@/components/table/bankTable";
import Pagination from "@/components/pagination";
import Button from "@/components/button/button";
import { createBank, searchBankList } from "@/api/Bank";
import BankGroupSearch from "@/components/search/bankGroupSearch";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useForm } from "react-hook-form";

interface CreateBankForm {
  name: string;
  description: string;
  uri: string;
}

const BankList = () => {
  const [isModalOpen, setModalState] = useState(false);
  const [keyword, setKeyword] = useState<string>("");
  const [searchWord, setSearchWord] = useState<string>("");
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["BankList", searchWord],
    queryFn: () => {
      return searchBankList({ name: searchWord });
    },
  });
  const mutation = useMutation({
    mutationFn: createBank,
    onSuccess: (data) => {
      console.log(data);
      reset();
      toggleModal();
      alert("은행 생성에 성공했습니다.");
      refetch();
    },
    onError: (err) => console.log(err),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    reset,
  } = useForm<CreateBankForm>({
    defaultValues: {
      name: "",
      description: "",
      uri: "",
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  const toggleModal = () => {
    setModalState(!isModalOpen);
    console.log("Toggle modal");
  };

  const onSubmit = (formData: CreateBankForm) => {
    mutation.mutate({
      name: formData.name,
      description: formData.description,
      uri: formData.uri,
    });
  };

  const onChangeKeyword = (e: ChangeEvent<HTMLInputElement>) => {
    console.log(e);
    setKeyword(e.target.value);
  };

  return (
    <>
      {isLoading ? (
        <h1>로딩중...</h1>
      ) : (
        <>
          <form className="flex justify-end m-2 space-x-2 items-center">
            <div className="w-52 h-10">
              <input
                type="text"
                name="searchQuery"
                id="searchQuery"
                autoComplete="off"
                className="w-full h-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                onChange={onChangeKeyword}
                value={keyword}
                placeholder="은행 명"
              />
            </div>
            <Button
              id={"submit"}
              name={"검색"}
              onClick={() => setSearchWord(keyword)}
            />
          </form>
          <BankTable bankList={data.data} />
          <div className="flex mt-5 justify-between gap-5">
            <div className="flex">
              {/* <Pagination
                currentPage={0}
                totalPages={5}
                onPageChange={function (page: number): void {}}
              ></Pagination> */}
            </div>
            <div className="flex gap-3 px-3">
              <Button
                onClick={() => {
                  toggleModal();
                }}
                id={"create"}
                name={"생성"}
              ></Button>
            </div>
          </div>
          {isModalOpen && (
            <Modal>
              <ModalContent>
                <InputFormWithButton onSubmit={handleSubmit(onSubmit)}>
                  <div className="col-span-full">
                    <label
                      htmlFor="name"
                      className="block pb-1 text-sm font-medium leading-6 text-gray-900"
                    >
                      은행 이름
                    </label>
                    <Input
                      {...register("name", {
                        required: "은행명을 입력해주세요.",
                      })}
                      placeholder="은행명"
                    />
                    <ErrorMsg>{errors.name?.message}</ErrorMsg>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="description"
                      className="block pb-1 text-sm font-medium leading-6 text-gray-900"
                    >
                      은행 설명
                    </label>
                    <Input
                      {...register("description", {
                        required: "은행 설명을 입력해주세요.",
                      })}
                      placeholder="은행 설명"
                    />
                    <ErrorMsg>{errors.description?.message}</ErrorMsg>
                  </div>
                  <div className="col-span-full">
                    <label
                      htmlFor="uri"
                      className="block pb-1 text-sm font-medium leading-6 text-gray-900"
                    >
                      은행 로고 (선택)
                    </label>
                    <Input {...register("uri")} placeholder="은행 로고 uri" />
                    <ErrorMsg>{errors.uri?.message}</ErrorMsg>
                  </div>
                  <div className="w-full flex justify-end space-x-4">
                    <SmallBtn
                      type="submit"
                      className="bg-gray-400 hover:bg-gray-500"
                      onClick={toggleModal}
                    >
                      취소
                    </SmallBtn>
                    <SmallBtn type="submit">추가</SmallBtn>
                  </div>
                </InputFormWithButton>
              </ModalContent>
            </Modal>
          )}
        </>
      )}
    </>
  );
};

export default BankList;

const Input = tw.input`
block 
w-full 
rounded-md 
border-0 
px-2
py-2
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

const ErrorMsg = tw.span`
text-sm
text-red-400
`;

const SmallBtn = tw.button`
  flex
  justify-center
  w-fit
  rounded-md 
  bg-pink-400
  px-3
  py-1.5
  text-xs
  font-semibold
  leading-6
  text-white
  shadow-sm
  hover:bg-pink-500
  focus-visible:outline
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-pink-600
  whitespace-nowrap
  float-right
`;

const InputFormWithButton = tw.form`
  mt-2
  items-center
  grid 
  grid-cols-1
  gap-y-6 
`;

const Modal = tw.div`
  fixed
  top-0
  left-0
  w-full
  h-full
  flex
  items-center
  justify-center
  bg-gray-700
  bg-opacity-75
  z-50
`;

const ModalContent = tw.div`
  bg-white
  rounded-lg
  p-8
  max-w-md
  w-full
`;
