import BottomButton from '@/components/BottomButton';
import CommonInput from '@/components/CommonInput';
import Header from '@/components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Controller, useForm} from 'react-hook-form';
import {Text, TextInput, TouchableOpacity, View} from 'react-native';
import {useMutation} from '@tanstack/react-query';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createAccount} from '@/api/account';
import {useState} from 'react';
import {bankDataAtom} from '@/store/atoms';
import {useRecoilValue} from 'recoil';
import {RootStackParamList} from '@/Router';
import LoadingScreen from '@/components/LoadingScreen';
import {IAccount} from '@/models';

type CreateAccountConfirmScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CreateAccountConfirm'
>;

interface CreateAccountForm {
  password: string;
  password2: string;
}

function CreateAccountConfirm({
  route,
  navigation,
}: CreateAccountConfirmScreenProps): React.JSX.Element {
  const {product} = route.params;
  const bankData = useRecoilValue(bankDataAtom);
  const mutation = useMutation({
    mutationFn: createAccount,
    onSuccess: data => {
      console.log(data);
      navigation.navigate('CreateAccountResult', {
        account: data.data as IAccount,
      });
    },
    onError: err => console.log(err),
  });

  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors},
  } = useForm<CreateAccountForm>({
    defaultValues: {
      password: '',
      password2: '',
    },
  });

  const onSubmit = async (data: CreateAccountForm) => {
    mutation.mutate({
      nickname: product.name,
      password: data.password,
      bankId: bankData.bankId,
      productId: product.productId,
    });
  };

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);

  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="계좌 생성 신청"
        goBack={() => navigation.pop()}
        menu={[{title: 'close', onPress: () => navigation.popToTop()}]}
      />
      <View className="w-full flex-grow mb-16">
        <View className="flex flex-grow justify-center items-center space-y-2">
          <View className="flex flex-row">
            <Text className="text-2xl font-bold">{`내 ${product.name}`}</Text>
            <Text className="text-2xl font-medium">의</Text>
          </View>
          <Text className="text-2xl font-medium">필수 정보를 입력해주세요</Text>
        </View>
        <View className="h-80 flex justify-evenly">
          <CommonInput label={'계좌 비밀번호'}>
            <Controller
              control={control}
              rules={{required: '계좌 비밀번호를 입력해주세요.'}}
              render={({field: {onChange, onBlur, value}}) => (
                <View className="w-full relative">
                  <TextInput
                    className="border-b border-gray-800/50 text-gray-700"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={!showPassword}
                    maxLength={4}
                    returnKeyType="done"
                    keyboardType="number-pad"
                  />
                  <TouchableOpacity className="absolute right-0 top-0 translate-y-3 p-2">
                    <Icon
                      name={showPassword ? 'eye-outline' : 'eye-off-outline'}
                      color={'#777'}
                      onPress={() => setShowPassword(!showPassword)}
                      size={20}
                    />
                  </TouchableOpacity>
                </View>
              )}
              name="password"
            />
            <Text className="absolute bottom-2 left-8 text-red-400">
              {errors.password?.message}
            </Text>
          </CommonInput>

          <CommonInput label={'계좌 비밀번호 확인'}>
            <Controller
              control={control}
              rules={{
                required: '계좌 비밀번호를 한번 더 입력해주세요.',
                validate: {
                  correct: value =>
                    value === getValues('password')
                      ? true
                      : '비밀번호가 일치하지 않습니다.',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <View className="w-full relative">
                  <TextInput
                    className="border-b border-gray-800/50 text-gray-700"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={!showPassword2}
                    maxLength={4}
                    returnKeyType="done"
                    keyboardType="number-pad"
                  />
                  <TouchableOpacity className="absolute right-0 top-0 translate-y-3 p-2">
                    <Icon
                      name={showPassword2 ? 'eye-outline' : 'eye-off-outline'}
                      color={'#777'}
                      onPress={() => setShowPassword2(!showPassword2)}
                      size={20}
                    />
                  </TouchableOpacity>
                </View>
              )}
              name="password2"
            />
            <Text className="absolute bottom-2 left-8 text-red-400">
              {errors.password2?.message}
            </Text>
          </CommonInput>
        </View>
      </View>
      <BottomButton title={'신청하기'} onPress={handleSubmit(onSubmit)} />
      <LoadingScreen isLoading={mutation.isPending} />
    </View>
  );
}

export default CreateAccountConfirm;
