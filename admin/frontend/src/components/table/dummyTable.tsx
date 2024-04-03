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
            <th scope="col" className="px-6 py-2 w-3/12">
              더미 생성내역 이름
            </th>
            <th scope="col" className="px-6 py-2 w-1/12">
              고객 수
            </th>
            <th scope="col" className="px-6 py-2 w-1/12">
              계좌 수
            </th>
            <th scope="col" className="px-6 py-2 w-1/12">
              거래내역 수
            </th>
            <th scope="col" className="px-6 py-2 w-3/12">
              생성 일자
            </th>
            <th scope="col" className="relative px-6 py-2 w-1/12">
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
              <td className="px-6 py-3 font-medium text-gray-900 whitespace-nowrap">
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {dummy.name}
                </div>
              </td>
              <td className="px-6 py-3">
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {dummy.memberCount ?? 0}
                </div>
              </td>
              <td className="px-6 py-3">
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {dummy.accountCount ?? 0}
                </div>
              </td>
              <td className="px-6 py-3">
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {dummy.transactionCount ?? 0}
                </div>
              </td>
              <td className="px-6 py-3">
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-1">
                  {dummy.createdAt}
                </div>
              </td>
              <td className="px-6 py-3 cursor-pointer">
                <a
                  onClick={() => {
                    router.push(`dummy/${dummy.dummyId}`);
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
