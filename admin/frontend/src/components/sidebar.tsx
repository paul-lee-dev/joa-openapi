"use client";

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
        <div className="pr-3 flex flex-col space-y-[2px]">
          <ListAnchor
            $selected={pathname === "/admin"}
            onClick={() => {
              router.push("/admin");
            }}
          >
            <GrOverview></GrOverview>
            <ListName>대시보드</ListName>
          </ListAnchor>
        </div>
        <Divider />
        <div className="pr-3 flex flex-col space-y-[2px]">
          <ListAnchor
            $selected={pathname.startsWith("/admin/bank")}
            onClick={() => {
              router.push("/admin/bank");
            }}
          >
            <HiBanknotes></HiBanknotes>
            <ListName>은행</ListName>
          </ListAnchor>
          <ListAnchor
            $selected={pathname.startsWith("/admin/product")}
            onClick={() => {
              router.push("/admin/product");
            }}
          >
            <HiCurrencyDollar></HiCurrencyDollar>
            <ListName>상품</ListName>
          </ListAnchor>
          <ListAnchor
            $selected={pathname.startsWith("/admin/member")}
            onClick={() => {
              router.push("/admin/member");
            }}
          >
            <FaUserFriends></FaUserFriends>
            <ListName>고객</ListName>
          </ListAnchor>
          <ListAnchor
            $selected={pathname.startsWith("/admin/account")}
            onClick={() => {
              router.push("/admin/account");
            }}
          >
            <MdAccountBalanceWallet></MdAccountBalanceWallet>
            <ListName>계좌</ListName>
          </ListAnchor>

          <ListAnchor
            $selected={pathname.startsWith("/admin/transaction")}
            onClick={() => {
              router.push("/admin/transaction");
            }}
          >
            <FaMoneyBillTransfer></FaMoneyBillTransfer>
            <ListName>거래내역</ListName>
          </ListAnchor>
          <ListAnchor
            $selected={pathname.startsWith("/admin/dummy")}
            onClick={() => {
              router.push("/admin/dummy");
            }}
          >
            <MdFactory></MdFactory>
            <ListName>더미데이터</ListName>
          </ListAnchor>
        </div>
        <Divider />
        <div className="pr-3 flex flex-col space-y-[2px]">
          <ListAnchor
            $selected={pathname.startsWith("/admin/setting")}
            onClick={() => {
              router.push("/admin/setting");
            }}
          >
            <HiCog6Tooth></HiCog6Tooth>
            <ListName>설정</ListName>
          </ListAnchor>
        </div>
      </SidebarContainer>
    </Wrapper>
  );
}

const Wrapper = tw.div`
lg:block 
hidden 
bg-white 
w-60
min-w-60
h-full
rounded-none 
border-slate-400
`;

const SidebarContainer = tw.div`
p-4 
border-slate-600
`;

const ListAnchor = tw.a<{ $selected: boolean }>`
px-3
py-3 
flex 
h-12
items-center 
space-x-4 
rounded-md 
text-gray-500 
hover:bg-pink-100
select-none
${(p) => (p.$selected ? "bg-pink-100" : "cursor-pointer")}
`;

const ListName = tw.span`
`;

const Divider = tw.div`
w-full
h-[1px]
bg-slate-300
my-2
`;
