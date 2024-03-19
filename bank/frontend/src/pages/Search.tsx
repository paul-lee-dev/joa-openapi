import {ScrollView, Text, TextInput, View} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import ToggleSwitch from '../components/ToggleSwitch';
import {useState} from 'react';

function Search(): React.JSX.Element {
  const [isAutosave, setIsAutosave] = useState<boolean>(true);
  const toggleAutosave = () => setIsAutosave(previousState => !previousState);

  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="통합검색"
        menu={[
          {title: 'home-outline', onPress: () => {}},
          {title: 'menu', onPress: () => {}},
        ]}
      />
      <View className="w-full h-32 flex flex-row justify-center items-center p-6">
        <View className="flex-grow border-b border-gray-300 flex flex-row items-center justify-between">
          <TextInput
            placeholder="메뉴, 상품을 찾아보세요"
            className="text-xl font-medium"
          />
          <Icon name={'magnify'} color={'#000'} onPress={() => {}} size={30} />
        </View>
      </View>
      <ScrollView className="w-full flex-grow">
        <View className="w-full bg-gray-200 flex space-y-6">
          <View className="w-full h-40 bg-gray-100">
            <View className="w-full flex flex-row justify-between items-center px-8">
              <Text className="text-xl font-medium">최근검색어</Text>
              <View className="flex flex-row justify-between items-center">
                <Text className="text-sm font-medium">자동저장</Text>
                <ToggleSwitch
                  isEnabled={isAutosave}
                  toggleSwitch={toggleAutosave}
                />
              </View>
            </View>
            <View className="w-full flex-grow flex">
              <View className="w-full flex-grow flex justify-center items-center">
                <Text className="text-sm font-medium">
                  최근 검색내역이 없습니다.
                </Text>
              </View>
            </View>
          </View>
          <View className="w-full bg-gray-100">
            <View className="px-10 py-6">
              <Text className="text-xl font-medium">검색결과</Text>
            </View>
            <View className="w-full h-40 flex justify-center items-center">
              <Text className="text-sm font-medium">검색결과가 없습니다.</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Search;
