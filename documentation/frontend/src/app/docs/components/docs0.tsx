import tw from "tailwind-styled-components";

export default function docs() {
  return (
    <>
      <Wrapper>
        <Title>시작하기(작성중)</Title>
        <Subtitle>사이트 둘러보기</Subtitle>
        <TextItem>
          JOA OPEN API 사이트에 방문해 주신 여러분, 환영합니다. JOA OPEN API는 개발 초심자도 쉽고 간편하게 이용할 수 있는 서비스를 지향합니다. 본격적으로 서비스를 사용하기 전 메인 페이지와 안내 문서, 그리고 API 명세를 차근차근 살펴본다면 더욱 원활하게 서비스를 이용할 수 있을 것입니다.
        </TextItem>
        <Subtitle>Joa Open API</Subtitle>
        <TextItem>
          JOA OPEN API는 은행 업무와 관련된 다양한 금융 API를 제공하여, 핀테크 프로젝트, 특히 은행 관련 프로젝트를 간편하고 효율적으로 개발할 수 있도록 지원하는 서비스입니다.
        </TextItem>
        <Subtitle>테스트베드 체험하기</Subtitle>
        <TextItem>
          별도의 가입 절차를 진행하지 않고도 테스트베드를 통해 JOA OPEN API가 제공하는 다양한 API들을 직접 사용해볼 수 있습니다. 자세한 사항은 좌측 메뉴 중 테스트베드 사용법 항목을 참조하세요.
        </TextItem>

        <Subtitle>본격적으로 서비스 이용하기</Subtitle>
        <TextItem>
          JOA OPEN API의 정식 회원이 되어, 본 서비스에서 제공하는 관리자 페이지와 대시보드 등의 다양한 기능을 마음껏 활용해 보세요.
        </TextItem>
        <NumberTitle>1. 회원 가입 후 로그인</NumberTitle>
        <TextItem>

        </TextItem>
        <NumberTitle>2. API 키 발급</NumberTitle>
        <TextItem>

        </TextItem>
        <NumberTitle>3. 가상은행 개설</NumberTitle>
        <TextItem>

        </TextItem>
        <NumberTitle>4. 더미 데이터 생성</NumberTitle>
        <TextItem>

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

const NumberTitle = tw.h4`
font-bold
`

const TextItem = tw.div`
leading-7 break-keep
`
