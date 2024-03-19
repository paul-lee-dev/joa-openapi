import {
  HiCurrencyDollar,
  HiDocument,
} from "react-icons/hi";
import {
  HiAdjustmentsHorizontal,
  HiBanknotes,
  HiCog6Tooth,
} from "react-icons/hi2";
import tw from "tailwind-styled-components";

export default function Sidebar() {
  return (
      <Wrapper id="sidebar">
        <SidebarContainer>
          <ListAnchor href="#">
            <HiDocument></HiDocument>
            <ListName>Overview</ListName>
          </ListAnchor>
          <ListAnchor href="#">
            <HiBanknotes></HiBanknotes>
            <ListName>은행</ListName>
          </ListAnchor>
          <ListAnchor href="#">
            <HiCurrencyDollar></HiCurrencyDollar>
            <ListName>상품</ListName>
          </ListAnchor>
          <ListAnchor href="#">
            <HiCurrencyDollar></HiCurrencyDollar>
            <ListName>계좌</ListName>
          </ListAnchor>
          <ListAnchor href="#">
            <HiCurrencyDollar></HiCurrencyDollar>
            <ListName>고객</ListName>
          </ListAnchor>
          <ListAnchor href="#">
            <HiCurrencyDollar></HiCurrencyDollar>
            <ListName>거래내역</ListName>
          </ListAnchor>
          <ListAnchor href="#">
            <HiAdjustmentsHorizontal></HiAdjustmentsHorizontal>
            <ListName>자동생성</ListName>
          </ListAnchor>
          <ListAnchor href="#">
            <HiCog6Tooth></HiCog6Tooth>
            <ListName>설정</ListName>
          </ListAnchor>
        </SidebarContainer>
      </Wrapper>
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
