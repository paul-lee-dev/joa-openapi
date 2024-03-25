import { IoMdDownload } from "react-icons/io";
import { FaChrome } from "react-icons/fa";

export default function home4() {
  return (
    <>
      <div className="pt-24">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">

            <h2 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">
              Joa Bank
            </h2>
            <h3 className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl">
              (Demo Application)
            </h3>

            <p className="mt-6 leading-7">
              여기에는 조아뱅크 앱 설명이 들어갑니다.
              여기에는 조아뱅크 앱 설명이 들어갑니다.
              여기에는 조아뱅크 앱 설명이 들어갑니다.
            </p>

            <div className="mt-10 max-w-xl space-y-8 leading-7">
              {features.map((feature) => (
                <div key={feature.name} className="flex relative gap-2">

                  <div className="p-4 mx-4 bg-purple-200 rounded-lg">
                    <feature.icon className="text-2xl text-white drop-shadow" />
                  </div>

                  <div>
                    <p className="font-semibold">
                      {feature.name}
                    </p>
                    <p className="text-sm">
                      {feature.description}
                    </p>
                  </div>


                </div>
              ))}
            </div>

          </div>

          <img
            src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43"
            alt="Product screenshot"
            className="w-[32rem] h-[22rem] mt-6 rounded-xl shadow-xl"
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
    icon: IoMdDownload,
  },
  {
    name: '웹 버전 써 보기',
    description: '웹 버전에 대한 부가 설명이 들어갑니다.',
    icon: FaChrome,
  },
]