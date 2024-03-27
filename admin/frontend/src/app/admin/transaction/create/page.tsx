"use client";

import Button from "@/components/button/button";
import InputText from "@/components/input/inputText";
import MultiSearchSelect from "@/components/select/multiSearchSelect";
import tw from "tailwind-styled-components";

export default function ProductDetail() {
  return (
    <>
      <Form>
        <div className="grid gap-3 mb-4 md:grid-cols-2">
          <MultiSearchSelect
            placeholder={"랜덤"}
            label={"고객"}
            htmlFor={"customer"}
          ></MultiSearchSelect>
          <InputText
            id={"month"}
            name={"month"}
            type={"number"}
            placeholder={"12"}
            label={"생성기간(월)"}
            htmlFor={"month"}
          ></InputText>
          <InputText
            id={"minAmount"}
            name={"minAmount"}
            type={"number"}
            placeholder={"1000"}
            label={"최소 금액"}
            htmlFor={"minAmount"}
          ></InputText>
          <InputText
            id={"maxAmount"}
            name={"maxAmount"}
            type={"number"}
            placeholder={"100000000"}
            label={"최대 금액"}
            htmlFor={"maxAmount"}
          ></InputText>
        </div>
        <div className="flex gap-6 justify-end">
          <Button
            onClick={() => {
              console.log("create dummy transaction");
            }}
            id={"create"}
            name={"생성"}
          ></Button>
        </div>
      </Form>
    </>
  );
}
const Form = tw.form`

`;
