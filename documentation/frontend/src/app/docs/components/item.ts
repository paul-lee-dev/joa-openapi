interface Item {
  id: number;
  title: string;
  to?: string; //선택
}

const bankItems: Item[] = [
  { id: 1, title: '은행 생성', to: '' },
  { id: 2, title: '은행 정보 조회', to: '' },
  { id: 3, title: '은행 정보 수정', to: '' },
  { id: 4, title: '은행 목록 조회/검색 ', to: '' },
  { id: 5, title: '은행 삭제', to: '' },
];


export const overviews = [
  {
    name: '서비스 소개(Introduction)',
    anchor: '#',
  },
  {
    name: '시작하기(Getting Started)',
    anchor: '#',
  },
]


export const components = [
  {
    name: '은행(Bank)',
    anchor: '#',
    sub: bankItems
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

