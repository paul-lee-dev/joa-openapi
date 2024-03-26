import { FaUserFriends } from "react-icons/fa";
import { FaMoneyBillTransfer } from "react-icons/fa6";
import { GrOverview } from "react-icons/gr";
import { HiCurrencyDollar } from "react-icons/hi";
import { HiBanknotes, HiCog6Tooth } from "react-icons/hi2";
import { MdAccountBalanceWallet, MdFactory } from "react-icons/md";
import tw from "tailwind-styled-components";
import { useRouter, usePathname } from "next/navigation";

export default function Sidebar() {
  const router = useRouter();
  const pathname = usePathname();
  return (
    <Wrapper id="sidebar">
      <SidebarContainer>
        <ListAnchor
          onClick={() => {
            router.push("/admin");
          }}
        >
          <GrOverview></GrOverview>
          <ListName>Overview</ListName>
        </ListAnchor>
        <ListAnchor
          onClick={() => {
            router.push("/admin/bank");
          }}
        >
          <HiBanknotes></HiBanknotes>
          <ListName>은행</ListName>
        </ListAnchor>
        <ListAnchor
          onClick={() => {
            router.push("/admin/product");
          }}
        >
          <HiCurrencyDollar></HiCurrencyDollar>
          <ListName>상품</ListName>
        </ListAnchor>
        <ListAnchor
          onClick={() => {
            router.push("/admin/account");
          }}
        >
          <MdAccountBalanceWallet></MdAccountBalanceWallet>
          <ListName>계좌</ListName>
        </ListAnchor>
        <ListAnchor
          onClick={() => {
            router.push("/admin/customer");
          }}
        >
          <FaUserFriends></FaUserFriends>
          <ListName>고객</ListName>
        </ListAnchor>
        <ListAnchor
          onClick={() => {
            router.push("/admin/transaction");
          }}
        >
          <FaMoneyBillTransfer></FaMoneyBillTransfer>
          <ListName>거래내역</ListName>
        </ListAnchor>
        <ListAnchor
          onClick={() => {
            router.push("/admin/dummy");
          }}
        >
          <MdFactory></MdFactory>
          <ListName>자동생성</ListName>
        </ListAnchor>
        <ListAnchor
          onClick={() => {
            router.push("/admin/setting");
          }}
        >
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
hover:bg-pink-300
hover:text-white
cursor-pointer
`;

const ListName = tw.span`
`;
