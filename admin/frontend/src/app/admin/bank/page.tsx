"use client";
import tw from "tailwind-styled-components";
import { useState, useEffect, ChangeEvent } from "react";
import BankTable from "@/components/table/bankTable";
import Pagination from "@/components/pagination";
import Button from "@/components/button/button";
import { searchBankList } from "@/api/Bank";
import { useQuery } from "@tanstack/react-query";
import { LoadingSpinner } from "@/components/loadingSpinner";
import { useRouter, useSearchParams } from "next/navigation";

const BankList = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [page, setPage] = useState<number>(Number(params.get("page")) || 1);
  const [keyword, setKeyword] = useState<string>(params.get("name") ?? "");
  const [searchWord, setSearchWord] = useState<string>(
    params.get("name") ?? ""
  );
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["BankList", searchWord || "all", page],
    queryFn: () => {
      return searchBankList({ name: searchWord, page });
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    const newParams = new URLSearchParams();
    if (page > 1) {
      newParams.set("page", String(page));
    }
    if (searchWord !== "") {
      newParams.set("name", searchWord);
    }
    router.replace(`/admin/bank?${newParams.toString()}`);
  }, [router, page, searchWord]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex pt-10 pb-5 justify-between">
            <h1 className="text-2xl font-bold">은행</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setPage(1);
                setSearchWord(keyword);
              }}
              className="flex space-x-2 items-center"
            >
              <div className="w-52 h-10">
                <input
                  type="text"
                  autoComplete="off"
                  className="w-full h-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setKeyword(e.target.value)}
                  value={keyword}
                  placeholder="은행 명"
                />
              </div>
              <Button id={"button"} name={"검색"} />
            </form>
          </div>

          {data?.page?.content && <BankTable bankList={data.page.content} />}
          <div className="flex mt-5 justify-between gap-5">
            <div className="flex">
              {data?.page?.content && (
                <Pagination
                  currentPage={page}
                  totalPages={data.page.totalPages}
                  onPageChange={setPage}
                />
              )}
            </div>
            <div className="flex px-3">
              <Button
                onClick={() => {
                  router.push("bank/create");
                }}
                id={"create"}
                name={"생성"}
              ></Button>
            </div>
          </div>
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
