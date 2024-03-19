"use client";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import tw from "tailwind-styled-components";

export default function Admin({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <AdminContainer>
        <Header />
        <Sidebar />
        <MainContainer>
          <ChildrenContainer>
            <Children>{children}</Children>
          </ChildrenContainer>
        </MainContainer>
      </AdminContainer>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex
h-full
w-full`;

const AdminContainer = tw.div`
h-full
w-full`;

const MainContainer = tw.div`
mx-2.5  
flex-none 
transition-all 
md:pr-2
xl:ml-[323px]`;

const ChildrenContainer = tw.div`
`;

const Children = tw.div`
mx-auto
min-h-screen
p-2
!pt-[10px] md:p-2`;
