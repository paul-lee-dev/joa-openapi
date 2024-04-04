import tw from "tailwind-styled-components";
import { HiArrowDown } from "react-icons/hi";
import { posts, stats, qna } from './items';
import { IoMdDownload } from "react-icons/io";


const Home = () => {
  return (
    <>
      <Wrapper>
        <MainContainer>
          <SubContainer>
            <img className='w-[19rem]' src='/logo2.png'/>
            <MainTextItem>은행 업무와 관련된 다양한 금융 API를 제공하여 핀테크 프로젝트를 간편하고 효율적으로 개발할 수 있도록 실시간으로 지원합니다. </MainTextItem>
            <ButtonContainer>
              <PurpleButtonItem href="/docs">시작하기</PurpleButtonItem>
            </ButtonContainer>
          </SubContainer>
          <a href='https://admin.joa13.site/'><ImageItem src="/dashboard.png" alt="Product screenshot" /></a>
        </MainContainer>
      </Wrapper>

      <Wrapper>
        <SubWrapper>
          <ButtonContainer>
            <PinkButtonItem>Feature</PinkButtonItem>
          </ButtonContainer>
          <SubTitleItem>개발 생산성 향상을 위한<br />강력하고 편리한 기능</SubTitleItem>

          <FeatureContainer>
            {posts.map((post) => (
              <FeatureItem key={post.title}><a href={post.url}>
                <SubImageContainer>
                  <SubImageItem src={post.image.url} />
                </SubImageContainer>
                <FeatureTitle>{post.title}</FeatureTitle>
                <FeatureDetail>{post.description}</FeatureDetail>
              </a></FeatureItem>
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
        <SubWrapper2>
          <ButtonContainer>
            <PurpleButtonItem>Demo</PurpleButtonItem>
          </ButtonContainer>
          <SubTitleItem>샘플 앱을 다운받아<br/>사용해 보세요</SubTitleItem>
        </SubWrapper2>
        <MainContainer>
          <a href='https://drive.google.com/file/d/1YvjMbzyCdh7u62DD3d0909x68kEIU1i9/view'><ImageItem2 src='/bank.png' /></a>
          <SubContainer2>
            <MainTitleItem>Joa Bank</MainTitleItem>
            <MainTextItem>
              JOA OPEN API를 활용해 제작한 샘플 은행 앱입니다. 가상의 은행인 조아은행을 배경으로 기본적인 회원 가입, 계좌 생성, 거래내역 확인 등의 대고객(B2C) 기능을 포함하여 구현하였습니다.
            </MainTextItem>

            <FeatureContainer2>
              <FeatureItem2>
                <FeatureIconContainer>
                  <a href='https://drive.google.com/file/d/14zcwTOFKuocn7d-K7AYUOGm90UDOBzw3/view'><IoMdDownload className="text-2xl text-white drop-shadow" /></a>
                </FeatureIconContainer>
                <div>
                  <FeatureTitle2>APK 다운로드</FeatureTitle2>
                  <FeatureDetail2>조아은행 앱을 직접 사용해 보세요</FeatureDetail2>
                </div>

              </FeatureItem2>
            </FeatureContainer2>
          </SubContainer2>

        </MainContainer>
      </Wrapper>

      <QnaWrapper>
        <QnaTitle> FAQ </QnaTitle>
        {qna.map((qna) => (
          <QnaContainer key={qna.question}>

            <QnaQuestionContainer>
              <QnaQuestionItem> {qna.question} </QnaQuestionItem>
              <QnaArrowContainer>
                <HiArrowDown className="text-xl font-bold text-white drop-shadow" />
              </QnaArrowContainer>
            </QnaQuestionContainer>
            <QnaAnswerItem> {qna.answer} </QnaAnswerItem>
          </QnaContainer>
        ))}
      </QnaWrapper>

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

const SubWrapper2 = tw.div`
mx-auto max-w-7xl px-6 lg:px-8 mb-12 text-center
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
mt-4 leading-7 break-keep
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
rounded-xl shadow-xl z-10 object-cover
`;

const SubTitleItem = tw.h3`
mt-2 text-2xl font-bold tracking-tight
`;

const SubImageContainer = tw.div`
w-full flex justify-center
`;

const SubImageItem = tw.img`
w-[12rem] h-[10rem] rounded-lg object-contain
`;

const FeatureContainer = tw.div`
mx-auto my-10 grid max-w-2xl grid-cols-3 gap-y-16 lg:mx-0 lg:max-w-none
`;

const FeatureIconContainer = tw.div`
p-4 mx-4 bg-purple-200 rounded-lg hover:bg-purple-400
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

const FeatureContainer2 = tw.div`
mt-10 max-w-xl space-y-8 leading-7
`;


const FeatureItem2 = tw.div`
flex relative
`;


const FeatureTitle2 = tw.div`
font-semibold
`;

const FeatureDetail2 = tw.div`
text-sm my-1
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
text-5xl text-pink-400
`;

const StatName = tw.span`
font-semibold leading-7
`;


const PostContainer = tw.div`
flex mx-auto mt-10 grid lg:grid-cols-2 w-2xl
`;

const PostItem = tw.div`
group relative m-4 px-3 pt-3 py-8 rounded-lg bg-gray-100 text-left hover:bg-gray-200
`;

const PostImageContainer = tw.div`
flex justify-center w-full p-2
`;

const PostImage = tw.img`
rounded-lg w-[20rem] h-[15rem] object-cover
`;

const PostTitle = tw.h3`
mt-4 text-lg font-semibold leading-6
`;

const PostDetail = tw.div`
my-4 text-sm leading-6 
`;

const PostLink = tw.a`
text-xs font-bold leading-6
`;

const QnaWrapper = tw.div`
mt-24 py-24 bg-purple-300
`;

const QnaTitle = tw.h2`
text-3xl pb-4 text-center font-bold text-white
`;

const QnaContainer = tw.div`
min-w-0 gap-x-4 mx-24 my-6 p-6 bg-gray-50 rounded-lg
`;

const QnaQuestionContainer = tw.div`
flex justify-between
`;

const QnaQuestionItem = tw.div`
font-semibold mt-1
`;

const QnaAnswerItem = tw.div`
mt-4 px-4 text-sm leading-7 break-keep
`;

const QnaArrowContainer = tw.div`
p-2 mx-4 mb-2 bg-purple-400 rounded-full
`;


const SubContainer2 = tw.div`
lg:pl-8 lg:pt-4
`;


const MainTitleItem2 = tw.h3`
mt-2 text-2xl font-bold tracking-tight sm:text-3xl
`;

const ImageItem2 = tw.img`
h-[22rem] rounded-xl shadow-lg object-cover
`;

