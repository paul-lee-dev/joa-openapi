import AccountListItem from '@/components/AccountListItem';
import Header from '@/components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {ScrollView, View, Text} from 'react-native';
import {useQuery} from '@tanstack/react-query';
import {getAccountList} from '@/api/account';
import {RootStackParamList} from '@/Router';
import {IAccount} from '@/models';

type AccountListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'AccountList'
>;

function AccountList({navigation}: AccountListScreenProps): React.JSX.Element {
  const {data} = useQuery({queryKey: ['accountList'], queryFn: getAccountList});

  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="내 계좌 목록"
        goBack={() => navigation.popToTop()}
        menu={[{title: 'close', onPress: () => navigation.pop()}]}
      />
      <ScrollView className="w-full">
        {data && (
          <View className="w-full flex py-12 px-6 space-y-4">
            <View className="w-full h-10 bg-pink-200 rounded-xl flex justify-center px-6 shadow-sm shadow-black">
              <Text className="text-base font-semibold">{`계좌 ${data?.page?.totalElements}개`}</Text>
            </View>
            {data.page?.content?.map((account: IAccount) => (
              <View className="w-full h-36" key={account.accountId}>
                <AccountListItem
                  account={account}
                  link={() => navigation.navigate('History', {account})}
                />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </View>
  );
}

export default AccountList;
