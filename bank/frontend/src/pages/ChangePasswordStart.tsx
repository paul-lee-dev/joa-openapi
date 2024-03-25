import BottomButton from '@/components/BottomButton';
import Header from '@/components/Header';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function ChangePasswordStart(): React.JSX.Element {
  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="계좌 비밀번호 재설정"
        menu={[{title: 'close', onPress: () => {}}]}
      />
      <View className="w-full flex-grow mb-16">
        <View className="flex flex-grow justify-center items-center space-y-2">
          <View className="w-14 h-14 m-6 bg-pink-300 rounded-full flex justify-center items-center">
            <Icon
              name={'lock-outline'}
              color={'#fff'}
              onPress={() => {}}
              size={35}
            />
          </View>
          <View className="flex flex-row">
            <Text className="text-2xl font-bold">내 입출금통장</Text>
            <Text className="text-2xl font-medium">의</Text>
          </View>
          <Text className="text-2xl font-medium">비밀번호를 변경하시려면</Text>
          <Text className="text-2xl font-medium">휴대폰 인증이 필요합니다</Text>
        </View>
        <View className="h-48 flex justify-evenly">
          <View className="flex flex-row justify-between px-6">
            <Text className="font-bold text-sm">변경할 계좌</Text>
            <Text className="font-semibold text-sm">
              신한은행 1234121231234
            </Text>
          </View>
          <View className="flex flex-row justify-between px-6">
            <Text className="font-bold text-sm">휴대폰 번호</Text>
            <Text className="font-semibold text-sm">010-1234-1234</Text>
          </View>
        </View>
      </View>
      <BottomButton title={'인증번호 전송'} />
    </View>
  );
}

export default ChangePasswordStart;
