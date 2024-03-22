import { HiArrowUp } from "react-icons/hi";

export default function home4() {
  return (
    <>
      <div className="overflow-hidden pt-24">
          <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            <div className="lg:pr-8 lg:pt-4">

              <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
                Joa Bank
              </h2>

                <p className="mt-6 text-lg leading-8">
                  여기에는 조아뱅크 앱 설명이 들어갑니다.
                  여기에는 조아뱅크 앱 설명이 들어갑니다.
                  여기에는 조아뱅크 앱 설명이 들어갑니다.
                </p>

                <div className="mt-10 max-w-xl space-y-8 leading-7">
                  {features.map((feature) => (
                    <div key={feature.name} className="flex relative">
                      
                      <div className="p-4">
                        <feature.icon aria-hidden="true" />
                      </div>
                      
                      <div>
                      <p className="font-semibold">
                        {feature.name}
                      </p>
                      <p className="">
                        {feature.description}
                        </p>
                      </div>


                    </div>
                  ))}
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


const features = [
  {
    name: 'APK 다운로드',
    description:
      '다운로드에 대한 부가 설명이 들어갑니다.',
    icon: HiArrowUp,
  },
  {
    name: '웹 버전 써 보기',
    description: '웹 버전에 대한 부가 설명이 들어갑니다.',
    icon: HiArrowUp,
  },
]