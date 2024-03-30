import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useState} from 'react';
import Header from '@/components/Header';
import {formatAmount} from '@/utils';
import {RootStackParamList} from '@/Router';

type TransferAmountScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'TransferAmount'
>;

function TransferAmount({
  route,
  navigation,
}: TransferAmountScreenProps): React.JSX.Element {
  const {account, toAccountId} = route.params;
  const [amount, setAmount] = useState<string>('');

  const changeAmount = (char: string) => {
    return () => {
      setAmount(prev => {
        const newValue = prev + char;
        if (+newValue > 1001220) {
          return '1001220';
        }
        return newValue;
      });
    };
  };

  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="이체"
        goBack={() => navigation.pop()}
        menu={[{title: 'close', onPress: () => navigation.popToTop()}]}
      />
      <View className="flex flex-grow justify-center space-y-8 pb-2 px-8">
        <View className="flex space-y-2">
          <View className="flex flex-row">
            <Text className="text-xl font-bold text-gray-700">
              {account?.nickname}
            </Text>
            <Text className="text-xl font-medium text-gray-700">에서</Text>
          </View>
          <Text className="text-sm font-medium text-gray-700">
            {`잔액 ${formatAmount(account?.balance)}원`}
          </Text>
        </View>
        <View className="flex space-y-2">
          <View className="flex flex-row">
            <Text className="text-xl font-bold text-gray-700">
              내 입출금통장
            </Text>
            <Text className="text-xl font-medium text-gray-700">으로</Text>
          </View>
          <Text className="text-sm font-medium text-gray-700">
            {account.accountId}
          </Text>
        </View>
        <View className="flex space-y-2">
          <Text className="w-full text-xl font-bold text-gray-700">
            {amount === '' ? '금액 입력' : `${formatAmount(+amount)}원`}
          </Text>
          <TouchableOpacity
            onPress={() => setAmount(account.balance.toString())}
            className="w-full flex">
            <Text className="text-sm font-medium inline self-start py-1 px-2 -mx-1 rounded-full bg-pink-100 text-gray-700">
              {`잔액 ${formatAmount(account.balance)}원 입력`}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-full h-16">
        {amount !== '' && (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('TransferConfirm', {
                account,
                toAccountId,
                amount: +amount,
              })
            }
            className="w-full h-full bg-pink-200 flex justify-center items-center shadow-sm shadow-black">
            <Text className="text-2xl font-semibold text-gray-700">확인</Text>
          </TouchableOpacity>
        )}
      </View>
      <View className="px-8 py-1">
        <View className="flex flex-row justify-around">
          <TouchableOpacity
            onPress={changeAmount('1')}
            className="w-20 h-16 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={changeAmount('2')}
            className="w-20 h-16 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={changeAmount('3')}
            className="w-20 h-16 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">3</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-around">
          <TouchableOpacity
            onPress={changeAmount('4')}
            className="w-20 h-16 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={changeAmount('5')}
            className="w-20 h-16 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={changeAmount('6')}
            className="w-20 h-16 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">6</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-around">
          <TouchableOpacity
            onPress={changeAmount('7')}
            className="w-20 h-16 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={changeAmount('8')}
            className="w-20 h-16 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={changeAmount('9')}
            className="w-20 h-16 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">9</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-around">
          <TouchableOpacity
            onPress={changeAmount('00')}
            className="w-20 h-16 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">00</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={changeAmount('0')}
            className="w-20 h-16 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAmount(prev => prev.slice(0, -1))}
            className="w-20 h-16 flex justify-center items-center ">
            <Icon name={'arrow-left'} color={'#9ca3af'} size={36} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default TransferAmount;
