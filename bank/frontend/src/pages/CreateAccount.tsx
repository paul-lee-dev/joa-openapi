import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Header from '@/components/Header';
import {RootStackParamList} from 'App';
import BottomButton from '@/components/BottomButton';

type CreateAccountScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CreateAccount'
>;

function CreateAccount({
  navigation,
}: CreateAccountScreenProps): React.JSX.Element {
  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="계좌 개설"
        goBack={() => navigation.pop()}
        menu={[{title: 'close', onPress: () => navigation.popToTop()}]}
      />
      <ScrollView className="w-full flex-grow mb-16">
        <View>
          <View className="w-full h-96 bg-purple-400 items-center p-8 justify-between">
            <View className="w-full flex space-y-3">
              <Text className="text-xl font-medium text-gray-50">
                조아은행 입출금통장
              </Text>
              <Text className="text-5xl text-gray-50">손쉬운 계좌개설</Text>
            </View>
            <View className="w-full px-4 flex flex-row items-center justify-around">
              <View className="flex items-center">
                <Icon
                  name={'account-multiple-outline'}
                  color={'#eee'}
                  onPress={() => {}}
                  size={50}
                />
                <Text className="text-base text-gray-50">친구에게</Text>
                <Text className="text-base text-gray-50">간편하게 이체</Text>
              </View>
              <View className="flex items-center">
                <Icon
                  name={'key-outline'}
                  color={'#eee'}
                  onPress={() => {}}
                  size={50}
                />
                <Text className="text-base text-gray-50">보안은</Text>
                <Text className="text-base text-gray-50">더 강력하게</Text>
              </View>
            </View>
            <TouchableOpacity className="w-80 h-14 bg-purple-900/70 flex justify-center items-center">
              <Text className="text-xl text-gray-50 font-medium">
                자세히보기
              </Text>
            </TouchableOpacity>
          </View>
          <View className="w-full flex p-6">
            <Text className="text-2xl mb-4 font-semibold text-gray-700">
              누구나 쉽고 스마트하게
            </Text>
            <Text className="text-base font-medium text-gray-700">
              통장의 많은 정보와 기능들을 쉽고 편리하게 이용할 수 있도록
              디자인했습니다.
            </Text>
            <Text className="text-base font-medium text-gray-700">
              간편하게 이체, 거래내역 자세히보기도 바로바로, 중요한 내용은
              놓치지 않고 확인할 수 있습니다.
            </Text>
          </View>
        </View>
      </ScrollView>
      <BottomButton
        title={'신청하기'}
        onPress={() => navigation.navigate('CreateAccountConfirm')}
      />
    </View>
  );
}

export default CreateAccount;
