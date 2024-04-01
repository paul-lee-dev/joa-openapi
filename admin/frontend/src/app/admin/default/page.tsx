"use client";
import { localAxios } from "@/api/http-common";
import { WeekTransactionGraph } from "@/components/graph/Graph";
import {
  FaExchangeAlt,
  FaUsers,
  FaMoneyBillAlt,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";

// TODO: change if dummy is enough

interface Bank {
  bankId: string;
  adminId: string;
  name: string;
  description: string;
  uri: string;
  createdAt: string;
  updatedAt: string;
}

interface totalTransactionList {
  time: string;
  deposit: number;
  withdraw: number;
}
export interface BankStat {
  totalTransactionCnt: number;
  totalMemberCnt: number;
  totalWithdrawAmount: number | null;
  totalDepositAmount: number | null;
  totalTransactionList: [
    {
      time: string;
      deposit: number;
      withdraw: number;
    }
  ];
}

const Dashboard = () => {
  const api: AxiosInstance = axios.create({
    baseURL: "https://joa13.site/v1", // JSON 데이터를 가져올 엔드포인트의 URL
    headers: {
      apiKey: "638b26db-a6d9-4f08-be30-5ce9f248067e",
      "Content-Type": "application/json",
    },
  });

  const [bankList, setBankList] = useState<Bank[]>([]);
  const [selectedBankId, setSelectedBankId] = useState<string | null>(null);
  const [bankStat, setBankStat] = useState<BankStat | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<{
          status: string;
          message: string;
          data: Bank[];
          page: null;
        }> = await localAxios.get("/bank/search");
        setBankList(response.data.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleBankChange = async (bankId: string) => {
    setSelectedBankId(bankId);
    try {
      const response: AxiosResponse<any> = await localAxios.get(
        "/bank/dashboard/" + bankId
        // "/bank/dashboard/044664ab-9889-456c-816d-7a0c817733d5"
      );
      setBankStat(response.data.data);
      console.log(
        "bankstat response.data: " + JSON.stringify(response.data.data)
      );
      console.log(
        "bankstat.totalTransactionCnt: " + bankStat?.totalDepositAmount
      );
    } catch (error) {
      console.error("Error fetching bank statistics:", error);
    }
  };

  return (
    <div>
      <div className="flex-end">
        <Select id="banks" onChange={(e) => handleBankChange(e.target.value)}>
          {bankList.map((bank) => (
            <option key={bank.bankId} value={bank.bankId}>
              {bank.name}
            </option>
          ))}
        </Select>
      </div>
      <div id="statCards" className="flex justify-between gap-2 m-3">
        <StatCard>
          <FaExchangeAlt />
          <div>
            <span>총 거래횟수</span>
            {bankStat && bankStat.totalTransactionCnt}
          </div>
        </StatCard>
        <StatCard>
          <FaUsers />
          <div>
            <span>고객 수</span>
            {bankStat && bankStat.totalMemberCnt}
          </div>
        </StatCard>
        <StatCard>
          <FaMoneyBillAlt />
          <span>총 출금</span> {bankStat && bankStat.totalWithdrawAmount}
        </StatCard>
        <StatCard>
          <FaMoneyCheckAlt />
          <span>총 입금</span>
          {bankStat && bankStat.totalDepositAmount}
        </StatCard>
      </div>
      {/* {bankStat && <WeekTransactionGraph bankStat={bankStat} />} */}
      {/* <WeekTransactionGraph /> */}
    </div>
  );
};

const Select = tw.select`
block 
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

const StatCard = tw.div`
  flex
  w-full
  gap-3
  bg-gray-100
  shadow-md
  p-3
  rounded-md
  text-center
`;

export default Dashboard;
