import { useRouter } from "next/navigation";

export default function DummyTable() {
  const Dummies = [
    {
      id: 1,
      dummyId: "6ba6d937-134d-4a88-8384-ac33fb8e5c05",
      dummyName: "곧서른청년",
      userCount: 100000,
      accountCount: 100005,
      transactionCount: 100000,
      createDate: "2023-04-15",
      // adminId: "b8530ac-35b1-4e9a-8013-5a4607d96a45",
    },
    {
      id: 2,
      dummyId: "6ba6d937-134d-4a88-8384-ac33fb8e5c05",
      dummyName: "곧서른청년",
      userCount: 100000,
      accountCount: 100005,
      transactionCount: 100000,
      createDate: "2023-04-15",
    },
    {
      id: 3,
      dummyId: "6ba6d937-134d-4a88-8384-ac33fb8e5c05",
      dummyName: "곧서른청년",
      userCount: 100000,
      accountCount: 100005,
      transactionCount: 100000,
      createDate: "2023-04-15",
    },
    {
      id: 4,
      dummyId: "6ba6d937-134d-4a88-8384-ac33fb8e5c05",
      dummyName: "곧서른청년",
      userCount: 100000,
      accountCount: 100005,
      transactionCount: 100000,
      createDate: "2023-04-15",
    },
    {
      id: 5,
      dummyId: "6ba6d937-134d-4a88-8384-ac33fb8e5c05",
      dummyName: "곧서른청년",
      userCount: 100000,
      accountCount: 100005,
      transactionCount: 100000,
      createDate: "2023-04-15",
    },
    {
      id: 6,
      dummyId: "6ba6d937-134d-4a88-8384-ac33fb8e5c05",
      dummyName: "곧서른청년",
      userCount: 100000,
      accountCount: 100005,
      transactionCount: 100000,
      createDate: "2023-04-15",
    },
  ];

  const router = useRouter();
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="relative px-6 py-3">
              <input
                id="bordered-checkbox-1"
                type="checkbox"
                value=""
                name="bordered-checkbox"
                className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2"
              />
            </th>
            <th scope="col" className="px-6 py-3">
              DummyID
            </th>
            <th scope="col" className="px-6 py-3">
              더미생성내역이름
            </th>
            <th scope="col" className="px-6 py-3">
              생성 유저 수
            </th>
            <th scope="col" className="px-6 py-3">
              생성 계좌 수
            </th>
            <th scope="col" className="px-6 py-3">
              생성 거래내역 수
            </th>
            <th scope="col" className="px-6 py-3">
              가입일자
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only"> </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {Dummies.map((dummy) => (
            <tr
              key={dummy.id}
              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100"
            >
              <td className="px-6 py-4">
                <input
                  id="bordered-checkbox-1"
                  type="checkbox"
                  value=""
                  name="bordered-checkbox"
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 "
                />
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <input type="text" placeholder={dummy.dummyName} />
              </td>
              <td className="px-6 py-4">{dummy.userCount}</td>
              <td className="px-6 py-4">{dummy.accountCount}</td>
              <td className="px-6 py-4">{dummy.transactionCount}</td>
              <td className="px-6 py-4">{dummy.createDate}</td>
              <td className="px-6 py-4">
                <a
                  onClick={() => {
                    router.push("dummy/detail");
                  }}
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
