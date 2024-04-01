import { IDummy } from "@/models/Dummy.interface";
import { useRouter } from "next/navigation";

interface IProps {
  dummyList: IDummy[];
}

export default function DummyTable({ dummyList }: IProps) {
  const router = useRouter();
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="relative px-6 py-3 sr">
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
          {dummyList.map((dummy) => (
            <tr
              key={dummy.dummyId}
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
              <td className="px-6 py-4">
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {dummy.dummyId}
                </div>
              </td>
              <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {dummy.name}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {dummy.memberCount ?? 0}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {dummy.accountCount ?? 0}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {dummy.transactionCount ?? 0}
                </div>
              </td>
              <td className="px-6 py-4">
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {dummy.createdAt}
                </div>
              </td>
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
