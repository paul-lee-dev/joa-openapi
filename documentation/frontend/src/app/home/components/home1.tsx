import tw from "tailwind-styled-components";

export default function home() {
    return (
        <>
            <div className="overflow-hidden pt-24">
                <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div className="lg:pr-8 lg:pt-4">

                        <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                            Joa Open API
                        </h2>

                        <p className="mt-6 text-lg leading-8">
                            은행 업무와 관련된 다양한 금융 API를 제공하여
                            핀테크 프로젝트를 간편하고 효율적으로 개발할 수 있도록
                            실시간으로 지원합니다.
                        </p>

                        <div className="py-6">
                            <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                시작하기
                            </a>
                        </div>

                    </div>

                    <img
                        src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
                        alt="Product screenshot"
                        className="w-[48rem] h-[20rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
                        width={2432}
                        height={700}
                    />

                </div>
            </div>
        </>
    );
}

const Input = tw.input`
  block
  w-full
  rounded-md
  border-0
  py-1.5
  text-gray-900
  shadow-sm
  ring-1
  ring-inset
  ring-gray-300
  placeholder:text-gray-400
  focus:ring-2
  focus:ring-inset
  focus:ring-
  indigo-600
  sm:text-sm
  sm:leading-6
`;
