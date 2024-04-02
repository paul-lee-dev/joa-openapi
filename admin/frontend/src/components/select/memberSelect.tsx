import { searchMemberList } from "@/api/Membr";
import { searchProductList } from "@/api/Product";
import { IMember } from "@/models/Member.interface";
import { useQuery } from "@tanstack/react-query";
import { ChangeEventHandler } from "react";
import tw from "tailwind-styled-components";

interface IProps {
  bankId: string;
  setMemberId: (value: string) => void;
  memberId: string;
  name?: boolean;
  all?: boolean;
}

export default function MemberSelect({
  bankId,
  setMemberId,
  memberId,
  name,
  all,
}: IProps) {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["MemberList", bankId || "none"],
    queryFn: () => {
      if (bankId === "") return [];
      return searchMemberList({ bankId });
    },
  });

  const onChangeMemberId: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setMemberId(e.target.value);
  };
  return (
    <Wrapper>
      <Label htmlFor="members">고객</Label>
      <InputContainer>
        <Select id="members" value={memberId} onChange={onChangeMemberId}>
          <option key={"none"} value={""}>
            고객 선택
          </option>
          {all && data?.page?.content && (
            <option key={"all"} value={"#ALL"}>
              -- 전체 --
            </option>
          )}
          {data?.page?.content?.map((member: IMember) => (
            <option
              key={member.memberId}
              value={name ? member.memberName : member.memberId}
            >
              {member.memberName}
            </option>
          ))}
        </Select>
      </InputContainer>
    </Wrapper>
  );
}

const Wrapper = tw.div`
w-40
flex
flex-col
space-y-4
`;

const InputContainer = tw.div`
`;

const Label = tw.label`
block
text-sm
font-semibold
text-gray-500
`;

const Select = tw.select`
block 
w-full 
rounded-md 
border-0 
px-1.5
py-1.5
text-gray-700
ring-1
ring-inset 
ring-gray-300 
placeholder:text-gray-400 
focus:outline-none
focus:ring-2 
focus:ring-inset 
focus:ring-pink-500 
sm:text-sm 
sm:leading-6
`;
