"use client";

import Pagination from "@/components/pagination";
import AccountTable from "@/components/table/accountTable";
const AccountList = () => {
  return (
    <>
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