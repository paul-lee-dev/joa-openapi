"use client";

import Button from "@/components/button/button";
import Pagination from "@/components/pagination";
import ProductTable from "@/components/table/productTable";
import { useRouter } from "next/navigation";
const ProductList = () => {
  const router = useRouter();
  return (
    <>
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
