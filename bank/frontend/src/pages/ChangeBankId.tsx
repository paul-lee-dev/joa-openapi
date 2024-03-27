import {RootStackParamList} from '@/Router';
import BottomButton from '@/components/BottomButton';
import CommonInput from '@/components/CommonInput';
import Header from '@/components/Header';
import {bankDataAtom, memberDataAtom} from '@/store/atoms';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Controller, useForm} from 'react-hook-form';
import {Text, TextInput, View} from 'react-native';
import {useRecoilState, useSetRecoilState} from 'recoil';

type ChangeBankIdScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ChangeBankId'
>;

interface ChangeBankIdForm {
  bankId: string;
  apiKey: string;
}

function ChangeBankId({
  navigation,
}: ChangeBankIdScreenProps): React.JSX.Element {
  const [bankData, setBankData] = useRecoilState(bankDataAtom);
  const setMemberData = useSetRecoilState(memberDataAtom);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ChangeBankIdForm>({
    defaultValues: {
      bankId: bankData.bankId,
      apiKey: bankData.apiKey,
    },
  });

  const onSubmit = (data: ChangeBankIdForm) => {
    setBankData({
      bankId: data.bankId,
      bankName: 'JOA BANK',
      apiKey: data.apiKey,
    });
    logout();
  };

  const logout = () => {
    setMemberData({
      isLogin: false,
      member: null,
    });
    navigation.popToTop();
  };

  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="은행코드 변경"
        menu={[{title: 'close', onPress: () => navigation.pop()}]}
      />
      <CommonInput label={'은행코드'}>
        <Controller
          control={control}
          rules={{
            required: '은행코드를 입력해주세요.',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              className="border-b border-gray-800/50 text-gray-700"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="bankId"
        />
        <Text className="absolute bottom-2 left-8 text-red-400">
          {errors.bankId?.message}
        </Text>
      </CommonInput>
      <CommonInput label={'API Key'}>
        <Controller
          control={control}
          rules={{
            required: 'API Key를 입력해주세요.',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              className="border-b border-gray-800/50 text-gray-700"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
            />
          )}
          name="apiKey"
        />
        <Text className="absolute bottom-2 left-8 text-red-400">
          {errors.apiKey?.message}
        </Text>
      </CommonInput>
      <BottomButton title={'변경'} onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

export default ChangeBankId;
