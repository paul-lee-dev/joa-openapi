import tw from "tailwind-styled-components";

export default function testbed() {
  return (
    <>
      <Wrapper>
        <Title>{content.title} API</Title>
        <TextItem>{content.desc}</TextItem>
        <Subtitle>요청 Method</Subtitle>
        <TextItem>{content.method}</TextItem>
        <Subtitle>요청 URI</Subtitle>
        <TextItem>{content.uri}</TextItem>
        <Subtitle>요청 메시지 data 명세</Subtitle>
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
            {content.requestParam.map((p)=>(
            <TrItem key={p.name}>
              <TdItem>{p.name}</TdItem>
              <TdItem>{p.desc}</TdItem>
              <TdItem>{p.type}</TdItem>
              <TdItem>{p.required}</TdItem>
              <TdItem>{p.etc}</TdItem>
            </TrItem>
            ))}
          </TbodyItem>
        </TableItem>
        <Subtitle>요청 메시지 형태 예시</Subtitle>
        <RequestItem>{content.requestExample}</RequestItem>
        <Subtitle>정상 응답 코드</Subtitle>
        <TextItem>200 OK</TextItem>
        <Subtitle>응답 Content Type</Subtitle>
        <TextItem>application/json</TextItem>
        <Subtitle>응답 메시지 data 명세</Subtitle>
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
          {content.responseParam.map((p)=>(
            <TrItem key={p.name}>
              <TdItem>{p.name}</TdItem>
              <TdItem>{p.desc}</TdItem>
              <TdItem>{p.type}</TdItem>
              <TdItem>{p.required}</TdItem>
              <TdItem>{p.etc}</TdItem>
            </TrItem>
            ))}
          </TbodyItem>
        </TableItem>
        <Subtitle>응답 메시지 형태 예시</Subtitle>
        <ResponseItem>{content.responseExample}</ResponseItem>
        <Subtitle>에러 코드</Subtitle>
        <TableItem>
          <TheadItem>
            <TrItem>
              <ThItem>에러코드명</ThItem>
              <ThItem>HttpStatus</ThItem>
              <ThItem>메시지</ThItem>
            </TrItem>
          </TheadItem>
          <TbodyItem>
          {content.errorCode.map((e)=>(
            <TrItem key={e.name}>
              <TdItem>{e.name}</TdItem>
              <TdItem>{e.httpstatus}</TdItem>
              <TdItem>{e.desc}</TdItem>
            </TrItem>
            ))}
          </TbodyItem>
        </TableItem>
        <ButtonItem>실행하기</ButtonItem>
        <ButtonItem>응답 숨기기</ButtonItem>
        <Subtitle>응답 본문</Subtitle>
        <ResponseItem></ResponseItem>
        <Subtitle>응답 코드</Subtitle>
        <ResponseItem></ResponseItem>
        <Subtitle>응답 헤더</Subtitle>
        <ResponseItem></ResponseItem>
        <Subtitle>샘플 소스 코드 생성</Subtitle>
        <ResponseItem></ResponseItem>
      </Wrapper>
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
`;

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
`;

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
`;

const TdItem = tw.td`
px-4 py-3 break-keep
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

const content = {
  title: '',
  desc: '',
  method: '',
  uri: '',
  requestParam: [
    {
      name: '',
      desc: '',
      type: '',
      required: '',
      etc: '',
    },
    {
      name: '',
      desc: '',
      type: '',
      required: '',
      etc: '',
    },
    {
      name: '',
      desc: '',
      type: '',
      required: '',
      etc: '',
    },
  ],
  requestExample:'',
  responseParam: [
    {
      name: '',
      desc: '',
      type: '',
      required: '',
      etc: '',
    },
    {
      name: '',
      desc: '',
      type: '',
      required: '',
      etc: '',
    },
    {
      name: '',
      desc: '',
      type: '',
      required: '',
      etc: '',
    },
  ],
  responseExample:'',
  errorCode: [
    {
      name: '',
      httpstatus: '',
      desc: '',
    },
    {
      name: '',
      httpstatus: '',
      desc: '',
    },
    {
      name: '',
      httpstatus: '',
      desc: '',
    },
  ],
}