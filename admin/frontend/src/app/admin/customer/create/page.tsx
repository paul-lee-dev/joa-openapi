"use client";

import { createDummyMembers } from "@/api/Dummy";
import Button from "@/components/button/button";
import InputText from "@/components/input/inputText";
import BankSelect from "@/components/select/bank";
import MyAsyncSelect from "@/components/select/customerMultiSearchSelect";
import { CreateDummyMemberParams } from "@/models/Dummy.interface";
import { useState } from "react";
import tw from "tailwind-styled-components";

export default function CustomerCreate() {
  const [dummyMemberInfo, setDummyMemberInfo] =
    useState<CreateDummyMemberParams>({
      count: 10,
      bankId: "2601aff2-7423-4c24-b3b0-1bbea6ad9bc3",
    });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDummyMemberInfo({ ...dummyMemberInfo, [name]: value });
  };

  const handleCreateDummyMember = async () => {
    try {
      const response = await createDummyMembers(dummyMemberInfo);
      console.log("Bank added:", response);
    } catch (error) {
      console.error("Error adding bank:", error);
    }
  };

  return (
    <>
      <Form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <BankSelect />
          <InputText
            id={"createNum"}
            name={"createNum"}
            type={"text"}
            value={dummyMemberInfo.bankId}
            placeholder={"신한은행"}
            label={"은행 명"}
            htmlFor={"createNum"}
          ></InputText>
          <InputText
            id={"createNum"}
            name={"createNum"}
            type={"number"}
            value={dummyMemberInfo.count}
            placeholder={"0"}
            label={"생성 개수"}
            htmlFor={"createNum"}
            onChange={handleInputChange}
          ></InputText>
        </div>
        <div className="flex justify-end">
          <Button
            id={"detailSubmit"}
            name={"생성"}
            onClick={() => {
              console.log("create customer");
            }}
          ></Button>
        </div>
      </Form>
    </>
  );
}

const Form = tw.form`

`;
