"use client";

import Button from "@/components/button/button";
import InputText from "@/components/input/inputText";
import BankSelect from "@/components/select/bank";
import tw from "tailwind-styled-components";

export default function ProductDetail() {
  return (
    <>
      <Form>
        <div className="grid gap-3 mb-4 md:grid-cols-2">
          <BankSelect></BankSelect>
          <InputText
            id={"productId"}
            name={"productId"}
            type={"text"}
            placeholder={"4d1g3ffd3432rd32rdf43asd4"}
            label={"상품 코드"}
            htmlFor={"productId"}
          ></InputText>
          <InputText
            id={"name"}
            name={"name"}
            type={"text"}
            placeholder={"청년을 위한 예적금 상품"}
            label={"상품 이름"}
            htmlFor={"name"}
          ></InputText>
          <InputText
            id={"type"}
            name={"type"}
            type={"text"}
            placeholder={"예금"}
            label={"상품 분류"}
            htmlFor={"type"}
          ></InputText>
          <InputText
            id={"paymentType"}
            name={"paymentType"}
            type={"text"}
            placeholder={"복리"}
            label={"지급 방식"}
            htmlFor={"paymentType"}
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
          <Button onClick={() => {}} id={"create"} name={"등록"}></Button>
        </div>
      </Form>
    </>
  );
}
const Form = tw.form`

`;
