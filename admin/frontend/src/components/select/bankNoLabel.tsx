import { searchBankList } from "@/api/Bank";
import { IBank } from "@/models/Bank.interface";
import { useQuery } from "@tanstack/react-query";
import { ChangeEventHandler } from "react";
import tw from "tailwind-styled-components";

interface IProps {
  bankList?: IBank[];
  bankId: string;
  setBankId: (value: string) => void;
}

export default function BankSelect({ bankList, bankId, setBankId }: IProps) {
  const { data: bankData } = useQuery({
    queryKey: ["BankList"],
    queryFn: () => {
      return searchBankList({});
    },
  });

  const onChangeOption: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setBankId(e.target.value);
  };
  return (
    <InputContainer>
      <Select id="banks" value={bankId} onChange={onChangeOption} aria-placeholder="은행 선택">
        <option key={"all"} value={""}>
          은행 선택
        </option>
        {bankData?.page.content.map((bank: IBank) => (
          <option key={bank.bankId} value={bank.bankId}>
            {bank.name}
          </option>
        ))}
      </Select>
    </InputContainer>
  );
}

const InputContainer = tw.div`
h-10
`;

const Select = tw.select`
block 
w-40
h-10
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
