export default function home4() {
  return (
    <>
      <div className="pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">
            <div className="py-6">
              <a href="#" className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                GitHub
              </a>

            </div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              샘플 서비스에 쓰인 코드를 눈으로 확인하고<br />
              직접 커스텀해서 활용하세요
            </h2>
          </div>

          <div className="flex mx-auto mt-10 grid grid-cols-2 w-2xl gap-x-8 gap-y-16">
            {posts.map((post) => (
                <div key={post.id} className="group relative">

                  <img src={post.image.url} />

                  <h3 className="mt-4 text-lg font-semibold leading-6">
                      {post.title}
                  </h3>

                  <p className="mt-4 text-sm leading-6">
                    {post.description}
                  </p>

                  <p className="mt-4 text-sm leading-6">
                    <a href={post.href}>바로가기</a>
                  </p>
                </div>

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
    title: '샘플 코드',
    href: '#',
    description:
      'GitHub에서 샘플 코드를 둘러보세요.',
    image: {
      url:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  {
    id: 2,
    title: '이슈 제보',
    href: '#',
    description:
      '기능의 Docs에 기재된 것과 다르게 동작하는 경우, GitHub에 Issue를 생성하여 알려주세요. 문제 해결을 위해 노력하겠습니다.',
      image: {
      url:
        'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
  },
  // More posts...
]
