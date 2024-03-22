"use client";

import Pagination from "@/components/pagination";
import BankSelect from "@/components/select/bankNoLabel";
import MultiSearchSelect from "@/components/select/multiSearchSelect";
import AccountTable from "@/components/table/accountTable";
const AccountList = () => {
  return (
    <>
      <div className="flex gap-6 justify-end">
        <BankSelect></BankSelect>
        <MultiSearchSelect
          placeholder={"검색"}
          label={""}
          htmlFor={""}
        ></MultiSearchSelect>
      </div>
      <AccountTable></AccountTable>
      <Pagination
        currentPage={0}
        totalPages={5}
        onPageChange={function (page: number): void {}}
      ></Pagination>
    </>
  );
};

export default AccountList;
