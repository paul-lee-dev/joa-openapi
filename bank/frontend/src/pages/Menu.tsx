import {ScrollView, Text, TextInput, View} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Menu(): React.JSX.Element {
  return (
    <View className="w-full h-full bg-gray-100">
      <Header
        menu={[
          {title: 'settings', onPress: () => {}},
          {title: 'close', onPress: () => {}},
        ]}
      />
      <View className="w-full h-32">
        {/* <View className="w-full h-full flex justify-center items-center space-y-4">
          <View className="w-full justify-center items-center">
            <Text className="text-lg font-medium">
              로그인이 필요한 서비스입니다.
            </Text>
          </View>
          <View className="w-full">
            <View className="w-full flex flex-row items-center justify-center space-x-6">
              <Text className="text-sm font-medium">로그인</Text>
              <Text className="text-sm font-medium">|</Text>
              <Text className="text-sm font-medium">회원가입</Text>
            </View>
          </View>
        </View> */}
        <View className="w-full h-full flex justify-around">
          <View className="w-full px-8 flex flex-row justify-between items-center">
            <View className="flex flex-row items-end space-x-2">
              <Text className="text-2xl font-bold">이유로</Text>
              <Text className="text-lg font-medium">님, 안녕하세요!</Text>
            </View>
            <Text className="text-gray-400 text-sm">회원정보수정</Text>
          </View>
          <View className="w-full">
            <View className="w-full flex flex-row items-center justify-center space-x-6">
              <Text className="text-sm font-medium">내 계좌 보기</Text>
              <Text className="text-sm font-medium">|</Text>
              <Text className="text-sm font-medium">로그아웃</Text>
            </View>
          </View>
        </View>
      </View>
      <View className="w-full h-14 border-4 border-gray-300 flex flex-row items-center px-4">
        <Icon name={'search'} color={'#444'} onPress={() => {}} size={40} />
        <TextInput
          className="px-4 text-xl font-bold"
          placeholder="메뉴를 검색해보세요."
        />
      </View>
      <View className="w-full flex-grow flex flex-row">
        <View className="w-36 h-full bg-gray-200 py-4">
          <View className="w-full h-16 flex justify-center">
            <View className="w-[110%] z-10 ml-4 bg-pink-200 px-4 py-2 rounded-full shadow-sm shadow-black">
              <Text className="text-xl font-medium">뱅킹 관리</Text>
            </View>
          </View>
          <View className="w-full h-16 flex justify-center">
            <View className="w-[110%] z-10 ml-4 px-4 py-2 rounded-full">
              <Text className="text-xl font-medium">이체</Text>
            </View>
          </View>
          <View className="w-full h-16 flex justify-center">
            <View className="w-[110%] z-10 ml-4 px-4 py-2 rounded-full">
              <Text className="text-xl font-medium">조회</Text>
            </View>
          </View>
        </View>
        <ScrollView className="flex-grow -z-10">
          <View className="w-full py-4">
            <View className="w-full h-16 flex justify-center">
              <View className="px-2 pl-12 py-2">
                <Text className="text-lg font-medium">계좌 개설</Text>
              </View>
            </View>
            <View className="w-full h-16 flex justify-center">
              <View className="px-2 pl-12 py-2">
                <Text className="text-lg font-medium">계좌 해지</Text>
              </View>
            </View>
            <View className="w-full h-16 flex justify-center">
              <View className="px-2 pl-12 py-2">
                <Text className="text-lg font-medium">이체한도변경</Text>
              </View>
            </View>
            <View className="w-full h-16 flex justify-center">
              <View className="px-2 pl-12 py-2">
                <Text className="text-lg font-medium">계좌 비밀번호 변경</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

export default Menu;
