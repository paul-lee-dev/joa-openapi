import {
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useState} from 'react';
import Header from '@/components/Header';
import HistoryItem from '@/components/HistoryItem';
import BottomPopup from '@/components/BottomPopup';
import FilterOption from '@/components/FilterOption';
import BottomButton from '@/components/BottomButton';
import {RootStackParamList} from '@/Router';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {formatAmount} from '@/utils';

interface IHistory {
  date: string;
  title: string;
  amount: number;
  balance: number;
}

const sampleHistory: IHistory[] = [
  {
    date: '03.08',
    title: '삼성 SSAFY',
    amount: 1000000,
    balance: 1001220,
  },
  {
    date: '03.08',
    title: '카카오페이',
    amount: -30000,
    balance: 1220,
  },
  {
    date: '03.07',
    title: '고갯마루',
    amount: -109000,
    balance: 31220,
  },
  {
    date: '03.07',
    title: '이유로',
    amount: 100000,
    balance: 1121220,
  },
  {
    date: '03.06',
    title: '조아은행 캐시백 지급',
    amount: 740,
    balance: 1121220,
  },
];

type HistoryScreenProps = NativeStackScreenProps<RootStackParamList, 'History'>;

function History({route, navigation}: HistoryScreenProps): React.JSX.Element {
  const {account} = route.params;
  const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false);

  return (
    <View className="w-full h-full bg-gray-100">
      <Header
        stack="계좌 거래내역"
        goBack={() => navigation.pop()}
        menu={[{title: 'menu', onPress: () => navigation.navigate('Menu')}]}
      />
      <View className="bg-pink-100 w-full h-48">
        <View className="w-full flex flex-row justify-between p-6">
          <View className="flex space-y-2">
            <Text className="font-semibold text-lg">저축예금[입출금]</Text>
            <Text className="font-medium text-base underline text-gray-500">
              {account.accountId}
            </Text>
          </View>
          <View className="flex flex-row space-x-2">
            <Icon
              name={'refresh'}
              color={'#777'}
              onPress={() => {}}
              size={20}
            />
            <Icon
              name={'cog-outline'}
              color={'#777'}
              onPress={() => navigation.navigate('AccountDetail', {account})}
              size={20}
            />
          </View>
        </View>
        <View className="w-full flex flex-row justify-center items-center space-x-2">
          <Text className="text-2xl font-bold">
            {formatAmount(account.balance)}
          </Text>
          <Text className="text-sm font-semibold">원</Text>
        </View>
      </View>
      <ScrollView className="w-full">
        <View className="w-full flex">
          <View className="flex flex-row items-center justify-between w-full h-12 px-2 border-b border-gray-300">
            <Icon
              name={'magnify'}
              color={'#777'}
              onPress={() => {}}
              size={25}
            />
            <TextInput className="flex-grow" />
            <TouchableWithoutFeedback
              onPress={() => {
                setFilterModalOpen(true);
              }}>
              <View className="flex flex-row items-center">
                <Text className="text-sm font-light">1개월·전체·최신순</Text>
                <Icon
                  name={'chevron-down'}
                  color={'#777'}
                  onPress={() => {}}
                  size={25}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
          <View className="w-full flex space-y-2 pb-4">
            {sampleHistory.map(h => (
              <View className="w-full" key={h.title}>
                <HistoryItem
                  date={h.date}
                  title={h.title}
                  amount={h.amount}
                  balance={h.balance}
                />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
      {filterModalOpen && (
        <BottomPopup close={() => setFilterModalOpen(false)}>
          <View className="w-full flex flex-grow space-y-8">
            <FilterOption
              label={'조회기간'}
              options={['1개월', '3개월', '지난달', '직접설정']}
            />
            <FilterOption
              label={'거래유형'}
              options={['전체', '입금만', '출금만']}
            />
            <FilterOption
              label={'거래내역정렬'}
              options={['최신순', '과거순']}
            />
          </View>
          <BottomButton title={'확인'} />
        </BottomPopup>
      )}
    </View>
  );
}

export default History;
