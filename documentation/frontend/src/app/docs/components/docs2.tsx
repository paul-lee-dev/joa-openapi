import tw from "tailwind-styled-components";

export default function docs() {
  return (
    <>
      <Wrapper>
        <Title>프로젝트 구조</Title>
        <Subtitle>프로젝트 구조 설명</Subtitle>
        <TextItem>
        <img src='/architecture.png'/><br/>
          │<br/>
          ├─ documentation (서비스 공식 홈페이지)<br/>
          │ 　  └─ frontend (Next.js) <br/>
          │<br/>
          ├─ openapi (OPEN API 제공 서버)<br/>
          │ 　  └─ backend (Spring Boot) <br/>
          │<br/>
          ├─ admin (개발자 대시보드 웹 사이트)<br/>
          │ 　  └─ frontend (Next.js) <br/>
          │ 　  └─ backend (Spring Boot) <br/>
          │<br/>
          └─ bank (가상 은행 앱)<br/>
          　　   └─ frontend (React Native) <br/>
          　　   └─ backend (Spring Boot) <br/>

        </TextItem>
      </Wrapper>
    </>
  );
};

const Wrapper = tw.div`
mt-8 space-y-6 text-sm
`;

const Title = tw.h2`
text-3xl font-bold mt-24
`;

const Subtitle = tw.h3`
text-xl font-bold
`;

const TextItem = tw.div`
leading-7 break-keep
`
