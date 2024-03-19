export default function CustomerTable() {
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
  ];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th
              scope="col"
              className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700"
            >
              고객 명
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
              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600"
            >
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                {customer.name}
              </td>
              <td className="px-6 py-4">{customer.clientId}</td>
              <td className="px-6 py-4">{customer.customerId}</td>
              <td className="px-6 py-4">{customer.phoneNumber}</td>
              <td className="px-6 py-4">{customer.joinDate}</td>
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
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-pink-400 dark:text-pink-200 hover:text-pink-500"
                >
                  자세히
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
