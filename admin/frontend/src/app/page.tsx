import tw from "tailwind-styled-components";

export default function LoginPage() {
  return (
    <Wrapper>
      <TitleContainer>
        <TitleText>Admin</TitleText>
      </TitleContainer>
      <MainContainer>
        <LoginFormContainer action="admin" method="POST">
          <InputFormWrapper>
            <LoginLabel htmlFor="email">이메일</LoginLabel>
            <InputContainer>
              <Input
                id="email"
                name="email"
                type="email"
                autoComplete="email"
                required
              />
            </InputContainer>
          </InputFormWrapper>

          <InputFormWrapper>
            <PasswordAlign>
              <LoginLabel htmlFor="password">비밀번호</LoginLabel>
              <FindPWContainer>
                <FindPW href="#">비밀번호 찾기</FindPW>
              </FindPWContainer>
            </PasswordAlign>
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
            <Button type="submit">로그인</Button>
          </InputFormWrapper>
        </LoginFormContainer>

        <SignUpParagraph>
          계정이 없으십니까?{" "}
          <SignUpAnchor href="/signup">회원가입</SignUpAnchor>
        </SignUpParagraph>
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
mt-10 
text-center 
text-sm 
text-gray-light
`;
const SignUpAnchor = tw.a`
font-semibold 
leading-6 
text-gray-500 
hover:text-primary
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
