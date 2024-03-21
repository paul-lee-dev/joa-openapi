export default function home4() {
  return (
    <>

<button>사용법</button>
<h2>오픈뱅크 API를 쉽고 빠르게 이용하는 방법</h2>
<button>1. 회원가입 & 로그인</button>
<button>2. 가상은행 개설 후 은행코드 발급</button>
<button>3. 은행코드로 서비스 이용</button>

    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {people.map((person) => (
            <li key={person.name}>
              <div className="flex items-center gap-x-6">
                <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  <button>바로 가입하기</button>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <div className="max-w-2xl">
          <img src='https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=300&h=200&q=80' />
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