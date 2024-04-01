interface IProps {
  children: React.ReactNode;
}

export default function BankGroupSearch({ children }: IProps) {
  return (
    <div>
      <div className="relative mt-2 mr-3 rounded-md shadow-sm">
        {children}
        <div className="absolute inset-y-0 left-0 flex items-center">
          <select
            id="options"
            name="options"
            className="h-full rounded-md border-0 bg-transparent py-0 pl-4 pr-2 text-gray-500 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
          >
            <option value="accountId">은행명</option>
            {/* <option value="dummyId">더미이름</option> */}
          </select>
        </div>
      </div>
    </div>
  );
}
