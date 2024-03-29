import AsyncSelect from "react-select/async";
import { AccountOption, accountOptions } from "@/asset/data/data";
import tw from "tailwind-styled-components";

// TODO: resolve react-select Async error
interface MultiSearchProps {
  placeholder: string;
  label: string;
  htmlFor: string;
}

const filterAccounts = (inputValue: string) => {
  return accountOptions.filter((i) =>
    i.label.toLowerCase().includes(inputValue.toLowerCase())
  );
};

const promiseOptions = (inputValue: string) =>
  new Promise<AccountOption[]>((resolve) => {
    setTimeout(() => {
      resolve(filterAccounts(inputValue));
    }, 1000);
  });

const MyAsyncSelect = () => (
  <AsyncSelect
    isMulti
    cacheOptions
    defaultOptions
    loadOptions={promiseOptions}
    placeholder="  계좌 검색  "
    theme={(theme) => ({
      ...theme,
      borderRadius: 8,

      colors: {
        ...theme.colors,
        primary25: "pink",
        primary: "hotpink",
      },
    })}
    className="mt-2"
  />
);

export default function AccountMultiSearchSelect({
  label,
  htmlFor,
}: MultiSearchProps) {
  return (
    <div>
      <Label htmlFor={htmlFor}>{label}</Label>
      <MyAsyncSelect />
    </div>
  );
}

const Label = tw.label`
block text-sm font-medium leading-6 text-gray-500
`;

const Wrapper = tw.div`
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
