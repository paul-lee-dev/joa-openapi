export default function home2() {
    return (
        <>
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">

            <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                특징
            </a>

          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">개발 생산성 향상을 위한 강력하고 편리한 기능</h2>
        </div>
        <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {posts.map((post) => (
            <article key={post.id} className="flex max-w-xl flex-col items-start justify-between">
              <div className="group relative">
              <img src={post.author.imageUrl} alt="" className="h-10 w-10 rounded-full bg-gray-50" />
                
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  <a href={post.href}>
                    <span className="absolute inset-0" />
                    {post.title}
                  </a>
                </h3>
                <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">{post.description}</p>
              </div>
              {/* <div className="relative mt-8 flex items-center gap-x-4">
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900">
                    <a href={post.author.href}>
                      <span className="absolute inset-0" />
                      {post.author.name}
                    </a>
                  </p>
                </div>
              </div> */}
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