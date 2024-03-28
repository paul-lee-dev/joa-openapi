"use client";
import React from "react";
import tw from "tailwind-styled-components";
import Button from "@/components/button/button";
import InputText from "@/components/input/inputText";
import { modifyBank, deleteBank } from "@/api/Bank"; // 수정, 삭제 API 함수 임포트

interface Bank {
  bankId: string;
  adminId: string;
  name: string;
  description: string;
  uri: string;
  createdAt: string;
  updatedAt: string;
}
interface BankDetailProps {
  bank: Bank;
}

interface ModifyBankParams {
  bankId: string;
  name: string;
  description: string;
}

interface DeleteBankParams {
  bankId: string;
}

const BankDetail = ({bank} :BankDetailProps) => {
  const handleModify = async () => {
    try {
      const params: ModifyBankParams = {
        bankId: "bankIdValue", // 수정할 은행의 ID 값
        name: "modifiedName", // 수정된 은행 이름
        description: "modifiedDescription", // 수정된 은행 설명
      };
      const response = await modifyBank(params); // 은행 수정 API 호출
      console.log("Bank modified:", response);
    } catch (error) {
      console.error("Error modifying bank:", error);
    }
  };

  const handleDelete = async () => {
    try {
      const params: DeleteBankParams = {
        bankId: "bankIdValue", // 삭제할 은행의 ID 값
      };
      const response = await deleteBank(params); // 은행 삭제 API 호출
      console.log("Bank deleted:", response);
    } catch (error) {
      console.error("Error deleting bank:", error);
    }
  };

  return (
    <>
      <Form>
        <div className="grid gap-3 mb-4 md:grid-cols-2">
          <InputText
            id={"name"}
            name={"name"}
            type={"text"}
            placeholder={""}
            label={"은행명"}
            htmlFor={"name"}
          ></InputText>
          <InputText
            id={"description"}
            name={"description"}
            type={"text"}
            placeholder={""}
            label={"설명"}
            htmlFor={"description"}
          ></InputText>
          <InputText
            id={"createdAt"}
            name={"createdAt"}
            type={"text"}
            placeholder={""}
            label={"생성일자"}
            htmlFor={"createdAt"}
          ></InputText>
          <InputText
            id={"bankId"}
            name={"bankId"}
            type={"text"}
            placeholder={""}
            label={"은행코드"}
            htmlFor={"bankId"}
          ></InputText>
        </div>
        <div className="flex gap-6 justify-end">
          {/* 수정 버튼 */}
          <Button id={"edit"} name={"수정"} onClick={handleModify}></Button>
          {/* 삭제 버튼 */}
          <Button id={"delete"} name={"삭제"} onClick={handleDelete}></Button>
        </div>
      </Form>
    </>
  );
};

const Form = tw.form``;

export default BankDetail;
