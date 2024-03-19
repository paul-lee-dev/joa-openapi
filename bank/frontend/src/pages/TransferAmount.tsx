import {Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function TransferAmount(): React.JSX.Element {
  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header stack="이체" menu={[{title: 'close', onPress: () => {}}]} />
      <View className="flex flex-grow justify-center space-y-8 pb-8s px-8">
        <View className="flex space-y-2">
          <View className="flex flex-row">
            <Text className="text-2xl font-bold">저금예금[입출금]</Text>
            <Text className="text-2xl font-medium">에서</Text>
          </View>
          <Text className="text-sm font-medium">잔액 1,001,220원</Text>
        </View>
        <View className="flex space-y-2">
          <View className="flex flex-row">
            <Text className="text-2xl font-bold">내 입출금통장</Text>
            <Text className="text-2xl font-medium">으로</Text>
          </View>
          <Text className="text-sm font-medium">신한은행 1234-12-123-1234</Text>
        </View>
        <View className="flex space-y-2">
          <Text className="w-full text-2xl font-bold">금액 입력</Text>
          <TouchableOpacity className="w-full flex">
            <Text className="text-sm font-medium inline self-start py-1 px-2 -mx-1 rounded-full bg-pink-100">
              잔액 1,001,220원 입력
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-full h-16">
        {/* <View className="w-full h-full bg-pink-200 flex justify-center items-center shadow-sm shadow-black">
          <Text className="text-2xl font-semibold">확인</Text>
        </View> */}
      </View>
      <View className="px-8 py-4">
        <View className="flex flex-row justify-around">
          <View className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">1</Text>
          </View>
          <View className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">2</Text>
          </View>
          <View className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">3</Text>
          </View>
        </View>
        <View className="flex flex-row justify-around">
          <View className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">4</Text>
          </View>
          <View className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">5</Text>
          </View>
          <View className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">6</Text>
          </View>
        </View>
        <View className="flex flex-row justify-around">
          <View className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">7</Text>
          </View>
          <View className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">8</Text>
          </View>
          <View className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">9</Text>
          </View>
        </View>
        <View className="flex flex-row justify-around">
          <View className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">00</Text>
          </View>
          <View className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">0</Text>
          </View>
          <View className="w-20 h-20 flex justify-center items-center ">
            <Icon
              name={'arrow-left'}
              color={'#9ca3af'}
              onPress={() => {}}
              size={36}
            />
          </View>
        </View>
      </View>
    </View>
  );
}

export default TransferAmount;
