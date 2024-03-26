import tw from "tailwind-styled-components";

export default function transactionTable() {
  const Transactions = [
    {
      id: 1,
      name: "예금통장",
      from: "1010101010",
      to: "1010101011",
      date: "2023-12-02",
      amount: 100000,
    },
    {
      id: 2,
      name: "예금통장",
      from: "1010101010",
      to: "1010101011",
      date: "2023-12-02",
      amount: 100000,
    },
    {
      id: 3,
      name: "예금통장",
      from: "1010101010",
      to: "1010101011",
      date: "2023-12-02",
      amount: 100000,
    },
    {
      id: 4,
      name: "예금통장",
      from: "1010101010",
      to: "1010101011",
      date: "2023-12-02",
      amount: 100000,
    },
    {
      id: 5,
      name: "예금통장",
      from: "1010101010",
      to: "1010101011",
      date: "2023-12-02",
      amount: 100000,
    },
    {
      id: 6,
      name: "예금통장",
      from: "1010101010",
      to: "1010101011",
      date: "2023-12-02",
      amount: 100000,
    },
    {
      id: 7,
      name: "예금통장",
      from: "1010101010",
      to: "1010101011",
      date: "2023-12-02",
      amount: 100000,
    },
    {
      id: 8,
      name: "예금통장",
      from: "1010101010",
      to: "1010101011",
      date: "2023-12-02",
      amount: 100000,
    },
  ];

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
          {Transactions.map((transaction) => (
            <tr
              key={transaction.id}
              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100"
            >
              <TableData className="font-medium text-gray-900 whitespace-nowrap">
                {transaction.name}
              </TableData>
              <TableData>{transaction.from}</TableData>
              <TableData>{transaction.to}</TableData>
              <TableData>{transaction.date}</TableData>
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
