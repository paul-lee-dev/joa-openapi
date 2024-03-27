"use client";

import Button from "@/components/button/button";
import InputText from "@/components/input/inputText";
import DormantSelect from "@/components/select/dormant";
import { useRouter } from "next/navigation";
import tw from "tailwind-styled-components";

export default function AccountDetail() {
  const router = useRouter();
  return (
    <>
      <Form>
        <div className="grid gap-3 mb-4 md:grid-cols-2">
          <InputText
            id={"accountId"}
            name={"accountId"}
            type={"text"}
            placeholder={"595102-01-213572"}
            label={"계좌번호"}
            htmlFor={"accountId"}
          ></InputText>
          <InputText
            id={"nickname"}
            name={"nickname"}
            type={"text"}
            placeholder={"데이트통장"}
            label={"계좌별명"}
            htmlFor={"nickname"}
          ></InputText>
          <InputText
            id={"balance"}
            name={"balance"}
            type={"number"}
            placeholder={"500000"}
            label={"잔액"}
            htmlFor={"balance"}
          ></InputText>
          <DormantSelect />
          <InputText
            id={"transferLimit"}
            name={"transferLimit"}
            type={"number"}
            placeholder={"100000"}
            label={"이체한도"}
            htmlFor={"transferLimit"}
          ></InputText>
          <InputText
            id={"paymentNum"}
            name={"paymentNum"}
            type={"number"}
            placeholder={"36"}
            label={"납입횟수"}
            htmlFor={"paymentNum"}
          ></InputText>
          <InputText
            id={"nonPaymentNum"}
            name={"nonPaymentNum"}
            type={"number"}
            placeholder={"0"}
            label={"미납횟수"}
            htmlFor={"nonPaymentNum"}
          ></InputText>
          <InputText
            id={"start_date"}
            name={"start_date"}
            type={"date"}
            placeholder={"23-02-01"}
            label={"신규 일자"}
            htmlFor={"start_date"}
          ></InputText>
          <InputText
            id={"end_date"}
            name={"end_date"}
            type={"date"}
            placeholder={"23-12-01"}
            label={"만료 일자"}
            htmlFor={"end_date"}
          ></InputText>
          <InputText
            id={"term"}
            name={"term"}
            type={"number"}
            placeholder={"0"}
            label={"계약기간"}
            htmlFor={"term"}
          ></InputText>
          <InputText
            id={"accountId"}
            name={"accountId"}
            type={"text"}
            placeholder={"595111-01-212812"}
            label={"연동계좌"}
            htmlFor={"accountId"}
          ></InputText>
          <InputText
            id={"amount"}
            name={"amount"}
            type={"text"}
            placeholder={"10000"}
            label={"출금금액"}
            htmlFor={"amount"}
          ></InputText>
          <InputText
            id={"productId"}
            name={"productId"}
            type={"number"}
            placeholder={"11"}
            label={"예적금상품코드"}
            htmlFor={"productId"}
          ></InputText>
          <InputText
            id={"dummyId"}
            name={"dummyId"}
            type={"text"}
            placeholder={" "}
            label={"더미코드"}
            htmlFor={"dummyId"}
          ></InputText>
        </div>
        <div className="flex gap-6 justify-end">
          <Button
            onClick={() => {
              router.back;
            }}
            id={"edit"}
            name={"수정"}
          ></Button>
          <Button
            onClick={() => {
              router.back;
            }}
            id={"delete"}
            name={"삭제"}
          ></Button>
        </div>
      </Form>
    </>
  );
}
const Form = tw.form`

`;
