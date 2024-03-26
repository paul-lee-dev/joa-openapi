"use client";
import Image from "next/image";
import tw from "tailwind-styled-components";
import { useRouter } from "next/navigation";
import { HiEmojiSad } from "react-icons/hi";

export default function BankTable() {
  const router = useRouter();
  const Banks = [
    {
      id: 1,
      uri: "/asset/shc_symbol_ci.png",
      name: "조아은행",
      description: "좋은 은행이에요!",
      // customers: "100,000,121",
      bankId: "6ba6d937-134d-4a88-8384-ac33fb8e5c05",
    },
    {
      id: 2,
      uri: "/asset/shc_symbol_ci.png",
      name: "다른은행",
      description: "다른 은행입니다.",
      // customers: "80,000,000",
      bankId: "a3e8e346-1d32-4b67-9e32-7b9b7d81c5ac",
    },
    {
      id: 3,
      uri: "/asset/shc_symbol_ci.png",
      name: "다른은행",
      description: "다른 은행입니다.",
      customers: "80,000,000",
      bankId: "a3e8e346-1d32-4b67-9e32-7b9b7d81c5ac",
    },
    {
      id: 4,
      uri: "/asset/shc_symbol_ci.png",
      name: "다른은행",
      description: "다른 은행입니다.",
      // customers: "80,000,000",
      bankId: "a3e8e346-1d32-4b67-9e32-7b9b7d81c5ac",
    },
    {
      id: 5,
      uri: "/asset/shc_symbol_ci.png",
      name: "다른은행",
      description: "다른 은행입니다.",
      // customers: "80,000,000",
      bankId: "a3e8e346-1d32-4b67-9e32-7b9b7d81c5ac",
    },
  ];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-4">
              은행로고
            </th>
            <th scope="col" className="px-6 py-4">
              은행명
            </th>
            <th scope="col" className="px-6 py-4">
              은행설명
            </th>
            {/* <th scope="col" className="px-6 py-4">
              고객 수
            </th> */}
            <th scope="col" className="px-6 py-4">
              은행 코드
            </th>
            <th scope="col" className="relative px-6 py-4">
              <span className="sr-only"> </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {Banks.map((bank) => (
            <tr
              key={bank.id}
              className="border-b transition duration-300 ease-in-out hover:bg-pink-300"
            >
              <TableData>
                {/* <Image
                  src={bank.uri}
                  alt="bank_uri"
                  width={50}
                  height={50}
                ></Image> */}
                <HiEmojiSad></HiEmojiSad>
              </TableData>
              <TableData>{bank.name}</TableData>
              <TableData>{bank.description}</TableData>
              {/* <TableData>{bank.customers}</TableData> */}
              <TableData>{bank.bankId}</TableData>
              <TableData>
                <a
                  onClick={() => {
                    router.push("bank/detail");
                  }}
                  className="font-medium text-pink-400 hover:text-pink-500"
                >
                  자세히
                </a>
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
