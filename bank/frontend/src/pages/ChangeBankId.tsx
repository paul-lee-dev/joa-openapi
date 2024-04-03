import {RootStackParamList} from '@/Router';
import {axiosInstance} from '@/api';
import {getBankDetail} from '@/api/bank';
import {logout} from '@/api/member';
import BottomButton from '@/components/BottomButton';
import CommonInput from '@/components/CommonInput';
import Header from '@/components/Header';
import {bankDataAtom, memberDataAtom} from '@/store/atoms';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useMutation} from '@tanstack/react-query';
import {Controller, useForm} from 'react-hook-form';
import {Text, TextInput, View} from 'react-native';
import {useSetRecoilState} from 'recoil';

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
  const setBankData = useSetRecoilState(bankDataAtom);
  const setMemberData = useSetRecoilState(memberDataAtom);
  const bankMutation = useMutation({
    mutationFn: getBankDetail,
    onSuccess: res => {
      setBankData({
        bankId: res.data.bankId,
        bankName: res.data.name,
        apiKey: getValues('apiKey'),
      });
      logoutMutation.mutate();
    },
    onError: err => {
      setError('bankId', {
        type: 'notValid',
        message: '유효하지 않은 은행코드입니다.',
      });
      setError('apiKey', {
        type: 'notValid',
        message: '유효하지 않은 apiKey입니다.',
      });
      console.log(err);
    },
  });
  const logoutMutation = useMutation({
    mutationFn: logout,
    onSuccess: () => {
      axiosInstance.interceptors.request.clear();
      axiosInstance.interceptors.request.use(
        config => {
          config.headers.memberId = '';
          config.headers.apiKey = getValues('apiKey');
          return config;
        },
        error => {
          return Promise.reject(error);
        },
      );
      navigation.popToTop();
      setMemberData({isLogin: false, member: null});
      navigation.replace('Intro');
    },
    onError: err => console.log(err),
  });
  const {
    control,
    handleSubmit,
    getValues,
    setError,
    formState: {errors},
  } = useForm<ChangeBankIdForm>({
    defaultValues: {
      bankId: '',
      apiKey: '',
    },
  });

  const onSubmit = (data: ChangeBankIdForm) => {
    bankMutation.mutate({bankId: data.bankId, apiKey: data.apiKey});
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
