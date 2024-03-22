import BottomButton from '@/components/BottomButton';
import Header from '@/components/Header';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function ChangePasswordResult(): React.JSX.Element {
  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="계좌 비밀번호 재설성"
        menu={[{title: 'close', onPress: () => {}}]}
      />
      <View className="w-full flex-grow mb-16">
        <View className="flex flex-grow justify-center items-center space-y-2 pb-40">
          <View className="w-14 h-14 m-6 bg-pink-300 rounded-full flex justify-center items-center">
            <Icon
              name={'lock-check-outline'}
              color={'#fff'}
              onPress={() => {}}
              size={35}
            />
          </View>
          <View className="flex flex-row">
            <Text className="text-2xl font-bold">내 입출금통장</Text>
            <Text className="text-2xl font-medium">의</Text>
          </View>
          <Text className="text-2xl font-medium">비밀번호를 재설정했어요</Text>
        </View>
      </View>
      <BottomButton title={'확인'} />
    </View>
  );
}

export default ChangePasswordResult;
