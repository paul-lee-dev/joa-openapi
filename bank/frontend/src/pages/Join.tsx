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
import {RootStackParamList} from 'App';
import Header from '@/components/Header';
import CommonInput from '@/components/CommonInput';
import BottomButton from '@/components/BottomButton';

type JoinScreenProps = NativeStackScreenProps<RootStackParamList, 'Join'>;

interface JoinForm {
  email: string;
  emailCheck: string;
  name: string;
  phone: string;
  password: string;
  password2: string;
}

function Join({navigation}: JoinScreenProps): React.JSX.Element {
  const {
    control,
    handleSubmit,
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
    setSendingEmail(true);
  };

  const checkEmailCode = () => {
    console.log(emailCode);
    setEmailCodeValid(true);
  };

  const onSubmit = (data: JoinForm) => {
    if (!emailCodeValid) {
      setEmailCodeError(true);
    }
    console.log(data);
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
        <View className="w-full flex  py-12">
          <CommonInput label={'이메일'}>
            <View className="w-full flex space-y-4">
              <Controller
                control={control}
                rules={{required: true}}
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
              {errors.name && (
                <Text className="absolute bottom-10 left-2 text-red-400">
                  이메일을 입력해주세요.
                </Text>
              )}
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
              rules={{required: true}}
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
            {errors.name && (
              <Text className="absolute bottom-2 left-8 text-red-400">
                이름을 입력해주세요.
              </Text>
            )}
          </CommonInput>
          <CommonInput label={'전화번호'}>
            <Controller
              control={control}
              rules={{required: true}}
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
            {errors.phone && (
              <Text className="absolute bottom-2 left-8 text-red-400">
                전화번호을 입력해주세요.
              </Text>
            )}
          </CommonInput>
          <CommonInput label={'비밀번호'}>
            <Controller
              control={control}
              rules={{required: true}}
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
            {errors.password && (
              <Text className="absolute bottom-2 left-8 text-red-400">
                비밀번호를 입력해주세요.
              </Text>
            )}
          </CommonInput>
          <CommonInput label={'비밀번호 확인'}>
            <Controller
              control={control}
              rules={{required: true}}
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
            {errors.password2 && (
              <Text className="absolute bottom-2 left-8 text-red-400">
                비밀번호를 입력해주세요.
              </Text>
            )}
          </CommonInput>
        </View>
      </ScrollView>
      <BottomButton title={'회원가입'} onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

export default Join;
