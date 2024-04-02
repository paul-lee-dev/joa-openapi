import tw from "tailwind-styled-components";

interface InputTextProps {
  label: string;
  children: React.ReactNode;
}

export default function InputText({ label, children }: InputTextProps) {
  return (
    <InputFormWrapper>
      <Label>{label}</Label>
      <InputContainer>{children}</InputContainer>
    </InputFormWrapper>
  );
}

const InputFormWrapper = tw.div`
relative
`;

const InputContainer = tw.div`
mt-2
`;

const Label = tw.span`
block
text-sm
font-semibold
leading-6
text-gray-500
`;

export const CommonInput = tw.input`
block 
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

export const CommonTextarea = tw.textarea`
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

export const CommonErrorMsg = tw.span`
absolute
left-2
text-xs
text-red-400
`;
