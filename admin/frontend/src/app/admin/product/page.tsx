"use client";

import { searchBankList } from "@/api/Bank";
import { searchProductList } from "@/api/Product";
import Button from "@/components/button/button";
import Pagination from "@/components/pagination";
import ProductGroupSearch from "@/components/search/productGroupSearch";
import BankSelect from "@/components/select/bankNoLabel";
import ProductTypeMultiSearchSelect from "@/components/select/productTypeMultiSearchSelect";
import ProductTable from "@/components/table/productTable";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useState } from "react";

const ProductList = () => {
  const router = useRouter();
  const [keyword, setKeyword] = useState<string>("");
  const [searchWord, setSearchWord] = useState<string>("");
  const [bankId, setBankId] = useState<string>("");
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["ProductList"],
    queryFn: () => {
      return searchProductList({});
    },
  });
  return (
    <>
      {isLoading ? (
        <h1>로딩중...</h1>
      ) : (
        <>
          <form>
            <div className="flex gap-6 justify-end mt-3 mb-5">
              <BankSelect />
              <ProductTypeMultiSearchSelect
                placeholder={""}
                label={""}
                htmlFor={""}
              ></ProductTypeMultiSearchSelect>
              <ProductGroupSearch></ProductGroupSearch>
              <Button id={"search"} name={"검색"} onClick={() => {}}></Button>
            </div>
          </form>
          <ProductTable productList={data.page.content} />
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
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default ProductList;
