import {ScrollView, Text, TextInput, View} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import AccountItem from '../components/AccountItem';

function Transfer(): React.JSX.Element {
  return (
    <View className="w-full h-full bg-gray-100">
      <Header stack="이체" menu={[{title: 'close', onPress: () => {}}]} />
      <View className="w-full h-36 border-t border-b border-gray-300 my-6 flex justify-evenly py-2 px-6">
        <View className="w-full">
          <Text className="font-semibold text-base">저축예금[입출금]</Text>
        </View>
        <View className="w-full flex flex-row items-center space-x-2">
          <Text className="text-2xl underline text-gray-400">
            123-123456-12-123
          </Text>
          <Icon
            name={'chevron-down'}
            color={'#777'}
            onPress={() => {}}
            size={20}
          />
        </View>
        <View className="w-full flex items-end">
          <Text>출금가능금액: 1,001,220원</Text>
        </View>
      </View>
      <View className="h-24 w-full p-6">
        <View className="w-full border-b border-gray-400 flex flex-row items-center pr-2">
          <TextInput
            placeholder="계좌번호 입력"
            className="flex-grow text-2xl px-4"
          />
          <Icon
            name={'camera-outline'}
            color={'#777'}
            onPress={() => {}}
            size={30}
          />
        </View>
      </View>
      <ScrollView className="w-full">
        <View className="w-full flex">
          <View className="w-full">
            <View className="w-full flex flex-row justify-between items-center px-6 py-4">
              <Text className="font-bold text-base px-2">내 계좌</Text>
              <Icon
                name={'chevron-down'}
                color={'#777'}
                onPress={() => {}}
                size={30}
              />
            </View>
            <AccountItem />
            <AccountItem />
          </View>
          <View className="w-full">
            <View className="w-full flex flex-row justify-between items-center px-6 py-4">
              <Text className="font-bold text-bas px-2">최근 거래 계좌</Text>
              <Icon
                name={'chevron-down'}
                color={'#777'}
                onPress={() => {}}
                size={30}
              />
            </View>
            <AccountItem />
            <AccountItem />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default Transfer;
