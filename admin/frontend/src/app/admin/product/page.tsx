"use client";

import Button from "@/components/button/button";
import Pagination from "@/components/pagination";
import GroupSearch from "@/components/search/accountGroupSearch";
import BankSelect from "@/components/select/bankNoLabel";
import ProductMultiSearchSelect from "@/components/select/productMultiSearchSelect";
import ProductSelect from "@/components/select/productNoLabel";
import ProductTypeMultiSearchSelect from "@/components/select/productTypeMultiSearchSelect";
import ProductTable from "@/components/table/productTable";
import { useRouter } from "next/navigation";
const ProductList = () => {
  const router = useRouter();
  return (
    <>
      <form>
        <div className="flex gap-6 justify-end mt-3 mb-5">
          <BankSelect></BankSelect>
          <ProductTypeMultiSearchSelect
            placeholder={""}
            label={""}
            htmlFor={""}
          ></ProductTypeMultiSearchSelect>
          <ProductMultiSearchSelect
            placeholder={""}
            label={""}
            htmlFor={""}
          ></ProductMultiSearchSelect>

          <Button id={"search"} name={"검색"} onClick={() => {}}></Button>
        </div>
      </form>
      <ProductTable></ProductTable>
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
              console.log("product create");
              router.push("product/create");
            }}
            id={"create"}
            name={"등록"}
          ></Button>
          <Button
            onClick={() => {
              console.log("product delete ");
            }}
            id={"delete"}
            name={"삭제"}
          ></Button>
        </div>
      </div>
    </>
  );
};

export default ProductList;
