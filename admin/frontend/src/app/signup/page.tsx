import tw from "tailwind-styled-components";

export default function Home() {
  return (
    <>
      <Wrapper>
        <MainContainer>
          <LoginFormContainer action="#" method="POST">
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
              <LoginLabel htmlFor="tel">전화번호</LoginLabel>
              <InputContainer>
                <Input
                  id="tel"
                  name="tel"
                  type="tel"
                  autoComplete="tel"
                  required
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
              <LoginLabel htmlFor="passwordCheck">비밀번호 확인</LoginLabel>
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
              <Button type="submit">회원가입</Button>
            </InputFormWrapper>
          </LoginFormContainer>
        </MainContainer>
      </Wrapper>
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
