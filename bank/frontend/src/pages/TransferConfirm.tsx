import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Header from '@/components/Header';
import BottomButton from '@/components/BottomButton';
import {formatAmount} from '@/utils';
import {RootStackParamList} from '@/Router';
import {useRecoilValue} from 'recoil';
import {memberDataAtom} from '@/store/atoms';
import {transferSend} from '@/api/transaction';
import {useMutation} from '@tanstack/react-query';

type TransferConfirmScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'TransferConfirm'
>;

function TransferConfirm({
  route,
  navigation,
}: TransferConfirmScreenProps): React.JSX.Element {
  const {account, toAccountId, amount} = route.params;
  const memberData = useRecoilValue(memberDataAtom);
  const mutation = useMutation({
    mutationFn: transferSend,
    onSuccess: data => {
      console.log(data);
      navigation.navigate('TransferResult', {
        amount,
        depositorName: memberData.member!.name,
        accountNickname: account.nickname,
        toAccountId,
      });
    },
    onError: err => console.log(err),
  });

  const transfer = () => {
    mutation.mutate({
      password: '1234',
      amount,
      depositorName: memberData.member?.name,
      fromAccount: account.accountId,
      toAccount: toAccountId,
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
          <View className="flex flex-row">
            <Text className="text-2xl font-bold text-gray-700">
              내 입출금통장
            </Text>
            <Text className="text-2xl font-medium text-gray-700">으로</Text>
          </View>
          <Text className="text-2xl font-medium text-gray-700">{`${formatAmount(
            amount,
          )}원을`}</Text>
          <Text className="text-2xl font-medium text-gray-700">보낼까요?</Text>
        </View>
        <View className="h-48 flex justify-evenly">
          <View className="flex flex-row justify-between px-6">
            <Text className="font-bold text-sm text-gray-700">
              받는 분에게 표시
            </Text>
            <TouchableOpacity className="flex flex-row">
              <Text className="font-semibold text-sm text-gray-700">
                {memberData.member?.name}
              </Text>
              <Icon
                name={'chevron-right'}
                color={'#777'}
                onPress={() => {}}
                size={20}
              />
            </TouchableOpacity>
          </View>
          <View className="flex flex-row justify-between px-6">
            <Text className="font-bold text-sm text-gray-700">출금 계좌</Text>
            <Text className="font-semibold text-sm text-gray-700">
              {`내 ${account.nickname}`}
            </Text>
          </View>
          <View className="flex flex-row justify-between px-6">
            <Text className="font-bold text-sm text-gray-700">입금 계좌</Text>
            <Text className="font-semibold text-sm text-gray-700">
              {`조아은행 ${toAccountId}`}
            </Text>
          </View>
        </View>
      </View>
      <BottomButton title={'이체'} onPress={transfer} />
    </View>
  );
}

export default TransferConfirm;
