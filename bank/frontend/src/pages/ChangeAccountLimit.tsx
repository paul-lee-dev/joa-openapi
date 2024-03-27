import {RootStackParamList} from '@/Router';
import {changeLimit} from '@/api/account';
import BottomButton from '@/components/BottomButton';
import CommonInput from '@/components/CommonInput';
import Header from '@/components/Header';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {useMutation} from '@tanstack/react-query';
import {Controller, useForm} from 'react-hook-form';
import {Text, TextInput, View} from 'react-native';

type ChangeAccountLimitScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'ChangeAccountLimit'
>;

interface ChangeAccountLimitForm {
  accountId: string;
  transferLimit: string;
}

function ChangeAccountLimit({
  route,
  navigation,
}: ChangeAccountLimitScreenProps): React.JSX.Element {
  const {accountId, transferLimit} = route.params;
  const mutation = useMutation({
    mutationFn: changeLimit,
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
  } = useForm<ChangeAccountLimitForm>({
    defaultValues: {
      accountId,
      transferLimit: transferLimit.toString(),
    },
  });

  const onSubmit = (data: ChangeAccountLimitForm) => {
    mutation.mutate({
      accountId,
      transferLimit: +data.transferLimit,
    });
  };
  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="계좌한도 변경"
        menu={[{title: 'close', onPress: () => {}}]}
      />
      <CommonInput label={'계좌 한도 (만원)'}>
        <Controller
          control={control}
          rules={{
            required: '계좌한도을 입력해주세요.',
          }}
          render={({field: {onChange, onBlur, value}}) => (
            <TextInput
              className="border-b border-gray-800/50 text-gray-700"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}
              returnKeyType="done"
              keyboardType="number-pad"
            />
          )}
          name="transferLimit"
        />
        <Text className="absolute bottom-2 left-8 text-red-400">
          {errors.transferLimit?.message}
        </Text>
      </CommonInput>
      <BottomButton title={'변경'} onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

export default ChangeAccountLimit;
