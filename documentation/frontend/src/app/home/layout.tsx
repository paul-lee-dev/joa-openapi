"use client";

import tw from "tailwind-styled-components";

export default function Joa({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <HomeContainer>
        <MainContainer>
            <Children>{children}</Children>
        </MainContainer>
      </HomeContainer>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex
h-full
w-full`;

const HomeContainer = tw.div`
h-full
w-full`;

const MainContainer = tw.div`
mx-2.5  
flex-none 
transition-all 
md:pr-2
xl:mx-[323px]`;

const Children = tw.div`
mx-auto
min-h-screen
p-2
!pt-[10px] md:p-2`;
