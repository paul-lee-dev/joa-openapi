import {
  ScrollView,
  Text,
  TextInput,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useCallback, useState} from 'react';
import Header from '@/components/Header';
import HistoryItem from '@/components/HistoryItem';
import BottomPopup from '@/components/BottomPopup';
import BottomButton from '@/components/BottomButton';
import {RootStackParamList} from '@/Router';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {formatAmount, formatDate} from '@/utils';
import {useMutation, useQuery} from '@tanstack/react-query';
import {getTransactionList} from '@/api/transaction';
import {IAccount, ITransaction} from '@/models';
import OptionInput from '@/components/OptionInput';
import {useFocusEffect} from '@react-navigation/native';
import {getAccountDetail} from '@/api/account';

const typeName = [
  {value: 'ALL', label: '전체'},
  {value: 'DEPOSIT_ONLY', label: '입금만'},
  {value: 'WITHDRAWAL_ONLY', label: '출금만'},
];

type HistoryScreenProps = NativeStackScreenProps<RootStackParamList, 'History'>;

function History({route, navigation}: HistoryScreenProps): React.JSX.Element {
  const {account} = route.params;
  const [filterModalOpen, setFilterModalOpen] = useState<boolean>(false);
  const [fromDate, setFromDate] = useState<string>(
    formatDate(new Date(new Date().setMonth(new Date().getMonth() - 1))),
  );
  const [term, setTerm] = useState<number>(1);
  const [type, setType] = useState<number>(0);
  const [latest, setLatest] = useState<boolean>(true);
  const [keyword, setKeyword] = useState<string>('');
  const [selectedAccount, setSelectedAccount] = useState<IAccount>(account);
  const mutation = useMutation({
    mutationFn: getAccountDetail,
    onSuccess: data => {
      console.log(data);
      setSelectedAccount(data.data);
    },
    onError: err => console.log(err),
  });
  const {data, refetch} = useQuery({
    queryKey: [
      'transactionList',
      selectedAccount.accountId,
      fromDate,
      typeName[type].value,
      latest ? 'LATEST' : 'OLDEST',
    ],
    queryFn: () => {
      return getTransactionList({
        fromDate,
        accountId: account.accountId,
        toDate: formatDate(new Date()),
        searchType:
          typeName[type].value === 'ALL' ? null : typeName[type].value,
        orderBy: latest ? 'NEWEST' : 'OLDEST',
      });
    },
  });

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  const renderTransactionList = (list: ITransaction[], word: string) => {
    let balance = account.balance;
    const newList = list
      .filter(transaction => transaction.depositorName.includes(word))
      .map(transaction => {
        const oldBalance = balance;
        if (transaction.fromAccount === account.accountId) {
          balance += transaction.amount;
        } else if (transaction.toAccount === account.accountId) {
          balance -= transaction.amount;
        }
        return (
          <View className="w-full" key={transaction.transactionId}>
            <HistoryItem
              date={transaction.createdAt.slice(2, 10)}
              title={transaction.depositorName}
              amount={
                transaction.fromAccount === account.accountId
                  ? -transaction.amount
                  : +transaction.amount
              }
              balance={oldBalance}
            />
          </View>
        );
      });
    return newList;
  };

  const renderTransactionListWithoutBalance = (
    list: ITransaction[],
    word: string,
  ) => {
    return list
      .filter(transaction => transaction.depositorName.includes(word))
      .map(transaction => (
        <View className="w-full" key={transaction.transactionId}>
          <HistoryItem
            date={transaction.createdAt.slice(2, 10)}
            title={transaction.depositorName}
            amount={
              transaction.fromAccount === account.accountId
                ? -transaction.amount
                : +transaction.amount
            }
          />
        </View>
      ));
  };

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
            <Text className="font-semibold text-lg">
              {selectedAccount.nickname}
            </Text>
            <Text className="font-medium text-base underline text-gray-500">
              {selectedAccount.accountId}
            </Text>
          </View>
          <View className="flex flex-row space-x-2">
            <Icon
              name={'refresh'}
              color={'#777'}
              onPress={() =>
                mutation.mutate({accountId: selectedAccount.accountId})
              }
              size={20}
            />
            <Icon
              name={'cog-outline'}
              color={'#777'}
              onPress={() =>
                navigation.navigate('AccountDetail', {account: selectedAccount})
              }
              size={20}
            />
          </View>
        </View>
        <View className="w-full flex flex-row justify-center items-center space-x-2">
          <Text className="text-2xl font-bold">
            {formatAmount(selectedAccount.balance)}
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
            <TextInput
              className="flex-grow"
              onChangeText={setKeyword}
              value={keyword}
            />
            <TouchableWithoutFeedback
              onPress={() => {
                setFilterModalOpen(true);
              }}>
              <View className="flex flex-row items-center">
                <Text className="text-sm font-light">{`${term}개월·${
                  typeName[type].label
                }·${latest ? '최신순' : '과거순'}`}</Text>
                <Icon name={'chevron-down'} color={'#777'} size={25} />
              </View>
            </TouchableWithoutFeedback>
          </View>
          {data?.page?.content?.length > 0 && (
            <View className="w-full flex space-y-2 pb-4">
              {type === 0 && latest
                ? renderTransactionList(data.page.content, keyword)
                : renderTransactionListWithoutBalance(
                    data.page.content,
                    keyword,
                  )}
            </View>
          )}
        </View>
      </ScrollView>
      {filterModalOpen && (
        <BottomPopup close={() => setFilterModalOpen(false)}>
          <View className="w-full flex flex-grow space-y-8">
            <OptionInput
              label={'조회기간'}
              options={[
                {label: '1개월', value: 1},
                {label: '3개월', value: 3},
                {label: '6개월', value: 6},
              ]}
              value={term}
              setValue={value => {
                setTerm(value);
                setFromDate(
                  formatDate(
                    new Date(
                      new Date().setMonth(new Date().getMonth() - value),
                    ),
                  ),
                );
              }}
            />
            <OptionInput
              label={'거래유형'}
              options={[
                {label: '전체', value: 0},
                {label: '입금만', value: 1},
                {label: '출금만', value: 2},
              ]}
              value={type}
              setValue={value => {
                setType(value);
              }}
            />
            <OptionInput
              label={'거래내역정렬'}
              options={[
                {label: '최신순', value: true},
                {label: '과거순', value: false},
              ]}
              value={latest}
              setValue={value => {
                setLatest(value);
              }}
            />
          </View>
          <BottomButton
            title={'확인'}
            onPress={() => setFilterModalOpen(false)}
          />
        </BottomPopup>
      )}
    </View>
  );
}

export default History;
