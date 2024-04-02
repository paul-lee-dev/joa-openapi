"use client";

import React, { useEffect, useRef, useState } from "react";
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

export const WeekTransactionLineGraph: React.FC<WeekTransactionGraphProps> = ({
  bankStat,
}) => {
  const configOption = {
    chart: {
      id: "apexchart-example",
    },
    xaxis: {
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

  const configDate = ["-", "-", "-", "-", "-", "-", "-"];

  const [date, setDate] = useState(configDate);

  const configSeries = [
    {
      name: "입금",
      data: [30, 40, 35, 50, 49, 60, 70],
    },
    {
      name: "출금",
      data: [12, 20, 31, 51, 29, 13, 10],
    },
  ];

  const [option, setOption] = useState<{
    chart: { id: string };
    xaxis: { categories: string[] };
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

    if (timeData.length < 7) {
      let tmpDate: string[] = [];
      let tmpDeposit: number[] = [];
      let tmpWithdraw: number[] = [];
      for (let i = 0; i < 7 - timeData.length; i++) {
        tmpDate.push("");
        tmpDeposit.push(0);
        tmpWithdraw.push(0);
      }
      tmpDate = tmpDate.concat(timeData);
      tmpDeposit = tmpDeposit.concat(depositData);
      tmpWithdraw = tmpWithdraw.concat(withdrawData);
      // console.log("tmp: ", tmp);
      setOption((prevOptions) => ({
        chart: prevOptions.chart,
        xaxis: { categories: tmpDate },
      }));
      setSeries([
        { name: "입금", data: tmpDeposit },
        { name: "출금", data: tmpWithdraw },
      ]);
    } else {
      setSeries([
        { name: "입금", data: depositData },
        { name: "출금", data: withdrawData },
      ]);

      setOption((prevOptions) => ({
        chart: prevOptions.chart,
        xaxis: { categories: timeData },
      }));
    }
  }, [bankStat.totalTransactionList]);

  return (
    <div className="max-w w-full bg-warmGray-50 rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div className="flex justify-between mb-5">
        <div>
          <h5 className="leading-none text-3xl font-bold text-gray-900 dark:text-white pb-2">
            {bankStat.totalDepositAmount !== null &&
            bankStat.totalWithdrawAmount !== null
              ? (
                  (bankStat.totalDepositAmount - bankStat.totalWithdrawAmount) /
                  10000
                ).toFixed(1) + " 만원"
              : "0"}
          </h5>
          <p className="text-base font-normal text-gray-500 dark:text-gray-400">
            이번 주 수익
          </p>
        </div>
        <div className="flex items-center px-2.5 py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
          23%
          <svg
            className="w-3 h-3 ms-1"
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
        </div>
      </div>
      <div className="grid grid-cols-2">
        <dl className="flex items-center">
          <dt className="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">
            {" '"}
          </dt>{" "}
        </dl>
        <dl className="flex items-center justify-end">
          <dt className="text-gray-500 dark:text-gray-400 text-sm font-normal me-1">
            {" "}
          </dt>
          <dd className="text-gray-900 text-sm dark:text-white font-semibold">
            {" "}
          </dd>
        </dl>
      </div>
      <div>
        <ApexCharts
          type="line"
          options={option}
          series={series}
          height={320}
          width="225%"
        />
      </div>
      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between mt-5">
        <div className="flex justify-between items-center pt-5">
          {/* Button */}
          <button
            id="dropdownDefaultButton"
            data-dropdown-toggle="lastDaysdropdown"
            data-dropdown-placement="bottom"
            className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white"
            type="button"
          >
            지난 7 일
          </button>
          <a
            href="#"
            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 px-3"
          >
            실적 보고서
            <svg
              className="w-2.5 h-2.5 ms-1.5 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 6 10"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 9 4-4-4-4"
              />
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};
