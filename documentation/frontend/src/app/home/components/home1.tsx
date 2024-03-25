import tw from "tailwind-styled-components";

export default function home() {
    return (
        <>
            <Wrapper>
                <MainContainer>
                    <SubContainer>

                        <MainTitleItem>
                            Joa Open API
                        </MainTitleItem>

                        <MainTextItem>
                            은행 업무와 관련된 다양한 금융 API를 제공하여 <br />
                            핀테크 프로젝트를 간편하고 효율적으로 <br />
                            개발할 수 있도록 실시간으로 지원합니다.
                        </MainTextItem>

                        <ButtonContainer>
                            <PurpleButtonItem href="#">시작하기</PurpleButtonItem>
                        </ButtonContainer>

                    </SubContainer>
                    <ImageItem src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43" alt="Product screenshot" />
                </MainContainer>
            </Wrapper>
        </>
    );
}


const Wrapper = tw.div`
pt-24
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
mt-6 leading-7
`;

const ButtonContainer = tw.div`
mt-2 py-6
`;

const PurpleButtonItem = tw.a`
py-3 px-7 text-xs bg-purple-300 hover:bg-purple-500 text-white w-full transition ease-in duration-200 
text-center font-semibold shadow-md focus:ring-2 focus:ring-offset-2 rounded-full
`;

const ImageItem = tw.img`
w-[32rem] h-[19rem] rounded-xl shadow-xl
`;