"use client";

import Button from "@/components/button/button";
import Pagination from "@/components/pagination";
import TransactionTable from "@/components/table/transactionTable";

const Dashboard = () => {
  return (
    <>
      <TransactionTable></TransactionTable>
      <div className="flex gap-6 justify-end mt-5">
        <Button id={"edit"} name={"수정"}></Button>
        <Button id={"delete"} name={"삭제"}></Button>
      </div>
      <div className="flex justify-end">
        <Pagination
          currentPage={0}
          totalPages={5}
          onPageChange={function (page: number): void {}}
        ></Pagination>
      </div>
    </>
  );
};

export default Dashboard;
