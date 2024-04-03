"use client";
import { searchMemberList } from "@/api/Membr";
import Button from "@/components/button/button";
import { LoadingSpinner } from "@/components/loadingSpinner";
import Pagination from "@/components/pagination";
import GroupSearch from "@/components/search/customerGroupSearch";
import BankSelect from "@/components/select/bankNoLabel";
import MemberTable from "@/components/table/memberTable";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
const MemberList = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [page, setPage] = useState<number>(Number(params.get("page")) || 1);
  const [keyword, setKeyword] = useState<string>(
    params.get("memberName") ?? ""
  );
  const [searchWord, setSearchWord] = useState<string>(
    params.get("memberName") ?? ""
  );
  const [bankId, setBankId] = useState<string>(params.get("bankId") ?? "");
  const [isDummy, setIsDummy] = useState<string>(params.get("isDummy") ?? "");
  const { data, isLoading, refetch } = useQuery({
    queryKey: [
      "MemberList",
      searchWord || "all",
      page,
      bankId || "all",
      isDummy || "all",
    ],
    queryFn: () => {
      return searchMemberList({
        memberName: searchWord,
        page,
        bankId: bankId || null,
        isDummy: isDummy || null,
      });
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
      newParams.set("memberName", searchWord);
    }
    if (bankId !== "") {
      newParams.set("bankId", bankId);
    }
    if (isDummy !== "") {
      newParams.set("isDummy", isDummy);
    }
    router.replace(`/admin/member?${newParams.toString()}`);
  }, [router, page, searchWord, bankId, isDummy]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex pt-10 pb-5 justify-between">
            <h1 className="text-2xl font-bold">고객</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setPage(1);
                setSearchWord(keyword);
              }}
            >
              <div className="flex space-x-2 items-center">
                <BankSelect
                  bankId={bankId}
                  setBankId={(value) => {
                    setPage(1);
                    setBankId(value);
                  }}
                />
                <Select
                  value={isDummy}
                  onChange={(e: any) => {
                    setPage(1);
                    setIsDummy(e.target.value);
                  }}
                >
                  <option value={""}>더미데이터 여부</option>
                  <option value={"true"}>더미 데이터만</option>
                  <option value={"false"}>실제 데이터만</option>
                </Select>
                <div className="w-52 h-10">
                  <input
                    type="text"
                    autoComplete="off"
                    className="w-full h-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setKeyword(e.target.value)}
                    value={keyword}
                    placeholder="고객 명"
                  />
                </div>
                <Button id={"search"} name={"검색"}></Button>
              </div>
            </form>
          </div>

          {data?.page?.content && (
            <MemberTable memberList={data.page.content} />
          )}
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
            <div className="flex gap-3 px-3">
              <Button
                onClick={() => {
                  router.push("member/create");
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

const Select = tw.select`
block 
w-40 
h-10
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

export default MemberList;
