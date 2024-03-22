export default function home4() {
  return (
    <>
      <div className="pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">
            <div className="py-6">
              <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                사용법
              </a>

            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              오픈뱅크 API를 쉽고 빠르게 이용하는 방법
            </h2>

            <div className="inline-flex items-center rounded-md shadow-sm pt-10">
              <button className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-l-lg font-medium p-4 inline-flex space-x-1 items-center">
                1. 회원가입 & 로그인
              </button>
              <button className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border-y border-slate-200 font-medium p-4 inline-flex space-x-1 items-center">
                2. 가상은행 개설 후 은행코드 발급
              </button>
              <button className="text-slate-800 hover:text-blue-600 text-sm bg-white hover:bg-slate-100 border border-slate-200 rounded-r-lg font-medium p-4 inline-flex space-x-1 items-center">
                3. 은행코드로 서비스 이용
              </button>
            </div>
          </div>

            <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 pt-12 px-6 lg:px-8 xl:grid-cols-5">
              <div role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 xl:col-span-3">
                {people.map((person) => (
                      <div key={person.name}>
                        
                        <h3 className="font-semibold leading-7">
                          {person.name}
                        </h3>
                        
                        <p className="text-sm leading-6">
                          {person.role}
                        </p>

                        <div className="py-6">
                            <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                가입하기
                            </a>
                        </div>
                      
                      </div>
                ))}
              </div>

              <div className="max-w-2xl xl:col-span-2">
                <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=600&h=400' />
              </div>
              
            </div>

        </div>
      </div>
    </>
  );
}


const people = [
  {
    name: '제목 텍스트 1',
    role: '내용 테스트 내용 테스트 내용 테스트',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  // More people...
]