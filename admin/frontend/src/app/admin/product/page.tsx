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
import { ChangeEvent, useEffect, useState } from "react";
import tw from "tailwind-styled-components";

const ProductList = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [page, setPage] = useState<number>(Number(params.get("page")) || 1);
  const [keyword, setKeyword] = useState<string>(
    params.get("productKeyword") ?? ""
  );
  const [searchWord, setSearchWord] = useState<string>(
    params.get("productKeyword") ?? ""
  );
  const [bankId, setBankId] = useState<string>(params.get("bankId") ?? "");
  const [productType, setProductType] = useState<string>(
    params.get("productType") ?? ""
  );
  const { data, isLoading, refetch } = useQuery({
    queryKey: [
      "ProductList",
      searchWord || "all",
      page,
      bankId || "all",
      productType || "all",
    ],
    queryFn: () => {
      return searchProductList({
        productKeyword: searchWord,
        page,
        bankId: bankId || null,
        productType: productType || null,
      });
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
    if (bankId !== "") {
      newParams.set("bankId", bankId);
    }
    if (productType !== "") {
      newParams.set("productType", productType);
    }
    router.replace(`/admin/product?${newParams.toString()}`);
  }, [router, page, searchWord, bankId, productType]);

  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex pt-10 pb-5 justify-between">
            <h1 className="text-2xl font-bold">상품</h1>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                setPage(1);
                setSearchWord(keyword);
              }}
            >
              <div className="flex space-x-2 items-center">
                <BankSelect
                  bankId={bankId}
                  setBankId={(value) => {
                    setPage(1);
                    setBankId(value);
                  }}
                />
                <Select
                  value={productType}
                  onChange={(e) => {
                    setPage(1);
                    setProductType(e.target.value);
                  }}
                >
                  <option value={""}>상품타입 선택</option>
                  <option value={"ORDINARY_DEPOSIT"}>보통 예금</option>
                  <option value={"TERM_DEPOSIT"}>정기 예금</option>
                  <option value={"FIXED_DEPOSIT"}>정기 적금</option>
                </Select>
                <div className="w-52 h-10">
                  <input
                    type="text"
                    autoComplete="off"
                    className="w-full h-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => setKeyword(e.target.value)}
                    value={keyword}
                    placeholder="상품 명"
                  />
                </div>
                <Button id={"button"} name={"검색"} />
              </div>
            </form>
          </div>

          {data?.page?.content && (
            <ProductTable productList={data.page.content} />
          )}
          <div className="flex mt-5 justify-between gap-5">
            <div className="flex">
              {data?.page?.content && (
                <Pagination
                  currentPage={page}
                  totalPages={data.page.totalPages}
                  onPageChange={setPage}
                />
              )}
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

const Select = tw.select`
block 
w-40 
h-10
rounded-md 
border-0 
px-1.5
py-1.5
text-gray-700
ring-1
ring-inset 
ring-gray-300 
placeholder:text-gray-400 
focus:outline-none
focus:ring-2 
focus:ring-inset 
focus:ring-pink-500 
sm:text-sm 
sm:leading-6
`;

export default ProductList;
