import {Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

function ChangePasswordVerify(): React.JSX.Element {
  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="휴대폰 인증"
        menu={[{title: 'close', onPress: () => {}}]}
      />
      <View className="flex flex-grow justify-center items-center space-y-2">
        <View className="w-14 h-14 m-6 bg-pink-300 rounded-full flex justify-center items-center">
          <Icon
            name={'cellphone-check'}
            color={'#fff'}
            onPress={() => {}}
            size={35}
          />
        </View>
        <Text className="text-2xl font-medium">인증번호를 입력해주세요</Text>
        <View className="flex flex-row space-x-2 pt-2">
          <View className="w-14 h-14 flex justify-center items-center rounded-lg border border-gray-300 shadow-sm">
            <Text className="text-4xl font-medium">?</Text>
          </View>
          <View className="w-14 h-14 flex justify-center items-center rounded-lg border border-gray-300 shadow-sm">
            <Text className="text-4xl font-medium">?</Text>
          </View>
          <View className="w-14 h-14 flex justify-center items-center rounded-lg border border-gray-300 shadow-sm">
            <Text className="text-4xl font-medium">?</Text>
          </View>
          <View className="w-14 h-14 flex justify-center items-center rounded-lg border border-gray-300 shadow-sm">
            <Text className="text-4xl font-medium">?</Text>
          </View>
        </View>
      </View>
      <View className="w-full h-16">
        {/* <View className="w-full h-full bg-pink-200 flex justify-center items-center shadow-sm shadow-black">
          <Text className="text-2xl font-semibold">확인</Text>
        </View> */}
      </View>
      <View className="px-8 py-4">
        <View className="flex flex-row justify-around">
          <TouchableOpacity className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">1</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">2</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">3</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-around">
          <TouchableOpacity className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">4</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">5</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">6</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-around">
          <TouchableOpacity className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">7</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">8</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">9</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-around">
          <View className="w-20 h-20 flex justify-center items-center " />
          <TouchableOpacity className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">0</Text>
          </TouchableOpacity>
          <TouchableOpacity className="w-20 h-20 flex justify-center items-center ">
            <Icon
              name={'arrow-left'}
              color={'#9ca3af'}
              onPress={() => {}}
              size={36}
            />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default ChangePasswordVerify;
