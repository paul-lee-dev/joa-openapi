import BottomButton from '@/components/BottomButton';
import CommonInput from '@/components/CommonInput';
import Header from '@/components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Controller, useForm} from 'react-hook-form';
import {
  Pressable,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {useMutation, useQuery} from '@tanstack/react-query';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {createAccount, getAccountList} from '@/api/account';
import {useEffect, useState} from 'react';
import {bankDataAtom} from '@/store/atoms';
import {useRecoilValue} from 'recoil';
import {RootStackParamList} from '@/Router';
import LoadingScreen from '@/components/LoadingScreen';
import {IAccount} from '@/models';
import DropdownInput from '@/components/DropdownInput';
import OptionInput from '@/components/OptionInput';
import {calculateRate, formatAmount} from '@/utils';

type CreateAccountConfirmScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'CreateAccountConfirm'
>;

interface CreateAccountForm {
  withdrawAccount: string;
  amount: string;
  password: string;
  password2: string;
  term: number;
  taxType: 'TAX' | 'NO_TAX';
}

interface ICalculatedValue {
  totalPrincipal: number;
  calculatedInterest: number;
  taxInterest: number;
  totalAmount: number;
}

function CreateAccountConfirm({
  route,
  navigation,
}: CreateAccountConfirmScreenProps): React.JSX.Element {
  const {product} = route.params;
  const {data} = useQuery({
    queryKey: ['accountList'],
    queryFn: getAccountList,
    retry: true,
  });
  const bankData = useRecoilValue(bankDataAtom);
  const mutation = useMutation({
    mutationFn: createAccount,
    onSuccess: res => {
      console.log(res);
      navigation.navigate('CreateAccountResult', {
        account: res.data as IAccount,
      });
    },
    onError: err => console.log(err),
  });

  const {
    control,
    handleSubmit,
    getValues,
    setValue,
    watch,
    formState: {errors},
  } = useForm<CreateAccountForm>({
    defaultValues: {
      withdrawAccount: '',
      amount: '',
      term: 6,
      password: '',
      password2: '',
      taxType: 'TAX',
    },
  });
  const [calcValue, setCalcValue] = useState<ICalculatedValue>({
    totalPrincipal: 0,
    calculatedInterest: 0,
    taxInterest: 0,
    totalAmount: 0,
  });

  useEffect(() => {
    const subscirbe = watch((data, {name}) => {
      console.log(data, name);
      setCalcValue(
        calculateRate(
          product,
          +getValues('amount'),
          getValues('term'),
          getValues('taxType'),
        ),
      );
    });
    //모든 input 데이터를 담은 객체 data, change 이벤트가 발생하고 있는 input의 name을 인자로 받는 콜백함수
    return () => subscirbe.unsubscribe();
  }, [watch, getValues, product]);

  const onSubmit = async (formData: CreateAccountForm) => {
    mutation.mutate({
      amount: formData.amount || undefined,
      taxType: formData.taxType,
      term: formData.term,
      withdrawAccount: formData.withdrawAccount || undefined,
      nickname: product.name,
      password: formData.password,
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
      <ScrollView className="w-full flex-grow flex mb-16">
        <View className="flex h-52 justify-center items-center space-y-2">
          <View className="flex flex-row">
            <Text className="text-2xl font-bold">{`내 ${product.name}`}</Text>
            <Text className="text-2xl font-medium">의</Text>
          </View>
          <Text className="text-2xl font-medium">필수 정보를 입력해주세요</Text>
        </View>
        <View className="flex justify-evenly">
          {product.productType !== 'ORDINARY_DEPOSIT' && (
            <>
              <CommonInput label={'출금 계좌'}>
                <Controller
                  control={control}
                  rules={{
                    required: '출금 계좌를 선택해주세요.',
                  }}
                  render={() => (
                    <DropdownInput
                      data={data.page.content}
                      labelField="nickname"
                      valueField="accountId"
                      search
                      placeholder="출금 계좌를 선택해주세요."
                      value={watch('withdrawAccount')}
                      setValue={value => setValue('withdrawAccount', value)}
                    />
                  )}
                  name="withdrawAccount"
                />
                <Text className="absolute bottom-4 left-8 text-red-400">
                  {errors.withdrawAccount?.message}
                </Text>
              </CommonInput>
              <CommonInput label={'시작 금액 (원)'}>
                <Controller
                  control={control}
                  rules={{
                    required: '시작 금액을 입력해주세요.',
                  }}
                  render={({field: {onChange, onBlur, value}}) => (
                    <View className="w-full relative">
                      <View className="py-3 flex flex-row space-x-3">
                        <Pressable
                          onPress={() => {
                            setValue('amount', '10000');
                          }}
                          className="flex">
                          <Text className="text-sm font-medium inline self-start py-1 px-2 -mx-1 rounded-full bg-pink-100 text-gray-700">
                            만원
                          </Text>
                        </Pressable>
                        <Pressable
                          onPress={() => {
                            setValue('amount', '50000');
                          }}
                          className="flex">
                          <Text className="text-sm font-medium inline self-start py-1 px-2 -mx-1 rounded-full bg-pink-100 text-gray-700">
                            5만원
                          </Text>
                        </Pressable>
                        <Pressable
                          onPress={() => {
                            setValue('amount', '1000000');
                          }}
                          className="flex">
                          <Text className="text-sm font-medium inline self-start py-1 px-2 -mx-1 rounded-full bg-pink-100 text-gray-700">
                            100만원
                          </Text>
                        </Pressable>
                        <Pressable
                          onPress={() => {
                            setValue('amount', '5000000');
                          }}
                          className="flex">
                          <Text className="text-sm font-medium inline self-start py-1 px-2 -mx-1 rounded-full bg-pink-100 text-gray-700">
                            500만원
                          </Text>
                        </Pressable>
                        <Pressable
                          onPress={() => {
                            setValue('amount', '10000000');
                          }}
                          className="flex">
                          <Text className="text-sm font-medium inline self-start py-1 px-2 -mx-1 rounded-full bg-pink-100 text-gray-700">
                            1,000만원
                          </Text>
                        </Pressable>
                      </View>
                      <TextInput
                        className="border-b border-gray-800/50 text-gray-700"
                        onBlur={onBlur}
                        onChangeText={onChange}
                        value={value}
                        returnKeyType="done"
                        keyboardType="number-pad"
                        placeholder="직접 입력"
                      />
                    </View>
                  )}
                  name="amount"
                />
                <Text className="absolute bottom-2 left-8 text-red-400">
                  {errors.amount?.message}
                </Text>
              </CommonInput>
              <OptionInput
                label={'기간'}
                options={[
                  {label: '6개월', value: 6},
                  {label: '1년', value: 12},
                  {label: '2년', value: 24},
                  {label: '3년', value: 36},
                ]}
                value={watch('term')}
                setValue={value => setValue('term', value)}
              />

              <OptionInput
                label={'과세 유형'}
                options={[
                  {label: '과세', value: 'TAX'},
                  {label: '비과세', value: 'NO_TAX'},
                ]}
                value={watch('taxType')}
                setValue={value => setValue('taxType', value)}
              />
              <CommonInput label={'만기시 지급액'}>
                <View className="w-full flex space-y-1 border p-4 rounded-sm border-gray-300 bg-gray-200 mt-4">
                  <View className="w-full flex flex-row justify-between">
                    <Text className="text-base font-semibold text-gray-400">
                      원금합계
                    </Text>
                    <Text className="text-base font-medium text-gray-400">
                      {`${formatAmount(calcValue.totalPrincipal)}원`}
                    </Text>
                  </View>
                  <View className="w-full flex flex-row justify-between">
                    <Text className="text-base font-semibold text-gray-400">
                      세전이자
                    </Text>
                    <Text className="text-base font-medium text-gray-400">
                      {`${formatAmount(calcValue.calculatedInterest)}원`}
                    </Text>
                  </View>
                  <View className="w-full flex flex-row justify-between">
                    <Text className="text-base font-semibold text-red-400">
                      {`이자과세(${
                        watch('taxType') === 'TAX' ? '15.4' : '0'
                      }%)`}
                    </Text>
                    <Text className="text-base font-medium text-red-400">
                      {`${formatAmount(calcValue.taxInterest)}원`}
                    </Text>
                  </View>
                  <View className="w-full flex flex-row justify-between">
                    <Text className="text-base font-semibold text-gray-400">
                      세후수령액
                    </Text>
                    <Text className="text-base font-medium text-gray-400">
                      {`${formatAmount(calcValue.totalAmount)}원`}
                    </Text>
                  </View>
                </View>
              </CommonInput>
            </>
          )}
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
      </ScrollView>
      <BottomButton title={'신청하기'} onPress={handleSubmit(onSubmit)} />
      <LoadingScreen isLoading={mutation.isPending} />
    </View>
  );
}

export default CreateAccountConfirm;
