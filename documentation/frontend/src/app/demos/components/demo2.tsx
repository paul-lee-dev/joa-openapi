import { MdPersonAdd } from "react-icons/md";

export default function home4() {
  return (
    <>
      <div className="pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">
            <div className="py-8">

              <a href="#" className="py-3 px-7 text-xs bg-pink-300 hover:bg-pink-500 text-white w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:ring-2 focus:ring-offset-2  rounded-full">
                사용법
              </a>
            </div>

            <h3 className="mt-2 text-2xl font-bold tracking-tight">
              오픈뱅크 API를 쉽고 빠르게 이용하는 방법
            </h3>

            <div className="inline-flex items-center rounded-md shadow-sm pt-8 text-sm font-semibold">
              <button className="bg-gray-100 rounded-l-lg px-6 py-4 inline-flex items-center 
              hover:bg-purple-300 hover:text-white">
                1. 회원가입 & 로그인
              </button>
              <button className="bg-gray-100 p-4 inline-flex items-center 
              hover:bg-purple-300 hover:text-white">
                2. 가상은행 개설 후 은행코드 발급
              </button>
              <button className="bg-gray-100 rounded-r-lg p-4 inline-flex items-center
              hover:bg-purple-300 hover:text-white">
                3. 은행코드로 서비스 이용
              </button>
            </div>
          </div>

          <div className="block lg:flex mx-auto max-w-7xl pt-12 px-6 lg:px-8">

            {people.map((person) => (

              <div key={person.name} role="list" className="w-full ml-6 gap-x-8 gap-y-12">

                <div className="flex">
                  <div className="p-3 mx-4 bg-purple-400 rounded-lg">
                    <MdPersonAdd className="text-2xl text-white drop-shadow" />
                  </div>

                  <h3 className="font-bold my-3">
                    {person.name}
                  </h3>
                </div>

                <p className="text-sm m-5">
                  {person.description}
                </p>

                <div className="px-5 py-3 mb-8">
                  <a href="#" className="py-3 px-7 text-xs bg-purple-300 hover:bg-purple-500 text-white w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:ring-2 focus:ring-offset-2  rounded-full">
                    지금 가입하기
                  </a>
                </div>

              </div>

            ))}

            <img className="w-[20rem] mx-8 rounded-lg" src='https://images.unsplash.com/photo-1560472354-b33ff0c44a43' />

          </div>

        </div>
      </div>
    </>
  );
}


const people = [
  {
    name: '제목 텍스트 1',
    description: '내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트',
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43',
  },
  // More people...
]