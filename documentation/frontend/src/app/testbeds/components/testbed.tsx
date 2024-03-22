export default function testbed() {
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
              요청 방식
            </p>
            <p className="">
              {t.request_method}
            </p>
            <p className="text-2xl font-bold">
              요청 URI
            </p>
            <p className="">
              {t.request_uri}
            </p>

            <hr />

            <p className="text-2xl font-bold">
              응답 클래스 (상태 200)
            </p>
            <p className="">
              {t.response_code_expected}
            </p>
            <p className="text-2xl font-bold">
              모델
            </p>
            <div className="bg-blue-300 rounded p-8">
              <p className="">
                {t.request_value}
              </p>
            </div>
            <p className="text-2xl font-bold">
              Example Value
            </p>
            <div className="bg-blue-300 rounded p-8">
              <p className="">
                {t.request_description}
              </p>
            </div>
            <p className="text-2xl font-bold">
              응답 Content type
            </p>
            <p className="">
              {t.response_content_type}
            </p>

            <hr />

            <p className="text-2xl font-bold">
              매개변수들
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
              응답 메시지
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

            <div className="py-6">
              <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                실행하기
              </a>
              <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                응답 숨기기
              </a>
            </div>


            <hr />

            <p className="text-2xl font-bold">
              응답 본문
            </p>
            <div className="bg-purple-300 rounded p-8">
              <p className="">
                {t.response_body}
              </p>
            </div>
            <p className="text-2xl font-bold">
              응답 코드
            </p>
            <div className="bg-purple-300 rounded p-8">
              <p className="">
                {t.response_code}
              </p>
            </div>
            <p className="text-2xl font-bold">
              응답 헤더
            </p>
            <div className="bg-purple-300 rounded p-8">
              <p className="">
                {t.response_header}
              </p>
            </div>
            <p className="text-2xl font-bold">
              샘플 소스 코드 생성
            </p>
            <div className="bg-purple-300 rounded p-8">
              <p className="">
                {t.sample_code}
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
    request_method: "POST",
    request_uri: "/account/{bankId}",
    response_code_expected: "OK",
    request_value: "요청으로 보낼 JSON DATA",
    request_description: "요청으로 보낼 데이터에 대한 설명",
    response_content_type: "application/json",
    response_body: "응답 본문",
    response_code: "응답 코드",
    response_header: "응답 헤더",
    sample_code: "샘플 코드"
  },
]