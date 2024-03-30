import BottomButton from '@/components/BottomButton';
import CommonInput from '@/components/CommonInput';
import Header from '@/components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {View} from 'react-native';
import {useMutation} from '@tanstack/react-query';
import {updateAccount} from '@/api/account';
import {Controller, useForm} from 'react-hook-form';
import {Text, TextInput} from 'react-native';
import {RootStackParamList} from '@/Router';

type ChangeAccountNameScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ChangeAccountName'
>;

interface ChangeAccountNameForm {
  nickname: string;
}

function ChangeAccountName({
  route,
  navigation,
}: ChangeAccountNameScreenProps): React.JSX.Element {
  const {accountId, nickname} = route.params;
  const mutation = useMutation({
    mutationFn: updateAccount,
    onSuccess: data => {
      console.log(data);
      navigation.popToTop();
    },
    onError: err => console.log(err),
  });
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<ChangeAccountNameForm>({
    defaultValues: {
      nickname,
    },
  });

  const onSubmit = (data: ChangeAccountNameForm) => {
    mutation.mutate({
      accountId,
      nickname: data.nickname,
      password: '1234',
    });
  };

  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="계좌이름 변경"
        goBack={() => navigation.pop()}
        menu={[{title: 'close', onPress: () => navigation.pop()}]}
      />
      <CommonInput label={'계좌이름'}>
        <Controller
          control={control}
          rules={{
            required: '계좌이름을 입력해주세요.',
            maxLength: {
              value: 20,
              message: '계좌이름을 최대 20자이내로 작성해주세요',
            },
            validate: {
              correct: value =>
                value === nickname ? '계좌 이름이 기존과 동일합니다.' : true,
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
          name="nickname"
        />
        <Text className="absolute bottom-2 left-8 text-red-400">
          {errors.nickname?.message}
        </Text>
      </CommonInput>
      <BottomButton title={'변경'} onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

export default ChangeAccountName;
