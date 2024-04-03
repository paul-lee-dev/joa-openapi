import { searchProductList } from "@/api/Product";
import { IProduct } from "@/models/Product.interface";
import { useQuery } from "@tanstack/react-query";
import { ChangeEventHandler } from "react";
import tw from "tailwind-styled-components";

interface IProps {
  bankId: string;
  setProductId: (value: string) => void;
  productId: string;
}

export default function ProductSelect({ bankId, setProductId, productId }: IProps) {
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["ProductList", bankId || "none"],
    queryFn: () => {
      if (bankId === "") return [];
      return searchProductList({ bankId });
    },
  });

  const onChangeProductId: ChangeEventHandler<HTMLSelectElement> = (e) => {
    setProductId(e.target.value);
  };
  return (
    <Wrapper>
      <Label htmlFor="products">상품</Label>
      <InputContainer>
        <Select id="products" value={productId} onChange={onChangeProductId}>
          <option key={"none"} value={""}>
            상품 선택
          </option>
          {data?.page?.content?.map((product: IProduct) => (
            <option key={product.productId} value={product.productId}>
              {product.name}
            </option>
          ))}
        </Select>
      </InputContainer>
    </Wrapper>
  );
}

const Wrapper = tw.div`
w-40
flex
flex-col
space-y-4
`;

const InputContainer = tw.div`
`;

const Label = tw.label`
block
text-sm
font-semibold
text-gray-500
`;

const Select = tw.select`
block 
w-full 
rounded-md 
border-0 
px-1.5
py-1.5
text-gray-700
ring-1
ring-inset 
ring-gray-300 
placeholder:text-gray-400 
focus:outline-none
focus:ring-2 
focus:ring-inset 
focus:ring-pink-500 
sm:text-sm 
sm:leading-6
`;
