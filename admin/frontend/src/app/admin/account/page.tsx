"use client";

import Button from "@/components/button/button";
import DropdownDefaultCheckbox from "@/components/dropdown/dropdown";
import Pagination from "@/components/pagination";
import BankSelect from "@/components/select/bankNoLabel";
import MultiSearchSelect from "@/components/select/multiSearchSelect";
import AccountTable from "@/components/table/accountTable";
import { useRouter } from "next/navigation";
const AccountList = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex justify-end">
        <div className="flex gap-8">
          <BankSelect></BankSelect>
          <MultiSearchSelect
            placeholder={"고객 검색"}
            label={""}
            htmlFor={""}
          ></MultiSearchSelect>
        </div>
      </div>
      <AccountTable></AccountTable>
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
  );
};

export default AccountList;
