import tw from "tailwind-styled-components";
import { useRouter } from "next/navigation";
import { FaSort } from "react-icons/fa";
import { IAccountSearch } from "@/models/Account.interface";
import { formatAmount } from "@/util";

interface IProps {
  accountList: IAccountSearch[];
}

export default function AccountTable({ accountList }: IProps) {
  const router = useRouter();

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-2 w-1/12">
              계좌번호
            </th>
            <th scope="col" className="px-6 py-2 w-2/12">
              은행코드
            </th>
            <th scope="col" className="px-6 py-2 w-2/12">
              계좌별명
            </th>
            <th scope="col" className="px-6 py-2 w-1/12">
              고객이름
            </th>
            <th scope="col" className="px-6 py-2 w-1/12">
              상품명
            </th>
            <th scope="col" className="px-6 py-2  gap-2 w-1/12">
              <span className="flex gap-2">
                신규일자
                <FaSort></FaSort>
              </span>
            </th>
            <th scope="col" className="px-6 py-2 w-1/12">
              <span className="flex gap-2">
                만기일자
                <FaSort></FaSort>
              </span>
            </th>
            <th scope="col" className="px-6 py-2 gap-2 w-1/12">
              <span className="flex gap-2">
                잔액
                <FaSort></FaSort>
              </span>
            </th>
            {/* <th scope="col" className="px-6 py-2">
              최근거래금액
            </th> */}
            <th scope="col" className="relative px-6 py-2 w-1/12">
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
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {account.accountId}
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {account.bankId}
                </div>
              </TableData>
              <TableData>
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
                  {formatAmount(account.balance)}원
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  <a
                    onClick={() => {
                      router.push(`account/${account.accountId}`);
                    }}
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

const TableHeader = tw.th`

`;

const TableData = tw.td`
px-6 
py-3
`;
