import {IAccount} from '@/models';
import {formatAmount} from '@/utils';
import {Pressable, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {RootStackParamList} from '@/Router';
import {QueryObserverResult, RefetchOptions} from '@tanstack/react-query';

interface IProps {
  account: IAccount;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Main', undefined>;
  pageWidth: number;
  pageHeight: number;
  refetch: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<any, Error>>;
}

function AccountCarouselItem({
  account,
  navigation,
  pageWidth,
  pageHeight,
  refetch,
}: IProps): React.JSX.Element {
  return (
    <View
      style={{width: pageWidth, height: pageHeight}}
      className="h-full py-4 px-6 relative rounded-3xl flex space-y-2">
      <View className="w-full">
        <View className="flex flex-row">
          <Pressable
            onPress={() =>
              navigation.navigate('History', {
                account,
              })
            }>
            <Text className="text-md text-gray-700">{account?.nickname}</Text>
          </Pressable>
        </View>
        <Pressable>
          <Text className="text-md text-gray-700">{account?.accountId}</Text>
        </Pressable>
      </View>
      <View className="w-full flex flex-row items-center justify-center space-x-2">
        <Text className="text-2xl font-bold text-gray-700">
          {`${formatAmount(account?.balance)}원`}
        </Text>
        <TouchableOpacity>
          <Icon
            name={'refresh'}
            color={'#aaa'}
            onPress={() => {
              refetch();
            }}
            size={20}
          />
        </TouchableOpacity>
      </View>
      <View className="w-full flex flex-row items-center justify-center space-x-2">
        <Pressable
          onPress={() =>
            navigation.navigate('Transfer', {
              account: account,
            })
          }
          className="flex items-center justify-center w-12 h-6 bg-pink-300 rounded-full">
          <Text className="text-sm font-semibold shadow-md text-gray-700">
            이체
          </Text>
        </Pressable>
        {/* <View className="flex items-center justify-center w-12 h-6 bg-pink-300 rounded-full">
          <Text className="text-sm font-semibold shadow-md text-gray-700">
            결제
          </Text>
        </View> */}
      </View>
    </View>
  );
}

export default AccountCarouselItem;
