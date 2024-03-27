import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Controller, useForm} from 'react-hook-form';
import {useState} from 'react';
import Header from '@/components/Header';
import CommonInput from '@/components/CommonInput';
import BottomButton from '@/components/BottomButton';
import {join} from '@/api/member';
import {useMutation} from '@tanstack/react-query';
import {useRecoilValue} from 'recoil';
import {bankDataAtom} from '@/store/atoms';
import clsx from 'clsx';
import {RootStackParamList} from '@/Router';

type JoinScreenProps = NativeStackScreenProps<RootStackParamList, 'Join'>;

interface JoinForm {
  email: string;
  name: string;
  phone: string;
  password: string;
  password2: string;
}

function Join({navigation}: JoinScreenProps): React.JSX.Element {
  const bankData = useRecoilValue(bankDataAtom);
  const mutation = useMutation({
    mutationFn: join,
    onSuccess: data => {
      console.log(data);
      navigation.replace('Intro');
    },
    onError: err => console.log(err),
  });

  const {
    control,
    handleSubmit,
    getValues,
    formState: {errors},
  } = useForm<JoinForm>({
    defaultValues: {
      email: '',
      name: '',
      phone: '',
      password: '',
      password2: '',
    },
  });

  const [sendingEmail, setSendingEmail] = useState<boolean>(false);
  const [emailCodeValid, setEmailCodeValid] = useState<boolean>(false);
  const [emailCodeError, setEmailCodeError] = useState<boolean>(false);
  const [emailCode, setEmailCode] = useState<string>('');
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showPassword2, setShowPassword2] = useState<boolean>(false);

  const sendEmailCode = () => {
    // TODO: 이메일 인증 보내기 API
    setSendingEmail(true);
  };

  const checkEmailCode = () => {
    console.log(emailCode);
    // TODO: 이메일 코드 체크
    setEmailCodeValid(true);
  };

  const onSubmit = (data: JoinForm) => {
    if (!emailCodeValid) {
      setEmailCodeError(true);
    }
    mutation.mutate({
      name: data.name,
      email: data.email,
      phone: data.phone.replaceAll('-', ''),
      password: data.password,
      bankId: bankData.bankId,
    });
  };

  return (
    <View className="w-full h-full bg-gray-100">
      <Header
        stack="회원가입"
        goBack={() => navigation.popToTop()}
        menu={[
          {title: 'home-outline', onPress: () => navigation.popToTop()},
          {title: 'menu', onPress: () => navigation.navigate('Menu')},
        ]}
      />
      <ScrollView className="w-full">
        <View className="w-full flex pt-12 pb-16">
          <CommonInput label={'이메일'}>
            <View className="w-full flex space-y-4">
              <Controller
                control={control}
                rules={{
                  required: '이메일을 입력해주세요.',
                  pattern: {
                    value:
                      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/,
                    message: '올바른 이메일 형식이 아닙니다.',
                  },
                  validate: {
                    code: () =>
                      emailCodeValid ? true : '이메일 인증을 해주세요.',
                  },
                }}
                render={({field: {onChange, onBlur, value}}) => (
                  <View className="w-full relative">
                    <TextInput
                      className="border-b border-gray-800/50 text-gray-700"
                      onBlur={onBlur}
                      onChangeText={onChange}
                      value={value}
                    />
                    <TouchableOpacity
                      onPress={sendEmailCode}
                      className="absolute top-0 right-0 translate-y-3 border border-gray-400 rounded-full p-1 flex justify-center items-center">
                      <Text className="text-sm font-medium text-gray-700">
                        인증번호 전송
                      </Text>
                    </TouchableOpacity>
                  </View>
                )}
                name="email"
              />
              <Text
                className={clsx(
                  'absolute text-red-400',
                  sendingEmail ? 'bottom-10 left-2' : '-bottom-6 left-2',
                )}>
                {errors.email?.message}
              </Text>
              {sendingEmail && (
                <View className="w-full relative">
                  <TextInput
                    className="border-b border-gray-800/50 text-gray-700"
                    onChangeText={setEmailCode}
                  />
                  <TouchableOpacity
                    onPress={checkEmailCode}
                    className="absolute top-0 right-0 translate-y-3 border border-gray-400 rounded-full p-1 flex justify-center items-center">
                    <Text className="text-sm font-medium text-gray-700">
                      인증번호 확인
                    </Text>
                  </TouchableOpacity>
                  {emailCodeError && (
                    <Text className="absolute bottom-10 left-2 text-red-400">
                      인증번호가 올바르지 않습니다.
                    </Text>
                  )}
                </View>
              )}
            </View>
          </CommonInput>
          <CommonInput label={'이름'}>
            <Controller
              control={control}
              rules={{
                required: '이름을 입력해주세요.',
                maxLength: {
                  value: 8,
                  message: '이름을 최대 8자이내로 작성해주세요',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  className="border-b border-gray-800/50 text-gray-700"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="name"
            />
            <Text className="absolute bottom-2 left-8 text-red-400">
              {errors.name?.message}
            </Text>
          </CommonInput>
          <CommonInput label={'전화번호'}>
            <Controller
              control={control}
              rules={{
                required: '전화번호을 입력해주세요.',
                pattern: {
                  value:
                    /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/,
                  message: '올바른 전화번호 형식이 아닙니다.',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  className="border-b border-gray-800/50 text-gray-700"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="phone"
            />
            <Text className="absolute bottom-2 left-8 text-red-400">
              {errors.phone?.message}
            </Text>
          </CommonInput>
          <CommonInput label={'비밀번호'}>
            <Controller
              control={control}
              rules={{required: '비밀번호를 입력해주세요.'}}
              render={({field: {onChange, onBlur, value}}) => (
                <View className="w-full relative">
                  <TextInput
                    className="border-b border-gray-800/50 text-gray-700"
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value}
                    secureTextEntry={!showPassword}
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
          <CommonInput label={'비밀번호 확인'}>
            <Controller
              control={control}
              rules={{
                required: '비밀번호를 한번 더 입력해주세요.',
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
      <BottomButton title={'회원가입'} onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

export default Join;
