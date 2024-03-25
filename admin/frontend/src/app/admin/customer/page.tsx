"use client";
import Button from "@/components/button/button";
import Pagination from "@/components/pagination";
import GroupSearch from "@/components/search/customerGroupSearch";
import BankSelect from "@/components/select/bankNoLabel";
import CustomerTable from "@/components/table/customerTable";
import { useRouter } from "next/navigation";
const CustomerList = () => {
  const router = useRouter();
  return (
    <>
      <form>
        <div className="flex gap-6 justify-end mt-3 mb-5">
          <BankSelect></BankSelect>
          <GroupSearch></GroupSearch>
          <Button id={"search"} name={"검색"} onClick={() => {}}></Button>
        </div>
      </form>
      <CustomerTable></CustomerTable>
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
  );
};

export default CustomerList;
