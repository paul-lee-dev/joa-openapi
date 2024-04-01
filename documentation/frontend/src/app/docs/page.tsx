"use client";

import { useRef, useState } from "react";
import tw from "tailwind-styled-components";
import dynamic from "next/dynamic";
import { ComponentType } from "react";

const DocComponents: ComponentType<{}>[] = [
  dynamic(() => import("@/app/docs/components/docs1")),
  dynamic(() => import("@/app/docs/components/docs2")),
  dynamic(() => import("@/app/docs/components/docs3")),
  dynamic(() => import("@/app/docs/components/docs4")),
  dynamic(() => import("@/app/docs/components/docs5")),
  dynamic(() => import("@/app/docs/components/docs6")),
  dynamic(() => import("@/app/docs/components/docs7")),
  dynamic(() => import("@/app/docs/components/docs8")),
  dynamic(() => import("@/app/docs/components/docs9")),
];

const Docs: React.FC = () => {
  const [pageIndex, setPageIndex] = useState<number>(0);
  const docRefs: React.RefObject<HTMLDivElement>[] = DocComponents.map(() =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useRef<HTMLDivElement>(null)
  );

  const handleItemClick = (index: number) => {
    setPageIndex(index);
    if (docRefs[index].current) {
      docRefs[index].current?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Wrapper>
      <SubWrapper>
      <SidebarContainer>
        <SidebarWrapper>
          <BarTitleContainer>
            <BarTitle>Docs</BarTitle>
            <Ver>V 1.0</Ver>
          </BarTitleContainer>
          <BarSubTitle>Overview</BarSubTitle>
          <BarItem onClick={() => handleItemClick(0)}>용어 정의</BarItem>
          <BarItem onClick={() => handleItemClick(1)}>프로젝트 구조</BarItem>
          <BarItem onClick={() => handleItemClick(2)}>버전 정보</BarItem>

          <BarSubTitle>Getting Started</BarSubTitle>
          <BarItem onClick={() => handleItemClick(3)}>시작하기</BarItem>
          <BarItem onClick={() => handleItemClick(4)}>API 명세 설명</BarItem>
          <BarItem onClick={() => handleItemClick(5)}>관리자 대시보드</BarItem>
          <BarItem onClick={() => handleItemClick(6)}>
            관리자 페이지 이용법
          </BarItem>
          <BarItem onClick={() => handleItemClick(7)}>샘플 앱 이용법</BarItem>
          <BarItem onClick={() => handleItemClick(8)}>커스텀 방법</BarItem>
        </SidebarWrapper>
      </SidebarContainer>
      <MainContainer>
        <Children>
          {DocComponents.map((DocComponent, index) => (
            <div key={index} ref={docRefs[index]}>
              <DocComponent />
            </div>
          ))}
        </Children>
      </MainContainer>
      </SubWrapper>
    </Wrapper>
  );
};

const Wrapper = tw.div`
flex
h-full
w-full`;

const SubWrapper = tw.div`
xl:ml-[120px]
`;

const MainContainer = tw.div`
flex
pl-40
mx-2.5  
my-4
transition-all 
md:pr-2
xl:mx-[240px]
`;

const SidebarContainer = tw.div`
pl-20
fixed
`;

const Children = tw.div`
xl:w-full
min-h-screen
p-2
!pt-[10px] md:p-2`;

const SidebarWrapper = tw.div`
w-64 mx-8 mt-12
text-sm
`;

const BarTitleContainer = tw.div`
flex items-end justify-between p-2
`;

const BarTitle = tw.h3`
font-bold
`;

const Ver = tw.div`
mr-14
text-xs
`;

const BarSubTitle = tw.div`
text-xs font-bold p-3 mt-4
cursor-pointer
`;

const BarItem = tw.div`
lg:mr-12 p-2 flex space-4 rounded-md hover:bg-gray-100 hover:font-bold
cursor-pointer
`;

export default Docs;
