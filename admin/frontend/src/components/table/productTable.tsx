import tw from "tailwind-styled-components";

export default function ProductTable() {
  const Products = [
    {
      id: 1,
      name: "청년희망정기예금",
      bankId: "21",
      description: "청년을 위한 예적금 상품",
      rate: "4.2",
      paymentType: "단리",
      interestTaxType: "과세",
      maxAmount: 10000000,
    },
  ];

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3">
              상품명
            </th>
            <th scope="col" className="px-6 py-3">
              은행코드
            </th>
            <th scope="col" className="px-6 py-3">
              상품 내용
            </th>
            <th scope="col" className="px-6 py-3">
              상품 이율
            </th>
            <th scope="col" className="px-6 py-3">
              지급 방식
            </th>
            <th scope="col" className="px-6 py-3">
              이자 과세
            </th>
            <th scope="col" className="px-6 py-3">
              최대 금액
            </th>
            <th scope="col" className="relative px-6 py-3">
              <span className="sr-only"> </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {Products.map((product) => (
            <tr
              key={product.id}
              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100"
            >
              <TableData className="font-medium text-gray-900 whitespace-nowrap">
                {product.name}
              </TableData>
              <TableData>{product.bankId}</TableData>
              <TableData>{product.description}</TableData>
              <TableData>{product.rate}%</TableData>
              <TableData>{product.paymentType}</TableData>
              <TableData>{product.interestTaxType}</TableData>
              <TableData>{product.maxAmount}</TableData>
              <td className="px-6 py-4">
                <a
                  href="#"
                  className="font-medium text-pink-400 hover:text-pink-500"
                >
                  자세히
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

const TableHeader = tw.th`

`;

const TableData = tw.td`
px-6 
py-4
`;
