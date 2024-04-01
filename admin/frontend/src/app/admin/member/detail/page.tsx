"use client";

import Button from "@/components/button/button";
import InputText from "@/components/input/inputText";
import tw from "tailwind-styled-components";

export default function CustomerDetail() {
  return (
    <>
      <Form>
        <div className="grid gap-3 mb-4 md:grid-cols-2">
          <InputText
            id={"memberId"}
            name={"memberId"}
            type={"text"}
            placeholder={"fjp321hj34l40932qtf32sja"}
            label={"고객아이디"}
            htmlFor={"memberId"}
          ></InputText>
          <InputText
            id={"name"}
            name={"name"}
            type={"text"}
            placeholder={"구본승"}
            label={"이름"}
            htmlFor={"name"}
          ></InputText>
          <InputText
            id={"email"}
            name={"email"}
            type={"email"}
            placeholder={"rootwin@joa.com"}
            label={"이메일"}
            htmlFor={"email"}
          ></InputText>
          <InputText
            id={"phone"}
            name={"phone"}
            type={"tel"}
            placeholder={"010-1234-1234"}
            label={"전화번호"}
            htmlFor={"phone"}
          ></InputText>
          <InputText
            id={"password"}
            name={"password"}
            type={"password"}
            placeholder={""}
            label={"비밀번호"}
            htmlFor={"password"}
          ></InputText>
          <InputText
            id={"password-check"}
            name={"password-check"}
            type={"password"}
            placeholder={""}
            label={"비밀번호 확인"}
            htmlFor={"password-check"}
          ></InputText>
        </div>
        <div className="flex gap-6 justify-end">
          <Button id={"edit"} name={"수정"} onClick={function (): void {
            throw new Error("Function not implemented.");
          } }></Button>
          <Button id={"delete"} name={"삭제"} onClick={function (): void {
            throw new Error("Function not implemented.");
          } }></Button>
        </div>
      </Form>
    </>
  );
}
const Form = tw.form`

`;
