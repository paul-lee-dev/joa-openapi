import { localAxios } from "@/api/http-common";
import WeekTransactionGraph from "@/components/graph/Graph";
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { useEffect, useState } from "react";
import tw from "tailwind-styled-components";

interface Bank {
  bankId: string;
  adminId: string;
  name: string;
  description: string;
  uri: string;
  createdAt: string;
  updatedAt: string;
}

const Dashboard = () => {
  const api: AxiosInstance = axios.create({
    baseURL: "https://joa13.site/v1", // JSON 데이터를 가져올 엔드포인트의 URL
    headers: {
      apiKey: "9b5c450f-abd4-419f-b092-bcd96e66392f",
      "Content-Type": "application/json",
    },
  });

  const [bankList, setBankList] = useState<Bank[]>([]);

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
  }, [api]);

  return (
    <div>
      <div className="flex">
        <Select id="banks">
          {bankList.map((bank) => (
            <option key={bank.bankId} value={bank.bankId}>
              {bank.name}
            </option>
          ))}
        </Select>{" "}
      </div>
      <div className="flex"></div>
      <WeekTransactionGraph></WeekTransactionGraph>
    </div>
  );
};

const Select = tw.select`
block 
w-full 
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

export default Dashboard;
