import CommonMenuItem from '@/components/CommonMenuItem';
import Header from '@/components/Header';
import {formatAmount} from '@/utils';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/Router';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type AccountDetailScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'AccountDetail'
>;

function AccountDetail({
  route,
  navigation,
}: AccountDetailScreenProps): React.JSX.Element {
  const {account} = route.params;
  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="계좌관리"
        goBack={() => navigation.pop()}
        menu={[{title: 'close', onPress: () => navigation.popToTop()}]}
      />
      <View className="w-full h-56 p-6">
        <View className="flex space-y-2">
          <Text className="text-sm font-medium text-gray-400">
            {account.accountId}
          </Text>
          <View className="flex flex-row items-center space-x-4">
            <Text className="text-2xl font-bold">{account.nickname}</Text>
            <Icon
              name={'pencil-outline'}
              color={'#888'}
              onPress={() =>
                navigation.navigate('ChangeAccountName', {
                  accountId: account.accountId,
                  nickname: account.nickname,
                })
              }
              size={20}
            />
          </View>
          <View className="w-full flex flex-row pt-4">
            <View className="w-1/2 flex space-y-1">
              <Text className="text-sm font-semibold">상품명</Text>
              <Text className="text-sm font-semibold">개설일</Text>
              <Text className="text-sm font-semibold">출금가능금액</Text>
              <Text className="text-sm font-semibold">적용금리</Text>
            </View>
            <View className="w-1/2 flex space-y-1">
              <Text className="text-sm font-semibold">입출금통장</Text>
              <Text className="text-sm font-semibold">{account.startDate}</Text>
              <Text className="text-sm font-semibold">{`${formatAmount(
                account.balance,
              )}원`}</Text>
              <Text className="text-sm font-semibold">연 0.10%</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView className="w-full flex-grow">
        <View>
          <CommonMenuItem title={'계좌 비밀번호 재설정'} underline={true} />
          <CommonMenuItem
            title={'계좌 거래한도 변경'}
            underline={true}
            onPress={() =>
              navigation.navigate('ChangeAccountLimit', {
                accountId: account.accountId,
                transferLimit: account.transferLimit,
              })
            }
          />
          <CommonMenuItem title={'비밀번호 오류횟수 초기화'} underline={true} />
          <CommonMenuItem title={'거래내역 다운로드'} underline={true} />
        </View>
        <View className="w-full flex justify-center py-4 px-8">
          <Text className="text-sm text-gray-400">
            계좌를 해지하시려면{' '}
            <TouchableOpacity
              onPress={() => navigation.navigate('DeleteAccount', {account})}>
              <Text className="underline">여기</Text>
            </TouchableOpacity>
            를 눌러주세요.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

export default AccountDetail;
