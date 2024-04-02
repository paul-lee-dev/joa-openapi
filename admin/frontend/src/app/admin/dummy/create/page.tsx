"use client";

import { createProduct } from "@/api/Product";
import Button from "@/components/button/button";
import InputText, { CommonErrorMsg, CommonInput } from "@/components/input/inputText";
import BankSelect from "@/components/select/bankSelect";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import tw from "tailwind-styled-components";
import { HiCreditCard, HiChartBar, HiFlag, HiCurrencyDollar, HiCalculator } from "react-icons/hi";
import { useState } from "react";
import CreateDummyMember from "@/components/dummyCreate/createDummyMember";
import CreateDummyAccount from "@/components/dummyCreate/createDummyAccount";
import CreateDummyTransaction from "@/components/dummyCreate/createDummyTransaction";

interface CreateDummyMemberForm {
  name: string;
  count: number;
  bankId: string;
}
interface CreateDummyAccountForm {
  name: string;
  count: number;
  bankId: string;
  productId: string;
  users: string[];
}
interface CreateDummyTransactionForm {
  name: string;
  count: number;
  term: "MINUTE" | "HOUR" | "DAY";
  bankId: string;
  users: string[];
}

export default function DummyCreate() {
  const router = useRouter();
  const [menu, setMenu] = useState<"MEMBER" | "ACCOUNT" | "TRANSACTION">("MEMBER");
  return (
    <Container>
      <div className="p-4">
        <InputText label={"더미생성 종류"}>
          <div className="flex p-4">
            <MenuButton disabled={menu === "MEMBER"} onClick={() => setMenu("MEMBER")}>
              고객
            </MenuButton>
            <MenuButton disabled={menu === "ACCOUNT"} onClick={() => setMenu("ACCOUNT")}>
              계좌
            </MenuButton>
            <MenuButton disabled={menu === "TRANSACTION"} onClick={() => setMenu("TRANSACTION")}>
              거래내역
            </MenuButton>
          </div>
        </InputText>
      </div>
      <Divider />
      {menu === "MEMBER" && <CreateDummyMember />}
      {menu === "ACCOUNT" && <CreateDummyAccount />}
      {menu === "TRANSACTION" && <CreateDummyTransaction />}
    </Container>
  );
}
const Container = tw.div`
p-14
w-full
flex
flex-col
space-y-8
`;

const MenuButton = tw.button`
w-40
h-10
bg-gray-100
border
border-gray-500
flex
justify-center
items-center
disabled:bg-pink-100
text-gray-400
disabled:text-gray-700
disabled:font-bold
hover:bg-gray-200
`;

const Divider = tw.div`
w-full
h-[1px]
bg-slate-300
my-4
`;
