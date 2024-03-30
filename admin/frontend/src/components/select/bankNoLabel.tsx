import { IBank } from "@/models/Bank.interface";
import tw from "tailwind-styled-components";

interface IProps {
  bankList: IBank[];
}

export default function BankSelect({ bankList }: IProps) {
  return (
    <InputContainer>
      <Select id="banks">
        <option selected key={"all"} value={""}>
          전체
        </option>
        {bankList.map((bank) => (
          <option key={bank.bankId} value={bank.bankId}>
            {bank.name}
          </option>
        ))}
      </Select>
    </InputContainer>
  );
}

const InputContainer = tw.div`
mt-2
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
