"use client";

import Button from "@/components/button/button";
import InputText from "@/components/input/inputText";
import BankSelect from "@/components/select/bank";
import MyAsyncSelect from "@/components/select/multiSearchSelect";
import tw from "tailwind-styled-components";

export default function AccountDetail() {
  return (
    <>
      <Form>
        <div className="grid gap-6 mb-6 md:grid-cols-2">
          <BankSelect />
          <InputText
            id={"createNum"}
            name={"createNum"}
            type={"number"}
            placeholder={"0"}
            label={"생성 개수"}
            htmlFor={"createNum"}
          ></InputText>
          <MyAsyncSelect
            placeholder={"검색"}
            label={"고객"}
            htmlFor={"customer"}
          ></MyAsyncSelect>
        </div>
        <div className="flex gap-6 justify-end">
          <Button id={"edit"} name={"수정"}></Button>
          <Button id={"delete"} name={"삭제"}></Button>
        </div>
      </Form>
    </>
  );
}
const Form = tw.form`

`;
