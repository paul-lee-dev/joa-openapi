export default function CustomerTable() {
  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              고객 명
            </th>
            <th scope="col" className="px-6 py-3">
              ClientID
            </th>
            <th scope="col" className="px-6 py-3">
              ID
            </th>
            <th scope="col" className="px-6 py-3">
              전화번호
            </th>
            <th scope="col" className="px-6 py-3">
              가입일자
            </th>
            <th scope="col" className="px-6 py-3">
              최근거래금액
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only">Edit</span>
            </th>
          </tr>
        </thead>
        <tbody>
          <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
            <td className="whitespace-nowrap px-6 py-4">조아은행</td>
            <td className="whitespace-nowrap px-6 py-4">좋은 은행이에요!</td>
            <td className="whitespace-nowrap px-6 py-4">100,000,121</td>
            <th className="whitespace-nowrap px-6 py-4">
              6ba6d937-134d-4a88-8384-ac33fb8e5c05
            </th>
          </tr>
          <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
            <td className="whitespace-nowrap px-6 py-4">조아은행</td>
            <td className="whitespace-nowrap px-6 py-4">좋은 은행이에요!</td>
            <td className="whitespace-nowrap px-6 py-4">100,000,121</td>
            <th className="whitespace-nowrap px-6 py-4">
              6ba6d937-134d-4a88-8384-ac33fb8e5c05
            </th>
          </tr>
          <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
            <td className="whitespace-nowrap px-6 py-4">조아은행</td>
            <td className="whitespace-nowrap px-6 py-4">좋은 은행이에요!</td>
            <td className="whitespace-nowrap px-6 py-4">100,000,121</td>
            <th className="whitespace-nowrap px-6 py-4">
              6ba6d937-134d-4a88-8384-ac33fb8e5c05
            </th>
          </tr>
          <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
            <td className="whitespace-nowrap px-6 py-4">조아은행</td>
            <td className="whitespace-nowrap px-6 py-4">좋은 은행이에요!</td>
            <td className="whitespace-nowrap px-6 py-4">100,000,121</td>
            <th className="whitespace-nowrap px-6 py-4">
              6ba6d937-134d-4a88-8384-ac33fb8e5c05
            </th>
          </tr>
          <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
            <td className="whitespace-nowrap px-6 py-4">조아은행</td>
            <td className="whitespace-nowrap px-6 py-4">좋은 은행이에요!</td>
            <td className="whitespace-nowrap px-6 py-4">100,000,121</td>
            <th className="whitespace-nowrap px-6 py-4">
              6ba6d937-134d-4a88-8384-ac33fb8e5c05
            </th>
          </tr>
          <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
            <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
            <td className="whitespace-nowrap px-6 py-4">조아은행</td>
            <td className="whitespace-nowrap px-6 py-4">좋은 은행이에요!</td>
            <td className="whitespace-nowrap px-6 py-4">100,000,121</td>
            <th className="whitespace-nowrap px-6 py-4">
              6ba6d937-134d-4a88-8384-ac33fb8e5c05
            </th>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
