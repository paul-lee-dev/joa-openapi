import { HiArrowDown } from "react-icons/hi";
import tw from "tailwind-styled-components";
import { features, posts, qna } from './items';

const Demo = () => {
  return (
    <>
      <Wrapper>
        <MainContainer>
          <SubContainer2>
            <MainTitleItem>Joa Bank</MainTitleItem>
            <MainTitleItem2>(Demo Application)</MainTitleItem2>
            <MainTextItem>
              JOA OPEN API를 활용해 제작한 샘플 은행 앱입니다. 가상의 은행인 조아은행을 배경으로 기본적인 회원 가입, 계좌 생성, 거래내역 확인 등의 대고객(B2C) 기능을 포함하여 구현하였습니다.
            </MainTextItem>

            <FeatureContainer>
              {features.map((feature) => (
                <FeatureItem key={feature.name}>
                  <FeatureIconContainer>
                    <feature.icon className="text-2xl text-white drop-shadow" />
                  </FeatureIconContainer>
                  <div>
                    <FeatureTitle>{feature.name}</FeatureTitle>
                    <FeatureDetail>{feature.description}</FeatureDetail>
                  </div>
                </FeatureItem>
              ))}
            </FeatureContainer>
          </SubContainer2>
          <ImageItem2 src='/sample.png' />
        </MainContainer>
      </Wrapper>

      <Wrapper>
        <SubWrapper>
          <ButtonContainer>
            <PinkButtonItem>GitHub</PinkButtonItem>
          </ButtonContainer>

          <SubTitleItem>
            샘플 서비스에 쓰인 코드를 눈으로 확인하고<br />
            직접 커스텀해서 활용하세요
          </SubTitleItem>

          <PostContainer>
            {posts.map((post) => (
              <PostItem key={post.id} >
                <PostImageContainer>
                  <a href={post.href}><PostImage src={post.image.url} /></a>
                </PostImageContainer>
                <PostTitle>{post.title}</PostTitle>
                <PostDetail>{post.description}</PostDetail>
                <PostLink href={post.href}>바로가기</PostLink>
              </PostItem>
            ))}
          </PostContainer>
        </SubWrapper>
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


export default Demo;


const Wrapper = tw.div`
pt-24
`;

const MainContainer = tw.div`
mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2
`;

const SubContainer = tw.div`
lg:pr-8 lg:pt-12
`;

const SubContainer2 = tw.div`
lg:pr-8 lg:pt-4
`;


const MainTitleItem = tw.h2`
mt-2 text-3xl font-bold tracking-tight sm:text-4xl
`;

const MainTitleItem2 = tw.h3`
mt-2 text-2xl font-bold tracking-tight sm:text-3xl
`;

const MainTextItem = tw.div`
mt-6 leading-7 break-keep
`;

const ImageItem2 = tw.img`
w-[32rem] h-[22rem] rounded-xl shadow-xl
`;

const FeatureContainer = tw.div`
mt-10 max-w-xl space-y-8 leading-7
`;

const FeatureItem = tw.div`
flex relative gap-2
`;

const FeatureIconContainer = tw.div`
p-4 mx-4 bg-purple-200 rounded-lg
`;

const FeatureTitle = tw.div`
font-semibold
`;

const FeatureDetail = tw.div`
text-sm
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

const PurpleButtonContainer = tw.div`
px-5 py-3 mb-8
`;

const PurpleButtonItem = tw.a`
py-3 px-7 text-xs bg-purple-300 hover:bg-purple-500 text-white w-full transition ease-in duration-200 
text-center font-semibold shadow-md focus:ring-2 focus:ring-offset-2 rounded-full
`;

const SubTitleItem = tw.h3`
mt-2 text-2xl font-bold tracking-tight
`;

const PostContainer = tw.div`
flex mx-auto mt-10 grid lg:grid-cols-2 w-2xl
`;

const PostItem = tw.div`
group relative m-4 px-3 pt-3 py-8 rounded-lg bg-gray-100 text-left
`;

const PostImageContainer = tw.div`
flex justify-center w-full p-2
`;

const PostImage = tw.img`
rounded-lg
`;

const PostTitle = tw.h3`
mt-4 text-lg font-semibold leading-6
`;

const PostDetail = tw.div`
my-4 text-sm leading-6 
`;

const PostLink = tw.a`
text-sm leading-6
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

