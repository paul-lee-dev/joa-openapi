
export default function Sidebar() {
  return (
    <>
      <div className="w-64 mx-8 mt-12">

        <p className="flex justify-between p-3">
          <span className="font-bold">Test Beds</span>
          <span>V 1.0</span>
        </p>

        <div className="relative p-2 rounded-md">
          <input className="rounded-md border-0 py-2 px-4 ring-1 ring-gray-300 placeholder:text-gray-400" placeholder="Search" />
        </div>

        <p className="text-sm font-bold p-3">Overview</p>

        {
          overviews.map((item) => (
            <a className="p-2 flex space-4 rounded-md hover:bg-pink-500 hover:text-white" href={item.anchor}>
              {item.name}
            </a>
          ))
        }

        <p className="text-sm font-bold p-3">Components</p>

        {
          components.map((item) => (
            <a className="p-2 flex space-4 rounded-md hover:bg-pink-500 hover:text-white" href={item.anchor}>
              {item.name}
            </a>
          ))
        }
      </div>
    </>
  );
}

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