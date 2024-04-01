import tw from "tailwind-styled-components";
import { useRouter } from "next/navigation";
import { FaSort } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { localAxios } from "@/api/http-common";
import { useQuery } from "@tanstack/react-query";
import { IAccount } from "@/models/Account.interface";

interface IProps {
  accountList: IAccount[];
}

export default function AccountTable({ accountList }: IProps) {
  const router = useRouter();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 w-2/12">
              계좌별명
            </th>
            <th scope="col" className="px-6 py-3 w-1/12">
              고객이름
            </th>
            <th scope="col" className="px-6 py-3 w-2/12">
              상품명
            </th>
            <th scope="col" className="px-6 py-3  gap-3 w-1/12">
              <span className="flex gap-3">
                신규일자
                <FaSort></FaSort>
              </span>
            </th>
            <th scope="col" className="px-6 py-3 w-1/12">
              <span className="flex gap-3">
                만기일자
                <FaSort></FaSort>
              </span>
            </th>
            <th scope="col" className="px-6 py-3 gap-3 w-2/12">
              <span className="flex gap-3">
                잔액
                <FaSort></FaSort>
              </span>
            </th>
            {/* <th scope="col" className="px-6 py-3">
              최근거래금액
            </th> */}
            <th scope="col" className="relative px-6 py-3 w-1/12">
              <span className="sr-only"> </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {accountList.map((account) => (
            <tr
              key={account.accountId}
              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100"
            >
              <TableData className="font-medium text-gray-900 whitespace-nowrap">
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {account.accountName}
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {account.holderName}
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {account.productName ?? ""}
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {account.startDate}
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {account.endDate}
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {account.balance}
                </div>
              </TableData>
              {/* <td
                className={`px-6 py-4 ${
                  account.recentTransactionAmount >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {account.recentTransactionAmount >= 0 ? "+" : "-"}
                {Math.abs(account.recentTransactionAmount).toLocaleString()}
              </td> */}
              <td className="px-6 py-4">
                <a
                  onClick={() => {
                    router.push(`account/detail`);
                  }}
                  className="font-medium text-pink-400 hover:text-pink-500 cursor-pointer"
                >
                  자세히
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const TableHeader = tw.th`

`;

const TableData = tw.td`
px-6 
py-4
`;
