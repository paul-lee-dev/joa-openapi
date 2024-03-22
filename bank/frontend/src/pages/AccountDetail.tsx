import CommonMenuItem from '@/components/CommonMenuItem';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {Header} from 'react-native/Libraries/NewAppScreen';

function AccountDetail(): React.JSX.Element {
  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header stack="계좌관리" menu={[{title: 'close', onPress: () => {}}]} />
      <View className="w-full h-56 p-6">
        <View className="flex space-y-2">
          <Text className="text-sm font-medium text-gray-400">
            123-123456-12-123
          </Text>
          <View className="flex flex-row items-center space-x-4">
            <Text className="text-2xl font-bold">조아은행 체크카드</Text>
            <Icon
              name={'pencil-outline'}
              color={'#888'}
              onPress={() => {}}
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
              <Text className="text-sm font-semibold">2024.03.08</Text>
              <Text className="text-sm font-semibold">1,000,000원</Text>
              <Text className="text-sm font-semibold">연 0.10%</Text>
            </View>
          </View>
        </View>
      </View>
      <ScrollView className="w-full flex-grow">
        <View>
          <CommonMenuItem title={'계좌 비밀번호 재설정'} underline={true} />
          <CommonMenuItem title={'비밀번호 오류횟수 초기화'} underline={true} />
          <CommonMenuItem title={'거래내역 다운로드'} underline={true} />
        </View>
        <View className="w-full flex justify-center py-4 px-8">
          <Text className="text-sm text-gray-400">
            계좌를 해지하시려면{' '}
            <TouchableOpacity>
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
