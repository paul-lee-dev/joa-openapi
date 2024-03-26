import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useState} from 'react';
import Header from '@/components/Header';
import AccountSelectItem from '@/components/AccountSelectItem';
import BottomButton from '@/components/BottomButton';
import {formatAmount} from '@/utils';
import {RootStackParamList} from '@/Router';
import {getAccountList} from '@/api/account';
import {useQuery} from '@tanstack/react-query';
import {IAccount} from '@/models';

type TransferScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'Transfer'
>;

function Transfer({route, navigation}: TransferScreenProps): React.JSX.Element {
  const {account} = route.params;
  const {data} = useQuery({queryKey: ['accountList'], queryFn: getAccountList});
  const [toAccountId, setToAccountId] = useState<string>('');
  const [myAccountOpen, setMyAccountOpen] = useState<boolean>(false);
  const [myRecentOpen, setMyRecentOpen] = useState<boolean>(false);

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
              {account.accountId}
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
            account.balance,
          )}원`}</Text>
        </View>
      </View>
      <View className="h-24 w-full p-6">
        <View className="w-full border-b border-gray-400 flex flex-row items-center pr-2">
          <TextInput
            placeholder="계좌번호 입력"
            placeholderTextColor="#374151"
            className="flex-grow text-xl px-4 text-gray-700 placeholder:text-gray-700"
            onChangeText={setToAccountId}
            value={toAccountId}
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
            <Pressable
              onPress={() => setMyAccountOpen(prev => !prev)}
              className="w-full flex flex-row justify-between items-center px-6 py-4">
              <Text className="font-bold text-base px-2 text-gray-700">
                내 계좌
              </Text>
              <Icon
                name={myAccountOpen ? 'chevron-up' : 'chevron-down'}
                color={'#777'}
                size={30}
              />
            </Pressable>
            {myAccountOpen &&
              data &&
              data.page?.content
                ?.filter(
                  (item: IAccount) => item.accountId !== account.accountId,
                )
                .map((item: IAccount) => (
                  <AccountSelectItem
                    key={item.accountId}
                    account={item}
                    onPress={() => setToAccountId(item.accountId)}
                  />
                ))}
          </View>
          <View className="w-full">
            <Pressable
              onPress={() => setMyRecentOpen(prev => !prev)}
              className="w-full flex flex-row justify-between items-center px-6 py-4">
              <Text className="font-bold text-bas px-2 text-gray-700">
                최근 거래 계좌
              </Text>
              <Icon
                name={myRecentOpen ? 'chevron-up' : 'chevron-down'}
                color={'#777'}
                size={30}
              />
            </Pressable>
            {myRecentOpen &&
              [1, 2].map((item: any) => (
                <AccountSelectItem key={item} account={account} />
              ))}
          </View>
        </View>
      </ScrollView>
      <BottomButton
        title="확인"
        onPress={() =>
          navigation.navigate('TransferAmount', {
            account,
            toAccountId,
          })
        }
      />
    </View>
  );
}

export default Transfer;
