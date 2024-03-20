export default function ProductSelect() {
  return (
    <>
      <label
        htmlFor="products"
        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
      >
        상품
      </label>
      <select
        id="products"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
      >
        <option value="" disabled selected className="text-gray-300">
          청년예금
        </option>
        <option value="US">자유입출금1</option>
        <option value="CA">자유입출금2</option>
        <option value="FR">자유입출금3</option>
        <option value="DE">자유입출금4</option>
      </select>
    </>
  );
}
