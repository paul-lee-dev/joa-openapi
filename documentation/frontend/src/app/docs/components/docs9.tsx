import tw from "tailwind-styled-components";

export default function docs() {
  return (
    <>
      <Wrapper>
        <Title>버전 정보</Title>

        <Subtitle>최신 버전 정보</Subtitle>
        <TextItem>
          V 1.0
        </TextItem>

        <Subtitle>업데이트 내역</Subtitle>
        <TextItem>
          V 1.0 프로젝트 정식 배포 (2024. 4. 3.)
        </TextItem>

        <Subtitle>문의 및 지원</Subtitle>
        <TextItem>
          API 또는 샘플 앱 사용에 관하여 지원이 필요한 경우 이메일로 문의하시기 바랍니다.
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
