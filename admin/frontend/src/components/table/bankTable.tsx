"use client";
import tw from "tailwind-styled-components";
import { useRouter } from "next/navigation";
import { HiEmojiSad } from "react-icons/hi";
import { IBank } from "@/models/Bank.interface";
import Image from "next/image";

interface BankTableProps {
  bankList: IBank[];
}

export default function BankTable({ bankList }: BankTableProps) {
  const router = useRouter();

  const handleBankDetail = (bankId: string) => {
    router.push(`bank/${bankId}`);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4 w-1/12">
              은행로고
            </th>
            <th scope="col" className="px-6 py-4 w-3/12">
              은행 코드
            </th>
            <th scope="col" className="px-6 py-4 w-2/12">
              은행명
            </th>
            <th scope="col" className="px-6 py-4 w-3/12">
              은행설명
            </th>
            {/* <th scope="col" className="px-6 py-4">
              고객 수
            </th> */}

            <th scope="col" className="relative px-6 py-4 w-1/12">
              <span className="sr-only"> </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {bankList.map((bank) => (
            <tr
              key={bank.bankId}
              className="border-b transition duration-300 ease-in-out hover:bg-pink-300"
            >
              <TableData>
                <Image
                  src={
                    "https://i.namu.wiki/i/I6G5oLx9hCbvGF6htSULqBcJcus4UGhTJoc-Q-szN69Y5vSfVM9-ULdIxjBpFvFbHWgW6Z93dlOc75_TtTf8eQ.svg"
                  }
                  alt="bank_uri"
                  width={35}
                  height={35}
                />
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {bank.bankId}
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {bank.name}
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {bank.description}
                </div>
              </TableData>
              {/* <TableData>{bank.customers}</TableData> */}

              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  <a
                    onClick={() => handleBankDetail(bank.bankId)}
                    className="font-medium text-pink-400 hover:text-pink-500 cursor-pointer"
                  >
                    자세히
                  </a>
                </div>
              </TableData>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const TableData = tw.td`
px-5
py-3
`;
