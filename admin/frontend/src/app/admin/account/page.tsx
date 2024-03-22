"use client";

import Pagination from "@/components/pagination";
import DropDown from "@/components/search/dropDown";
import BankSelect from "@/components/select/bankNoLabel";
import MultiSearchSelect from "@/components/select/multiSearchSelect";
import AccountTable from "@/components/table/accountTable";
const AccountList = () => {
  return (
    <>
      <div className="flex gap-6 m-3">
        <BankSelect></BankSelect>
        <div>
          <MultiSearchSelect
            placeholder={"검색"}
            label={""}
            htmlFor={""}
          ></MultiSearchSelect>
        </div>
        <div>
          <DropDown />
        </div>
      </div>
      <AccountTable></AccountTable>
      <div className="flex justify-end m-3">
        <Pagination
          currentPage={0}
          totalPages={5}
          onPageChange={function (page: number): void {}}
        ></Pagination>
      </div>
    </>
  );
};

export default AccountList;
