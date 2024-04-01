"use client";

import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

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
  const chartRef = useRef<ApexCharts | null>(null);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const options = {
        series: [
          {
            name: "입금",
            data: [1500, 1418, 1456, 1526, 1356, 1256],
            color: "#1A56DB",
          },
          {
            name: "출금",
            data: [643, 413, 765, 412, 1423, 1731],
            color: "#7E3BF2",
          },
        ],
        chart: {
          height: "320px",
          maxWidth: "100%",
          type: "area",
          fontFamily: "Inter, sans-serif",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
        },
        legend: {
          show: true,
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
            shade: "#1C64F2",
            gradientToColors: ["#1C64F2"],
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 6,
        },
        grid: {
          show: false,
          strokeDashArray: 4,
          padding: {
            left: 2,
            right: 2,
            top: -26,
          },
        },
        xaxis: {
          categories: [
            "03-05",
            "03-06",
            "03-07",
            "03-08",
            "03-09",
            "03-10",
            "03-11",
          ],
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
          labels: {
            formatter: function (value: number) {
              return "₩" + value;
            },
          },
        },
      };

      const depositData = bankStat.totalTransactionList.map(
        (transaction) => transaction.deposit
      );
      const withdrawData = bankStat.totalTransactionList.map(
        (transaction) => transaction.withdraw
      );

      options.series[0].data = depositData;
      options.series[1].data = withdrawData;

      // TODO: refactor this window rendering problem
      if (typeof window !== "undefined") {
        if (
          document.getElementById("column-chart-2") &&
          typeof ApexCharts !== "undefined"
        ) {
          if (!chartRef.current) {
            chartRef.current = new ApexCharts(
              document.getElementById("column-chart-2"),
              options
            );
            chartRef.current.render();
          }
        }

        return () => {
          if (chartRef.current) {
            chartRef.current.destroy();
            chartRef.current = null;
          }
        };
      }
    }
  }, [bankStat]);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
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
      <div id="column-chart-2"></div>
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
            지난 {bankStat.totalTransactionList.length} 일
            <svg
              className="w-2.5 m-2.5 ms-1.5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 10 6"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m1 1 4 4 4-4"
              />
            </svg>
          </button>
          <a
            href="#"
            className="uppercase text-sm font-semibold inline-flex items-center rounded-lg text-blue-600 hover:text-blue-700 dark:hover:text-blue-500  hover:bg-gray-100 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700 px-3 py-2"
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
