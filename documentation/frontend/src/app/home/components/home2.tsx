export default function home2() {
  return (
    <>
      <div className="pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">
            <div className="py-6">
              <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                특징
              </a>
            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              개발 생산성 향상을 위한<br />강력하고 편리한 기능
            </h2>
          </div>

          <div className="mx-auto grid max-w-2xl grid-cols-3 gap-x-8 gap-y-16 pt-10 sm:pt-16 lg:mx-0 lg:max-w-none">
            {posts.map((post) => (
              <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
                <div className="group relative">
                  <img src={post.author.imageUrl} />
                  <h3 className="mt-3 text-lg font-semibold leading-6">
                    {post.title}
                  </h3>
                  <p className="mt-5 text-sm leading-6">
                    {post.description}
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

const posts = [
  {
    id: 1,
    title: '금융 API 테스트베드',
    href: '#',
    description:
      '별도의 클라이언트 프로그램 없이도, 은행 시스템을 구축하고 Restful 방식을 웹에서 테스트할 수 있습니다.',
    author: {
      name: 'Michael Foster',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: '샘플 어플리케이션',
    href: '#',
    description:
      '클라이언트 개발 기간을 단축할 수 있도록 샘플 앱과 그에 대한 코드, 도커 이미지를 오픈 소스로 제공합니다.',
    author: {
      name: 'Michael Foster',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 3,
    title: '개발자 대시보드',
    href: '#',
    description:
      '은행 시스템 이용 현황을 한눈에 파악하고 관리할 수 있는 실시간 대시보드를 지원합니다.',
    author: {
      name: 'Michael Foster',
      href: '#',
      imageUrl:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]