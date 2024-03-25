import AccountListItem from '@/components/AccountListItem';
import Header from '@/components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import {ScrollView, View} from 'react-native';

type AccountListScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'AccountList'
>;

function AccountList({navigation}: AccountListScreenProps): React.JSX.Element {
  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="내 계좌 목록"
        goBack={() => navigation.popToTop()}
        menu={[{title: 'close', onPress: () => navigation.pop()}]}
      />
      <ScrollView className="w-full">
        <View className="w-full flex py-12 px-6 space-y-4">
          <View className="w-full h-36">
            <AccountListItem
              link={() => navigation.navigate('AccountDetail')}
            />
          </View>
          <View className="w-full h-36">
            <AccountListItem
              link={() => navigation.navigate('AccountDetail')}
            />
          </View>
          <View className="w-full h-36">
            <AccountListItem
              link={() => navigation.navigate('AccountDetail')}
            />
          </View>
          <View className="w-full h-36">
            <AccountListItem
              link={() => navigation.navigate('AccountDetail')}
            />
          </View>
          <View className="w-full h-36">
            <AccountListItem
              link={() => navigation.navigate('AccountDetail')}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
}

export default AccountList;
