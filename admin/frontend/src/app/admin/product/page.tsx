"use client";

import { searchBankList } from "@/api/Bank";
import { searchProductList } from "@/api/Product";
import Button from "@/components/button/button";
import { LoadingSpinner } from "@/components/loadingSpinner";
import Pagination from "@/components/pagination";
import ProductGroupSearch from "@/components/search/productGroupSearch";
import BankSelect from "@/components/select/bankNoLabel";
import ProductTypeMultiSearchSelect from "@/components/select/productTypeMultiSearchSelect";
import ProductTable from "@/components/table/productTable";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProductList = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [page, setPage] = useState<number>(Number(params.get("page")) || 1);
  const [keyword, setKeyword] = useState<string>(params.get("productKeyword") ?? "");
  const [searchWord, setSearchWord] = useState<string>(params.get("productKeyword") ?? "");
  const [bankId, setBankId] = useState<string>("");
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["ProductList", searchWord || "all", page],
    queryFn: () => {
      return searchProductList({ productKeyword: searchWord, page });
    },
  });

  useEffect(() => {
    refetch();
  }, [refetch]);

  useEffect(() => {
    const newParams = new URLSearchParams();
    if (page > 1) {
      newParams.set("page", String(page));
    }
    if (searchWord !== "") {
      newParams.set("productKeyword", searchWord);
    }
    console.log(newParams);
    router.replace(`/admin/product?${newParams.toString()}`);
  }, [router, page, searchWord]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex pt-10 pb-5 justify-between">
            <h1 className="text-2xl font-bold">상품</h1>
            <form>
              <div className="flex space-x-2 items-center">
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
          </div>

          <ProductTable productList={data.page.content} />
          <div className="flex mt-5 justify-between gap-5">
            <div className="flex">
              <Pagination
                currentPage={page}
                totalPages={data.page.totalPages}
                onPageChange={setPage}
              />
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
