"use client";

import { useState } from "react";
import tw from "tailwind-styled-components";
import { useForm } from "react-hook-form";
import { useMutation } from "@tanstack/react-query";
import { join } from "@/api/Admin";
import { useRouter } from "next/navigation";
import Link from "next/link";
import NavbarImg from "@/asset/img/navbar.png";
import Image from "next/image";

interface JoinForm {
  email: string;
  name: string;
  phone: string;
  password: string;
  password2: string;
}

export default function SignUpPage() {
  const router = useRouter();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [verificationCode, setVerificationCode] = useState("");
  const joinMutation = useMutation({
    mutationFn: join,
    onSuccess: (data) => {
      console.log(data);
      router.replace("/");
    },
    onError: (err) => console.log(err),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    getValues,
  } = useForm<JoinForm>({
    defaultValues: {
      email: "",
      name: "",
      phone: "",
      password: "",
      password2: "",
    },
  });

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

  const onSubmit = (data: JoinForm) => {
    if (data.password !== data.password2) {
      setError(
        "password2",
        { message: "비밀번호가 일치하지 않습니다." },
        { shouldFocus: true }
      );
    }
    joinMutation.mutate({
      email: data.email,
      name: data.name,
      phone: data.phone,
      password: data.password,
    });
  };

  return (
    <>
      <Wrapper>
        <MainContainer>
          <div className="w-full flex justify-center items-center">
            <Image src={NavbarImg} alt="Admin" draggable={false} />
          </div>
          <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
            <InputFormWrapper>
              <LoginLabel htmlFor="email">이메일</LoginLabel>
              <InputContainerWithButton>
                <Input
                  {...register("email", {
                    required: "이메일을 입력해주세요.",
                    pattern: {
                      value:
                        /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
                      message: "올바른 이메일 형식이 아닙니다.",
                    },
                  })}
                />
                <PhoneCallCheckBtn type="button" onClick={toggleModal}>
                  확인
                </PhoneCallCheckBtn>
              </InputContainerWithButton>
              <ErrorMsg>{errors?.email?.message}</ErrorMsg>
            </InputFormWrapper>

            <InputFormWrapper>
              <LoginLabel htmlFor="name">이름</LoginLabel>
              <InputContainer>
                <Input
                  {...register("name", {
                    required: "이름을 입력해주세요.",
                  })}
                />
              </InputContainer>
              <ErrorMsg>{errors?.name?.message}</ErrorMsg>
            </InputFormWrapper>

            <InputFormWrapper>
              <LoginLabel htmlFor="phone">전화번호</LoginLabel>
              <InputContainer>
                <Input
                  {...register("phone", {
                    required: "전화번호을 입력해주세요.",
                    pattern: {
                      value:
                        /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
                      message: "올바른 전화번호 형식이 아닙니다.",
                    },
                  })}
                />
              </InputContainer>
              <ErrorMsg>{errors?.phone?.message}</ErrorMsg>
            </InputFormWrapper>

            <InputFormWrapper>
              <LoginLabel htmlFor="password">비밀번호</LoginLabel>
              <InputContainer>
                <Input
                  type="password"
                  {...register("password", {
                    required: "비밀번호를 입력해주세요.",
                  })}
                />
              </InputContainer>
              <ErrorMsg>{errors?.password?.message}</ErrorMsg>
            </InputFormWrapper>

            <InputFormWrapper>
              <LoginLabel htmlFor="password2">비밀번호 확인</LoginLabel>
              <InputContainer>
                <Input
                  type="password"
                  {...register("password2", {
                    required: "비밀번호를 한번 더 입력해주세요.",
                    validate: {
                      correct: (value) =>
                        value === getValues("password")
                          ? true
                          : "비밀번호가 일치하지 않습니다.",
                    },
                  })}
                />
              </InputContainer>
              <ErrorMsg>{errors?.password2?.message}</ErrorMsg>
            </InputFormWrapper>
            <InputFormWrapper>
              <Button type="submit">회원가입</Button>
            </InputFormWrapper>
          </LoginFormContainer>
          <div className="pt-12">
            <LoginParagraph>
              이미 계정이 있으신가요?{" "}
              <Link
                href={{
                  pathname: "/login",
                }}
              >
                <LoginAnchor>로그인</LoginAnchor>
              </Link>
            </LoginParagraph>
          </div>
        </MainContainer>
      </Wrapper>
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
min-h-full 
flex-1 
flex-col 
justify-center 
px-6 py-12 
lg:px-8
`;

const MainContainer = tw.div`
mt-10 
sm:mx-auto 
sm:w-full 
sm:max-w-sm
`;

const InputFormWrapper = tw.div`
`;

const InputContainer = tw.div`
mt-2
`;

const ErrorMsg = tw.span`
text-sm
text-red-400
`;

const InputContainerWithButton = tw.div`
  mt-2
  flex
  items-center
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

const Button = tw.button`
flex
justify-center 
rounded-md
w-full
bg-pink-400
px-3 
py-1.5
text-sm 
font-semibold
leading-6
text-white
shadow-sm
hover:bg-pink-500
focus-visible:outline
focus-visible:outline-2
focus-visible:outline-offset-2 
focus-visible:outline-pink-600
`;

const PhoneCallCheckBtn = tw.button`
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

const LoginParagraph = tw.p`
text-center 
text-sm 
text-gray-500
`;
const LoginAnchor = tw.span`
font-semibold 
leading-6 
text-gray-500 
hover:text-primary
hover:underline
`;
