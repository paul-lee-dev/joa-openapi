"use client";
import Button from "@/components/button/button";
import Pagination from "@/components/pagination";
import BankSelect from "@/components/select/bankNoLabel";
import DummyTable from "@/components/table/dummyTable";
import { useRouter } from "next/navigation";
const DummyList = () => {
  const router = useRouter();
  return (
    <>
      <div className="flex gap-6 justify-end mt-3 mb-5">
        <BankSelect></BankSelect>
      </div>
      <DummyTable></DummyTable>
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
              console.log("dummy edit submit");
            }}
            id={"edit"}
            name={"수정"}
          ></Button>
          <Button
            onClick={() => {
              console.log("dummy delete ");
            }}
            id={"delete"}
            name={"삭제"}
          ></Button>
        </div>
      </div>
    </>
  );
};

export default DummyList;
