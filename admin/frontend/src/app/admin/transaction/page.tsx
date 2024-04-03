"use client";

import { searchTransactionList } from "@/api/Transaction";
import Button from "@/components/button/button";
import { LoadingSpinner } from "@/components/loadingSpinner";
import Pagination from "@/components/pagination";
import AccountMultiSearchSelect from "@/components/select/accountMultiSearchSelect";
import BankMultiSearchSelect from "@/components/select/bankMultiSearchSelect";
import MemberMultiSearch from "@/components/select/memberMultiSearch";
import TransactionTable from "@/components/table/transactionTable";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [page, setPage] = useState<number>(Number(params.get("page")) || 1);
  const [keyword, setKeyword] = useState<string>(
    params.get("depositorNameKeyword") ?? ""
  );
  const [searchWord, setSearchWord] = useState<string>(
    params.get("depositorNameKeyword") ?? ""
  );
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["TransactionList", searchWord || "all", page],
    queryFn: () => {
      return searchTransactionList({ depositorNameKeyword: searchWord, page });
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
      newParams.set("depositorNameKeyword", searchWord);
    }
    console.log(newParams);
    router.replace(`/admin/transaction?${newParams.toString()}`);
  }, [router, page, searchWord]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex pt-10 pb-5 justify-between">
            <h1 className="text-2xl font-bold">거래내역</h1>
            <form className="flex items-center space-x-2">
              <BankMultiSearchSelect
                placeholder={"은행검색"}
                label={""}
                htmlFor={""}
              ></BankMultiSearchSelect>
              <MemberMultiSearch
                placeholder={"고객 검색"}
                label={""}
                htmlFor={""}
              ></MemberMultiSearch>
              <AccountMultiSearchSelect
                placeholder={""}
                label={""}
                htmlFor={""}
              ></AccountMultiSearchSelect>

              {/* <TransactionGroupSearch></TransactionGroupSearch> */}
              <Button id={"submit"} name={"검색"} onClick={() => {}}></Button>
            </form>
          </div>
          {data?.page?.content && (
            <TransactionTable transactionList={data.page.content} />
          )}
          <div className="flex mt-5 justify-between gap-5">
            <div className="flex">
              {data?.page?.totalPages && (
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
                  router.push("transaction/create");
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

export default Dashboard;
