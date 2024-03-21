import tw from "tailwind-styled-components";

export default function Sidebar() {
  return (
    <>
      <Wrapper id="sidebar">
        <SidebarContainer>
          <ListAnchor href="#">
            <ListName>서비스 소개(Introduction)</ListName>
          </ListAnchor>
          <ListAnchor href="#">
            <ListName>시작하기(Getting Started)</ListName>
          </ListAnchor>
          <ListAnchor href="#">
            <ListName>관리자(Admin)</ListName>
          </ListAnchor>
          <ListAnchor href="#">
            <ListName>은행(Bank)</ListName>
          </ListAnchor>
          <ListAnchor href="#">
            <ListName>고객(Member)</ListName>
          </ListAnchor>
          <ListAnchor href="#">
            <ListName>예적금상품(Product)</ListName>
          </ListAnchor>
          <ListAnchor href="#">
            <ListName>계좌(Account)</ListName>
          </ListAnchor>
          <ListAnchor href="#">
            <ListName>거래내역(Transaction)</ListName>
          </ListAnchor>
          <ListAnchor href="#">
            <ListName>더미데이터(Dummy)</ListName>
          </ListAnchor>
        </SidebarContainer>
      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`
lg:block 
hidden 
bg-white 
w-64 
h-screen 
fixed 
rounded-none 
border-slate-400
`;

const SidebarContainer = tw.div`
p-4 
space-y-4
border-slate-600
`;

const ListAnchor = tw.a`
px-3
py-3 
flex 
items-center 
space-x-4 
rounded-md 
text-gray-500 
hover:bg-pink-500
hover:text-white
`;

const ListName = tw.span`
`;
