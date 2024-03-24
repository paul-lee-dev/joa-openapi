import { FaUserFriends } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GrOverview } from "react-icons/gr";
import { HiCurrencyDollar } from "react-icons/hi";
import { HiBanknotes } from "react-icons/hi2";
import { MdAccountBalanceWallet, MdFactory } from "react-icons/md";
import tw from "tailwind-styled-components";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Sidebar() {
  const router = useRouter();
  return (
    <Wrapper id="sidebar">
      <SidebarContainer>
        <ListAnchor href="/admin">
          <GrOverview></GrOverview>
          <ListName>Overview</ListName>
        </ListAnchor>
        <ListAnchor href="/admin/bank">
          <HiBanknotes></HiBanknotes>
          <ListName>은행</ListName>
        </ListAnchor>
        <ListAnchor
          onClick={() => {
            router.push(`product`);
          }}
        >
          <HiCurrencyDollar></HiCurrencyDollar>
          <ListName>상품</ListName>
        </ListAnchor>
        <ListAnchor href="/admin/product">
          <MdAccountBalanceWallet></MdAccountBalanceWallet>
          <ListName>계좌</ListName>
        </ListAnchor>
        <ListAnchor
          onClick={() => {
            router.push(`customer`);
          }}
        >
          <FaUserFriends></FaUserFriends>
          <ListName>고객</ListName>
        </ListAnchor>
        <ListAnchor
          onClick={() => {
            router.push(`transaction`);
          }}
        >
          <FaMoneyBillTransfer></FaMoneyBillTransfer>
          <ListName>거래내역</ListName>
        </ListAnchor>
        <ListAnchor
          onClick={() => {
            router.push(`dummy`);
          }}
        >
          <MdFactory></MdFactory>
          <ListName>자동생성</ListName>
        </ListAnchor>
        <ListAnchor
          onClick={() => {
            router.push(`setting`);
          }}
        >
          <MdFactory></MdFactory>
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
cursor-pointer
`;

const ListName = tw.span`
`;
