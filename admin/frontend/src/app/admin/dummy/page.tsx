"use client";
import { searchDummyList } from "@/api/Dummy";
import Button from "@/components/button/button";
import Pagination from "@/components/pagination";
import BankSelect from "@/components/select/bankNoLabel";
import DummyTable from "@/components/table/dummyTable";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
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

  return (
    <>
      {isLoading ? (
        <h1>로딩중...</h1>
      ) : (
        <>
          <div className="flex gap-6 justify-end mt-3 mb-5">
            <BankSelect />
          </div>
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
                  console.log("dummy edit submit");
                }}
                id={"edit"}
                name={"수정"}
              ></Button>
              <Button
                onClick={() => {
                  console.log("dummy delete ");
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

export default DummyList;
