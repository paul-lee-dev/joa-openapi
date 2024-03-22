"use client";
import Button from "@/components/button/button";
import Pagination from "@/components/pagination";
import BankSelect from "@/components/select/bankNoLabel";
import DummyTable from "@/components/table/dummyTable";
const DummyList = () => {
  return (
    <>
      <div className="flex gap-6 justify-end mt-3 mb-5">
        <BankSelect></BankSelect>
      </div>
      <DummyTable></DummyTable>
      <div className="flex gap-6 justify-end mt-5">
        <Pagination
          currentPage={0}
          totalPages={5}
          onPageChange={function (page: number): void {}}
        ></Pagination>
        <Button id={"edit"} name={"수정"}></Button>
        <Button id={"delete"} name={"삭제"}></Button>
      </div>
    </>
  );
};

export default DummyList;
