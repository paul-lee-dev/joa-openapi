"use client";
import React, { useEffect, useState } from "react";
import tw from "tailwind-styled-components";
import Button from "@/components/button/button";
import InputText from "@/components/input/inputText";
import { modifyBank, deleteBank } from "@/api/Bank"; // 수정, 삭제 API 함수 임포트
import axios, { AxiosInstance, AxiosResponse } from "axios";
import { localAxios } from "@/api/http-common";
import Router, { useRouter } from "next/navigation";

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
  bankId?: string;
  name: string;
  description: string;
}

interface DeleteBankParams {
  bankId?: string;
}

export default function BankDetail({ params }: { params: { bankId: string } }) {
  const router = useRouter();

  const [bankInfo, setBankInfo] = useState<ModifyBankParams>({
    name: "",
    description: "",
    // uri: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBankInfo({ ...bankInfo, [name]: value });
  };

  const [bankDetail, setBankDetail] = useState<Bank>();
  const [bankName, setBankName] = useState("");
  const [bankDescription, setBankDescription] = useState("");

  const api: AxiosInstance = axios.create({
    baseURL: "https://joa13.site/v1", // JSON 데이터를 가져올 엔드포인트의 URL
    headers: {
      apiKey: "9b5c450f-abd4-419f-b092-bcd96e66392f",
      "Content-Type": "application/json",
    },
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response: AxiosResponse<{
          status: string;
          message: string;
          data: Bank;
          page: null;
        }> = await localAxios.get(`/bank/${params.bankId}`);
        setBankDetail(response.data.data);
        // console.log(param.bankId, response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    console.log("fetch data====================================");
    fetchData();
  }, [params.bankId]);

  const handleModify = async () => {
    try {
      const params: ModifyBankParams = {
        bankId: bankDetail?.bankId,
        name: bankInfo.name, // 수정된 은행 이름
        description: bankInfo.description, // 수정된 은행 설명
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
        bankId: bankDetail?.bankId, // 삭제할 은행의 ID 값
      };
      const response = await deleteBank(params); // 은행 삭제 API 호출
      console.log("Bank deleted:", response);
      router.replace("bank");
    } catch (error) {
      console.error("Error deleting bank:", error);
    }
  };

  return (
    <>
      <Form>
        <div className="grid gap-3 mb-4 md:grid-cols-2">
          <div>
            <Label htmlFor="name">은행명</Label>
            <InputContainer>
              <Input
                id="name"
                name="name"
                type="text"
                value={bankInfo.name}
                placeholder={bankDetail?.name}
                onChange={handleInputChange}
              />
            </InputContainer>
          </div>
          <div>
            <Label htmlFor="description">은행 설명</Label>
            <InputContainer>
              <Input
                id="description"
                name="description"
                type="text"
                value={bankInfo.description}
                placeholder={bankDetail?.description}
                onChange={handleInputChange}
              />
            </InputContainer>
          </div>
          <InputText
            id={"createdAt"}
            name={"createdAt"}
            type={"text"}
            placeholder={"yyyy-mm-dd"}
            value={`${bankDetail?.createdAt}`}
            label={"생성일자"}
            htmlFor={"createdAt"}
          ></InputText>
          <InputText
            id={"bankId"}
            name={"bankId"}
            type={"text"}
            placeholder={`uuid`}
            label={"은행코드"}
            htmlFor={"bankId"}
            value={`${bankDetail?.bankId}`}
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
}

const Form = tw.form``;
const InputFormWrapper = tw.div`
`;

const InputContainer = tw.div`
mt-2
`;

const Label = tw.label`
block text-sm font-medium leading-6 text-gray-500
`;

const Input = tw.input`
block 
w-full 
rounded-md 
border-0 
px-1.5
py-1.5
text-gray-700
ring-1
ring-inset 
ring-gray-300 
placeholder:text-gray-400 
focus:outline-none
focus:ring-2 
focus:ring-inset 
focus:ring-pink-500 
sm:text-sm 
sm:leading-6
`;
