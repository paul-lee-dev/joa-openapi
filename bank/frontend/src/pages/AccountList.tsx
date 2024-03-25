import AccountListItem from '@/components/AccountListItem';
import Header from '@/components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import {ScrollView, View} from 'react-native';
import {useEffect} from 'react';
import {useQuery} from '@tanstack/react-query';
import {getAccountList} from '@/api/account';

type AccountListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'AccountList'
>;

function AccountList({navigation}: AccountListScreenProps): React.JSX.Element {
  const {data} = useQuery({queryKey: ['accountList'], queryFn: getAccountList});

  useEffect(() => {}, []);
  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="내 계좌 목록"
        goBack={() => navigation.popToTop()}
        menu={[{title: 'close', onPress: () => navigation.pop()}]}
      />
      <ScrollView className="w-full">
        <View className="w-full flex py-12 px-6 space-y-4">
          {data?.page?.content?.map((account: any) => (
            <View className="w-full h-36" key={account.accontId}>
              <AccountListItem
                account={account}
                link={() => navigation.navigate('AccountDetail')}
              />
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

export default AccountList;
