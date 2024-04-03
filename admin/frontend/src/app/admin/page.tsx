"use client";
import { localAxios } from "@/api/http-common";
import { FaExchangeAlt, FaUsers, FaMoneyBillAlt, FaMoneyCheckAlt } from "react-icons/fa";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import { WeekTransactionLineGraph } from "@/components/graph/lineGraph";
import { WeekTransactionGraph } from "@/components/graph/barGraph";
import { formatAmount } from "@/util";
import { HiBanknotes } from "react-icons/hi2";
import { useRouter } from "next/navigation";

interface Bank {
  bankId: string;
  adminId: string;
  name: string;
  description: string;
  uri: string;
  createdAt: string;
  updatedAt: string;
}

interface BankPage {
  content: Bank[];
  page: number;
  size: number;
  totalElements: number;
  totalPages: number;
  last: boolean;
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

export default function Admin() {
  const router = useRouter();
  const [bankList, setBankList] = useState<Bank[]>([]);
  const [selectedBankId, setSelectedBankId] = useState<string | null>(null);
  const [bankStat, setBankStat] = useState<BankStat | undefined>(undefined);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<{
          status: string;
          message: string;
          data: null;
          page: BankPage;
        }> = await localAxios.get("/bank/search");
        setBankList(response.data.page.content);
        if (response.data.page.content.length > 0) {
          handleBankChange(response.data.page.content[0].bankId);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  const handleBankChange = async (bankId: string) => {
    setSelectedBankId(bankId);
    try {
      const response: AxiosResponse<any> = await localAxios.get("/bank/dashboard/" + bankId);
      setBankStat(response.data.data);
    } catch (error) {
      console.error("Error fetching bank statistics:", error);
    }
  };
  console.log(selectedBankId);
  console.log(bankList.find((b) => b.bankId === selectedBankId));
  return (
    <div>
      <div className="flex justify-between">
        <div className="flex space-x-2 pt-10 pb-5">
          <div className="flex justify-center items-center">
            {bankList.find((b) => b.bankId === selectedBankId)?.uri ? (
              <img
                src={bankList.find((b) => b.bankId === selectedBankId)?.uri || ""}
                alt="bank_uri"
                width={40}
                height={40}
              />
            ) : (
              <HiBanknotes className="w-10 h-10" />
            )}
          </div>
          <Select id="banks" onChange={(e) => handleBankChange(e.target.value)}>
            {bankList.map((bank) => (
              <option key={bank.bankId} value={bank.bankId}>
                {bank.name}
              </option>
            ))}
          </Select>
        </div>
        <div className="flex items-center pr-2 pt-10 pb-5">
          <h1
            onClick={() => router.push(`/admin/bank/${selectedBankId ?? ""}`)}
            className="text-sm font-light text-gray-400 select-none cursor-pointer"
          >
            자세히보기
          </h1>
        </div>
      </div>
      <StatCardContainer id="statCards">
        <div className="flex space-x-6 w-full">
          <StatCard>
            <CircleIcon className="bg-yellow-100">
              <FaExchangeAlt size="40" color="#FFBB38" />
            </CircleIcon>
            <div className="flex flex-col items-end justify-center space-y-1">
              <StatCardTitle>총 거래횟수 </StatCardTitle>
              <StatCardContent>
                {bankStat && formatAmount(bankStat.totalTransactionCnt)}
                <span className="text-sm ml-2">회</span>
              </StatCardContent>
            </div>
          </StatCard>
          <StatCard>
            <CircleIcon className="bg-blue-200">
              <FaUsers size="40" color="#396AFF" />
            </CircleIcon>
            <div className="flex flex-col items-end justify-center space-y-1">
              <StatCardTitle>고객 수 </StatCardTitle>
              <StatCardContent>
                {bankStat && formatAmount(bankStat.totalMemberCnt)}
                <span className="text-sm ml-2">명</span>
              </StatCardContent>
            </div>
          </StatCard>
        </div>
        <div className="flex space-x-6 w-full">
          <StatCard>
            <CircleIcon className="bg-pink-200">
              <FaMoneyBillAlt size="40" color="#FF82AC" />
            </CircleIcon>
            <div className="flex flex-col items-end justify-center space-y-1">
              <StatCardTitle>총 출금 </StatCardTitle>
              <StatCardContent>
                {bankStat &&
                  bankStat.totalWithdrawAmount &&
                  (bankStat.totalWithdrawAmount > 100000
                    ? formatAmount(Math.floor(bankStat.totalWithdrawAmount / 10000))
                    : formatAmount(bankStat.totalWithdrawAmount))}
                <span className="text-sm ml-2">
                  {bankStat?.totalWithdrawAmount && bankStat?.totalWithdrawAmount > 100000
                    ? "만원"
                    : "원"}
                </span>
              </StatCardContent>
            </div>
          </StatCard>
          <StatCard>
            <CircleIcon className="bg-green-200">
              <FaMoneyCheckAlt size="40" color="#16DBCC" />
            </CircleIcon>
            <div className="flex flex-col items-end justify-center space-y-1">
              <StatCardTitle>총 입금 </StatCardTitle>
              <StatCardContent>
                {bankStat &&
                  bankStat.totalDepositAmount &&
                  (bankStat.totalDepositAmount > 100000
                    ? formatAmount(Math.floor(bankStat.totalDepositAmount / 10000))
                    : formatAmount(bankStat.totalDepositAmount))}
                <span className="text-sm ml-2">
                  {bankStat?.totalDepositAmount && bankStat?.totalDepositAmount > 100000
                    ? "만원"
                    : "원"}
                </span>
              </StatCardContent>
            </div>
          </StatCard>
        </div>
      </StatCardContainer>
      <div className="flex pt-6">
        <div className="w-1/2 pr-3">{bankStat && <WeekTransactionGraph bankStat={bankStat} />}</div>
        <div className="w-1/2 pl-3">
          {bankStat && <WeekTransactionLineGraph bankStat={bankStat} />}
        </div>
      </div>
    </div>
  );
}

const Select = tw.select`
border-0 
text-gray-700
placeholder:text-gray-400 
focus:outline-none
focus:ring-0
text-2xl
font-bold
`;

const StatCard = tw.div`
min-w-60
flex
justify-between
px-10
items-center
w-full
gap-3
bg-stone-50
shadow-md
h-28
rounded-lg
text-left
`;

const StatCardContainer = tw.div`
flex
flex-col
xl:flex-row
justify-between
space-x-0
xl:space-x-6
space-y-4
xl:space-y-0
`;

const StatCardTitle = tw.span`
text-sm
text-gray-400
overflow-clip
overflow-ellipsis
break-words
line-clamp-1
`;

const CircleIcon = tw.div`
w-16
h-16
min-w-16
min-h-16
rounded-full
flex
items-center
justify-center
`;

const StatCardContent = tw.span`
whitespace-pre-wrap
text-2xl
text-10
overflow-clip
overflow-ellipsis
break-words
line-clamp-1
`;
