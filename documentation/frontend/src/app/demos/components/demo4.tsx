export default function home4() {
  return (
    <>
        <h3>FAQ</h3>
        <ul role="list" className="divide-y divide-gray-100">
      {people.map((person) => (
        <li key={person.email} className="flex justify-between gap-x-6 py-5">
          <div className="flex min-w-0 gap-x-4">
            <div className="min-w-0 flex-auto">
              <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
              <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
            </div>
            <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
          </div>
        </li>
      ))}
    </ul>


    </>
    );
}

const people = [
  {
    name: '1. 자주 묻는 질문 자주 묻는 질문 자주? ',
    email: '여기에는 질문 내용에 대한 답변이 들어갑니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: '1. 자주 묻는 질문 자주 묻는 질문 자주? ',
    email: '여기에는 질문 내용에 대한 답변이 들어갑니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
  {
    name: '1. 자주 묻는 질문 자주 묻는 질문 자주? ',
    email: '여기에는 질문 내용에 대한 답변이 들어갑니다.',
    imageUrl:
      'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  },
]
