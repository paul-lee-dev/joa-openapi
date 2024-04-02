"use client";

import Button from "@/components/button/button";
import InputText, { CommonInput } from "@/components/input/inputText";
import BankSelect from "@/components/select/bankSelect";
import MyAsyncSelect from "@/components/select/customerMultiSearchSelect";
import tw from "tailwind-styled-components";
import { useRouter } from "next/navigation";

export default function DummyCreate() {
  const router = useRouter();
  return (
    <>
      <Form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          {/* <BankSelect  /> */}
          <InputText label={"생성 개수"}>
            <CommonInput />
          </InputText>
          <MyAsyncSelect placeholder={"검색"} label={"고객"} htmlFor={"customer"}></MyAsyncSelect>
        </div>
        <div className="flex justify-end">
          <Button
            onClick={() => {
              console.log("customer created");
            }}
            id={"detailSubmit"}
            name={"생성"}
          ></Button>
        </div>
      </Form>
    </>
  );
}

const Form = tw.form`

`;
