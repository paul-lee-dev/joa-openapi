"use client";

import { searchTransactionList } from "@/api/Transaction";
import Button from "@/components/button/button";
import { LoadingSpinner } from "@/components/loadingSpinner";
import Pagination from "@/components/pagination";
import TransactionTable from "@/components/table/transactionTable";
import { useQuery } from "@tanstack/react-query";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "@/styles/datepicker.css";
import { registerLocale, setDefaultLocale } from "react-datepicker";
import { ko } from "date-fns/locale";
import { format } from "date-fns";

registerLocale("ko", ko);

const Dashboard = () => {
  const router = useRouter();
  const params = useSearchParams();
  const [page, setPage] = useState<number>(Number(params.get("page")) || 1);
  const [keyword, setKeyword] = useState<string>(
    params.get("depositorNameKeyword") ?? ""
  );
  const [searchWord, setSearchWord] = useState<string>(
    params.get("depositorNameKeyword") ?? ""
  );

  const [startDate, setStartDate] = useState<Date | null>(null);
  const [endDate, setEndDate] = useState<Date | null>(null);

  const [fromDate, setFromDate] = useState<string>(
    params.get("fromDate") ?? ""
  );
  const [toDate, setToDate] = useState<string>(params.get("toDate") ?? "");

  const { data, isLoading, refetch } = useQuery({
    queryKey: [
      "TransactionList",
      searchWord || "all",
      page,
      fromDate || "all",
      toDate || "all",
    ],
    queryFn: () => {
      return searchTransactionList({
        depositorNameKeyword: searchWord,
        page,
        fromDate: fromDate || null,
        toDate: toDate || null,
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
      newParams.set("depositorNameKeyword", searchWord);
    }
    if (fromDate !== null) {
      newParams.set("fromDate", fromDate);
    }
    if (toDate !== "") {
      newParams.set("toDate", toDate);
    }
    console.log(newParams);
    router.replace(`/admin/transaction?${newParams.toString()}`);
  }, [router, page, searchWord, fromDate, toDate]);
  return (
    <>
      {isLoading ? (
        <LoadingSpinner />
      ) : (
        <>
          <div className="flex pt-10 pb-5 justify-between">
            <h1 className="text-2xl font-bold">거래내역</h1>
            <form
              className="flex items-center space-x-2"
              onSubmit={(e) => {
                e.preventDefault();
                setPage(1);
                setSearchWord(keyword);
                setFromDate(fromDate);
                setToDate(toDate);
              }}
            >
              <div className="w-52 h-10">
                <DatePicker
                  locale={ko}
                  className="rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholderText="시작일자"
                  minDate={new Date("2023-06-02")}
                  maxDate={new Date()}
                  dateFormat="yyyy-MM-dd"
                  selected={startDate}
                  onChange={(startDate) => {
                    setStartDate(startDate);
                    if (startDate !== null) {
                      setFromDate(
                        format(
                          new Date(startDate?.toLocaleDateString()),
                          "yyyy-MM-dd"
                        )
                      );
                    }
                  }}
                ></DatePicker>
              </div>
              <div className="w-52 h-10">
                <DatePicker
                  locale={ko}
                  className="rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  placeholderText="종료일자"
                  minDate={new Date("2023-06-02")}
                  maxDate={new Date()}
                  dateFormat="yyyy-MM-dd"
                  selected={endDate}
                  onChange={(endDate) => {
                    setEndDate(endDate);
                    if (endDate !== null) {
                      setToDate(
                        format(
                          new Date(endDate?.toLocaleDateString()),
                          "yyyy-MM-dd"
                        )
                      );
                    }
                  }}
                ></DatePicker>
              </div>
              <div className="w-52 h-10">
                <input
                  type="text"
                  autoComplete="off"
                  className="w-full h-full rounded-md border-0 py-1.5 px-4 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  onChange={(e) => setKeyword(e.target.value)}
                  value={keyword}
                  placeholder="입금자 명"
                />
              </div>

              <Button id={"search"} name={"검색"}></Button>
            </form>
          </div>
          {data?.page?.content && (
            <TransactionTable transactionList={data.page.content} />
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
                  router.push("transaction/create");
                }}
                id={"create"}
                name={"생성"}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Dashboard;
