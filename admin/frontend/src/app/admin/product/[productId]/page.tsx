"use client";

import { doneProduct, deleteProduct, getProductDetail } from "@/api/Product";
import Button from "@/components/button/button";
import { LoadingSpinner } from "@/components/loadingSpinner";
import { useMutation, useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import tw from "tailwind-styled-components";
import { CommonForm, Divider } from "../create/page";
import { HiCurrencyDollar } from "react-icons/hi";
import {
  ProductPaymentType,
  ProductPaymentTypeName,
  ProductType,
  ProductTypeName,
} from "@/models/Product.interface";

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
      alert("상품이 종료되었습니다.");
      console.log(data);
      refetch();
    },
    onError: (err) => alert(err.message),
  });
  const deleteMutation = useMutation({
    mutationFn: deleteProduct,
    onSuccess: (data) => {
      console.log(data);
      alert("상품이 삭제되었습니다.");
      router.replace("/admin/product");
    },
    onError: (err) => alert(err.message),
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
        <LoadingSpinner />
      ) : (
        <>
          <CommonForm>
            <div className="p-4 pb-0 flex justify-between items-end">
              <div className="flex flex-col space-y-2">
                <div className="flex space-x-4 items-center text-gray-600">
                  <HiCurrencyDollar className="w-10 h-10" />
                  <h1 className="font-bold text-2xl">{data?.data.name}</h1>
                </div>
                <h1 className="font-light text-xs text-gray-400">{data?.data.productId}</h1>
              </div>
              {/* <div className="flex flex-col">
                <h1 className="text-sm font-light">
                  생성:{" "}
                  <span className="text-gray-500">{data?.data?.createdAt}</span>
                </h1>
                <h1 className="text-sm font-light">
                  수정:{" "}
                  <span className="text-gray-500">{data?.data?.updatedAt}</span>
                </h1>
              </div> */}
            </div>
            <Divider />
            <div className="p-4 flex flex-col space-y-4 text-gray-800 font-semibold">
              <h1>
                은행 아이디: <DetailSpan>{data?.data.bankId}</DetailSpan>
              </h1>
              <h1>
                설명: <DetailSpan>{data?.data.description}</DetailSpan>
              </h1>
              <h1>
                최소 금액: <DetailSpan>{data?.data.minAmount}</DetailSpan>
              </h1>
              <h1>
                최고 금액: <DetailSpan>{data?.data.maxAmount}</DetailSpan>
              </h1>
              <h1>
                비율: <DetailSpan>{data?.data.rate}</DetailSpan>
              </h1>
              <h1>
                상품 종류:{" "}
                <DetailSpan>{ProductTypeName[data?.data.productType as ProductType]}</DetailSpan>
              </h1>
              <h1>
                지급방식:{" "}
                <DetailSpan>
                  {ProductPaymentTypeName[data?.data.paymentType as ProductPaymentType]}
                </DetailSpan>
              </h1>
              <h1>
                종료 여부: <DetailSpan>{data?.data.isDone ? "Y" : "N"}</DetailSpan>
              </h1>
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
                <Button onClick={productDone} id={"done"} name={"종료"} type="button"></Button>
              </div>
            )}
          </CommonForm>
        </>
      )}
    </>
  );
}
const DetailSpan = tw.span`
  text-gray-500
  font-light
`;
