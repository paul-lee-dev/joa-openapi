"use client";

import { doneProduct, deleteProduct, getProductDetail } from "@/api/Product";
import Button from "@/components/button/button";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import tw from "tailwind-styled-components";

interface IProps {
  params: {
    productId: string;
  };
}

export default function ProductDetail({ params: { productId } }: IProps) {
  const router = useRouter();
  const { data, isLoading, refetch } = useQuery({
    queryKey: ["ProductDetail", productId],
    queryFn: () => {
      return getProductDetail(productId);
    },
  });

  const updateMutation = useMutation({
    mutationFn: doneProduct,
    onSuccess: (data) => {
      console.log(data);
      refetch();
    },
    onError: (err) => console.log(err),
  });
  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: (data) => {
      console.log(data);
      router.replace("/admin/product");
    },
    onError: (err) => console.log(err),
  });

  const productDone = () => {
    let result = confirm("정말로 상품을 종료하시겠습니까?");
    if (result) {
      updateMutation.mutate(productId);
    }
  };

  const deleteProductConfirm = () => {
    let result = confirm("정말로 상품을 삭제하시겠습니까?");
    if (result) {
      deleteMutation.mutate(productId);
    }
  };

  return (
    <>
      {isLoading ? (
        <h1>로딩중...</h1>
      ) : (
        <>
          <Form>
            <div className="grid gap-3 mb-4 md:grid-cols-2">
              <h1>{`상품 아이디: ${data?.data.productId}`}</h1>
              <h1>{`이름: ${data?.data.name}`}</h1>
              <h1>{`설명: ${data?.data.description}`}</h1>
              <h1>{`최소 금액: ${data?.data.minAmount}`}</h1>
              <h1>{`최고 금액: ${data?.data.maxAmount}`}</h1>
              <h1>{`비율: ${data?.data.rate}`}</h1>
              <h1>{`상품 종류: ${data?.data.productType}`}</h1>
              <h1>{`지급방식: ${data?.data.paymentType}`}</h1>
              <h1>{`종료 여부: ${data?.data.isDone}`}</h1>
              <h1>{`은행 아이디: ${data?.data.bankId}`}</h1>
            </div>
            {data?.data.isDone ? (
              <div className="flex gap-6 justify-end">
                <Button
                  onClick={deleteProductConfirm}
                  id={"delete"}
                  name={"삭제"}
                  type="button"
                ></Button>
              </div>
            ) : (
              <div className="flex gap-6 justify-end">
                <Button
                  onClick={productDone}
                  id={"done"}
                  name={"종료"}
                  type="button"
                ></Button>
              </div>
            )}
          </Form>
        </>
      )}
    </>
  );
}
const Form = tw.form`

`;
