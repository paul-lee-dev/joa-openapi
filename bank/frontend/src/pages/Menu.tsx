import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import clsx from 'clsx';
import Header from '@/components/Header';
import {RootStackParamList} from '@/Router';
import {memberDataAtom} from '@/store/atoms';
import {useRecoilState} from 'recoil';

type MenuScreenProps = NativeStackScreenProps<RootStackParamList, 'Menu'>;
type MenuType = '뱅킹' | '이체' | '조회';

function Menu({navigation}: MenuScreenProps): React.JSX.Element {
  const [memberData, setMemberData] = useRecoilState(memberDataAtom);
  const [keyword, setKeyword] = useState<string>('');
  const [menu, setMenu] = useState<MenuType>('뱅킹');
  const detailMenu = {
    뱅킹: [
      {
        title: '입출금 계좌 개설',
        onPress: () => navigation.navigate('CreateAccount'),
      },
      {title: '예적금 상품 조회', onPress: () => {}},
      {title: '계좌 관리', onPress: () => navigation.navigate('AccountList')},
      {
        title: '이체한도변경',
        onPress: () => navigation.navigate('AccountList'),
      },
      {
        title: '계좌 비밀번호 변경',
        onPress: () => navigation.navigate('AccountList'),
      },
    ],
    이체: [
      {title: '이체', onPress: () => {}},
      {title: '이체결과 조회', onPress: () => {}},
      {title: '이체한도 조회/변경', onPress: () => {}},
    ],
    조회: [
      {
        title: '전체계좌 조회',
        onPress: () => navigation.navigate('AccountList'),
      },
      {title: '통합거래내역 조회', onPress: () => {}},
      {
        title: '휴면계좌 조회',
        onPress: () => navigation.navigate('AccountList'),
      },
      {
        title: '해지계좌 조회',
        onPress: () => navigation.navigate('AccountList'),
      },
    ],
  };

  const logout = () => {
    setMemberData({isLogin: false, member: null});
    navigation.popToTop();
  };

  return (
    <View className="w-full h-full bg-gray-100">
      <Header
        menu={[
          {title: 'cog-outline', onPress: () => navigation.navigate('Setting')},
          {title: 'close', onPress: () => navigation.pop()},
        ]}
      />
      <View className="w-full h-32">
        {memberData.isLogin ? (
          <View className="w-full h-full flex justify-around">
            <View className="w-full px-8 flex flex-row justify-between items-center">
              <View className="flex flex-row items-end space-x-2">
                <Text className="text-2xl font-bold text-gray-700">
                  {memberData.member?.name}
                </Text>
                <Text className="text-lg font-medium text-gray-700">
                  님, 안녕하세요!
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => navigation.navigate('EditProfile')}>
                <Text className="text-gray-400 text-sm">회원정보수정</Text>
              </TouchableOpacity>
            </View>
            <View className="w-full">
              <View className="w-full flex flex-row items-center justify-center space-x-6">
                <TouchableOpacity
                  onPress={() => navigation.navigate('AccountList')}>
                  <Text className="text-sm font-medium text-gray-700">
                    내 계좌 보기
                  </Text>
                </TouchableOpacity>
                <Text className="text-sm font-medium text-gray-700">|</Text>
                <TouchableOpacity onPress={logout}>
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
                <TouchableOpacity onPress={() => navigation.popToTop()}>
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
          onChangeText={setKeyword}
          value={keyword}
        />
      </View>
      <View className="w-full flex-grow flex flex-row">
        <View className="w-28 h-full bg-gray-200 py-4">
          <View className="w-full h-16 flex justify-center">
            <Pressable
              onPress={() => setMenu('뱅킹')}
              className={clsx(
                'w-[110%] z-10 ml-4 px-4 py-2 rounded-full',
                menu === '뱅킹' && 'bg-pink-200 shadow-sm shadow-black',
              )}>
              <Text className="text-xl font-medium text-gray-700">뱅킹</Text>
            </Pressable>
          </View>
          <View className="w-full h-16 flex justify-center">
            <Pressable
              onPress={() => setMenu('이체')}
              className={clsx(
                'w-[110%] z-10 ml-4 px-4 py-2 rounded-full',
                menu === '이체' && 'bg-pink-200 shadow-sm shadow-black',
              )}>
              <Text className="text-xl font-medium text-gray-700">이체</Text>
            </Pressable>
          </View>
          <View className="w-full h-16 flex justify-center">
            <Pressable
              onPress={() => setMenu('조회')}
              className={clsx(
                'w-[110%] z-10 ml-4 px-4 py-2 rounded-full',
                menu === '조회' && 'bg-pink-200 shadow-sm shadow-black',
              )}>
              <Text className="text-xl font-medium text-gray-700">조회</Text>
            </Pressable>
          </View>
        </View>
        <ScrollView className="flex-grow -z-10">
          <View className="w-full py-4">
            {detailMenu[menu].map(m => (
              <View key={m.title} className="w-full h-16 flex justify-center">
                <TouchableOpacity
                  onPress={m.onPress}
                  className="px-2 pl-12 py-2">
                  <Text className="text-lg font-medium text-gray-700">
                    {m.title}
                  </Text>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Menu;
