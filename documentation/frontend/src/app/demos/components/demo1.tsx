import { HiArrowUp } from "react-icons/hi";

export default function home4() {
  return (
    <>
                <div className="overflow-hidden bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-8 lg:pt-4">
            <div className="lg:max-w-lg">
              <h2 className="text-base font-semibold leading-7 text-indigo-600">(데모 어플리케이션)</h2>
              <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">조아뱅크</p>
              <p className="mt-6 text-lg leading-8 text-gray-600">
              여기에는 조아뱅크 앱 설명이 들어갑니다. 
              여기에는 조아뱅크 앱 설명이 들어갑니다. 
              여기에는 조아뱅크 앱 설명이 들어갑니다.
              </p>
              <dl className="mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none">
{features.map((feature) => (
                  <div key={feature.name} className="relative pl-9">
                    <dt className="inline font-semibold text-gray-900">
                      <feature.icon className="absolute left-1 top-1 h-5 w-5 text-indigo-600" aria-hidden="true" />
                      {feature.name}
                    </dt>{' '}
                    <dd className="inline">{feature.description}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
          <img
            src="https://tailwindui.com/img/component-images/dark-project-app-screenshot.png"
            alt="Product screenshot"
            className="w-[48rem] max-w-none rounded-xl shadow-xl ring-1 ring-gray-400/10 sm:w-[57rem] md:-ml-4 lg:-ml-0"
            width={2432}
            height={1442}
          />
        </div>
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