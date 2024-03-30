import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Header from '@/components/Header';
import BottomButton from '@/components/BottomButton';
import {RootStackParamList} from '@/Router';
import {formatAmount, getProductTypeName} from '@/utils';
import BottomPopup from '@/components/BottomPopup';
import {useState} from 'react';
import {ProductPaymentTypeName} from '@/models';

type CreateAccountScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CreateAccount'
>;

function CreateAccount({
  route,
  navigation,
}: CreateAccountScreenProps): React.JSX.Element {
  const {product} = route.params;
  const [detailModalOpen, setDetailModalOpen] = useState<boolean>(false);

  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="계좌 개설"
        goBack={() => navigation.pop()}
        menu={[{title: 'close', onPress: () => navigation.popToTop()}]}
      />
      <ScrollView className="w-full flex-grow mb-16">
        <View>
          <View className="w-full bg-purple-400 flex space-y-8 items-center p-8 justify-between">
            <View className="w-full flex space-y-3">
              <Text className="text-lg font-medium text-gray-50">
                {getProductTypeName(product.productType)!.title}
              </Text>
              <Text className="text-4xl text-gray-50">{product.name}</Text>
            </View>
            <View className="w-full px-4 flex flex-row items-center justify-around">
              <View className="flex items-center space-y-1">
                <Icon
                  name={'sack-percent'}
                  color={'#eee'}
                  onPress={() => {}}
                  size={50}
                />
                <Text className="text-xs text-gray-50">이자율</Text>
                <Text className="text-lg text-gray-50 font-bold">{`연 ${product.rate}%`}</Text>
              </View>
              <View className="flex items-center space-y-1">
                <Icon
                  name={'piggy-bank'}
                  color={'#eee'}
                  onPress={() => {}}
                  size={50}
                />
                <Text className="text-xs text-gray-50">지급방식</Text>
                <Text className="text-lg text-gray-50 font-bold">
                  {ProductPaymentTypeName[product.paymentType]}
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={() => setDetailModalOpen(true)}
              className="w-80 h-14 bg-purple-900/70 flex justify-center items-center">
              <Text className="text-xl text-gray-50 font-medium">
                자세히보기
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-full flex p-6">
            <Text className="text-2xl mb-4 font-semibold text-gray-700">
              {getProductTypeName(product.productType)!.description}
            </Text>
            <Text className="text-base font-medium text-gray-700">
              {product.description}
            </Text>
          </View>
        </View>
      </ScrollView>
      <BottomButton
        title={'신청하기'}
        onPress={() => navigation.navigate('CreateAccountConfirm', {product})}
      />
      {detailModalOpen && (
        <BottomPopup close={() => setDetailModalOpen(false)}>
          <View className="w-full p-6 flex space-y-2">
            <View className="w-full flex flex-row justify-between">
              <Text className="text-base font-semibold">상품분류</Text>
              <Text>{getProductTypeName(product.productType)!.title}</Text>
            </View>
            <View className="w-full flex flex-row justify-between">
              <Text className="text-base font-semibold">상품명</Text>
              <Text>{product.name}</Text>
            </View>
            <View className="w-full flex flex-row justify-between">
              <Text className="text-base font-semibold">종료여부</Text>
              <Text>{product.isDone ? 'Y' : 'N'}</Text>
            </View>
            <View className="w-full flex flex-row justify-between">
              <Text className="text-base font-semibold">저축 최소한도</Text>
              <Text>{`${formatAmount(product.minAmount)}원`}</Text>
            </View>
            <View className="w-full flex flex-row justify-between">
              <Text className="text-base font-semibold">저축 최대한도</Text>
              <Text>{`${formatAmount(product.maxAmount)}원`}</Text>
            </View>
            <View className="w-full flex flex-row justify-between">
              <Text className="text-base font-semibold">이자율</Text>
              <Text>{`연 ${product.rate}%`}</Text>
            </View>
            <View className="w-full flex flex-row justify-between">
              <Text className="text-base font-semibold">지급방식</Text>
              <Text>{ProductPaymentTypeName[product.paymentType]}</Text>
            </View>
          </View>
          <BottomButton
            title={'확인'}
            onPress={() => setDetailModalOpen(false)}
          />
        </BottomPopup>
      )}
    </View>
  );
}

export default CreateAccount;
