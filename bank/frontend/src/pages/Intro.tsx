import {Image, Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import PiggyBank2 from '../../assets/piggy-bank2.png';
import BottomPopup from '../components/BottomPopup';
import CommonInput from '../components/CommonInput';
import BottomButton from '../components/BottomButton';
import {useEffect, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type IntroScreenProps = NativeStackScreenProps<RootStackParamList, 'Intro'>;

function Intro({navigation}: IntroScreenProps): React.JSX.Element {
  const [loginModalOpen, setLoginModalOpen] = useState<boolean>(false);
  useEffect(() => {
    setLoginModalOpen(false);
  }, []);

  return (
    <View className="w-full h-full bg-gray-100">
      <Header
        menu={[
          {title: 'magnify', onPress: () => navigation.navigate('Search')},
          {title: 'menu', onPress: () => navigation.navigate('Menu')},
        ]}
      />
      <View className="w-full h-80 flex-grow bg-gray-100 pt-36 px-6 pb-24 flex justify-between">
        <View className="w-full flex px-4 space-y-2">
          <Text className="w-full font-semibold text-xl text-gray-700">
            조아은행에
          </Text>
          <Text className="w-full font-semibold text-xl text-gray-700">
            오신 것을 환영합니다.
          </Text>
        </View>
        <View className="w-full flex space-y-4 relative">
          <Image
            source={PiggyBank2}
            className="w-36 h-36 absolute -top-24 -right-4 z-10"
          />
          <TouchableOpacity
            onPress={() => navigation.push('Join')}
            className="w-full h-24 bg-pink-200 shadow-sm shadow-black flex flex-row space-x-8 items-center px-8">
            <Icon
              name={'account-outline'}
              color={'#777'}
              onPress={() => {}}
              size={30}
            />
            <View className="flex space-y-2">
              <Text className="font-bold text-lg text-gray-700">회원가입</Text>
              <Text className="font-semibold text-xs text-gray-700">
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
              <Text className="font-bold text-lg text-gray-700">로그인</Text>
              <Text className="font-semibold text-xs text-gray-700">
                이미 조아은행을 사용하고 계신가요?
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      {loginModalOpen && (
        <BottomPopup close={() => setLoginModalOpen(false)}>
          <View className="w-full flex flex-grow space-y-8">
            <CommonInput label={'이메일'} />
            <CommonInput label={'비밀번호'} />
            <View className="w-full flex flex-row justify-center space-x-8">
              <TouchableOpacity onPress={() => navigation.navigate('Join')}>
                <Text className="text-gray-700">회원가입</Text>
              </TouchableOpacity>
              <Text className="text-gray-700">|</Text>
              <TouchableOpacity>
                <Text className="text-gray-700">비밀번호 찾기</Text>
              </TouchableOpacity>
            </View>
          </View>
          <BottomButton
            title={'로그인'}
            onPress={() => navigation.replace('Main')}
          />
        </BottomPopup>
      )}
    </View>
  );
}

export default Intro;
