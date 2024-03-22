export default function docs() {
  return (
    <>
      <div className="mt-8">
        {testbeds.map((t) => (
          <div key={t.title} className="space-y-3">
            <p className="text-3xl font-bold">
              {t.title}
            </p>
            <p className="">
              {t.description}
            </p>
            <p className="text-2xl font-bold">
              기본 정보
            </p>
            <p className="">
              {t.info}
            </p>
            <p className="bg-pink-300 rounded p-4">
              {t.warning}
            </p>


            <p className="text-2xl font-bold">
              요청(Request)
            </p>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">Product name</th>
                  <th scope="col" className="px-4 py-3">Category</th>
                  <th scope="col" className="px-4 py-3">Brand</th>
                  <th scope="col" className="px-4 py-3">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-700">
                  <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27&#34;</th>
                  <td className="px-4 py-3">PC</td>
                  <td className="px-4 py-3">Apple</td>
                  <td className="px-4 py-3">300</td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Monitor BenQ EX2710Q</th>
                  <td className="px-4 py-3">TV/Monitor</td>
                  <td className="px-4 py-3">BenQ</td>
                  <td className="px-4 py-3">354</td>
                </tr>
              </tbody>
            </table>

            <p className="text-2xl font-bold">
              요청 샘플(Request Sample)
            </p>
            <div className="bg-blue-300 rounded p-8">
              <p className="">
                {t.request_sample}
              </p>
              </div>


            <p className="text-2xl font-bold">
              응답(Response)
            </p>

            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-4 py-3">Product name</th>
                  <th scope="col" className="px-4 py-3">Category</th>
                  <th scope="col" className="px-4 py-3">Brand</th>
                  <th scope="col" className="px-4 py-3">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b dark:border-gray-700">
                  <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Apple iMac 27&#34;</th>
                  <td className="px-4 py-3">PC</td>
                  <td className="px-4 py-3">Apple</td>
                  <td className="px-4 py-3">300</td>
                </tr>
                <tr className="border-b dark:border-gray-700">
                  <th scope="row" className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap dark:text-white">Monitor BenQ EX2710Q</th>
                  <td className="px-4 py-3">TV/Monitor</td>
                  <td className="px-4 py-3">BenQ</td>
                  <td className="px-4 py-3">354</td>
                </tr>
              </tbody>
            </table>

            
            <p className="text-2xl font-bold">
              응답 샘플(Response Sample)
            </p>
            <div className="bg-purple-300 rounded p-8">
              <p className="">
                {t.response_sample}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};


const testbeds = [
  {
    title: "계좌 개설 API",
    description: "계좌 개설 API에 대한 설명이 여기에 들어갑니다.",
    info:"API에 대한 설명이 들어갑니다.",
    warning:"주의해야 할 사항이 들어갑니다.",
    request_sample:"request sample",
    response_sample:"response sample"
  },
]