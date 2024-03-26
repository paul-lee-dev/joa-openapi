"use client";
import tw from "tailwind-styled-components";
import { useState } from "react";
import BankTable from "@/components/table/bankTable";
import Pagination from "@/components/pagination";
import Button from "@/components/button/button";

const BankList = () => {
  const [isModalOpen, setModalState] = useState(false);

  const toggleModal = () => {
    setModalState(!isModalOpen);
    console.log("Toggle modal");
  };

  return (
    <>
      <BankTable />
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
            <InputContainerWithButton>
              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block pb-1 text-sm font-medium leading-6 text-gray-900"
                >
                  은행 이름
                </label>
                <Input placeholder="은행명" required />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block pb-1 text-sm font-medium leading-6 text-gray-900"
                >
                  은행 설명
                </label>
                <Input placeholder="은행 설명" required />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block pb-1 text-sm font-medium leading-6 text-gray-900"
                >
                  은행 로고 (추가)
                </label>
                <form className="max-w-lg mx-auto">
                  <input
                    className="block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 focus:outline-none "
                    id="bank_logo"
                    type="file"
                  />
                </form>
              </div>
              <div>
                <SmallBtn onClick={toggleModal}>확인</SmallBtn>
              </div>
            </InputContainerWithButton>
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

const InputContainerWithButton = tw.div`
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
