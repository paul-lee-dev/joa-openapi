import { IMember } from "@/models/Member.interface";
import { useRouter, usePathname } from "next/navigation";
import tw from "tailwind-styled-components";

interface IProps {
  memberList: IMember[];
}

export default function MemberTable({ memberList }: IProps) {
  const router = useRouter();

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
          {memberList.map((member) => (
            <tr
              key={member.memberId}
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
                {member.memberName}
              </td>
              <TableData>{member.memberId}</TableData>
              <TableData>{member.memberId}</TableData>
              <TableData>{member.phone}</TableData>
              <TableData>{member.createdAt}</TableData>
              <td className={"px-6 py-4"}></td>
              <TableData
                onClick={() => {
                  router.push("member/detail");
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
