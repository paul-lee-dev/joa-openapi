import tw from "tailwind-styled-components";

export default function docs() {
  return (
    <>
      <Wrapper>
        <Title>샘플 앱 이용법</Title>
        <Subtitle>안드로이드 앱 링크</Subtitle>
        <img className='rounded-lg' src='/joabank1.png' />

        <Subtitle>앱 이용 방법</Subtitle>
        <img src='/joabank2.png' />

        <Subtitle>앱 소개</Subtitle>
        <NumberTitle>
        JOA OpenAPI를 테스트해볼 수 있는 조아은행 App을 소개합니다.
        </NumberTitle>
        <TextItem>
          - 이메일 인증을 통해 회원가입을 진행할 수 있어요.<br />
          - 내가 보유한 모든 계좌는 전체 계좌 조회에서 한눈에 볼 수 있어 보다 쉽게 내계좌를 관리할 수 있어요.<br />
          - 일반 입출금통장부터 정기예금, 정기적금 상품을 한눈에 비교해볼 수 있어요.<br />
          - 한 은행에서 다른 은행으로의 이체도 가능해요.<br />
          - 은행코드 변경을 통해 직접 생성한 은행 앱으로 사용할 수 있어요.<br />
          - 계좌에 대한 거래내역도 한 눈에 볼 수 있고 다양한 조건으로 검색도 할 수 있어요.<br />

        </TextItem>

        <Subtitle>은행코드 변경 방법</Subtitle>
        <img src='/joabank3.png' />
        <TextItem>
          <b>메뉴 - 설정 - 은행코드 변경</b>에서 은행코드와 apiKey를 입력하면 해당 은행 앱으로 사용할 수 있어요. 이 때, 해당 은행을 생성한 관리자의 apiKey여야만 정상적으로 등록 가능합니다.
        </TextItem>

        <Subtitle>주의사항</Subtitle>
        <TextItem>가상은행 어플을 이용한 사기 등에 유의해주세요.</TextItem>

        <Subtitle>업데이트 일자</Subtitle>
        <TextItem>2024. 3. 12.</TextItem>
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
