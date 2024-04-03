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
import Link from "next/link";

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
    <>
      <div className="flex flex-col py-4 h-28 justify-center">
        <div className="flex space-x-2">
          <Link
            href={"/admin/dummy"}
            className="text-md font-medium text-gray-500 hover:text-pink-500"
          >
            더미데이터
          </Link>
          <h1 className="text-md font-medium text-gray-500">/</h1>
          <Link
            href={"/admin/dummy/create"}
            className="text-md font-medium text-gray-500 hover:text-pink-500"
          >
            더미데이터생성
          </Link>
        </div>
      </div>
      <Container>
        <div className="flex flex-col space-y-2">
          <h1 className="font-bold text-2xl">더미데이터 생성</h1>
          <p className="font-light text-gray-400">
            한 번에 필요한 만큼의 더미 고객 / 더미 계좌 / 더미 거래내역을 만들어볼 수 있어요.
          </p>
        </div>
        <Divider />
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
    </>
  );
}
const Container = tw.div`
p-14
pt-4
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
