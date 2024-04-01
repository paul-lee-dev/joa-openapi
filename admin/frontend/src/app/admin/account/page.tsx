"use client";

import { searchAccountList } from "@/api/Account";
import Button from "@/components/button/button";
import Pagination from "@/components/pagination";
import AccountGroupSearch from "@/components/search/accountGroupSearch";
import BankSelect from "@/components/select/bankNoLabel";
import MultiSearchSelect from "@/components/select/customerMultiSearchSelect";
import ProductMultiSearchSelect from "@/components/select/productMultiSearchSelect";
import ProductTypeMultiSearchSelect from "@/components/select/productTypeMultiSearchSelect";
import AccountTable from "@/components/table/accountTable";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
const AccountList = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");
  const [searchWord, setSearchWord] = useState<string>("");
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["AccountList", searchWord],
    queryFn: () => {
      return searchAccountList({ searchKeyword: searchWord });
    },
  });

  return (
    <>
      {isLoading ? (
        <h1>로딩중...</h1>
      ) : (
        <>
          <form className="flex justify-end m-2">
            <div className="flex gap-8 ">
              <BankSelect></BankSelect>
              <MultiSearchSelect
                placeholder={"고객 검색"}
                label={""}
                htmlFor={""}
              ></MultiSearchSelect>
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
            </div>
          </form>
          <AccountTable accountList={data.page.content} />
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
                  console.log("account create");
                  router.push("account/create");
                }}
                id={"create"}
                name={"생성"}
              ></Button>
              <Button
                onClick={() => {
                  console.log("account delete ");
                }}
                id={"delete"}
                name={"삭제"}
              ></Button>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AccountList;
