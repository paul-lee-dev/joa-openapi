import { searchAccountList } from "@/api/Account";
import { IAccount } from "@/models/Account.interface";
import { useQuery } from "@tanstack/react-query";
import { ChangeEventHandler } from "react";
import tw from "tailwind-styled-components";

interface IProps {
  label: string;
  bankId: string;
  setAccountId: (value: string) => void;
  accountId: string;
}

export default function AccountSelect({ label, bankId, setAccountId, accountId }: IProps) {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["MemberList", [bankId]],
    queryFn: () => {
      if (bankId === "") return;
      return searchAccountList({ bankList: bankId });
    },
  });

  const onChangeAccountId: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setAccountId(e.target.value);
  };
  return (
    <Wrapper>
      <Label htmlFor="accounts">{label}</Label>
      <InputContainer>
        <Select id="accounts" value={accountId} onChange={onChangeAccountId}>
          <option key={"none"} value={""}>
            계좌 선택
          </option>
          {data?.page?.content?.map((account: IAccount) => (
            <option key={account.accountId} value={account.accountId}>
              {account.accountName}
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
