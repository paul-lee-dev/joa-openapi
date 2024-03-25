"use client";

import Button from "@/components/button/button";
import Pagination from "@/components/pagination";
import TransactionTable from "@/components/table/transactionTable";
import { useRouter } from "next/navigation";

const Dashboard = () => {
  const router = useRouter();
  return (
    <>
      <TransactionTable></TransactionTable>
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
              router.push("transaction/create");
            }}
            id={"create"}
            name={"생성"}
          ></Button>
          <Button
            onClick={() => {
              console.log("delete transaction");
            }}
            id={"delete"}
            name={"삭제"}
          ></Button>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
