"use client";

import tw from "tailwind-styled-components";
import { useState } from "react";

export const components = [
  {
    name: "공통부(Commons)",
    anchor: "#",
    sub: [
      { id: 0, title: "API 명세 설명", to: "" },
    ],
  },
  {
    name: "은행(Bank)",
    anchor: "#",
    sub: [
      { id: 1, title: "은행 생성", to: "" },
      { id: 2, title: "은행 정보 조회", to: "" },
      { id: 3, title: "은행 정보 수정", to: "" },
      { id: 4, title: "은행 목록 조회/검색 ", to: "" },
      { id: 5, title: "은행 삭제", to: "" },
    ],
  },
  {
    name: "고객(Member)",
    anchor: "#",
    sub: [
      { id: 11, title: "고객 가입", to: "" },
      { id: 12, title: "이메일 중복 검사", to: "" },
      { id: 13, title: "전화번호 중복 검사", to: "" },
      { id: 14, title: "고객 정보 조회", to: "" },
      { id: 15, title: "고객 정보 수정", to: "" },
      { id: 16, title: "고객 목록 조회/검색 ", to: "" },
      { id: 17, title: "고객 탈퇴", to: "" },
    ],
  },
  {
    name: "예적금상품(Product)",
    anchor: "#",
    sub: [
      { id: 21, title: "예적금상품 생성", to: "" },
      { id: 22, title: "예적금상품 정보 조회", to: "" },
      { id: 23, title: "예적금상품 종료", to: "" },
      { id: 24, title: "예적금상품 목록 조회/검색", to: "" },
      { id: 25, title: "예적금상품 삭제", to: "" },
    ],
  },
  {
    name: "계좌(Account)",
    anchor: "#",
    sub: [
      { id: 31, title: "계좌 개설", to: "" },
      { id: 32, title: "계좌 정보 조회", to: "" },
      { id: 33, title: "계좌 잔액 조회", to: "" },
      { id: 34, title: "계좌 정보 수정", to: "" },
      { id: 35, title: "계좌 이체한도 변경", to: "" },
      { id: 36, title: "계좌 비밀번호 변경", to: "" },
      { id: 37, title: "고객 계좌 목록 조회", to: "" },
      { id: 38, title: "계좌 목록 조회/검색", to: "" },
      { id: 39, title: "계좌 해지", to: "" },
    ],
  },
  {
    name: "거래내역(Transaction)",
    anchor: "#",
    sub: [
      { id: 41, title: "입금", to: "" },
      { id: 42, title: "출금", to: "" },
      { id: 43, title: "이체", to: "" },
      { id: 44, title: "1원 전송", to: "" },
      { id: 45, title: "1원 인증 확인", to: "" },
      { id: 46, title: "거래내역 수정", to: "" },
      { id: 47, title: "거래내역 목록 조회/검색", to: ""}, 
      { id: 48, title: "거래내역 삭제", to: "" },
    ],
  },
  {
    name: "더미데이터(Dummy)",
    anchor: "#",
    sub: [
      { id: 51, title: "더미 은행고객 자동 생성", to: "" },
      { id: 52, title: "더미 계좌 자동 생성", to: "" },
      { id: 53, title: "더미 거래내역 자동 생성", to: "" },
      { id: 54, title: "더미 생성내역 정보 조회", to: "" },
      { id: 55, title: "더미 생성내역 수정", to: "" },
      { id: 56, title: "더미 생성내역 목록 조회/검색", to: "" },
      { id: 57, title: "더미 생성내역 삭제", to: "" },
      { id: 58, title: "더미 전체 삭제", to: "" },
    ],
  },
];



export default function Sidebar() {
  const [selectedItem, setSelectedItem] = useState(1);

  const handleItemClick = (index: number) => {
    console.log("index: ", index);
    setSelectedItem(index);
    console.log("after set: ", selectedItem);
  };
  return (
    <>
      <SidebarWrapper>
        <BarTitleContainer>
          <BarTitle>API Descriptions</BarTitle>
          <Ver>V 1.0</Ver>
        </BarTitleContainer>

        <BarSubTitle>Category</BarSubTitle>
        {components.map((item) => (
          <BarItemContainer key={item.name}>
            <BarItem>{item.name}</BarItem>
            {item.sub?.map((sub) => (
              <BarSubItem key={sub.id} onClick={() => handleItemClick(sub.id)}>
                {sub.title}
              </BarSubItem>
            ))}
          </BarItemContainer>
        ))}
      </SidebarWrapper>
    </>
  );
}

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
`;

const BarItemContainer = tw.div`
mr-12 rounded-md hover:bg-gray-100 
`;

const BarItem = tw.div`
p-2 flex space-4 font-bold
`;

const BarSubItem = tw.a`
p-2 flex space-2 text-xs hover:font-bold cursor-pointer
`;
