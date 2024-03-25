export default function home4() {
  return (
    <>
      <div className="pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">

          <div className="text-center">

            <div className="py-8">
              <a href="#" className="py-3 px-7 text-xs bg-pink-300 hover:bg-pink-500 text-white w-full transition ease-in duration-200 text-center font-semibold shadow-md focus:ring-2 focus:ring-offset-2  rounded-full">
                GitHub
              </a>
            </div>

            <h3 className="mt-2 text-2xl font-bold tracking-tight">
              샘플 서비스에 쓰인 코드를 눈으로 확인하고<br />
              직접 커스텀해서 활용하세요
            </h3>

          </div>

          <div className="flex mx-auto mt-10 grid lg:grid-cols-2 w-2xl">
            {posts.map((post) => (
              <div key={post.id} className="group relative m-4 px-3 pt-3 py-8 rounded-lg bg-gray-100">

                <div className="flex justify-center w-full p-2 ">
                  <img src={post.image.url} className="rounded-lg " />
                </div>

                <h3 className="mt-4 text-lg font-semibold leading-6">
                  {post.title}
                </h3>

                <div className="mt-4 text-sm leading-6">
                  {post.description}
                </div>

                <div className="mt-4 text-sm leading-6">
                  <a href={post.href}>바로가기</a>
                </div>
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
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43',
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
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43',
    },
  },
  // More posts...
]
