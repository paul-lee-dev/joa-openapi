import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import BottomButton from '../components/BottomButton';
import CommonInput from '../components/CommonInput';

function ChangePassword(): React.JSX.Element {
  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="새로운 비밀번호 입력"
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
          <Text className="text-2xl font-medium">
            새로운 비밀번호를 입력해주세요
          </Text>
        </View>
        <View className="h-80 flex justify-evenly">
          <CommonInput label={'비밀번호'}>
            <View className="w-full relative">
              <TextInput className="border-b border-gray-800/50" />
              <TouchableOpacity className="absolute right-0 top-0 translate-y-3 p-2">
                <Icon
                  name={'eye-off-outline'}
                  color={'#777'}
                  onPress={() => {}}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </CommonInput>
          <CommonInput label={'비밀번호 확인'}>
            <View className="w-full relative">
              <TextInput className="border-b border-gray-800/50" />
              <TouchableOpacity className="absolute right-0 top-0 translate-y-3 p-2">
                <Icon
                  name={'eye-off-outline'}
                  color={'#777'}
                  onPress={() => {}}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </CommonInput>
        </View>
      </View>
      <BottomButton title={'비밀번호 변경'} />
    </View>
  );
}

export default ChangePassword;
