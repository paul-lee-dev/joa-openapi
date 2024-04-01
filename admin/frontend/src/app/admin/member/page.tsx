"use client";
import { searchMemberList } from "@/api/Membr";
import Button from "@/components/button/button";
import Pagination from "@/components/pagination";
import GroupSearch from "@/components/search/customerGroupSearch";
import BankSelect from "@/components/select/bankNoLabel";
import MemberTable from "@/components/table/memberTable";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";
const CustomerList = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");
  const [searchWord, setSearchWord] = useState<string>("");
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["MemberList", searchWord],
    queryFn: () => {
      return searchMemberList({ memberName: searchWord });
    },
  });
  return (
    <>
      {isLoading ? (
        <h1>로딩중...</h1>
      ) : (
        <>
          <form>
            <div className="flex gap-6 justify-end mt-3 mb-5">
              <BankSelect></BankSelect>
              <GroupSearch></GroupSearch>
              <Button id={"search"} name={"검색"} onClick={() => {}}></Button>
            </div>
          </form>
          <MemberTable memberList={data.page.content} />
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
                  router.push("customer/create");
                }}
                id={"create"}
                name={"생성"}
              ></Button>
              <Button
                onClick={() => {
                  console.log("customer create btn clicked");
                  router.push("customer/delete");
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

export default CustomerList;
