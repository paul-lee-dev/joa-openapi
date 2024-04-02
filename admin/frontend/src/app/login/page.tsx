"use client";

import { login } from "@/api/Admin";
import { adminDataAtom } from "@/store/atom";
import { useMutation } from "@tanstack/react-query";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { useSetRecoilState } from "recoil";
import tw from "tailwind-styled-components";
import NavbarImg from "@/asset/img/navbar.png";
import Image from "next/image";

interface ILoginForm {
  email: string;
  password: string;
}

export default function LoginPage() {
  const router = useRouter();
  const setAdminData = useSetRecoilState(adminDataAtom);
  const mutation = useMutation({
    mutationFn: login,
    onSuccess: (data) => {
      console.log(data);
      setAdminData({
        isLogin: true,
        apiKey: data.data.apiKey,
        accessToken: data.data.accessToken,
        refreshToken: data.data.refreshToken,
      });
      router.replace("/");
    },
    onError: (err) => console.log(err),
  });
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
  } = useForm<ILoginForm>({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = (data: ILoginForm) => {
    console.log(data);
    mutation.mutate({
      email: data.email,
      password: data.password,
    });
  };
  return (
    <Wrapper>
      <TitleContainer>
        <div className="w-full flex justify-center items-center">
          <Image src={NavbarImg} alt="Admin" draggable={false} />
        </div>
      </TitleContainer>
      <MainContainer>
        <LoginFormContainer onSubmit={handleSubmit(onSubmit)}>
          <InputFormWrapper>
            <LoginLabel htmlFor="email">이메일</LoginLabel>
            <InputContainer>
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
            </InputContainer>
            <ErrorMsg>{errors?.email?.message}</ErrorMsg>
          </InputFormWrapper>

          <InputFormWrapper>
            <PasswordAlign>
              <LoginLabel htmlFor="password">비밀번호</LoginLabel>
            </PasswordAlign>
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
            <Button type="submit">로그인</Button>
          </InputFormWrapper>
        </LoginFormContainer>

        <div className="pt-10 flex flex-col space-y-2">
          <SignUpParagraph>
            계정이 없으십니까?{" "}
            <Link
              href={{
                pathname: "/signup",
              }}
            >
              <SignUpAnchor>회원가입</SignUpAnchor>
            </Link>
          </SignUpParagraph>
          <SignUpParagraph>
            비밀번호를 잊어버리셨나요?{" "}
            <Link
              href={{
                pathname: "/findPassword",
              }}
            >
              <SignUpAnchor>비밀번호 찾기</SignUpAnchor>
            </Link>
          </SignUpParagraph>
        </div>
      </MainContainer>
    </Wrapper>
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

const TitleContainer = tw.div`
sm:mx-auto 
sm:w-full 
sm:max-w-sm
`;

const ErrorMsg = tw.span`
text-sm
text-red-400
`;

const InputFormWrapper = tw.div`
`;

const InputContainer = tw.div`
mt-2
`;

const TitleText = tw.h2`
mt-10 
text-center 
text-2xl 
font-bold 
leading-9 
tracking-tight 
text-primary-900
`;

const FindPWContainer = tw.div`
text-sm
`;

const LoginFormContainer = tw.form`
space-y-6
`;

const LoginLabel = tw.label`
block text-sm font-medium leading-6 text-gray-500
`;

const FindPW = tw.a`
font-semibold 
text-gray-500 
hover:text-pink-400
`;

const PasswordAlign = tw.div`
flex 
items-center 
justify-between
`;

const SignUpParagraph = tw.p`
text-center 
text-sm 
text-gray-500
`;
const SignUpAnchor = tw.span`
font-semibold 
leading-6 
text-gray-500 
hover:text-primary
hover:underline
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
w-full 
justify-center 
rounded-md 
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
