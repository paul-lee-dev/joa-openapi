import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useState} from 'react';
import {RootStackParamList} from 'App';
import Header from '@/components/Header';
import AccountSelectItem from '@/components/AccountSelectItem';
import BottomButton from '@/components/BottomButton';
import {formatAmount} from '@/utils';

type TransferScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Transfer'
>;

function Transfer({navigation}: TransferScreenProps): React.JSX.Element {
  const [accountId, setAccountId] = useState<string>('');
  return (
    <View className="w-full h-full bg-gray-100">
      <Header
        stack="이체"
        goBack={() => navigation.pop()}
        menu={[{title: 'close', onPress: () => navigation.popToTop()}]}
      />
      <View className="w-full h-36 border-t border-b border-gray-300 my-6 flex justify-evenly py-2 px-6">
        <View className="w-full">
          <Text className="font-semibold text-base text-gray-700">
            저축예금[입출금]
          </Text>
        </View>
        <View className="w-full flex flex-row items-center space-x-2">
          <TouchableOpacity>
            <Text className="text-2xl underline text-gray-400">
              123-123456-12-123
            </Text>
          </TouchableOpacity>
          <Icon
            name={'chevron-down'}
            color={'#777'}
            onPress={() => {}}
            size={20}
          />
        </View>
        <View className="w-full flex items-end">
          <Text className="text-gray-700">{`출금가능금액: ${formatAmount(
            1001220,
          )}원`}</Text>
        </View>
      </View>
      <View className="h-24 w-full p-6">
        <View className="w-full border-b border-gray-400 flex flex-row items-center pr-2">
          <TextInput
            placeholder="계좌번호 입력"
            placeholderTextColor="#374151"
            className="flex-grow text-xl px-4 text-gray-700 placeholder:text-gray-700"
            onChangeText={setAccountId}
            value={accountId}
          />
          <Icon
            name={'camera-outline'}
            color={'#777'}
            onPress={() => {}}
            size={30}
          />
        </View>
      </View>
      <ScrollView className="w-full mb-16">
        <View className="w-full flex">
          <View className="w-full">
            <View className="w-full flex flex-row justify-between items-center px-6 py-4">
              <Text className="font-bold text-base px-2 text-gray-700">
                내 계좌
              </Text>
              <Icon
                name={'chevron-down'}
                color={'#777'}
                onPress={() => {}}
                size={30}
              />
            </View>
            <AccountSelectItem />
            <AccountSelectItem />
          </View>
          <View className="w-full">
            <View className="w-full flex flex-row justify-between items-center px-6 py-4">
              <Text className="font-bold text-bas px-2 text-gray-700">
                최근 거래 계좌
              </Text>
              <Icon
                name={'chevron-down'}
                color={'#777'}
                onPress={() => {}}
                size={30}
              />
            </View>
            <AccountSelectItem />
            <AccountSelectItem />
          </View>
        </View>
      </ScrollView>
      <BottomButton
        title="확인"
        onPress={() => navigation.navigate('TransferAmount')}
      />
    </View>
  );
}

export default Transfer;
