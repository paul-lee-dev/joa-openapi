import {Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {RootStackParamList} from '../../App';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useState} from 'react';

type TransferAmountScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'TransferAmount'
>;

function TransferAmount({
  navigation,
}: TransferAmountScreenProps): React.JSX.Element {
  const [amount, setAmount] = useState<string>('');
  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="이체"
        goBack={() => navigation.pop()}
        menu={[{title: 'close', onPress: () => navigation.popToTop()}]}
      />
      <View className="flex flex-grow justify-center space-y-8 pb-8s px-8">
        <View className="flex space-y-2">
          <View className="flex flex-row">
            <Text className="text-2xl font-bold text-gray-700">
              저금예금[입출금]
            </Text>
            <Text className="text-2xl font-medium text-gray-700">에서</Text>
          </View>
          <Text className="text-sm font-medium text-gray-700">
            잔액 1,001,220원
          </Text>
        </View>
        <View className="flex space-y-2">
          <View className="flex flex-row">
            <Text className="text-2xl font-bold text-gray-700">
              내 입출금통장
            </Text>
            <Text className="text-2xl font-medium text-gray-700">으로</Text>
          </View>
          <Text className="text-sm font-medium text-gray-700">
            신한은행 1234-12-123-1234
          </Text>
        </View>
        <View className="flex space-y-2">
          <Text className="w-full text-2xl font-bold text-gray-700">
            {amount === '' ? '금액 입력' : amount}
          </Text>
          <TouchableOpacity className="w-full flex">
            <Text className="text-sm font-medium inline self-start py-1 px-2 -mx-1 rounded-full bg-pink-100 text-gray-700">
              잔액 1,001,220원 입력
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <View className="w-full h-16">
        {amount !== '' && (
          <TouchableOpacity
            onPress={() => navigation.navigate('TransferConfirm')}
            className="w-full h-full bg-pink-200 flex justify-center items-center shadow-sm shadow-black">
            <Text className="text-2xl font-semibold text-gray-700">확인</Text>
          </TouchableOpacity>
        )}
      </View>
      <View className="px-8 py-4">
        <View className="flex flex-row justify-around">
          <TouchableOpacity
            onPress={() => setAmount(prev => prev + '1')}
            className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">1</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAmount(prev => prev + '2')}
            className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">2</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAmount(prev => prev + '3')}
            className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">3</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-around">
          <TouchableOpacity
            onPress={() => setAmount(prev => prev + '4')}
            className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">4</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAmount(prev => prev + '5')}
            className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">5</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAmount(prev => prev + '6')}
            className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">6</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-around">
          <TouchableOpacity
            onPress={() => setAmount(prev => prev + '7')}
            className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">7</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAmount(prev => prev + '8')}
            className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">8</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAmount(prev => prev + '9')}
            className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">9</Text>
          </TouchableOpacity>
        </View>
        <View className="flex flex-row justify-around">
          <TouchableOpacity
            onPress={() => setAmount(prev => prev + '00')}
            className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">00</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAmount(prev => prev + '0')}
            className="w-20 h-20 flex justify-center items-center ">
            <Text className="text-4xl font-bold text-gray-400">0</Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => setAmount(prev => prev.slice(0, -1))}
            className="w-20 h-20 flex justify-center items-center ">
            <Icon name={'arrow-left'} color={'#9ca3af'} size={36} />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default TransferAmount;
