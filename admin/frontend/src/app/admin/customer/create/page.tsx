"use client";

import Button from "@/components/button/button";
import InputText from "@/components/input/inputText";
import BankSelect from "@/components/select/bank";
import MyAsyncSelect from "@/components/select/multiSearchSelect";
import tw from "tailwind-styled-components";

export default function CustomerCreate() {
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
