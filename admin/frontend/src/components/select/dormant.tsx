export default function DormantSelect() {
  return (
    <>
      <label
        htmlFor="banks"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        계좌 상태
      </label>
      <select
        id="banks"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="" disabled selected className="text-gray-300">
          휴면 계좌
        </option>
        <option value="CA">활성 계좌</option>
        <option value="US">휴면 계좌</option>
      </select>
    </>
  );
}
