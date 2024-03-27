// import ProductListItem from '@/components/ProductListItem';
import Header from '@/components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScrollView, View, Text} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {RootStackParamList} from '@/Router';
import {getProductList} from '@/api/product';
import ProductListItem from '@/components/ProductListItem';
import {IProduct} from '@/models/product';

type ProductListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductList'
>;

const productTypeName = {
  ORDINARY_DEPOSIT: '입출금통장',
  TERM_DEPOSIT: '정기예금',
  FIXED_DEPOSIT: '정기적금',
};

const sampleProductList: IProduct[] = [
  {
    productId: '00a97e09-9e28-4b2f-8a00-2aa69745fa0b',
    name: '보통예금',
    description: '예시 설명',
    minAmount: 0,
    maxAmount: 1000000,
    rate: null,
    productType: 'ORDINARY_DEPOSIT',
    paymentType: 'SIMPLE',
    isDone: false,
    createdAt: '2024-03-27 14:22',
    updatedAt: '2024-03-27 14:22',
  },
];

function ProductList({
  route,
  navigation,
}: ProductListScreenProps): React.JSX.Element {
  const {type} = route.params;
  const {data} = useQuery({queryKey: ['ProductList'], queryFn: getProductList});

  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack={`${productTypeName[type]} 상품목록`}
        goBack={() => navigation.popToTop()}
        menu={[{title: 'close', onPress: () => navigation.pop()}]}
      />
      <ScrollView className="w-full">
        {sampleProductList && (
          <View className="w-full flex py-12 px-6 space-y-4">
            <View className="w-full h-10 bg-pink-200 rounded-xl flex justify-center px-6 shadow-sm shadow-black">
              <Text className="text-base font-semibold">{`상품 ${sampleProductList.length}개`}</Text>
            </View>
            {sampleProductList.map((product: IProduct) => (
              <View className="w-full h-36" key={product.productId}>
                <ProductListItem
                  product={product}
                  link={() => navigation.navigate('CreateAccount', {product})}
                />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export default ProductList;
