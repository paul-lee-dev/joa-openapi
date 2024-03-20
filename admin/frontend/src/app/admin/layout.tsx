"use client";

import Header from "@/components/header";
import Sidebar from "@/components/sidebar";
import tw from "tailwind-styled-components";

export default function Admin({ children }: { children: React.ReactNode }) {
  return (
    <Wrapper>
      <Sidebar />
      <MainContainer>
        <Header />
        <AdminContainer>
          <Children>{children}</Children>
        </AdminContainer>
      </MainContainer>
    </Wrapper>
  );
}

const Wrapper = tw.div`
flex
h-full
w-full
`;

const MainContainer = tw.div`
flex-none 
transition-all
`;

const AdminContainer = tw.div`
h-full
w-full
`;

const Children = tw.div`
mx-auto
min-h-screen
`;
