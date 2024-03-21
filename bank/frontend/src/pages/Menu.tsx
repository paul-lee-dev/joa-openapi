import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type MenuScreenProps = NativeStackScreenProps<RootStackParamList, 'Menu'>;

function Menu({navigation}: MenuScreenProps): React.JSX.Element {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  return (
    <View className="w-full h-full bg-gray-100">
      <Header
        menu={[
          {title: 'cog-outline', onPress: () => navigation.navigate('Setting')},
          {title: 'close', onPress: () => navigation.pop()},
        ]}
      />
      <View className="w-full h-32">
        {isLogin ? (
          <View className="w-full h-full flex justify-around">
            <View className="w-full px-8 flex flex-row justify-between items-center">
              <View className="flex flex-row items-end space-x-2">
                <Text className="text-2xl font-bold text-gray-700">이유로</Text>
                <Text className="text-lg font-medium text-gray-700">
                  님, 안녕하세요!
                </Text>
              </View>
              <TouchableOpacity>
                <Text className="text-gray-400 text-sm">회원정보수정</Text>
              </TouchableOpacity>
            </View>
            <View className="w-full">
              <View className="w-full flex flex-row items-center justify-center space-x-6">
                <TouchableOpacity>
                  <Text className="text-sm font-medium text-gray-700">
                    내 계좌 보기
                  </Text>
                </TouchableOpacity>
                <Text className="text-sm font-medium text-gray-700">|</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Intro')}>
                  <Text className="text-sm font-medium text-gray-700">
                    로그아웃
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        ) : (
          <View className="w-full h-full flex justify-center items-center space-y-4">
            <View className="w-full justify-center items-center">
              <Text className="text-lg font-medium text-gray-700">
                로그인이 필요한 서비스입니다.
              </Text>
            </View>
            <View className="w-full">
              <View className="w-full flex flex-row items-center justify-center space-x-6">
                <TouchableOpacity onPress={() => setIsLogin(true)}>
                  <Text className="text-sm font-medium text-gray-700">
                    로그인
                  </Text>
                </TouchableOpacity>
                <Text className="text-sm font-medium text-gray-700">|</Text>
                <TouchableOpacity onPress={() => navigation.navigate('Join')}>
                  <Text className="text-sm font-medium text-gray-700">
                    회원가입
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        )}
      </View>
      <View className="w-full h-14 border-4 border-gray-300 flex flex-row items-center px-4">
        <Icon name={'magnify'} color={'#444'} size={40} />
        <TextInput
          className="px-4 text-xl font-bold text-gray-700"
          placeholder="메뉴를 검색해보세요."
          placeholderTextColor="#374151"
        />
      </View>
      <View className="w-full flex-grow flex flex-row">
        <View className="w-36 h-full bg-gray-200 py-4">
          <View className="w-full h-16 flex justify-center">
            <TouchableOpacity className="w-[110%] z-10 ml-4 bg-pink-200 px-4 py-2 rounded-full shadow-sm shadow-black">
              <Text className="text-xl font-medium text-gray-700">
                뱅킹 관리
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-full h-16 flex justify-center">
            <TouchableOpacity className="w-[110%] z-10 ml-4 px-4 py-2 rounded-full">
              <Text className="text-xl font-medium text-gray-700">이체</Text>
            </TouchableOpacity>
          </View>
          <View className="w-full h-16 flex justify-center">
            <TouchableOpacity className="w-[110%] z-10 ml-4 px-4 py-2 rounded-full">
              <Text className="text-xl font-medium text-gray-700">조회</Text>
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView className="flex-grow -z-10">
          <View className="w-full py-4">
            <View className="w-full h-16 flex justify-center">
              <TouchableOpacity className="px-2 pl-12 py-2">
                <Text className="text-lg font-medium text-gray-700">
                  계좌 개설
                </Text>
              </TouchableOpacity>
            </View>
            <View className="w-full h-16 flex justify-center">
              <TouchableOpacity className="px-2 pl-12 py-2">
                <Text className="text-lg font-medium text-gray-700">
                  계좌 해지
                </Text>
              </TouchableOpacity>
            </View>
            <View className="w-full h-16 flex justify-center">
              <TouchableOpacity className="px-2 pl-12 py-2">
                <Text className="text-lg font-medium text-gray-700">
                  이체한도변경
                </Text>
              </TouchableOpacity>
            </View>
            <View className="w-full h-16 flex justify-center">
              <TouchableOpacity className="px-2 pl-12 py-2">
                <Text className="text-lg font-medium text-gray-700">
                  계좌 비밀번호 변경
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Menu;
