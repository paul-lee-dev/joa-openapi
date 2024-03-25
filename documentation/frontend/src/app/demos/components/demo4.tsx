import { HiArrowDown } from "react-icons/hi";

export default function home4() {
  return (
    <>
      <div className="mt-24 py-24 bg-purple-300">

        <h2 className="text-3xl pb-4 text-center font-bold text-white">
          FAQ
        </h2>

        {qna.map((qna) => (
          <div key={qna.question} className="min-w-0 gap-x-4 mx-24 my-6 p-6 bg-gray-50 rounded-lg">

<div className="flex justify-between ">
              <p className="font-semibold mt-1">
                {qna.question}
              </p>

              <div className="p-2 mx-4 mb-2 bg-purple-400 rounded-full">
            <HiArrowDown className="text-xl font-bold text-white drop-shadow" />
            </div>

            </div>
              
              <p className="mt-2 mr-none lg:mr-20 text-sm leading-6">
                {qna.answer}
              </p>



          </div>
        ))}

      </div>
    </>
  );
}

const qna = [
  {
    question: '1. 자주 묻는 질문 자주 묻는 질문 자주? ',
    answer: '여기에는 질문 내용에 대한 답변이 들어갑니다. 여기에는 질문 내용에 대한 답변이 들어갑니다. 여기에는 질문 내용에 대한 답변이 들어갑니다. 여기에는 질문 내용에 대한 답변이 들어갑니다.',
  },
  {
    question: '2. 자주 묻는 질문 자주 묻는 질문 자주? ',
    answer: '여기에는 질문 내용에 대한 답변이 들어갑니다.',
  },
  {
    question: '3. 자주 묻는 질문 자주 묻는 질문 자주? ',
    answer: '여기에는 질문 내용에 대한 답변이 들어갑니다.',
  },
]
