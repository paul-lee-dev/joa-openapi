import BottomButton from '@/components/BottomButton';
import Header from '@/components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/Router';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type CreateAccountResultScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CreateAccountResult'
>;

function CreateAccountResult({
  route,
  navigation,
}: CreateAccountResultScreenProps): React.JSX.Element {
  const {account} = route.params;
  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="계좌 개설"
        menu={[{title: 'close', onPress: () => navigation.popToTop()}]}
      />
      <View className="w-full flex-grow mb-16">
        <View className="flex flex-grow justify-center items-center space-y-2 pb-20">
          <View className="w-14 h-14 m-6 bg-pink-300 rounded-full flex justify-center items-center">
            <Icon
              name={'card-account-details-outline'}
              color={'#fff'}
              size={35}
            />
          </View>
          <View className="flex flex-row">
            <Text className="text-2xl font-bold text-gray-700">{`내 ${account.nickname}`}</Text>
            <Text className="text-2xl font-medium text-gray-700">을</Text>
          </View>
          <Text className="text-2xl font-medium text-gray-700">
            성공적으로 개설했어요
          </Text>
        </View>
        <View className="h-32 flex justify-evenly">
          <View className="flex flex-row justify-between px-6">
            <Text className="font-bold text-sm text-gray-700">계좌 이름</Text>
            <Text className="font-semibold text-sm text-gray-700">
              {account.nickname}
            </Text>
          </View>
          <View className="flex flex-row justify-between px-6">
            <Text className="font-bold text-sm text-gray-700">계좌번호</Text>
            <Text className="font-semibold text-sm text-gray-700">
              {`조아은행 ${account.accountId}`}
            </Text>
          </View>
        </View>
      </View>
      <BottomButton title={'확인'} onPress={() => navigation.popToTop()} />
    </View>
  );
}

export default CreateAccountResult;
