"use client";
import tw from "tailwind-styled-components";
import { useState } from "react";
import { JoinMemberParams } from "./components/params";
import { joinMember } from "./components/api";

const Home = () => {

  const [formData, setFormData] = useState<JoinMemberParams>({
    name: "",
    email: "",
    phone: "",
    password: "",
    bankId: ""
  });

  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await joinMember(formData);
      // 회원가입 성공 시 필요한 동작을 수행합니다.
      console.log("회원가입이 완료되었습니다.");
    } catch (error) {
      // 오류 처리
      console.error("회원가입 중 오류가 발생했습니다:", error);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };


  return (
    <>
      <Wrapper>
        <MainContainer>
          <SubContainer>
            <MainTitleItem>Joa Open API</MainTitleItem>
            <MainTextItem>

              <form onSubmit={handleFormSubmit}>
              <input
                type="text"
                name="name"
                placeholder="이름"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="email"
                name="email"
                placeholder="이메일"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="phone"
                placeholder="전화번호"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <input
                type="password"
                name="password"
                placeholder="비밀번호"
                value={formData.password}
                onChange={handleInputChange}
              />
              <input
                type="text"
                name="bankId"
                placeholder="은행 ID"
                value={formData.bankId}
                onChange={handleInputChange}
              />
            <ButtonContainer>
              <button type="submit">시작하기</button>
            </ButtonContainer>
            </form>

            </MainTextItem>
          </SubContainer>
        </MainContainer>
      </Wrapper>
    </>
  );
};

export default Home;

const Wrapper = tw.div`
pt-24
`;

const MainContainer = tw.div`
mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 sm:gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-2
`;

const SubContainer = tw.div`
lg:pr-8 lg:pt-12
`;

const MainTitleItem = tw.h2`
mt-2 text-3xl font-bold tracking-tight sm:text-4xl 
`;

const MainTextItem = tw.div`
mt-6 leading-7 break-keep
`;

const ButtonContainer = tw.div`
mt-2 py-6
`;

const PurpleButtonItem = tw.a`
py-3 px-7 text-xs bg-purple-300 hover:bg-purple-500 text-white w-full transition ease-in duration-200 
text-center font-semibold shadow-md focus:ring-2 focus:ring-offset-2 rounded-full
`;