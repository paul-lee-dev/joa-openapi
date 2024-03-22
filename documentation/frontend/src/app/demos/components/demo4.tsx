import { HiArrowDown } from "react-icons/hi";

export default function home4() {
  return (
    <>
      <div className="mt-24 py-24 bg-purple-300">

        <h2 className="text-3xl pb-8 text-center font-bold">
          FAQ
        </h2>

        {qna.map((qna) => (
          <div key={qna.question} className="flex justify-between min-w-0 gap-x-4 px-24 py-8">

            <div className="">
              <p className="font-semibold leading-6">
                {qna.question}
              </p>
              
              <p className="mt-1 leading-5">
                {qna.answer}
              </p>
            </div>

            <HiArrowDown aria-hidden="true" />

          </div>
        ))}

      </div>
    </>
  );
}

const qna = [
  {
    question: '1. 자주 묻는 질문 자주 묻는 질문 자주? ',
    answer: '여기에는 질문 내용에 대한 답변이 들어갑니다.',
  },
  {
    question: '1. 자주 묻는 질문 자주 묻는 질문 자주? ',
    answer: '여기에는 질문 내용에 대한 답변이 들어갑니다.',
  },
  {
    question: '1. 자주 묻는 질문 자주 묻는 질문 자주? ',
    answer: '여기에는 질문 내용에 대한 답변이 들어갑니다.',
  },
]
