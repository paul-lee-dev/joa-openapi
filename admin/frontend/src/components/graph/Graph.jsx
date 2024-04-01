"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(() => import("react-apexcharts"), { ssr: false });
interface WeekTransactionGraphProps {
  bankStat: {
    totalTransactionCnt: number;
    totalMemberCnt: number;
    totalWithdrawAmount: number | null;
    totalDepositAmount: number | null;
    totalTransactionList: {
      time: string;
      deposit: number;
      withdraw: number;
    }[];
  };
}

export const WeekTransactionGraph: React.FC<WeekTransactionGraphProps> = ({
  bankStat,
}) => {
  const configOption = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
      floating: false,
      categories: [
        "03-02",
        "03-03",
        "03-04",
        "03-05",
        "03-06",
        "03-07",
        "03-08",
        "03-09",
      ],
    },
   
  };

  const configSeries = [
    {
      name: "입금",
      color: "#FF82AC",
      data: [30, 40, 35, 50, 49, 60, 70],
    },
    {
      name: "출금",
      color: "#16DBCC",
      data: [12, 20, 31, 51, 29, 13, 10],
    },
  ];

  const plotOptions = {
    bar: {
      horizontal: false,
      columnWidth: "80%",
      borderRadiusApplication: "end",
      borderRadius: 8,
    },
  };

  const [option, setOption] = useState<{
    chart: { id: string };
    xaxis: {
      categories: string[],
    };
  }>(configOption);

  const [series, setSeries] = useState(configSeries);

  useEffect(() => {
    const depositData = bankStat.totalTransactionList.map(
      (transaction) => transaction.deposit
    );
    const withdrawData = bankStat.totalTransactionList.map(
      (transaction) => transaction.withdraw
    );
    const timeData = bankStat.totalTransactionList.map((transaction) =>
      transaction.time.slice(5, 10)
    );
    setSeries([
      { name: "입금", data: depositData, color: "#FF82AC" },
      { name: "출금", data: withdrawData, color: "#16DBCC" },
    ]);

    setOption((prevOptions) => ({
      chart: prevOptions.chart,
      xaxis: { categories: timeData },
    }));
  }, [bankStat.totalTransactionList]);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between pb-4 mb-4 border-b border-gray-200 dark:border-gray-700">
        <div className="flex items-center">
          <div className="w-12 h-12 rounded-lg bg-gray-100 dark:bg-gray-700 flex items-center justify-center me-3">
            <svg
              className="w-6 h-6 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 19"
            >
              <path d="M14.5 0A3.987 3.987 0 0 0 11 2.1a4.977 4.977 0 0 1 3.9 5.858A3.989 3.989 0 0 0 14.5 0ZM9 13h2a4 4 0 0 1 4 4v2H5v-2a4 4 0 0 1 4-4Z" />
              <path d="M5 19h10v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2ZM5 7a5.008 5.008 0 0 1 4-4.9 3.988 3.988 0 1 0-3.9 5.859A4.974 4.974 0 0 1 5 7Zm5 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm5-1h-.424a5.016 5.016 0 0 1-1.942 2.232A6.007 6.007 0 0 1 17 17h2a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5ZM5.424 9H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h2a6.007 6.007 0 0 1 4.366-5.768A5.016 5.016 0 0 1 5.424 9Z" />
            </svg>
          </div>
          <div>
            <h5 className="leading-none text-2xl font-bold text-gray-900 dark:text-white pb-1">
              {bankStat.totalMemberCnt / 1000}K
            </h5>
            <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
              고객 수 증가
            </p>
          </div>
        </div>
        <div>
          <span className="bg-green-100 text-green-800 text-xs font-medium inline-flex items-center px-2.5 py-1 rounded-md dark:bg-green-900 dark:text-green-300">
            <svg
              className="w-2.5 h-2.5 me-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 13V1m0 0L1 5m4-4 4 4"
              />
            </svg>
            {(Math.random() * 100).toFixed(3)}%
          </span>
        </div>
      </div>
      <div className="grid grid-cols-2">
        <dl className="flex items-center">
          <dt className="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">
            수익:
          </dt>
          <dd className="text-gray-900 text-sm dark:text-white font-semibold">
            {bankStat.totalDepositAmount !== null &&
            bankStat.totalWithdrawAmount !== null
              ? bankStat.totalDepositAmount - bankStat.totalWithdrawAmount
              : "0"}
          </dd>
        </dl>
        <dl className="flex items-center justify-end">
          <dt className="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">
            이익율:
          </dt>
          <dd className="text-gray-900 text-sm dark:text-white font-semibold">
            {bankStat.totalDepositAmount !== null &&
            bankStat.totalWithdrawAmount !== null
              ? (
                  bankStat.totalDepositAmount / bankStat.totalWithdrawAmount
                ).toFixed(4) + "%"
              : "0"}
          </dd>
        </dl>
      </div>
      <div>
        <ApexCharts
          type="bar"
          options={option}
          series={series}
          height={320}
          width={300}
        />{" "}
      </div>
      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">
          {/* Button */}
          <button className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white">
            지난 {bankStat.totalTransactionList.length} 일
          </button>
        </div>
      </div>
    </div>
  );
};
