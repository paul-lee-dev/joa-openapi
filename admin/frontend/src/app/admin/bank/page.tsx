"use client";
import Table from "@/components/bankTable";
import tw from "tailwind-styled-components";
import { useState } from "react";

const BankList = () => {
  const [isModalOpen, setModalState] = useState(false);

  const toggleModal = () => {
    setModalState(!isModalOpen);
    console.log("Toggle modal");
  };

  return (
    <>
      <SmallBtn className="" type="button" onClick={toggleModal}>
        추가
      </SmallBtn>
      <Table />
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <InputContainerWithButton>
              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  은행 이름
                </label>
                <Input placeholder="은행명" required />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  은행 설명
                </label>
                <Input placeholder="은행 설명" required />
              </div>
              <div className="col-span-full">
                <label
                  htmlFor="photo"
                  className="block text-sm font-medium leading-6 text-gray-900"
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
              <SmallBtn onClick={toggleModal}>확인</SmallBtn>
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
