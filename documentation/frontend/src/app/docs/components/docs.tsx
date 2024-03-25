import { IoIosInformationCircleOutline } from "react-icons/io";
import tw from "tailwind-styled-components";

export default function docs() {
  return (
    <>
      {testbeds.map((t) => (
        <Wrapper key={t.title}>

          <Title>{t.title}</Title>
          <TextItem>{t.description}</TextItem>

          <Subtitle>기본 정보</Subtitle>
          <TextItem>{t.info}</TextItem>

          <WarningItem>
            <IoIosInformationCircleOutline />{t.warning}
          </WarningItem>

          <Subtitle>요청(Request)</Subtitle>
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

          <Subtitle>요청 샘플(Request Sample)</Subtitle>
          <RequestItem>{t.request_sample}</RequestItem>

          <Subtitle>응답(Response)</Subtitle>
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

          <Subtitle>응답 샘플(Response Sample)</Subtitle>
          <ResponseItem>{t.response_sample}</ResponseItem>

        </Wrapper>
      ))}
    </>
  );
};


const testbeds = [
  {
    title: "계좌 개설 API",
    description: "계좌 개설 API에 대한 설명이 여기에 들어갑니다.",
    info: "API에 대한 설명이 들어갑니다.",
    warning: "주의해야 할 사항이 들어갑니다.",
    request_sample: "request sample",
    response_sample: "response sample"
  },
]

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

const WarningItem = tw.div`
bg-pink-300 
hover:bg-pink-400
rounded-lg
p-4
flex
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