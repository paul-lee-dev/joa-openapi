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
interface BankStat {
  totalTransactionsCnt: number;
  totalMemberCnt: number;
  totalWithdrawAmount: number;
  totalDepositAmount: number;
  totalTransactionList: totalTransactionList[];
}

const Dashboard = () => {
  return <Table></Table>;
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
