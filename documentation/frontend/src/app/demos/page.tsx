import { IoMdDownload } from "react-icons/io";
import { FaChrome } from "react-icons/fa";
import { MdPersonAdd } from "react-icons/md";
import { HiArrowDown } from "react-icons/hi";
import tw from "tailwind-styled-components";

const Demo = () => {
  return (
    <>
      <Wrapper>
        <MainContainer>
          <SubContainer2>
            <MainTitleItem>Joa Bank</MainTitleItem>
            <MainTitleItem2>(Demo Application)</MainTitleItem2>
            <MainTextItem>
              여기에는 조아뱅크 앱 설명이 들어갑니다.
              여기에는 조아뱅크 앱 설명이 들어갑니다.
              여기에는 조아뱅크 앱 설명이 들어갑니다.
            </MainTextItem>

            <FeatureContainer>
              {features.map((feature) => (
                <FeatureItem>
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
            <PinkButtonItem>사용법</PinkButtonItem>
          </ButtonContainer>
          <SubTitleItem>오픈뱅크 API를 쉽고 빠르게 이용하는 방법</SubTitleItem>
          <SubButtonContainer>
            <SubButton1>1. 회원가입 & 로그인</SubButton1>
            <SubButton2>2. 가상은행 개설 후 은행코드 발급</SubButton2>
            <SubButton3>3. 은행코드로 서비스 이용</SubButton3>
          </SubButtonContainer>

          <SubWrapper2>
            {people.map((person) => (
              <SubItemContainer key={person.name}>

                <div className="flex">
                  <SubItemIconContainer>
                    <MdPersonAdd className="text-2xl text-white drop-shadow" />
                  </SubItemIconContainer>
                  <SubItemTitle>{person.name}</SubItemTitle>
                </div>
                <SubItemDetail>{person.description}</SubItemDetail>
                <PurpleButtonContainer>
                  <PurpleButtonItem href="#">지금 가입하기</PurpleButtonItem>
                </PurpleButtonContainer>
              </SubItemContainer>
            ))}
            <SubItemImage src='/sample.png' />
          </SubWrapper2>
        </SubWrapper>
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
                  <PostImage src={post.image.url} />
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
mt-6 leading-7
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

const SubWrapper2 = tw.div`
block lg:flex mx-auto max-w-7xl pt-12 px-6 lg:px-8 text-left
`;

const SubButtonContainer = tw.div`
inline-flex items-center rounded-md shadow-sm pt-8 text-sm font-semibold
`;

const SubButton1 = tw.button`
bg-gray-100 rounded-l-lg px-6 py-4 inline-flex items-center hover:bg-purple-300 hover:text-white
`;

const SubButton2 = tw.button`
bg-gray-100 px-6 py-4 inline-flex items-center hover:bg-purple-300 hover:text-white
`;

const SubButton3 = tw.button`
bg-gray-100 rounded-r-lg px-6 py-4 inline-flex items-center
hover:bg-purple-300 hover:text-white
`;

const SubItemContainer = tw.div`
w-full ml-6 gap-x-8 gap-y-12
`;

const SubItemTitle = tw.h3`
font-bold my-3
`;

const SubItemIconContainer = tw.div`
p-3 mx-4 bg-purple-400 rounded-lg
`;

const SubItemDetail = tw.div`
text-sm m-5
`;

const SubItemImage = tw.img`
w-[20rem] mx-8 rounded-lg
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
mt-2 mr-none lg:mr-20 text-sm leading-6
`;

const QnaArrowContainer = tw.div`
p-2 mx-4 mb-2 bg-purple-400 rounded-full
`;


const features = [
  {
    name: 'APK 다운로드',
    description:
      '다운로드에 대한 부가 설명이 들어갑니다.',
    icon: IoMdDownload,
  },
  {
    name: '웹 버전 써 보기',
    description: '웹 버전에 대한 부가 설명이 들어갑니다.',
    icon: FaChrome,
  },
]

const people = [
  {
    name: '제목 텍스트 1',
    description: '내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트 내용 테스트',
    imageUrl: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43',
  },
]

const posts = [
  {
    id: 1,
    title: '샘플 코드',
    href: '#',
    description:
      'GitHub에서 샘플 코드를 둘러보세요.',
    image: {
      url: '/sample.png',
    },
  },
  {
    id: 2,
    title: '이슈 제보',
    href: '#',
    description:
      '기능의 Docs에 기재된 것과 다르게 동작하는 경우, GitHub에 Issue를 생성하여 알려주세요. 문제 해결을 위해 노력하겠습니다.',
    image: {
      url: '/sample.png',
    },
  },
]

const qna = [
  {
    question: '1. 자주 묻는 질문 자주 묻는 질문 자주? ',
    answer: '여기에는 질문 내용에 대한 답변이 들어갑니다. 여기에는 질문 내용에 대한 답변이 들어갑니다. 여기에는 질문 내용에 대한 답변이 들어갑니다. 여기에는 질문 내용에 대한 답변이 들어갑니다.',
  },
  {
    question: '2. 자주 묻는 질문 자주 묻는 질문 자주? ',
    answer: '여기에는 질문 내용에 대한 답변이 들어갑니다.',
  },
]
