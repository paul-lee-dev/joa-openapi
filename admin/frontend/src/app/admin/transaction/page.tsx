"use client";

import { searchTransactionList } from "@/api/Transaction";
import Button from "@/components/button/button";
import { LoadingSpinner } from "@/components/loadingSpinner";
import Pagination from "@/components/pagination";
import AccountMultiSearchSelect from "@/components/select/accountMultiSearchSelect";
import BankMultiSearchSelect from "@/components/select/bankMultiSearchSelect";
import MultiSearchSelect from "@/components/select/customerMultiSearchSelect";
import TransactionTable from "@/components/table/transactionTable";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

const Dashboard = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");
  const [searchWord, setSearchWord] = useState<string>("");
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["TransactionList", searchWord],
    queryFn: () => {
      return searchTransactionList({ depositorNameKeyword: searchWord });
    },
  });

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <form className="flex justify-end m-2">
            <div className="flex gap-8 ">
              <BankMultiSearchSelect
                placeholder={"은행검색"}
                label={""}
                htmlFor={""}
              ></BankMultiSearchSelect>
              <MultiSearchSelect
                placeholder={"고객 검색"}
                label={""}
                htmlFor={""}
              ></MultiSearchSelect>
              <AccountMultiSearchSelect
                placeholder={""}
                label={""}
                htmlFor={""}
              ></AccountMultiSearchSelect>

              {/* <TransactionGroupSearch></TransactionGroupSearch> */}
              <Button id={"submit"} name={"검색"} onClick={() => {}}></Button>
            </div>
          </form>
          <TransactionTable transactionList={data.page.content} />
          <div className="flex mt-5 justify-between gap-5">
            <div className="flex">
              <Pagination
                currentPage={0}
                totalPages={5}
                onPageChange={function (page: number): void {}}
              ></Pagination>
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
