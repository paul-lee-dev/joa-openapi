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
const MemberList = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [page, setPage] = useState<number>(Number(params.get("page")) || 1);
  const [keyword, setKeyword] = useState<string>(params.get("memberName") ?? "");
  const [searchWord, setSearchWord] = useState<string>(params.get("memberName") ?? "");
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["MemberList", searchWord || "all", page],
    queryFn: () => {
      return searchMemberList({ memberName: searchWord, page });
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
    console.log(newParams);
    router.replace(`/admin/member?${newParams.toString()}`);
  }, [router, page, searchWord]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex pt-10 pb-5 justify-between">
            <h1 className="text-2xl font-bold">고객</h1>
            <form className="flex items-center space-x-2">
              <BankSelect></BankSelect>
              <GroupSearch></GroupSearch>
              <Button id={"search"} name={"검색"} onClick={() => {}}></Button>
            </form>
          </div>

          <MemberTable memberList={data.page.content} />
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

export default MemberList;
