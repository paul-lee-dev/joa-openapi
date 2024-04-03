import tw from "tailwind-styled-components";

export default function docs() {
  return (
    <>
      <Wrapper>
        <Title>쿼리 스트링 명세</Title>
        <TextItem>각 목록 조회/검색 API에서 사용 가능한 쿼리 스트링에 대한 명세입니다. 테스트베드에서는 쿼리 스트링 이용이 제한됩니다.</TextItem>
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

        <Subtitle>은행 목록 조회/검색</Subtitle>
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
            {bankSearchQueryString.map((str) => (
              <TrItem key={str.name}>
                <TdItem>{str.name}</TdItem>
                <TdItem>{str.type}</TdItem>
                <TdItem>{str.desc}</TdItem>
                <TdItem>{str.etc}</TdItem>
              </TrItem>
            ))}
          </TbodyItem>
        </TableItem>

        <Subtitle>고객 목록 조회/검색</Subtitle>
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
            {memberSearchQueryString.map((str) => (
              <TrItem key={str.name}>
                <TdItem>{str.name}</TdItem>
                <TdItem>{str.type}</TdItem>
                <TdItem>{str.desc}</TdItem>
                <TdItem>{str.etc}</TdItem>
              </TrItem>
            ))}
          </TbodyItem>
        </TableItem>

        <Subtitle>예적금상품 목록 조회/검색</Subtitle>
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
            {productSearchQueryString.map((str) => (
              <TrItem key={str.name}>
                <TdItem>{str.name}</TdItem>
                <TdItem>{str.type}</TdItem>
                <TdItem>{str.desc}</TdItem>
                <TdItem>{str.etc}</TdItem>
              </TrItem>
            ))}
          </TbodyItem>
        </TableItem>

        <Subtitle>계좌 목록 조회/검색</Subtitle>
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
            {accountSearchQueryString.map((str) => (
              <TrItem key={str.name}>
                <TdItem>{str.name}</TdItem>
                <TdItem>{str.type}</TdItem>
                <TdItem>{str.desc}</TdItem>
                <TdItem>{str.etc}</TdItem>
              </TrItem>
            ))}
          </TbodyItem>
        </TableItem>

        <Subtitle>거래내역 목록 조회/검색</Subtitle>
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
            {transactionSearchQueryString.map((str) => (
              <TrItem key={str.name}>
                <TdItem>{str.name}</TdItem>
                <TdItem>{str.type}</TdItem>
                <TdItem>{str.desc}</TdItem>
                <TdItem>{str.etc}</TdItem>
              </TrItem>
            ))}
          </TbodyItem>
        </TableItem>

        <Subtitle>더미 생성내역 목록 조회/검색</Subtitle>
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
            {dummySearchQueryString.map((str) => (
              <TrItem key={str.name}>
                <TdItem>{str.name}</TdItem>
                <TdItem>{str.type}</TdItem>
                <TdItem>{str.desc}</TdItem>
                <TdItem>{str.etc}</TdItem>
              </TrItem>
            ))}
          </TbodyItem>
        </TableItem>

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

const bankSearchQueryString = [
  { name: 'name', desc: '은행이름', type: 'string', etc: '' },
];

const memberSearchQueryString = [
  { name: 'bankName', desc: '은행이름', type: 'string', etc: '' },
  { name: 'memberName', desc: '고객이름', type: 'string', etc: '' },
  { name: 'isDummy', desc: '더미여부', type: 'boolean', etc: '' },
];

const productSearchQueryString = [
  { name: 'bankId', desc: '은행ID', type: 'string', etc: '' },
  { name: 'productKeyword', desc: '상품명', type: 'string', etc: '' },
  { name: 'productType', desc: '상품타입', type: 'string', etc: 'ORDINARY_DEPOSIT, TERM_DEPOSIT, FIXED_DEPOSIT' },
  { name: 'isDone', desc: '은행이름', type: 'string', etc: 'true, false' },
  { name: 'orderBy', desc: '정렬타입', type: 'string', etc: 'LATEST, OLDEST' },
];

const accountSearchQueryString = [
  { name: 'isDummy', desc: '더미데이터 여부', type: 'boolean', etc: '' },
  { name: 'isDormant', desc: '휴면계좌 여부', type: 'boolean', etc: '' },
  { name: 'keywordType', desc: '검색어 타입', type: 'string', etc: 'ACCOUNT_ID, ACCOUNT_NAME, HOLDER_NAME, PRODUCT_NAME, DUMMY_NAME' },
  { name: 'searchKeyword', desc: '검색어', type: 'string', etc: '' },
  { name: 'bankList', desc: '검색할 은행 목록', type: 'string', etc: '' },
  { name: 'sortBy', desc: '정렬 타입', type: 'string', etc: 'LOWEST_BALANCE, HIGHEST_BALANCE, LATEST, OLDEST, NEAR_EXPIRATION, FURTHER_EXPIRATION' },
];

const transactionSearchQueryString = [
  { name: 'bankId', desc: '은행번호', type: 'string', etc: 'UUID' },
  { name: 'isDummy', desc: '더미 유무', type: 'string', etc: 'true, false' },
  { name: 'depositorNameKeyword', desc: '예금주명', type: 'string', etc: '예금주명 키워드 검색' },
  { name: 'accoundId', desc: '계좌번호', type: 'string', etc: '' },
  { name: 'dummyName', desc: '더미 이름', type: 'string', etc: '' },
  { name: 'fromAmount', desc: '최소 금액 설정', type: 'string', etc: 'ex) 1000' },
  { name: 'toAmount', desc: '최대 금액 설정', type: 'string', etc: 'ex) 100000' },
  { name: 'fromDate', desc: '첫 날짜', type: 'string', etc: 'ex) 2023-11-11' },
  { name: 'toDate', desc: '마지막 날짜', type: 'string', etc: 'ex) 2024-03-27' },
  { name: 'searchType', desc: '거래내역 종류', type: 'string', etc: 'ALL, DEPOSIT_ONLY, WITHDRAWAL_ONLY' },
  { name: 'orderBy', desc: '정렬 타입', type: 'string', etc: 'LATEST, OLDEST, AMOUNT_ASC, AMOUNT_DESC' },
];

const dummySearchQueryString = [
  { name: 'searchKeyWord', desc: '검색할 키워드', type: 'string', etc: 'UUID' },
  { name: 'isMember', desc: '더미 멤버 생성내역 여부', type: 'boolean', etc: '' },
  { name: 'isAccount', desc: '더미 계좌 생성내역 여부', type: 'boolean', etc: '' },
  { name: 'isTransaction', desc: '더미 거래내역 생성내역 여부', type: 'boolean', etc: '' },
];