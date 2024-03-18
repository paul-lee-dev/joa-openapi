import {Image, Text, View} from 'react-native';
import Header from './Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PiggyBank2 from '../assets/piggy-bank2.png';

function Intro(): React.JSX.Element {
  return (
    <View className="w-full h-full bg-gray-100">
      <Header
        stack={false}
        menu={[
          {title: 'search', onPress: () => {}},
          {title: 'menu', onPress: () => {}},
        ]}
      />
      <View className="w-full h-80 flex-grow bg-gray-100 pt-36 px-6 pb-24 flex justify-between">
        <View className="w-full flex px-4 space-y-2">
          <Text className="w-full font-semibold text-xl">조아은행에</Text>
          <Text className="w-full font-semibold text-xl">
            오신 것을 환영합니다.
          </Text>
        </View>
        <View className="w-full flex space-y-4">
          <View className="w-full h-24 bg-pink-200 shadow-sm shadow-black flex flex-row space-x-8 items-center px-8 relative">
            <Image
              source={PiggyBank2}
              className="w-36 h-36 absolute -top-24 -right-4"
            />
            <Icon
              name={'person-outline'}
              color={'#777'}
              onPress={() => {}}
              size={30}
            />
            <View className="flex space-y-2">
              <Text className="font-bold text-lg">회원가입</Text>
              <Text className="font-semibold text-xs">
                조아은행이 처음이신가요?
              </Text>
            </View>
          </View>
          <View className="w-full h-24 bg-gray-200 shadow-sm shadow-black flex flex-row space-x-8 items-center px-8">
            <Icon name={'login'} color={'#777'} onPress={() => {}} size={30} />
            <View className="flex space-y-2">
              <Text className="font-bold text-lg">로그인</Text>
              <Text className="font-semibold text-xs">
                이미 조아은행을 사용하고 계신가요?
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}

export default Intro;
