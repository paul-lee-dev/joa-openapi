export default function BankSelect() {
  return (
    <>
      <label
        htmlFor="banks"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        은행
      </label>
      <select
        id="banks"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="" disabled selected className="text-gray-300">
          조아은행
        </option>
        <option value="US">우리 은행</option>
        <option value="CA">신한 은행</option>
        <option value="FR">유로 은행</option>
        <option value="DE">본승 은행</option>
      </select>
    </>
  );
}
