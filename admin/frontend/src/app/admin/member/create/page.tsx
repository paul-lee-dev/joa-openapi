"use client";

<<<<<<< HEAD
import Button from "@/components/button/button";
import InputText from "@/components/input/inputText";
import BankSelect from "@/components/select/bank";
=======
import { createDummyMembers } from "@/api/Dummy";
import Button from "@/components/button/button";
import InputText from "@/components/input/inputText";
import BankSelect from "@/components/select/bank";
import MyAsyncSelect from "@/components/select/customerMultiSearchSelect";
import { CreateDummyMemberParams } from "@/models/Dummy.interface";
>>>>>>> 831001913d1d6d3192eb56d0f6351c7f556a35a4
import { useState } from "react";
import tw from "tailwind-styled-components";

export default function CustomerCreate() {
<<<<<<< HEAD
  const [dummyMemberInfo, setDummyMemberInfo] = useState<any>({
    count: 10,
    bankId: "2601aff2-7423-4c24-b3b0-1bbea6ad9bc3",
  });
=======
  const [dummyMemberInfo, setDummyMemberInfo] =
    useState<CreateDummyMemberParams>({
      count: 10,
      bankId: "2601aff2-7423-4c24-b3b0-1bbea6ad9bc3",
    });
>>>>>>> 831001913d1d6d3192eb56d0f6351c7f556a35a4

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setDummyMemberInfo({ ...dummyMemberInfo, [name]: value });
  };

  const handleCreateDummyMember = async () => {
    try {
<<<<<<< HEAD
      // const response = await createDummyMembers(dummyMemberInfo);
      // console.log("Bank added:", response);
=======
      const response = await createDummyMembers(dummyMemberInfo);
      console.log("Bank added:", response);
>>>>>>> 831001913d1d6d3192eb56d0f6351c7f556a35a4
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
<<<<<<< HEAD
            // value={dummyMemberInfo.bankId}
=======
            value={dummyMemberInfo.bankId}
>>>>>>> 831001913d1d6d3192eb56d0f6351c7f556a35a4
            placeholder={"신한은행"}
            label={"은행 명"}
            htmlFor={"createNum"}
          ></InputText>
          <InputText
            id={"createNum"}
            name={"createNum"}
            type={"number"}
<<<<<<< HEAD
            // value={dummyMemberInfo.count}
            placeholder={"0"}
            label={"생성 개수"}
            htmlFor={"createNum"}
            // onChange={handleInputChange}
=======
            value={dummyMemberInfo.count}
            placeholder={"0"}
            label={"생성 개수"}
            htmlFor={"createNum"}
            onChange={handleInputChange}
>>>>>>> 831001913d1d6d3192eb56d0f6351c7f556a35a4
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
