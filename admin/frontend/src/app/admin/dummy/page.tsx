"use client";
import { searchDummyList } from "@/api/Dummy";
import { searchMemberList } from "@/api/Membr";
import Button from "@/components/button/button";
import { LoadingSpinner } from "@/components/loadingSpinner";
import Pagination from "@/components/pagination";
import GroupSearch from "@/components/search/customerGroupSearch";
import BankSelect from "@/components/select/bankNoLabel";
import DummyTable from "@/components/table/dummyTable";
import MemberTable from "@/components/table/memberTable";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const DummyList = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [page, setPage] = useState<number>(Number(params.get("page")) || 1);
  const [keyword, setKeyword] = useState<string>(
    params.get("searchKeyWord") ?? ""
  );
  const [searchWord, setSearchWord] = useState<string>(
    params.get("searchKeyWord") ?? ""
  );
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["DummyList", searchWord || "", page],
    queryFn: () => {
      return searchDummyList({ searchKeyWord: searchWord, page });
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
      newParams.set("searchKeyWord", searchWord);
    }
    console.log(newParams);
    router.replace(`/admin/dummy?${newParams.toString()}`);
  }, [router, page, searchWord]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex pt-10 pb-5 justify-between">
            <h1 className="text-2xl font-bold">더미데이터</h1>
            <form
              className="flex items-center space-x-2"
              onSubmit={(e) => {
                e.preventDefault();
                setPage(1);
                setSearchWord(keyword);
              }}
            >
              <div className="w-52 h-10">
                <input
                  type="text"
                  autoComplete="off"
                  className="w-full h-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setKeyword(e.target.value)}
                  value={keyword}
                  placeholder="생성내역 명"
                />
              </div>
              <Button id={"search"} name={"검색"}></Button>
            </form>
          </div>
          {data?.page?.content && <DummyTable dummyList={data.page.content} />}
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
                  router.push("dummy/create");
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

export default DummyList;
