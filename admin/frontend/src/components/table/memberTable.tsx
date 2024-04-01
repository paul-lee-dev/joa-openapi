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
            <th scope="col" className="px-6 py-3 w-2/12">
              고객 아이디
            </th>
            <th scope="col" className="px-6 py-3 w-2/12">
              은행명
            </th>
            <th scope="col" className="px-6 py-3 w-1/12">
              고객명
            </th>
            <th scope="col" className="px-6 py-3 w-2/12">
              이메일
            </th>
            <th scope="col" className="px-6 py-3 w-2/12">
              전화번호
            </th>
            <th scope="col" className="px-6 py-3 w-1/12">
              가입일자
            </th>

            <th scope="col" className="relative px-6 py-3 w-">
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
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-2">
                  {member.memberId}
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-2">
                  {member.bankName}
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-2">
                  {member.memberName}
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-2">
                  {member.email}
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-2">
                  {member.phone}
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-2">
                  {member.createdAt}
                </div>
              </TableData>

              <TableData
                onClick={() => {
                  router.push("member/detail");
                }}
                className="cursor-pointer"
              >
                <a className="font-medium text-pink-400 hover:text-pink-500">자세히</a>
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
