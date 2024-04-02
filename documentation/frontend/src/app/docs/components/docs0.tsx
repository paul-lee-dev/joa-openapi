import tw from "tailwind-styled-components";

export default function docs() {
  return (
    <>
      <Wrapper>
        <Title>시작하기</Title>
        <Subtitle>사이트 둘러보기</Subtitle>
        <TextItem>
          JOA OPEN API 사이트에 방문해 주신 여러분, 환영합니다. JOA OPEN API는 개발 초심자도 쉽고 간편하게 이용할 수 있는 서비스를 지향합니다. 본격적으로 서비스를 사용하기 전 메인 페이지와 안내 문서, 그리고 API 명세를 차근차근 살펴본다면 더욱 원활하게 서비스를 활용 가능할 것입니다.
        </TextItem>
        <Subtitle>Joa Open API 개요</Subtitle>
        <TextItem>
          핀테크 프로젝트를 위한 OpenAPI는 핀테크 기업 및 개발자들이 가상 은행을 구축하고 관리할 수 있도록 돕는 오픈 API입니다. 이 API를 사용하면 은행을 생성하고 고객을 관리하며 거래 내역을 생성하는 등의 작업을 수행할 수 있습니다.
        </TextItem>
        <Subtitle>Joa Open API 기능</Subtitle>
        <TextItem><b>1. 가상 은행 생성 : </b>
          개발자는 API를 사용하여 가상 은행을 생성할 수 있습니다. 각 은행에는 고유한 식별자와 설정이 포함됩니다.<br />
          <b>2. 고객 생성 및 관리 : </b>
          은행 소유자는 고객을 생성하고 관리할 수 있습니다. 고객의 개인 정보와 계정 정보를 설정할 수 있습니다.<br />
          <b>3. 거래 내역 생성 : </b>
          은행 소유자는 가상으로 계좌와 거래 내역을 생성할 수 있습니다. 입금, 출금, 이체 등의 다양한 거래 유형을 지원합니다.<br />
          <b>4. 은행 설정 및 통제 : </b>
          은행 소유자는 각 은행의 설정을 관리하고 통제할 수 있습니다. 이를 통해 수수료 설정, 거래 제한, 보안 설정 등을 구성할 수 있습니다.</TextItem>
        <Subtitle>Joa Open API만의 이점</Subtitle>
        <TextItem>
          <b>1. 테스트 및 개발 : </b>핀테크 기업 및 개발자들은 이 OpenAPI를 사용하여 실제 은행 시스템을 구축하기 전에 테스트하고 개발할 수 있습니다.<br />
          <b>2. 유연성 : </b>가상 은행을 생성하고 관리하는 과정에서 유연성을 제공하여 다양한 시나리오를 실험하고 형성할 수 있습니다.<br />
          <b>3. 비용 절감 : </b>실제 은행 시스템을 구축하기 전에 가상 환경에서 테스트하고 개발함으로써 비용을 절감할 수 있습니다.
        </TextItem>
        <Subtitle>테스트베드 체험하기</Subtitle>
        <TextItem>
          별도의 가입 절차를 진행하지 않고도 테스트베드를 통해 JOA OPEN API가 제공하는 다양한 API들을 직접 사용해볼 수 있습니다. 자세한 사항은 좌측 메뉴 중 <b>API 명세 & 테스트베드</b> 항목을 참조하세요.
        </TextItem>

        <Subtitle>본격적으로 서비스 이용하기</Subtitle>
        <NumberTitle>JOA OPEN API의 정식 회원이 되어, 서비스에서 제공하는 관리자 페이지와 대시보드 등의 다양한 기능을 마음껏 활용해 보세요.</NumberTitle>
        <TextItem>
          <b>1. API 키 발급 : </b>Admin 페이지에서 회원 가입 후 로그인하여 API 키를 발급받으세요. 해당 API 키는 JOA OPEN API에 대한 액세스 키의 역할을 합니다.<br />
          <b>2. API 명세 확인 : </b>API 문서를 참조하여 필요한 엔드포인트 및 요청 형식을 확인합니다.<br />
          <b>3. 데이터 생성 : </b>은행 생성, 고객 관리, 거래 내역 생성 등의 작업을 수행하여 프로젝트를 개발하고 테스트합니다. 필요한 경우 더미 데이터 생성 기능을 적극 활용하세요.
        </TextItem>
        <NumberTitle>요구사항</NumberTitle>
        <TextItem>
          - 해당 OpenAPI를 사용하려면 사전에 API 액세스 키를 발급받아야 합니다.<br />
          - API 요청 시 필요한 데이터와 요청 형식에 대한 정확한 이해가 필요합니다.<br />
          - 은행 생성 및 관리, 고객 생성 및 관리, 거래 내역 생성 등의 작업은 관리자 권한이 필요할 수 있습니다.
        </TextItem>
        <NumberTitle>보안 고려사항</NumberTitle>
        <TextItem>
          API 액세스 키는 안전하게 보관하고 외부에 노출되지 않도록 관리해야 합니다.
        </TextItem>
        <NumberTitle>활용 예시</NumberTitle>
        <img src='codesample.png' className='w-[37rem]' />
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

const NumberTitle = tw.h4`
font-bold
`

const TextItem = tw.div`
leading-7 break-keep
`
