"use client";

import { searchAccountList } from "@/api/Account";
import Button from "@/components/button/button";
import { LoadingSpinner } from "@/components/loadingSpinner";
import Pagination from "@/components/pagination";
import AccountGroupSearch from "@/components/search/accountGroupSearch";
import BankSelect from "@/components/select/bankNoLabel";
import MemberMultiSearch from "@/components/select/memberMultiSearch";
import MemberSelect from "@/components/select/memberSelect";
import ProductMultiSearchSelect from "@/components/select/productMultiSearchSelect";
import ProductTypeMultiSearchSelect from "@/components/select/productTypeMultiSearchSelect";
import AccountTable from "@/components/table/accountTable";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
const AccountList = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [page, setPage] = useState<number>(Number(params.get("page")) || 1);
  const [keyword, setKeyword] = useState<string>(
    params.get("searchKeyword") ?? ""
  );
  const [searchWord, setSearchWord] = useState<string>(
    params.get("searchKeyword") ?? ""
  );
  const [bankId, setBankId] = useState<string>(params.get("bankList") ?? "");
  const [isDormant, setIsDormant] = useState<string>(
    params.get("isDormant") ?? ""
  );
  const { data, isLoading, refetch } = useQuery({
    queryKey: [
      "AccountList",
      searchWord || "all",
      page,
      bankId || "all",
      isDormant || "all",
    ],
    queryFn: () => {
      return searchAccountList({
        searchKeyword: searchWord,
        page,
        bankList: bankId || null,
        isDormant: isDormant || null,
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
      newParams.set("searchKeyword", searchWord);
    }
    if (bankId !== "") {
      newParams.set("bankList", bankId);
    }
    if (isDormant !== "") {
      newParams.set("isDormant", isDormant);
    }
    router.replace(`/admin/account?${newParams.toString()}`);
  }, [router, page, searchWord, bankId, isDormant]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex pt-10 pb-5 justify-between">
            <h1 className="text-2xl font-bold">계좌</h1>
            <form className="flex items-center space-x-2">
              <BankSelect bankId={bankId} setBankId={setBankId} />
              <Select
                value={isDormant}
                onChange={(e: any) => setIsDormant(e.target.value)}
              >
                <option value={""}>휴면계좌 여부</option>
                <option value={"true"}>휴면계좌만</option>
                <option value={"false"}>활성계좌만</option>
              </Select>
              {/* <MemberMultiSearch
                placeholder={"고객 검색"}
                label={""}
                htmlFor={""}
              ></MemberMultiSearch>
              <ProductMultiSearchSelect
                placeholder={""}
                label={""}
                htmlFor={""}
              ></ProductMultiSearchSelect>
              <ProductTypeMultiSearchSelect
                placeholder={""}
                label={""}
                htmlFor={""}
              ></ProductTypeMultiSearchSelect> */}
              <AccountGroupSearch></AccountGroupSearch>
            </form>
          </div>

          {data?.page?.content && (
            <AccountTable accountList={data.page.content} />
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
                  console.log("account create");
                  router.push("account/create");
                }}
                id={"create"}
                name={"생성"}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AccountList;
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
