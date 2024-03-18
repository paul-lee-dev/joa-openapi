import {Image, Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';
import PiggyBank2 from '../assets/piggy-bank2.png';
import BottomPopup from '../components/BottomPopup';
import CommonInput from '../components/CommonInput';
import BottomButton from '../components/BottomButton';
import {useState} from 'react';

function Intro(): React.JSX.Element {
  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  return (
    <View className="w-full h-full bg-gray-100">
      <Header
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
        <View className="w-full flex space-y-4 relative">
          <Image
            source={PiggyBank2}
            className="w-36 h-36 absolute -top-24 -right-4 z-10"
          />
          <TouchableOpacity className="w-full h-24 bg-pink-200 shadow-sm shadow-black flex flex-row space-x-8 items-center px-8">
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
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              setLoginModalOpen(true);
            }}
            className="w-full h-24 bg-gray-200 shadow-sm shadow-black flex flex-row space-x-8 items-center px-8">
            <Icon name={'login'} color={'#777'} onPress={() => {}} size={30} />
            <View className="flex space-y-2">
              <Text className="font-bold text-lg">로그인</Text>
              <Text className="font-semibold text-xs">
                이미 조아은행을 사용하고 계신가요?
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {loginModalOpen && (
        <BottomPopup>
          <View className="w-full flex flex-grow space-y-8">
            <CommonInput label={'이메일'} />
            <CommonInput label={'비밀번호'} />
            <View className="w-full flex flex-row justify-center space-x-8">
              <Text>회원가입</Text>
              <Text>|</Text>
              <Text>비밀번호 찾기</Text>
            </View>
          </View>
          <BottomButton title={'로그인'} />
        </BottomPopup>
      )}
    </View>
  );
}

export default Intro;
