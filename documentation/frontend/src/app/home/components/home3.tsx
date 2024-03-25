import tw from "tailwind-styled-components";

export default function home4() {
  return (
    <>
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

const ImageItem = tw.img`
w-[32rem] h-[19rem] rounded-xl shadow-xl
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
w-[40rem] px-8 text-2xl font-bold
`;

const TeamDetail = tw.div`
`;
