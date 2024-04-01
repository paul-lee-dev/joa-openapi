import tw from "tailwind-styled-components";
import { useRouter } from "next/navigation";
import { FaSort } from "react-icons/fa6";
import { IProduct, ProductPaymentTypeName, ProductTypeName } from "@/models/Product.interface";
import { formatAmount } from "@/util";

interface IProps {
  productList: IProduct[];
}

export default function ProductTable({ productList }: IProps) {
  const router = useRouter();

  const handleProductDetail = (productId: string) => {
    router.push(`product/${productId}`);
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50">
          <tr>
            <th scope="col" className="px-6 py-3 w-2/12">
              은행코드
            </th>
            <th scope="col" className="px-6 py-3 w-1/12">
              상품종류
            </th>
            <th scope="col" className="px-6 py-3 w-1/12">
              상품명
            </th>
            <th scope="col" className="px-6 py-3 w-2/12">
              상품 내용
            </th>
            <th scope="col" className="px-6 py-3 w-1/12">
              상품 이율
            </th>

            <th scope="col" className="px-6 py-3 w-1/12">
              지급 방식
            </th>
            <th scope="col" className="px-6 py-3 w-1/12">
              최소 금액
            </th>
            <th scope="col" className="px-6 py-3 w-1/12">
              <span className="flex gap-3">최대 금액</span>
            </th>
            <th scope="col" className="relative px-6 py-3 w-1/12">
              <span className="sr-only"> </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {productList.map((product) => (
            <tr
              key={product.productId}
              className="border-b transition duration-300 ease-in-out hover:bg-neutral-100"
            >
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-2">
                  {product.bankId}
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-2">
                  {ProductTypeName[product.productType]}
                </div>
              </TableData>
              <TableData className="font-medium whitespace-nowrap">
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-2">
                  {product.name}
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-2">
                  {product.description}
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-2">
                  {product.rate}%
                </div>
              </TableData>

              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-2">
                  {ProductPaymentTypeName[product.paymentType]}
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-2">
                  {formatAmount(product.minAmount)}원
                </div>
              </TableData>
              <TableData>
                <div className="overflow-clip overflow-ellipsis break-words line-clamp-2">
                  {formatAmount(product.maxAmount)}원
                </div>
              </TableData>
              <TableData className="cursor-pointer">
                <a
                  onClick={() => handleProductDetail(product.productId)}
                  className="font-medium text-pink-400 hover:text-pink-500"
                >
                  자세히
                </a>
              </TableData>
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
