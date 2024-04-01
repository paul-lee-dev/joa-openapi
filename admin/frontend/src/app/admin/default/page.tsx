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
import { WeekTransactionLineGraph } from "@/components/graph/lineGraph";

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
      <StatCardContainer id="statCards">
        <StatCard>
          <CircleIcon className="bg-yellow-100">
            <FaExchangeAlt size="50" color="#FFBB38" />
          </CircleIcon>
          <div className="">
            <StatCardTitle>총 거래횟수 </StatCardTitle>
            <StatCardContent>
              {"\n"}
              {bankStat && bankStat.totalTransactionCnt}
            </StatCardContent>
          </div>
        </StatCard>
        <StatCard>
          <CircleIcon className="bg-blue-200">
            <FaUsers size="50" color="#396AFF" />
          </CircleIcon>
          <div>
            <StatCardTitle>고객 수 </StatCardTitle>
            <StatCardContent>
              {"\n"}
              {bankStat && bankStat.totalMemberCnt}
            </StatCardContent>
          </div>
        </StatCard>
        <StatCard>
          <CircleIcon className="bg-pink-200">
            <FaMoneyBillAlt size="50" color="#FF82AC" />
          </CircleIcon>
          <div>
            <StatCardTitle>총 출금 </StatCardTitle>
            <StatCardContent>
              {"\n"}
              {bankStat && bankStat.totalWithdrawAmount}
            </StatCardContent>
          </div>
        </StatCard>
        <StatCard>
          <CircleIcon className="bg-green-200">
            <FaMoneyCheckAlt size="45" color="#16DBCC" />
          </CircleIcon>
          <div>
            <StatCardTitle>총 입금 </StatCardTitle>
            <StatCardContent>
              {"\n"}
              {bankStat && bankStat.totalDepositAmount}
            </StatCardContent>
          </div>
        </StatCard>
      </StatCardContainer>
      <div className="flex gap-10 py-9">
        <div>{bankStat && <WeekTransactionGraph bankStat={bankStat} />}</div>
        {bankStat && <WeekTransactionLineGraph bankStat={bankStat} />}
      </div>
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
  bg-warmGray-50
  shadow-md
  p-3
  h-28
  rounded-lg
  text-left
`;

const StatCardContainer = tw.div`
flex justify-between gap-11 m-3
`;

const StatCardTitle = tw.span`
text-sm
text-gray-400
`;

const CircleIcon = tw.div`
  w-20
  h-20
  rounded-full
  flex
  items-center
  justify-center
`;

const StatCardContent = tw.span`
whitespace-pre-wrap
text-2xl
text-10
`;
export default Dashboard;
