import tw from "tailwind-styled-components";

export default function BankSelect() {
  return (
    <Wrapper>
      <Label htmlFor="banks">은행</Label>
      <InputContainer>
        <Select id="banks">
          <option value="" disabled selected className="text-gray-300">
            조아은행
          </option>
          <option value="US">우리 은행</option>
          <option value="CA">신한 은행</option>
          <option value="FR">유로 은행</option>
          <option value="DE">본승 은행</option>
        </Select>
      </InputContainer>
    </Wrapper>
  );
}

const Wrapper = tw.div`
`;

const InputContainer = tw.div`
mt-2
`;

const Label = tw.label`
block text-sm font-medium leading-6 text-gray-500
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
