import { ITransaction } from "@/models/Transaction.interface";
import { formatAmount } from "@/util";
import { useRouter } from "next/navigation";
import tw from "tailwind-styled-components";

interface IProps {
  transactionList: ITransaction[];
}

export default function TransactionTable({ transactionList }: IProps) {
  const router = useRouter();
  return (
    <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 w-2/12">
              입금주명
            </th>
            <th scope="col" className="px-6 py-3 w-2/12">
              출금계좌
            </th>
            <th scope="col" className="px-6 py-3 w-2/12">
              입금계좌
            </th>
            <th scope="col" className="px-6 py-3 w-2/12">
              거래일자
            </th>
            <th scope="col" className="px-6 py-3 w-2/12">
              거래금액
            </th>
            <th scope="col" className="relative px-6 py-3 w-1/12">
              <span className="sr-only"> </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {transactionList.map((transaction) => (
            <tr
              key={transaction.transactionId}
              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100"
            >
              <TableData className="font-medium text-gray-900 whitespace-nowrap">
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {transaction.depositorName}
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {transaction.fromAccount}
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {transaction.toAccount}
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {transaction.createdAt}
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {formatAmount(transaction.amount)}원
                </div>
              </TableData>
              <TableData>
                <div className="cursor-pointer overflow-clip overflow-ellipsis break-words line-clamp-1">
                  <a
                    onClick={() => {
                      router.push(`transaction/${transaction.transactionId}`);
                    }}
                    className="font-medium text-pink-400 hover:text-pink-500"
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
px-6 
py-3
`;

const TableData = tw.td`
px-6 
py-4
`;
