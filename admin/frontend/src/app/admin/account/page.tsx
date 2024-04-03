"use client";

import { searchAccountList } from "@/api/Account";
import Button from "@/components/button/button";
import { LoadingSpinner } from "@/components/loadingSpinner";
import Pagination from "@/components/pagination";
import AccountGroupSearch from "@/components/search/accountGroupSearch";
import BankSelect from "@/components/select/bankNoLabel";
import MemberMultiSearch from "@/components/select/memberMultiSearch";
import ProductMultiSearchSelect from "@/components/select/productMultiSearchSelect";
import ProductTypeMultiSearchSelect from "@/components/select/productTypeMultiSearchSelect";
import AccountTable from "@/components/table/accountTable";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
const AccountList = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [page, setPage] = useState<number>(Number(params.get("page")) || 1);
  const [keyword, setKeyword] = useState<string>(params.get("searchKeyword") ?? "");
  const [searchWord, setSearchWord] = useState<string>(params.get("searchKeyword") ?? "");
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["AccountList", searchWord || "all", page],
    queryFn: () => {
      return searchAccountList({ searchKeyword: searchWord, page });
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
    console.log(newParams);
    router.replace(`/admin/account?${newParams.toString()}`);
  }, [router, page, searchWord]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex pt-10 pb-5 justify-between">
            <h1 className="text-2xl font-bold">상품</h1>
            <form className="flex items-center space-x-2">
              <BankSelect></BankSelect>
              <MemberMultiSearch
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
              ></ProductTypeMultiSearchSelect>
              <AccountGroupSearch></AccountGroupSearch>
            </form>
          </div>

          <AccountTable accountList={data.page.content} />
          <div className="flex mt-5 justify-between gap-5">
            <div className="flex">
              <Pagination
                currentPage={page}
                totalPages={data.page.totalPages}
                onPageChange={setPage}
              />
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
