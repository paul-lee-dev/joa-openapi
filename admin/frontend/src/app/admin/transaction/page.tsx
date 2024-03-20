"use client";

import Pagination from "@/components/pagination";
import TransactionTable from "@/components/table/transactionTable";

const Dashboard = () => {
  return (
    <>
      <TransactionTable></TransactionTable>
      <Pagination
        currentPage={0}
        totalPages={5}
        onPageChange={function (page: number): void {}}
      ></Pagination>
    </>
  );
};

export default Dashboard;
