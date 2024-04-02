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
h-screen
max-h-screen
w-full
`;

const MainContainer = tw.div`
flex
flex-col
flex-grow
transition-all
h-screen
max-h-screen
`;

const AdminContainer = tw.div`
flex-grow
flex
flex-col
w-full
overflow-y-scroll
`;

const Children = tw.div`
flex-grow
`;
