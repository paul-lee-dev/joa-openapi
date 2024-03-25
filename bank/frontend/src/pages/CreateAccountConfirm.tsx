import BottomButton from '@/components/BottomButton';
import CommonInput from '@/components/CommonInput';
import Header from '@/components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from 'App';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

type CreateAccountConfirmScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CreateAccountConfirm'
>;

function CreateAccountConfirm({
  navigation,
}: CreateAccountConfirmScreenProps): React.JSX.Element {
  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="계좌 생성 신청"
        goBack={() => navigation.pop()}
        menu={[{title: 'close', onPress: () => navigation.popToTop()}]}
      />
      <View className="w-full flex-grow mb-16">
        <View className="flex flex-grow justify-center items-center space-y-2">
          {/* <View className="w-14 h-14 m-6 bg-pink-300 rounded-full flex justify-center items-center">
            <Icon
              name={'card-account-details-outline'}
              color={'#fff'}
              onPress={() => {}}
              size={35}
            />
          </View> */}
          <View className="flex flex-row">
            <Text className="text-2xl font-bold">내 입출금통장</Text>
            <Text className="text-2xl font-medium">의</Text>
          </View>
          <Text className="text-2xl font-medium">필수 정보를 입력해주세요</Text>
        </View>
        <View className="h-80 flex justify-evenly">
          <CommonInput label={'계좌 비밀번호'}>
            <View className="w-full relative">
              <TextInput
                className="border-b border-gray-800/50"
                maxLength={4}
                returnKeyType="done"
                keyboardType="number-pad"
              />
              <TouchableOpacity className="absolute right-0 top-0 translate-y-3 p-2">
                <Icon
                  name={'eye-off-outline'}
                  color={'#777'}
                  onPress={() => {}}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </CommonInput>
          <CommonInput label={'계좌 비밀번호 확인'}>
            <View className="w-full relative">
              <TextInput
                className="border-b border-gray-800/50"
                maxLength={4}
                returnKeyType="done"
                keyboardType="number-pad"
              />
              <TouchableOpacity className="absolute right-0 top-0 translate-y-3 p-2">
                <Icon
                  name={'eye-off-outline'}
                  color={'#777'}
                  onPress={() => {}}
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </CommonInput>
        </View>
      </View>
      <BottomButton
        title={'신청하기'}
        onPress={() => navigation.navigate('CreateAccountResult')}
      />
    </View>
  );
}

export default CreateAccountConfirm;
