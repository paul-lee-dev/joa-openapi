"use client";

import Button from "@/components/button/button";
import { useState } from "react";
import tw from "tailwind-styled-components";

export default function Profile() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
    console.log("Toggle modal");
  };

  const handleVerificationCodeChange = (event: {
    target: { value: string | ((currVal: string) => string) };
  }) => {
    setVerificationCode(event.target.value);
  };

  const handleSubmitVerificationCode = () => {
    setIsModalOpen(!isModalOpen);
    console.log("Verifying code:", verificationCode);
  };

  return (
    <>
      <Wrapper>
        <MainContainer>
          <LoginFormContainer action="#" method="POST">
            <InputFormWrapper>
              <LoginLabel htmlFor="email">이메일</LoginLabel>
              <InputContainerWithButton>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  disabled
                  placeholder="joa13@gmail.com"
                  required
                />
                <PhoneCallCheckBtn type="button" onClick={toggleModal}>
                  확인
                </PhoneCallCheckBtn>
              </InputContainerWithButton>
            </InputFormWrapper>

            <InputFormWrapper>
              <LoginLabel htmlFor="tel">전화번호</LoginLabel>
              <InputContainer>
                <Input
                  id="tel"
                  name="tel"
                  type="tel"
                  autoComplete="tel"
                  placeholder="010-1234-1234"
                  disabled
                />
              </InputContainer>
            </InputFormWrapper>

            <InputFormWrapper>
              <LoginLabel htmlFor="password">비밀번호</LoginLabel>
              <InputContainer>
                <Input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                />
              </InputContainer>
            </InputFormWrapper>
            <InputFormWrapper>
              <LoginLabel htmlFor="email">API 키</LoginLabel>
              <InputContainerWithButton>
                <Input
                  id="apikey"
                  name="apikey"
                  type="text"
                  autoComplete="apikey"
                  disabled
                  placeholder="312gdkj138e1hd9s012u34hiu"
                  required
                />
                <PhoneCallCheckBtn type="button">재발급</PhoneCallCheckBtn>
              </InputContainerWithButton>
            </InputFormWrapper>
          </LoginFormContainer>
        </MainContainer>
      </Wrapper>
      <div className="flex gap-2 justify-end mt-32">
        <Button onClick={() => {}} id={"edit"} name={"수정"}></Button>
        <Button onClick={() => {}} id={"delete"} name={"탈퇴"}></Button>
      </div>
      {isModalOpen && (
        <Modal>
          <ModalContent>
            <h1>인증번호 확인</h1>
            <InputContainerWithButton>
              <Input
                id="verificationCode"
                name="verificationCode"
                type="text"
                value={verificationCode}
                onChange={handleVerificationCodeChange}
                placeholder="인증번호 입력"
                required
              />
              <PhoneCallCheckBtn onClick={handleSubmitVerificationCode}>
                확인
              </PhoneCallCheckBtn>
            </InputContainerWithButton>
          </ModalContent>
        </Modal>
      )}
    </>
  );
}

const Wrapper = tw.div`
flex
justify-start
min-h-full 
lg:px-8
`;

const MainContainer = tw.div`
mt-5
sm:w-full 
sm:max-w-sm
`;

const InputFormWrapper = tw.div`
`;

const InputContainer = tw.div`
mt-1
`;

const InputContainerWithButton = tw.div`
  mt-1
  flex
  items-start
  space-x-4
`;

const LoginFormContainer = tw.form`
space-y-6
`;

const LoginLabel = tw.label`
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

const PhoneCallCheckBtn = tw.button`
  flex
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
