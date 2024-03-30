// import ProductListItem from '@/components/ProductListItem';
import Header from '@/components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScrollView, View, Text, Pressable} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {RootStackParamList} from '@/Router';
import {getProductList} from '@/api/product';
import ProductListItem from '@/components/ProductListItem';
import {useState} from 'react';
import clsx from 'clsx';
import {IProduct, ProductType} from '@/models';
import {useRecoilValue} from 'recoil';
import {bankDataAtom} from '@/store/atoms';

type ProductListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ProductList'
>;

function ProductList({
  route,
  navigation,
}: ProductListScreenProps): React.JSX.Element {
  const {productType} = route.params;
  const bankData = useRecoilValue(bankDataAtom);
  const [type, setType] = useState<ProductType>(productType);
  const {data} = useQuery({
    queryKey: ['ProductList', bankData.bankId, type],
    queryFn: () => {
      return getProductList({
        bankId: bankData.bankId,
        productType: type,
        isDone: false,
      });
    },
  });
  console.log(data);

  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack={'상품목록'}
        goBack={() => navigation.popToTop()}
        menu={[{title: 'close', onPress: () => navigation.pop()}]}
      />
      <View className="w-full h-14 flex flex-row justify-around items-end bg-gray-100">
        <Pressable
          onPress={() => setType('ORDINARY_DEPOSIT')}
          className={clsx(
            type === 'ORDINARY_DEPOSIT'
              ? 'border-x-2 border-t-2 border-pink-200 bg-gray-100'
              : 'border border-gray-300 bg-gray-200',
            'flex-grow h-10 flex justify-center items-center ',
          )}>
          <Text className="text-xl font-medium">입출금통장</Text>
        </Pressable>
        <Pressable
          onPress={() => setType('TERM_DEPOSIT')}
          className={clsx(
            type === 'TERM_DEPOSIT'
              ? 'border-x-2 border-t-2 border-pink-200 bg-gray-100'
              : 'border border-gray-300 bg-gray-200',
            'flex-grow h-10 flex justify-center items-center ',
          )}>
          <Text className="text-xl font-medium">정기예금</Text>
        </Pressable>
        <Pressable
          onPress={() => setType('FIXED_DEPOSIT')}
          className={clsx(
            type === 'FIXED_DEPOSIT'
              ? 'border-x-2 border-t-2 border-pink-200 bg-gray-100'
              : 'border border-gray-300 bg-gray-200',
            'flex-grow h-10 flex justify-center items-center ',
          )}>
          <Text className="text-xl font-medium">정기적금</Text>
        </Pressable>
      </View>
      <ScrollView className="w-full flex-grow flex bg-gray-200">
        {data && (
          <View className="w-full flex flex-grow pb-4 px-1 space-y-4 bg-gray-200">
            {data.page?.content?.map((product: IProduct) => (
              <View className="w-full h-40" key={product.productId}>
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
