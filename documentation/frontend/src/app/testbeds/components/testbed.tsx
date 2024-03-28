import tw from "tailwind-styled-components";

export default function testbed() {
  return (
    <>
      {testbeds.map((t) => (
        <Wrapper key={t.title}>

          <Title>{t.title}</Title>
          <TextItem>{t.description}</TextItem>

          <Subtitle>요청 방식</Subtitle>
          <TextItem>{t.request_method}</TextItem>
            
          <Subtitle>요청 URI</Subtitle>
          <TextItem>{t.request_uri}</TextItem>

          <hr />

          <Subtitle>응답 클래스 (상태 200)</Subtitle>
          <TextItem>{t.response_code_expected}</TextItem>
            
          <Subtitle>모델</Subtitle>
          <RequestItem>{t.request_value}</RequestItem>

          <Subtitle>Example Value</Subtitle>
          <RequestItem>{t.request_description}</RequestItem>

          <Subtitle>응답 Content Type</Subtitle>
          <TextItem>{t.response_content_type}</TextItem>

          <hr />

          <Subtitle>매개변수들</Subtitle>
          <TableItem>
            <TheadItem>
              <TrItem>
                <ThItem>123</ThItem>
                <ThItem>123</ThItem>
                <ThItem>123</ThItem>
              </TrItem>
            </TheadItem>
            <TbodyItem>
              <TrItem>
                <TdItem>444</TdItem>
                <TdItem>555</TdItem>
                <TdItem>666</TdItem>
              </TrItem>
            </TbodyItem>
          </TableItem>

          <Subtitle>응답 메시지</Subtitle>
          <TableItem>
            <TheadItem>
              <TrItem>
                <ThItem>123</ThItem>
                <ThItem>123</ThItem>
                <ThItem>123</ThItem>
              </TrItem>
            </TheadItem>
            <TbodyItem>
              <TrItem>
                <TdItem>444</TdItem>
                <TdItem>555</TdItem>
                <TdItem>666</TdItem>
              </TrItem>
            </TbodyItem>
          </TableItem>

          <ButtonItem>실행하기</ButtonItem>
          <ButtonItem>응답 숨기기</ButtonItem>

          <Subtitle>응답 본문</Subtitle>
          <ResponseItem>{t.response_body}</ResponseItem>
          <Subtitle>응답 코드</Subtitle>
          <ResponseItem>{t.response_code}</ResponseItem>
          <Subtitle>응답 헤더</Subtitle>
          <ResponseItem>{t.response_header}</ResponseItem>
          <Subtitle>샘플 소스 코드 생성</Subtitle>
          <ResponseItem>{t.sample_code}</ResponseItem>

        </Wrapper>
      ))}
    </>
  );
};

const Wrapper = tw.div`
mt-8
space-y-6
text-sm
`;

const Title = tw.h2`
text-3xl
font-bold
`;

const Subtitle = tw.h3`
text-xl
font-bold
`;

const TextItem = tw.div`
`

const RequestItem = tw.div`
bg-blue-200 
hover:bg-blue-300
rounded-lg
p-8
`;

const ResponseItem = tw.div`
bg-purple-200 
hover:bg-purple-300
rounded-lg
p-8
`

const TableItem = tw.table`
w-full 
text-xs
text-left 
`;

const TheadItem = tw.thead`
uppercase 
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

const testbeds = [
  {
    title: "계좌 개설 API",
    description: "계좌 개설 API에 대한 설명이 여기에 들어갑니다.",
    request_method: "POST",
    request_uri: "/account/{bankId}",
    response_code_expected: "OK",
    request_value: "요청으로 보낼 JSON DATA",
    request_description: "요청으로 보낼 데이터에 대한 설명",
    response_content_type: "application/json",
    response_body: "응답 본문",
    response_code: "응답 코드",
    response_header: "응답 헤더",
    sample_code: "샘플 코드"
  },
]