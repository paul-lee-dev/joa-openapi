import { ITransaction } from "@/models/Transaction.interface";
import tw from "tailwind-styled-components";

interface IProps {
  transactionList: ITransaction[];
}

export default function transactionTable({ transactionList }: IProps) {
  return (
    <div className="relative overflow-x-auto shadow-sm sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <TableHeader scope="col">입금주명</TableHeader>
            <TableHeader scope="col">출금계좌</TableHeader>
            <TableHeader scope="col">입금계좌</TableHeader>
            <TableHeader scope="col">거래일자</TableHeader>
            <TableHeader scope="col">거래금액</TableHeader>
            <TableHeader scope="col" className="relative">
              <span className="sr-only"> </span>
            </TableHeader>
          </tr>
        </thead>
        <tbody>
          {transactionList.map((transaction) => (
            <tr
              key={transaction.transactionId}
              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100"
            >
              <TableData className="font-medium text-gray-900 whitespace-nowrap">
                {transaction.depositorName}
              </TableData>
              <TableData>{transaction.fromAccount}</TableData>
              <TableData>{transaction.toAccount}</TableData>
              <TableData>{transaction.createdAt}</TableData>
              <TableData>{transaction.amount}</TableData>
              <TableData>
                <a
                  href="/admin/transaction/detail"
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

const TableHeader = tw.th`
px-6 
py-3
`;

const TableData = tw.td`
px-6 
py-4
`;
