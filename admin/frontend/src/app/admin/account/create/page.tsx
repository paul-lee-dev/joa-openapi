import BankSelect from "@/components/select/bank";
import tw from "tailwind-styled-components";

export default function AccountDetail() {
  return (
    <>
      <Form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <div>
            <BankSelect/>
            <label
              htmlFor="visitors"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              생성 개수
            </label>
            <input
              type="number"
              id="visitors"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder=""
              required
            />
          </div>
        </div>
      </Form>
      <button
        type="submit"
        className="text-white bg-pink-400 hover:bg-pink-500 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center"
      >
        생성
      </button>
    </>
  );
}

const Form = tw.form`

`;


// {
// 	"name" : String,
// 	"count" : Integer,
// 	"bank" : {
// 		"bankId" : String
// 		},
// 	"data" : {
// 		"memberId" : String,
// 		"product" : [
// 			{"productName" : String,},
// 		],
// 	}
// }