import { useRouter, usePathname } from "next/navigation";
import tw from "tailwind-styled-components";

export default function CustomerTable() {
  const router = useRouter();
  const pathname = usePathname();
  const Customers = [
    {
      id: 1,
      name: "조아영",
      clientId: "6ba6d937-134d-4a88-8384-ac33fb8e5c05",
      customerId: "joah13",
      phoneNumber: "010-1234-1234",
      joinDate: "2023-02-02",
      recentTransactionAmount: 100000,
    },
    {
      id: 2,
      name: "고수림",
      clientId: "db8530ac-35b1-4e9a-8013-5a4607d96a45",
      customerId: "slimsulim",
      phoneNumber: "010-5678-5678",
      joinDate: "2023-04-15",
      recentTransactionAmount: -50000,
    },
    {
      id: 3,
      name: "구본승",
      clientId: "a3e8e346-1d32-4b67-9e32-7b9b7d81c5ac",
      customerId: "rootwin",
      phoneNumber: "010-9876-9876",
      joinDate: "2023-06-30",
      recentTransactionAmount: 75000,
    },
    {
      id: 4,
      name: "구본승",
      clientId: "a3e8e346-1d32-4b67-9e32-7b9b7d81c5ac",
      customerId: "rootwin",
      phoneNumber: "010-9876-9876",
      joinDate: "2023-06-30",
      recentTransactionAmount: -75000,
    },
    {
      id: 5,
      name: "구본승",
      clientId: "a3e8e346-1d32-4b67-9e32-7b9b7d81c5ac",
      customerId: "rootwin",
      phoneNumber: "010-9876-9876",
      joinDate: "2023-06-30",
      recentTransactionAmount: 75000,
    },
    {
      id: 6,
      name: "구본승",
      clientId: "a3e8e346-1d32-4b67-9e32-7b9b7d81c5ac",
      customerId: "rootwin",
      phoneNumber: "010-9876-9876",
      joinDate: "2023-06-30",
      recentTransactionAmount: -75000,
    },
    {
      id: 7,
      name: "구본승",
      clientId: "a3e8e346-1d32-4b67-9e32-7b9b7d81c5ac",
      customerId: "rootwin",
      phoneNumber: "010-9876-9876",
      joinDate: "2023-06-30",
      recentTransactionAmount: 75000,
    },
  ];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="relative px-6 py-3">
              <span
                onClick={() => {}}
                className="hover:text-pink-400 cursor-pointer"
              >
                전체
              </span>
            </th>
            <th scope="col" className="px-6 py-3">
              ClientName
            </th>
            <th scope="col" className="px-6 py-3">
              ClientID
            </th>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              전화번호
            </th>
            <th scope="col" className="px-6 py-3">
              가입일자
            </th>
            <th scope="col" className="px-6 py-3">
              최근거래금액
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only"> </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {Customers.map((customer) => (
            <tr
              key={customer.id}
              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100"
            >
              <TableData>
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value=""
                  name="bordered-checkbox"
                  className="w-4 h-4 text-pink-600 bg-gray-100 border-gray-300 rounded focus:ring-pink-500 "
                />
              </TableData>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {customer.name}
              </td>
              <TableData>{customer.clientId}</TableData>
              <TableData>{customer.customerId}</TableData>
              <TableData>{customer.phoneNumber}</TableData>
              <TableData>{customer.joinDate}</TableData>
              <td
                className={`px-6 py-4 ${
                  customer.recentTransactionAmount >= 0
                    ? "text-green-600"
                    : "text-red-600"
                }`}
              >
                {customer.recentTransactionAmount >= 0 ? "+" : "-"}
                {Math.abs(customer.recentTransactionAmount).toLocaleString()}
              </td>
              <TableData
                onClick={() => {
                  router.push("customer/detail");
                }}
                className="cursor-pointer"
              >
                <a className="font-medium text-pink-400 hover:text-pink-500">
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
px-6
py-4
`;
