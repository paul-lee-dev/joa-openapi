"use client";
import Pagination from "@/components/pagination";
import CustomerTable from "@/components/table/customerTable";
const CustomerList = () => {
  return (
    <>
      <CustomerTable></CustomerTable>
      <Pagination
        currentPage={0}
        totalPages={5}
        onPageChange={function (page: number): void {}}
      ></Pagination>
    </>
  );
};

export default CustomerList;
