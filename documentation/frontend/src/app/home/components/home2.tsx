import tw from "tailwind-styled-components";

export default function home2() {
  return (
    <>
      <Wrapper>
        <SubWrapper>

          <ButtonContainer>
            <PinkButtonItem>특징</PinkButtonItem>
          </ButtonContainer>

          <SubTitleItem>
            개발 생산성 향상을 위한<br />강력하고 편리한 기능
          </SubTitleItem>

          <FeatureContainer>
            {posts.map((post) => (
              <FeatureItem key={post.title}>
                  <SubImageContainer>
                    <SubImageItem src={post.image.url} />
                  </SubImageContainer>
                  <FeatureTitle>{post.title}</FeatureTitle>
                  <FeatureDetail>{post.description}</FeatureDetail>
              </FeatureItem>
            ))}
          </FeatureContainer>

        </SubWrapper>
      </Wrapper>

      <StatWrapper>
        <StatContainer>
          {stats.map((stat) => (
            <StatItem key={stat.id} >
              <div>
                <StatNum>{stat.value}</StatNum>
                <StatPlus>+</StatPlus>
              </div>
              <StatName>{stat.name}</StatName>
            </StatItem>
          ))}
        </StatContainer>
      </StatWrapper>
    </>
  );
}


const Wrapper = tw.div`
pt-24
`;

const SubWrapper = tw.div`
mx-auto max-w-7xl px-6 lg:px-8 text-center
`;

const ButtonContainer = tw.div`
mt-2 py-6
`;

const PinkButtonItem = tw.a`
py-3 px-7 text-xs bg-pink-300 hover:bg-pink-500 text-white w-full transition ease-in duration-200 
text-center font-semibold shadow-md focus:ring-2 focus:ring-offset-2 rounded-full
`;

const SubTitleItem = tw.h3`
mt-2 text-2xl font-bold tracking-tight
`;

const SubImageContainer = tw.div`
w-full flex justify-center
`;

const SubImageItem = tw.img`
w-[12rem] h-[10rem] rounded-lg
`;

const FeatureContainer = tw.div`
mx-auto my-10 grid max-w-2xl grid-cols-3 gap-y-16 lg:mx-0 lg:max-w-none
`;

const FeatureItem = tw.div`
flex max-w-xl flex-col justify-between p-2 lg:px-4 lg:py-8 hover:bg-gray-100 rounded-lg
`;

const FeatureTitle = tw.h3`
mt-5 text-lg font-semibold
`;

const FeatureDetail = tw.div`
mt-3 text-sm leading-6
`;

const StatWrapper = tw.div`
mx-auto max-w-7xl px-6 py-10 lg:px-8 bg-gray-100 rounded-lg text-center
`;

const StatContainer = tw.div`
grid grid-cols-2 gap-x-8 gap-y-16 lg:grid-cols-4
`;

const StatItem = tw.div`
mx-auto flex max-w-xs flex-col gap-y-4
`;

const StatNum = tw.span`
text-5xl font-semibold
`;

const StatPlus = tw.span`
text-5xl text-purple-400
`;

const StatName = tw.span`
font-semibold leading-7
`;


const posts = [
  {
    title: '금융 API 테스트베드',
    description:
      '별도의 클라이언트 프로그램 없이도, 은행 시스템을 구축하고 Restful 방식을 웹에서 테스트할 수 있습니다.',
    image: {
      url:
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43',
    },
  },
  {
    title: '샘플 어플리케이션',
    description:
      '클라이언트 개발 기간을 단축할 수 있도록 샘플 앱과 코드, 도커 이미지를 오픈 소스로 제공합니다.',
    image: {
      url:
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43',
    },
  },
  {
    title: '개발자 대시보드',
    description:
      '은행 시스템 이용 현황을 한눈에 파악하고 관리할 수 있는 실시간 대시보드를 지원합니다.',
    image: {
      url:
        'https://images.unsplash.com/photo-1560472354-b33ff0c44a43',
    },
  },
  // More posts...
]

interface Stat {
  id: number;
  name: string;
  value: string;
}

const stats: Stat[] = [
  { id: 1, name: '서비스 이용자 수', value: '120' },
  { id: 2, name: '생성된 가상은행 수', value: '120' },
  { id: 3, name: 'API 호출 건수', value: '120' },
  { id: 4, name: '앱 다운로드 횟수', value: '120' }
];