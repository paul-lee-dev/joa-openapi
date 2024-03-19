export default function Table() {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table className="min-w-full text-left text-sm font-light">
              <thead className="border-b font-medium dark:border-neutral-500">
                <tr>
                  <th scope="col" className="px-6 py-4">
                    은행로고
                  </th>
                  <th scope="col" className="px-6 py-4">
                    은행명
                  </th>
                  <th scope="col" className="px-6 py-4">
                    은행설명
                  </th>
                  <th scope="col" className="px-6 py-4">
                    고객 수
                  </th>
                  <th scope="col" className="px-6 py-4">
                    은행 코드
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">조아은행</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    좋은 은행이에요!
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">100,000,121</td>
                  <th className="whitespace-nowrap px-6 py-4">
                    6ba6d937-134d-4a88-8384-ac33fb8e5c05
                  </th>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">조아은행</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    좋은 은행이에요!
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">100,000,121</td>
                  <th className="whitespace-nowrap px-6 py-4">
                    6ba6d937-134d-4a88-8384-ac33fb8e5c05
                  </th>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">조아은행</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    좋은 은행이에요!
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">100,000,121</td>
                  <th className="whitespace-nowrap px-6 py-4">
                    6ba6d937-134d-4a88-8384-ac33fb8e5c05
                  </th>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">조아은행</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    좋은 은행이에요!
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">100,000,121</td>
                  <th className="whitespace-nowrap px-6 py-4">
                    6ba6d937-134d-4a88-8384-ac33fb8e5c05
                  </th>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">조아은행</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    좋은 은행이에요!
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">100,000,121</td>
                  <th className="whitespace-nowrap px-6 py-4">
                    6ba6d937-134d-4a88-8384-ac33fb8e5c05
                  </th>
                </tr>
                <tr className="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                  <td className="whitespace-nowrap px-6 py-4 font-medium">1</td>
                  <td className="whitespace-nowrap px-6 py-4">조아은행</td>
                  <td className="whitespace-nowrap px-6 py-4">
                    좋은 은행이에요!
                  </td>
                  <td className="whitespace-nowrap px-6 py-4">100,000,121</td>
                  <th className="whitespace-nowrap px-6 py-4">
                    6ba6d937-134d-4a88-8384-ac33fb8e5c05
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
