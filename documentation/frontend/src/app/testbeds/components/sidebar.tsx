import tw from "tailwind-styled-components";

export default function Sidebar() {
  return (
    <>
      <Wrapper>

        <BarTitleContainer>
          <BarTitle>Test Beds</BarTitle>
          <Ver>V 1.0</Ver>
        </BarTitleContainer>

        <div className="relative p-2 rounded-md">
          <SearchBox placeholder="search"></SearchBox>
        </div>

        <BarSubTitle>Overview</BarSubTitle>
        {
          overviews.map((item) => (
            <BarItem href={item.anchor}>{item.name}</BarItem>
          ))
        }

        <BarSubTitle>Components</BarSubTitle>
        {
          components.map((item) => (
            <BarItem href={item.anchor}>{item.name}</BarItem>
          ))
        }

      </Wrapper>
    </>
  );
}

const Wrapper = tw.div`
w-64 mx-8 mt-12
text-sm
`;

const BarTitleContainer = tw.div`
flex items-end justify-between p-2
`;

const BarTitle = tw.h3`
font-bold
`;

const Ver = tw.div`
mr-14
text-xs
`;

const SearchBox = tw.input`
rounded-md border-0 py-2 px-4 ring-1 ring-gray-300 placeholder:text-gray-400
`;

const BarSubTitle = tw.div`
text-xs font-bold p-3 mt-4
`;

const BarItem = tw.a`
p-2 flex space-4 rounded-md hover:bg-gray-100 hover:font-bold
`;

const overviews = [
  {
    name: '서비스 소개(Introduction)',
    anchor: '#',
  },
  {
    name: '시작하기(Getting Started)',
    anchor: '#',
  },
]

const components = [
  {
    name: '관리자(Admin)',
    anchor: '#',
  },
  {
    name: '은행(Bank)',
    anchor: '#',
  },
  {
    name: '고객(Member)',
    anchor: '#',
  },
  {
    name: '예적금상품(Product)',
    anchor: '#',
  },
  {
    name: '계좌(Account)',
    anchor: '#',
  },
  {
    name: '거래내역(Transaction)',
    anchor: '#',
  },
  {
    name: '더미데이터(Dummy)',
    anchor: '#',
  },
]