import tw from "tailwind-styled-components";

export default function docs() {
  return (
    <>
      <Wrapper>

        <Title>API 명세 설명</Title>
        <TextItem>
          여기에는 관리자가 해당 API를 통해 무엇을 제공받을 수 있는지에 대한 개괄적인 설명이 기술됩니다. 필요한 경우 해당 API 사용 시의 주의사항 등이 포함될 수 있습니다.
        </TextItem>

        <Subtitle>요청 Method</Subtitle>
        <TextItem>
          본 OPEN API 서비스는 HTTP Method(GET, POST, PUT, DELETE, PATCH)를 사용하여 호출됩니다. 요청 Method는 해당 API를 호출할 경우 수행되는 동작을 나타냅니다.
        </TextItem>

        <Subtitle>요청 URI</Subtitle>
        <TextItem>
          API를 제공하는 엔드포인트입니다. 엔드포인트란 웹 서비스에서 클라이언트가 서버에 특정한 작업을 요청할 때 사용되는 URL을 말합니다. 해당하는 Method로 호출하여 적절한 요청을 보낼 경우 서버는 클라이언트의 요청을 이해하고 처리할 수 있게 됩니다. Base URL은 https://joa13.site/v1 입니다. 
        </TextItem>

        <Subtitle>공통 헤더 명세</Subtitle>
        <TextItem>
          헤더에 포함되어야 하는 변수들이 있을 경우 그에 대한 설명이 기술됩니다. 테스트베드에서는 헤더에 포함되는 변수들이 임의의 값으로 고정되어 변경이 불가합니다. 
        </TextItem>
        <TableItem>
          <TheadItem>
            <TrItem>
              <ThItem>변수명</ThItem>
              <ThItem>설명</ThItem>
              <ThItem>타입</ThItem>
              <ThItem>필수 여부</ThItem>
              <ThItem>비고</ThItem>
            </TrItem>
          </TheadItem>
          <TbodyItem>
            {commonHeader.map((h) => (
              <TrItem key={h.name}>
                <TdItem>{h.name}</TdItem>
                <TdItem>{h.desc}</TdItem>
                <TdItem>{h.type}</TdItem>
                <TdItem>{h.required}</TdItem>
                <TdItem>{h.etc}</TdItem>
              </TrItem>
            ))}
          </TbodyItem>
        </TableItem>
        
        <Subtitle>요청 메시지 data 명세</Subtitle>
        <TextItem>
          Request Body에 포함되어야 하는 변수들이 있을 경우 그에 대한 설명이 기술됩니다.
        </TextItem>
        <TableItem>
          <TheadItem>
            <TrItem>
              <ThItem>변수명</ThItem>
              <ThItem>설명</ThItem>
              <ThItem>타입</ThItem>
              <ThItem>필수 여부</ThItem>
              <ThItem>비고</ThItem>
            </TrItem>
          </TheadItem>
          <TbodyItem>
            <TrItem>
              <TdItem>해당 변수의 명칭 </TdItem>
              <TdItem>해당 변수에 대한 설명</TdItem>
              <TdItem>해당 변수의 자료형 타입</TdItem>
              <TdItem>요청 메시지에 해당 변수가 필수로 포함되어야 하는지의 여부</TdItem>
              <TdItem>제약 등의 비고사항</TdItem>
            </TrItem>
          </TbodyItem>
        </TableItem>

        <Subtitle>요청 예시</Subtitle>
        <TextItem>
          요청 메시지(Request Body)는 해당 API의 엔드포인트로 요청을 전송할 때 포함되어야 하는 항목을 나타냅니다. Json 형식을 강력히 권장합니다.
        </TextItem>
        <RequestItem>요청 메시지 형태 예시</RequestItem>

        <Subtitle>정상 응답 코드</Subtitle>
        <TextItem>
          요청이 정상적으로 서버로 전송되었을 경우 클라이언트에서 받을 수 있는 응답 코드입니다.
        </TextItem>

        <Subtitle>응답 Content Type</Subtitle>
        <TextItem>
          응답 Content Type은 서버에서 클라이언트로 보내는 응답이 어떤 형태를 취하고 있는지를 나타냅니다. 응답 Content Type이 application/json인 경우 해당 응답은 Json 형식을 취하고 있음을 알 수 있습니다.
        </TextItem>

        <Subtitle>응답 메시지 data 명세</Subtitle>
        <TextItem>
          Response Body에 포함되는 변수들이 있을 경우 그에 대한 설명이 기술됩니다.
        </TextItem>
        <TableItem>
          <TheadItem>
            <TrItem>
              <ThItem>변수명</ThItem>
              <ThItem>설명</ThItem>
              <ThItem>타입</ThItem>
              <ThItem>비고</ThItem>
            </TrItem>
          </TheadItem>
          <TbodyItem>
            <TrItem>
              <TdItem>해당 변수의 명칭 </TdItem>
              <TdItem>해당 변수에 대한 설명</TdItem>
              <TdItem>해당 변수의 자료형 타입</TdItem>
              <TdItem>제약 등의 비고사항</TdItem>
            </TrItem>
          </TbodyItem>
        </TableItem>

        <Subtitle>응답 예시</Subtitle>
        <TextItem>
          응답 메시지(Response Body)는 Json 형태로 주어집니다. 응답 메시지에는 기본적으로 status, message, data가 포함되며, 해당 API가 제공하는 핵심 정보는 data (또는 page) 안에 반환됩니다.
        </TextItem>
        <ResponseItem>응답 메시지 형태 예시</ResponseItem>

        <Subtitle>에러 코드</Subtitle>
        <TextItem>
          여기에는 각 API를 사용할 경우 발생할 수 있는 에러에 대한 설명이 기술됩니다.
        </TextItem>
        <TableItem>
          <TheadItem>
            <TrItem>
              <ThItem>에러코드명</ThItem>
              <ThItem>HttpStatus</ThItem>
              <ThItem>메시지</ThItem>
            </TrItem>
          </TheadItem>
          <TbodyItem>
            <TrItem>
              <TdItem>해당 에러의 코드명</TdItem>
              <TdItem>해당 에러 코드에 대응되는 Http Status</TdItem>
              <TdItem>해당 에러 코드가 발생한 이유</TdItem>
            </TrItem>
          </TbodyItem>
        </TableItem>
        <Subtitle>공통 에러 코드</Subtitle>
        <TextItem>
          여기에는 본 OPEN API 서비스를 사용할 경우 발생할 수 있는 공통 에러에 대한 설명이 기술됩니다.
        </TextItem>
        <TableItem>
          <TheadItem>
            <TrItem>
              <ThItem>에러코드명</ThItem>
              <ThItem>HttpStatus</ThItem>
              <ThItem>메시지</ThItem>
            </TrItem>
          </TheadItem>
          <TbodyItem>
            {commonErrorCode.map((err) => (
              <TrItem key={err.name}>
                <TdItem>{err.name}</TdItem>
                <TdItem>{err.httpstatus}</TdItem>
                <TdItem>{err.desc}</TdItem>
              </TrItem>
            ))}
          </TbodyItem>
        </TableItem>
        <Subtitle>테스트베드</Subtitle>
        <TextItem>
        - 각 API 명세 문서에서 요청 보내기 버튼을 누르면 아래의 칸에 입력한 데이터를 담은 요청이 서버의 해당 엔드포인트로 전송됩니다.<br/>
        - 공개 테스트베드이므로 여기에 입력된 데이터는 누구나 조회 가능합니다. 민감한 개인 정보는 입력하지 않도록 주의하세요.
        </TextItem>
        <RequestItem>GET 또는 DELETE 메소드 요청이라면 빈칸으로 남겨두세요. POST 또는 PATCH 메소드 요청이라면 여기에 request data를 JSON 방식으로 입력 후 요청 보내기 버튼을 클릭하세요. 어떻게 보내야 할지 잘 모르겠다면 요청 예시 항목의 내용을 복사하여 붙여넣기하거나 필요에 따라 수정해서 활용해 보세요.</RequestItem>
        <ButtonItem>요청 보내기</ButtonItem>
        <Subtitle>응답 status</Subtitle>
        <ResponseItem>전송한 요청에 대한 응답 status가 표시됩니다.</ResponseItem>
        <Subtitle>응답 message</Subtitle>
        <ResponseItem>전송한 요청에 대한 응답 message가 표시됩니다.</ResponseItem>
        <Subtitle>응답 data</Subtitle>
        <ResponseItem>전송한 요청에 대한 응답 data(또는 page)가 표시됩니다.</ResponseItem>
      </Wrapper >
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
const RequestItem = tw.div`
text-xs
bg-blue-200 
hover:bg-blue-300
rounded-lg
p-8
leading-6
`;

const ResponseItem = tw.div`
text-xs
bg-purple-200 
hover:bg-purple-300
rounded-lg
p-8
leading-6
`;

const TableItem = tw.table`
w-full 
text-xs
text-left 
break-keep
`;

const TheadItem = tw.thead`
bg-gray-100
`;

const TbodyItem = tw.tbody`
`;

const TrItem = tw.tr`
border-b
`;

const ThItem = tw.th`
px-4 py-3
`

const TdItem = tw.td`
px-4 py-3 
`;

const ButtonItem = tw.button`
mr-2 px-3.5 py-2 
bg-pink-300 rounded-md 
border-2 border-pink-300 
text-xs font-semibold text-white shadow-sm 
hover:bg-gray-50 hover:text-pink-400 
focus-visible:outline focus-visible:outline-2 
focus-visible:outline-offset-2 focus-visible:outline-pink-600
`;

const commonHeader = [
  { name: 'apiKey', desc: '관리자의 API 키', type: 'string', required: 'Y', etc: '본 서비스의 모든 OPEN API 요청에 필요합니다.' },
  { name: 'memberId', desc: '은행 고객의 ID', type: 'string', required: '', etc: '계좌(account) 카테고리에 속하는 전체 요청과 거래내역(transaction) 카테고리의 일부 요청에 필요합니다.' },
];

const queryString = [

];

const commonErrorCode = [
  { name: 'WRONG_APIKEY', httpstatus: 'BAD_REQUEST', desc: '잘못된 API키입니다.' },
  { name: 'NO_AUTHORIZATION', httpstatus: 'BAD_REQUEST', desc: '권한이 없습니다.' },
  { name: 'ACCESS_DENIED', httpstatus: 'FORBIDDEN', desc: '권한이 없습니다.' },
  { name: 'NO_MEMBER', httpstatus: 'BAD_REQUEST', desc: 'ID에 해당하는 사용자가 존재하지 않습니다.' },
  { name: 'UNAUTHORIZED', httpstatus: 'UNAUTHORIZED', desc: '로그인 후 이용해 주세요.' },
  { name: 'NO_AUTH', httpstatus: 'UNAUTHORIZED', desc: '인증 정보가 없습니다.' },
  { name: 'TOKEN_INVALID', httpstatus: 'UNAUTHORIZED', desc: '유효하지 않은 토큰입니다.' },
  { name: 'INVALID_PARAMETER', httpstatus: 'BAD_REQUEST', desc: '입력값이 잘못되었습니다.' },
  { name: 'WRONG_REQUEST', httpstatus: 'BAD_REQUEST', desc: '요청이 잘못되었습니다.' },
  { name: 'RESOURCE_NOT_FOUND', httpstatus: 'NOT_FOUND', desc: '요청한 리소스가 존재하지 않습니다.' },
  { name: 'INTERNAL_SERVER_ERROR', httpstatus: 'INTERNAL_SERVER_ERROR', desc: '서버 에러입니다.' }
];
