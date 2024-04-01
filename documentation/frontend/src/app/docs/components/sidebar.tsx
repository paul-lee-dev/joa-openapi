import tw from "tailwind-styled-components";
import Link from 'next/link';

export default function Sidebar() {
  return (
    <>
      <Wrapper>

        <BarTitleContainer>
          <BarTitle>Docs</BarTitle>
          <Ver>V 1.0</Ver>
        </BarTitleContainer>

        <BarSubTitle>Overview</BarSubTitle>
        <BarItem>시작하기</BarItem>
        <BarItem>용어 정의</BarItem> 
        <BarItem>프로젝트 구조</BarItem>
        <BarItem>버전 정보</BarItem>

        <BarSubTitle>How to use</BarSubTitle>
        <BarItem>API 명세 설명</BarItem>
        <BarItem>테스트베드 이용법</BarItem>
        <BarItem>관리자 대시보드 이용법</BarItem>
        <BarItem>관리자 페이지 이용법</BarItem>
        <BarItem>샘플 앱 이용법</BarItem>
        <BarItem>커스텀 방법</BarItem>

      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`
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
`;

const BarItem = tw.div`
mr-12 p-2 flex space-4 rounded-md hover:bg-gray-100 hover:font-bold cursor-pointer
`;

