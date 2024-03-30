"use client";

import React, { useEffect, useRef } from "react";
import ApexCharts from "apexcharts";

// TODO: change if dummy is enough
interface WeekTransactionGraphProps {
  bankStat: {
    totalTransactionList: {
      time: string;
      deposit: number;
      withdraw: number;
    }[];
  };
}

// export const WeekTransactionGraph: React.FC<WeekTransactionGraphProps> = ({
//   bankStat,
// }) => {

export function WeekTransactionGraph() {
  const chartRef = useRef<ApexCharts | null>(null);
  useEffect(() => {
    const options = {
      colors: ["#FF82AC", "#16DBCC"],
      series: [
        {
          name: "입금",
          color: "#FF82AC",
          data: [
            { x: "03-23", y: 131 },
            { x: "03-24", y: 431 },
            { x: "03-25", y: 531 },
            { x: "03-26", y: 231 },
            { x: "03-26", y: 231 },
            { x: "03-28", y: 281 },
            { x: "03-29", y: 422 },
          ],
        },
        {
          name: "출금",
          color: "#16DBCC",
          data: [
            { x: "03-23", y: 531 },
            { x: "03-24", y: 431 },
            { x: "03-25", y: 331 },
            { x: "03-26", y: 231 },
            { x: "03-27", y: 431 },
            { x: "03-28", y: 332 },
            { x: "03-29", y: 713 },
          ],
        },
      ],
      chart: {
        type: "bar",
        height: "320px",
        fontFamily: "Inter, sans-serif",
        toolbar: {
          show: false,
        },
      },
      plotOptions: {
        bar: {
          horizontal: false,
          columnWidth: "90%",
          borderRadiusApplication: "end",
          borderRadius: 8,
        },
      },
      tooltip: {
        shared: true,
        intersect: false,
        style: {
          fontFamily: "Inter, sans-serif",
        },
      },
      states: {
        hover: {
          filter: {
            type: "darken",
            value: 1,
          },
        },
      },
      stroke: {
        show: true,
        width: 0,
        colors: ["transparent"],
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: -14,
        },
      },
      dataLabels: {
        enabled: false,
      },
      legend: {
        show: false,
      },
      xaxis: {
        floating: false,
        labels: {
          show: true,
          style: {
            fontFamily: "Inter, sans-serif",
            cssClass: "text-xs font-normal fill-gray-500 dark:fill-gray-400",
          },
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
      },
      fill: {
        opacity: 1,
      },
    };

    // const chartData = bankStat.totalTransactionList.map((transaction) => ({
    //   x: transaction.time.slice(5,10),
    //   y: transaction.deposit,
    // }));

    // options.series = [
    //   {
    //     name: "Deposit",
    //     color: "#FF82AC",
    //     data: chartData,
    //   },
    // ];

    if (typeof window !== "undefined") {
      if (
        document.getElementById("column-chart") &&
        typeof ApexCharts !== "undefined"
      ) {
        if (!chartRef.current) {
          chartRef.current = new ApexCharts(
            document.getElementById("column-chart"),
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
    // }, [bankStat]);
  }, []);

  return (
    <div className="max-w-sm w-full bg-white rounded-lg shadow dark:bg-gray-800 p-4 md:p-6">
      <div id="column-chart"></div>
      <div className="grid grid-cols-1 items-center border-gray-200 border-t dark:border-gray-700 justify-between">
        <div className="flex justify-between items-center pt-5">
          {/* Button */}
          <button className="text-sm font-medium text-gray-500 dark:text-gray-400 hover:text-gray-900 text-center inline-flex items-center dark:hover:text-white">
            지난 7 일
          </button>
        </div>
      </div>
    </div>
  );
}
