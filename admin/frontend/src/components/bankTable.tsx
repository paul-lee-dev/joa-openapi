export default function BankTable() {
  const Banks = [
    {
      id: 1,
      logo: "@/asset/shc_symbol_ci.png",
      name: "조아은행",
      description: "좋은 은행이에요!",
      customers: "100,000,121",
      code: "6ba6d937-134d-4a88-8384-ac33fb8e5c05",
    },
    {
      id: 2,
      logo: "@/asset/another_bank_logo.png",
      name: "다른은행",
      description: "다른 은행입니다.",
      customers: "80,000,000",
      code: "a3e8e346-1d32-4b67-9e32-7b9b7d81c5ac",
    },
    {
      id: 2,
      logo: "@/asset/another_bank_logo.png",
      name: "다른은행",
      description: "다른 은행입니다.",
      customers: "80,000,000",
      code: "a3e8e346-1d32-4b67-9e32-7b9b7d81c5ac",
    },
    {
      id: 2,
      logo: "@/asset/another_bank_logo.png",
      name: "다른은행",
      description: "다른 은행입니다.",
      customers: "80,000,000",
      code: "a3e8e346-1d32-4b67-9e32-7b9b7d81c5ac",
    },
    {
      id: 2,
      logo: "@/asset/another_bank_logo.png",
      name: "다른은행",
      description: "다른 은행입니다.",
      customers: "80,000,000",
      code: "a3e8e346-1d32-4b67-9e32-7b9b7d81c5ac",
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
            <th scope="col" className="px-6 py-4">
              고객 수
            </th>
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
              <td className="px-6 py-4">
                <img src={bank.logo} alt="bank_logo" />
              </td>
              <td className="px-6 py-4">{bank.name}</td>
              <td className="px-6 py-4">{bank.description}</td>
              <td className="px-6 py-4">{bank.customers}</td>
              <td className="px-6 py-4">{bank.code}</td>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-pink-400 hover:text-pink-500"
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
