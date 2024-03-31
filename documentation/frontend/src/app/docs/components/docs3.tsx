import tw from "tailwind-styled-components";

export default function docs() {
  return (
    <>
      <Wrapper>
        <Title>시작하기(작성중)</Title>
        <Subtitle>소제목</Subtitle>
        <TextItem>내용</TextItem>
      </Wrapper>
    </>
  );
};

const Wrapper = tw.div`
mt-8 space-y-6 text-sm
`;

const Title = tw.h2`
text-3xl font-bold
`;

const Subtitle = tw.h3`
text-xl font-bold
`;

const TextItem = tw.div`
leading-7 break-keep
`
