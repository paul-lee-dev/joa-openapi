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
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const DummyList = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");
  const [searchWord, setSearchWord] = useState<string>("");
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["DummyList", searchWord],
    queryFn: () => {
      return searchDummyList({ searchKeyWord: searchWord });
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
          <form>
            <div className="flex gap-6 justify-end mt-3 mb-5">
              <BankSelect />
              <Button id={"search"} name={"검색"} onClick={() => {}}></Button>
            </div>
          </form>
          <DummyTable dummyList={data.page.content} />
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
