import tw from "tailwind-styled-components";

export default function docs() {
  return (
    <>
      <Wrapper>
        <Title>관리자 대시보드 이용법</Title>
        <Subtitle>개요</Subtitle>
        <NumberTitle>대시보드를 통해 은행 고객과 거래 내역 등에 대한 다양한 통계를 한눈에 살펴보세요.</NumberTitle>
        <TextItem>
          1. 관리자 사이트에 로그인 후, 좌측 메뉴에서 대시보드 항목을 클릭해서 엽니다.<br />
          2. <b>은행 선택</b>이라고 표시된 드롭다운 메뉴를 사용하여 원하는 은행을 선택합니다.<br />
          3. 대시보드가 선택한 은행의 통계를 표시하도록 업데이트됩니다.
        </TextItem>
        <Subtitle>통계</Subtitle>
        <NumberTitle>대시보드에서 제공되는 통계는 다음과 같습니다.</NumberTitle>
        <TextItem>
          <b>총 거래 수 : </b> 선택한 은행에서 처리된 거래 내역의 총 개수를 보여줍니다.<br />
          <b>총 회원 수 : </b> 선택한 은행의 전체 고객 수를 보여줍니다.<br />
          <b>총 출금 금액 : </b> 선택한 은행 내의 계좌에서 인출된 총 금액을 보여줍니다.<br />
          <b>총 입금 금액 : </b> 선택한 은행 내의 계좌에 입금된 총 금액을 보여줍니다.<br />
        </TextItem>
        <Subtitle>거래 그래프 보기</Subtitle>
        <TextItem>
          - 통계 섹션 아래에는 주간 거래의 그래픽 표현이 있습니다.<br />
          - 그래프는 한 주 동안의 거래 추이를 보여줍니다.<br />
          - 데이터 포인트 위로 마우스를 올려 특정 거래 세부 정보를 확인할 수 있습니다.
        </TextItem>
        <Subtitle>대시보드 상호작용</Subtitle>
        <TextItem>
          - 드롭다운 메뉴를 사용하여 다른 은행을 전환하고 해당 은행의 데이터를 볼 수 있습니다.<br />
          - 대시보드는 선택한 은행의 데이터를 반영하도록 동적으로 업데이트됩니다.<br />
          - 주간 거래의 그래픽 표현을 분석하여 거래 추이를 탐색할 수 있습니다.
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
