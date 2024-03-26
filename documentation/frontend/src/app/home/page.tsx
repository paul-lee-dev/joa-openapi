import tw from "tailwind-styled-components";

const Home = () => {
  return (
    <>
      <Wrapper>
        <MainContainer>
          <SubContainer>
            <MainTitleItem>Joa Open API</MainTitleItem>
            <MainTextItem>은행 업무와 관련된 다양한 금융 API를 제공하여 핀테크 프로젝트를 간편하고 효율적으로 개발할 수 있도록 실시간으로 지원합니다. </MainTextItem>
            <ButtonContainer>
              <PurpleButtonItem href="#">시작하기</PurpleButtonItem>
            </ButtonContainer>
          </SubContainer>
          <ImageItem src="/sample.png" alt="Product screenshot" />
        </MainContainer>
      </Wrapper>

      <Wrapper>
        <SubWrapper>
          <ButtonContainer>
            <PinkButtonItem>특징</PinkButtonItem>
          </ButtonContainer>
          <SubTitleItem>개발 생산성 향상을 위한<br />강력하고 편리한 기능</SubTitleItem>

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

      <Wrapper>
        <SubWrapper>
          <ButtonContainer>
            <PinkButtonItem>팀</PinkButtonItem>
          </ButtonContainer>
          <SubTitleItem>제작자 소개</SubTitleItem>

          <TeamContainer>
            <TeamImageContainer>
              <TeamImageItem src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d" />
              <TeamSubImageItem src="https://images.unsplash.com/photo-1557426272-fc759fdf7a8d" />
            </TeamImageContainer>

            <TeamTextContainer>
              <TeamTitle>텍스트 제목</TeamTitle>
              <TeamDetail>
                팀 소개, 기술 스택 등 팀 소개 내용이 들어갑니다.
                팀 소개, 기술 스택 등 팀 소개 내용이 들어갑니다.
                팀 소개, 기술 스택 등 팀 소개 내용이 들어갑니다.
              </TeamDetail>
            </TeamTextContainer>

            <TeamTextContainer>
              <TeamTitle>텍스트 제목</TeamTitle>
              <TeamDetail>
                팀 소개, 기술 스택 등 팀 소개 내용이 들어갑니다.
                팀 소개, 기술 스택 등 팀 소개 내용이 들어갑니다.
                팀 소개, 기술 스택 등 팀 소개 내용이 들어갑니다.
              </TeamDetail>
            </TeamTextContainer>
          </TeamContainer>

        </SubWrapper>
      </Wrapper>
    </>
  );
};


export default Home;

const Wrapper = tw.div`
pt-24
`;

const SubWrapper = tw.div`
mx-auto max-w-7xl px-6 lg:px-8 text-center
`;

const MainContainer = tw.div`
mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2
`;

const SubContainer = tw.div`
lg:pr-8 lg:pt-12
`;

const MainTitleItem = tw.h2`
mt-2 text-3xl font-bold tracking-tight sm:text-4xl 
`;

const MainTextItem = tw.div`
mt-6 leading-7 break-keep
`;

const ButtonContainer = tw.div`
mt-2 py-6
`;

const PinkButtonItem = tw.a`
py-3 px-7 text-xs bg-pink-300 hover:bg-pink-500 text-white w-full transition ease-in duration-200 
text-center font-semibold shadow-md focus:ring-2 focus:ring-offset-2 rounded-full
`;

const PurpleButtonItem = tw.a`
py-3 px-7 text-xs bg-purple-300 hover:bg-purple-500 text-white w-full transition ease-in duration-200 
text-center font-semibold shadow-md focus:ring-2 focus:ring-offset-2 rounded-full
`;

const ImageItem = tw.img`
rounded-xl shadow-xl 
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
mt-3 text-sm leading-6 break-keep
`;

const StatContainer = tw.div`
grid grid-cols-2 gap-x-8 gap-y-16 lg:grid-cols-4 p-8 bg-gray-100   rounded-lg text-center
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

const TeamContainer = tw.div`
mx-auto max-w-7xl pt-12 px-6
`;

const TeamImageContainer = tw.div`
grid grid-cols-1 lg:grid-cols-3 gap-8 text-center
`;

const TeamImageItem = tw.img`
col-span-2 w-full h-[16rem] rounded-lg
`;

const TeamSubImageItem = tw.img`
w-full h-[16rem] rounded-lg
`;

const TeamTextContainer = tw.div`
lg:flex pt-12 text-left 
`;

const TeamTitle = tw.h3`
w-[28rem] px-8 text-2xl font-bold
`;

const TeamDetail = tw.div`
`;

const posts = [
  {
    title: '금융 API 테스트베드',
    description:
      '별도의 클라이언트 프로그램 없이도, 은행 시스템을 구축하고 Restful 방식을 테스트할 수 있습니다.',
    image: {
      url: '/sample.png',
    },
  },
  {
    title: '샘플 어플리케이션',
    description:
      '클라이언트 개발 기간을 단축할 수 있도록 샘플 앱과 코드, 도커 이미지를 오픈 소스로 제공합니다.',
    image: {
      url: '/sample.png',
    },
  },
  {
    title: '개발자 대시보드',
    description:
      '은행 시스템 이용 현황을 한눈에 파악하고 관리할 수 있는 실시간 대시보드를 지원합니다.',
    image: {
      url: '/sample.png',
    },
  },
]

const team = {
    image: '',
    subimage: '',
    title1: '',
    detail1: '',
    title2: '',
    detail2: '',
  }


interface Stat {
  id: number;
  name: string;
  value: string;
}

const stats: Stat[] = [
  { id: 1, name: '서비스 이용자 수', value: '10' },
  { id: 2, name: '생성된 가상은행 수', value: '30' },
  { id: 3, name: '생성된 가상유저 수', value: '120' },
  { id: 4, name: '앱 다운로드 횟수', value: '0' }
];
