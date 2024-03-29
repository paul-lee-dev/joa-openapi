import tw from "tailwind-styled-components";

interface InputTextProps {
  id: string;
  name: string;
  type: string;
  value?: string | number;
  placeholder: string;
  label: string;
  htmlFor: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputText({
  id,
  type,
  placeholder,
  name,
  value,
  label,
  htmlFor,
}: InputTextProps) {
  return (
    <InputFormWrapper>
      <Label htmlFor={htmlFor}>{label}</Label>
      <InputContainer>
        <Input
          id={id}
          name={name}
          type={type}
          value={value}
          placeholder={placeholder}
        />
      </InputContainer>
    </InputFormWrapper>
  );
}

const InputFormWrapper = tw.div`
`;

const InputContainer = tw.div`
mt-2
`;

const Label = tw.label`
block text-sm font-medium leading-6 text-gray-500
`;

const Input = tw.input`
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
