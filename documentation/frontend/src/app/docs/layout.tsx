"use client";

import Sidebar from "@/app/docs/components/sidebar";
import tw from "tailwind-styled-components";

export default function Joa({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <DemoContainer>
        <MainContainer>
          <SidebarContainer>
            <Sidebar />
          </SidebarContainer>
          <Children>{children}</Children>
        </MainContainer>
      </DemoContainer>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex
h-full
w-full`;

const DemoContainer = tw.div`
h-full
w-full`;

const MainContainer = tw.div`
flex
mx-2.5  
my-4
transition-all 
md:pr-2
xl:mx-[240px]`;

const SidebarContainer = tw.div`
`;

const Children = tw.div`
xl:w-full
min-h-screen
p-2
!pt-[10px] md:p-2`;
