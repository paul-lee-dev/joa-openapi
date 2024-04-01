import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Header from '@/components/Header';
import BottomButton from '@/components/BottomButton';
import {formatAmount} from '@/utils';
import {RootStackParamList} from '@/Router';
import {useMutation} from '@tanstack/react-query';
import {deleteAccount} from '@/api/account';

type DeleteAccountScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'DeleteAccount'
>;

function DeleteAccount({
  route,
  navigation,
}: DeleteAccountScreenProps): React.JSX.Element {
  const {account} = route.params;
  const mutation = useMutation({
    mutationFn: deleteAccount,
    onSuccess: data => {
      console.log(data);
      navigation.popToTop();
    },
    onError: err => console.log(err),
  });

  const deleteConfirm = () => {
    mutation.mutate({
      accountId: account.accountId,
      password: '1234',
    });
  };

  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="이체"
        goBack={() => navigation.pop()}
        menu={[{title: 'close', onPress: () => navigation.popToTop()}]}
      />
      <View className="w-full flex-grow mb-16">
        <View className="flex flex-grow justify-center items-center space-y-2">
          <View className="w-14 h-14 m-6 bg-pink-300 rounded-full flex justify-center items-center">
            <Icon
              name={'trash-can-outline'}
              color={'#fff'}
              onPress={() => {}}
              size={40}
            />
          </View>
          <View className="flex flex-row">
            <Text className="text-2xl font-bold text-gray-700">
              {`내 ${account.nickname}`}
            </Text>
            <Text className="text-2xl font-medium text-gray-700">을</Text>
          </View>
          <Text className="text-2xl font-medium text-gray-700">
            정말로 해지하시겠어요?
          </Text>
        </View>
        <View className="h-48 flex justify-evenly">
          <View className="flex flex-row justify-between px-6">
            <Text className="font-bold text-sm text-gray-700">계좌 번호</Text>
            <Text className="font-semibold text-sm text-gray-700">
              {account.accountId}
            </Text>
          </View>
          <View className="flex flex-row justify-between px-6">
            <Text className="font-bold text-sm text-gray-700">계좌 잔액</Text>
            <Text className="font-semibold text-sm text-gray-700">
              {`${formatAmount(account.balance)}원`}
            </Text>
          </View>
          <View className="flex flex-row justify-between px-6">
            <Text className="font-bold text-sm text-gray-700">개설일</Text>
            <Text className="font-semibold text-sm text-gray-700">
              {account.startDate}
            </Text>
          </View>
          <View className="flex flex-row justify-between px-6">
            <Text className="font-bold text-sm text-gray-700">만기일</Text>
            <Text className="font-semibold text-sm text-gray-700">
              {account.endDate}
            </Text>
          </View>
          <View className="flex flex-row justify-between px-6">
            <Text className="font-bold text-sm text-gray-700">
              휴면계좌 여부
            </Text>
            <Text className="font-semibold text-sm text-gray-700">
              {account.isDormant ? 'Y' : 'N'}
            </Text>
          </View>
        </View>
      </View>
      <BottomButton title={'확인'} onPress={deleteConfirm} />
    </View>
  );
}

export default DeleteAccount;
