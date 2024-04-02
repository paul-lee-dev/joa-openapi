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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
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

  useEffect(() => {
    refetch();
  }, [refetch]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <form className="flex justify-end m-2">
            <div className="flex gap-8 ">
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
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default AccountList;
