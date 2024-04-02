import { searchBankList } from "@/api/Bank";
import { IBank } from "@/models/Bank.interface";
import { useQuery } from "@tanstack/react-query";
import { ChangeEventHandler } from "react";
import tw from "tailwind-styled-components";

interface IProps {
  setBankId: (value: string) => void;
  bankId: string;
}

export default function BankSelect({ setBankId, bankId }: IProps) {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["BankList", ""],
    queryFn: () => {
      return searchBankList({ name: "" });
    },
  });

  const onChangeBankId: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setBankId(e.target.value);
  };
  return (
    <Wrapper>
      <Label htmlFor="banks">은행</Label>
      <InputContainer>
        <Select id="banks" value={bankId} onChange={onChangeBankId}>
          <option key={"none"} value={""}>
            은행 선택
          </option>
          {data?.page?.content.map((bank: IBank) => (
            <option key={bank.bankId} value={bank.bankId}>
              {bank.name}
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
