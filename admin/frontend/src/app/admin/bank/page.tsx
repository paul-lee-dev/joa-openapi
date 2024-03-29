"use client";
import tw from "tailwind-styled-components";
import { useState, useEffect } from "react";
import BankTable from "@/components/table/bankTable";
import Pagination from "@/components/pagination";
import Button from "@/components/button/button";
import { createBank } from "@/api/Bank";
import { CreateBankParams } from "@/models/Bank.interface";
import BankGroupSearch from "@/components/search/bankGroupSearch";

const BankList = () => {
  const [isModalOpen, setModalState] = useState(false);

  const [bankInfo, setBankInfo] = useState<CreateBankParams>({
    name: "",
    description: "",
    uri: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setBankInfo({ ...bankInfo, [name]: value });
  };

  const handleAddBank = async () => {
    try {
      const response = await createBank(bankInfo);
      console.log("Bank added:", response);
    } catch (error) {
      console.error("Error adding bank:", error);
    }
  };

  const toggleModal = () => {
    setModalState(!isModalOpen);
    console.log("Toggle modal");
  };

  return (
    <>
      <form className="flex justify-end m-2">
        <BankGroupSearch></BankGroupSearch>
        <Button id={"submit"} name={"검색"} onClick={() => {}}></Button>
      </form>

      <BankTable apiKey="" />
      <div className="flex mt-5 justify-between gap-5">
        <div className="flex">
          <Pagination
            currentPage={0}
            totalPages={5}
            onPageChange={function (page: number): void {}}
          ></Pagination>
        </div>
        <div className="flex gap-3 px-3">
          <Button
            onClick={() => {
              toggleModal();
            }}
            id={"create"}
            name={"생성"}
          ></Button>
        </div>
      </div>
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <InputFormWithButton>
              <div className="col-span-full">
                <label
                  htmlFor="name"
                  className="block pb-1 text-sm font-medium leading-6 text-gray-900"
                >
                  은행 이름
                </label>
                <Input
                  type="text"
                  id="name"
                  name="name"
                  value={bankInfo.name}
                  onChange={handleInputChange}
                  placeholder="은행명"
                  required
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block pb-1 text-sm font-medium leading-6 text-gray-900"
                >
                  은행 설명
                </label>
                <Input
                  type="text"
                  id="description"
                  name="description"
                  value={bankInfo.description}
                  onChange={handleInputChange}
                  placeholder="은행 설명"
                  required
                />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="uri"
                  className="block pb-1 text-sm font-medium leading-6 text-gray-900"
                >
                  은행 로고 (선택)
                </label>
                <Input
                  type="text"
                  id="uri"
                  name="uri"
                  value={bankInfo.uri}
                  onChange={handleInputChange}
                  placeholder="은행 이미지 URL"
                />
              </div>
              <div>
                <SmallBtn onClick={handleAddBank}>추가</SmallBtn>
              </div>
            </InputFormWithButton>
          </ModalContent>
        </Modal>
      )}
    </>
  );
};

export default BankList;

const Input = tw.input`
block 
w-full 
rounded-md 
border-0 
px-2
py-2
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

const SmallBtn = tw.button`
  flex
  justify-center
  w-fit
  rounded-md 
  bg-pink-400
  px-3
  py-1.5
  text-xs
  font-semibold
  leading-6
  text-white
  shadow-sm
  hover:bg-pink-500
  focus-visible:outline
  focus-visible:outline-2
  focus-visible:outline-offset-2
  focus-visible:outline-pink-600
  whitespace-nowrap
  float-right
`;

const InputFormWithButton = tw.form`
  mt-2
  items-center
  grid 
  grid-cols-1
  gap-y-6 
`;

const Modal = tw.div`
  fixed
  top-0
  left-0
  w-full
  h-full
  flex
  items-center
  justify-center
  bg-gray-700
  bg-opacity-75
  z-50
`;

const ModalContent = tw.div`
  bg-white
  rounded-lg
  p-8
  max-w-md
  w-full
`;
