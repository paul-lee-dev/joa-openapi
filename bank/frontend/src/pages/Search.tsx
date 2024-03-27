import {ScrollView, Text, TextInput, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Header from '@/components/Header';
import ToggleSwitch from '@/components/ToggleSwitch';
import {RootStackParamList} from '@/Router';

type SearchScreenProps = NativeStackScreenProps<RootStackParamList, 'Search'>;

function Search({navigation}: SearchScreenProps): React.JSX.Element {
  const [isAutosave, setIsAutosave] = useState<boolean>(true);
  const [keyword, setKeyword] = useState<string>('');
  const toggleAutosave = () => setIsAutosave(previousState => !previousState);

  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="통합검색"
        goBack={() => navigation.popToTop()}
        menu={[
          {title: 'home-outline', onPress: () => navigation.popToTop()},
          {title: 'menu', onPress: () => navigation.push('Menu')},
        ]}
      />
      <View className="w-full h-32 flex flex-row justify-center items-center p-6">
        <View className="flex-grow border-b border-gray-300 flex flex-row items-center justify-between">
          <TextInput
            placeholder="메뉴, 상품을 찾아보세요"
            placeholderTextColor="#374151"
            className="text-xl font-medium text-gray-700"
            onChangeText={setKeyword}
            value={keyword}
          />
          <Icon name={'magnify'} color={'#000'} size={30} />
        </View>
      </View>
      <ScrollView className="w-full flex-grow">
        <View className="w-full bg-gray-200 flex space-y-6">
          <View className="w-full h-40 bg-gray-100">
            <View className="w-full flex flex-row justify-between items-center px-8">
              <Text className="text-xl font-medium text-gray-700">
                최근검색어
              </Text>
              <View className="flex flex-row justify-between items-center">
                <Text className="text-sm font-medium text-gray-700">
                  자동저장
                </Text>
                <ToggleSwitch
                  isEnabled={isAutosave}
                  toggleSwitch={toggleAutosave}
                />
              </View>
            </View>
            <View className="w-full flex-grow flex">
              <View className="w-full flex-grow flex justify-center items-center">
                <Text className="text-sm font-medium text-gray-700">
                  최근 검색내역이 없습니다.
                </Text>
              </View>
            </View>
          </View>
          <View className="w-full bg-gray-100">
            <View className="px-10 py-6">
              <Text className="text-xl font-medium text-gray-700">
                검색결과
              </Text>
            </View>
            <View className="w-full h-40 flex justify-center items-center">
              <Text className="text-sm font-medium text-gray-700">
                검색결과가 없습니다.
              </Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Search;
