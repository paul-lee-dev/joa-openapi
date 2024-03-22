"use client";

import Pagination from "@/components/pagination";
import ProductTable from "@/components/table/productTable";
const ProductList = () => {
  return (
    <>
      <ProductTable></ProductTable>
      <Pagination
        currentPage={0}
        totalPages={5}
        onPageChange={function (page: number): void {}}
      ></Pagination>
    </>
  );
};

export default ProductList;
