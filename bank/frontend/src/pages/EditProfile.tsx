import {RootStackParamList} from '@/Router';
import BottomButton from '@/components/BottomButton';
import Header from '@/components/Header';
import {memberDataAtom} from '@/store/atoms';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {Controller, useForm} from 'react-hook-form';
import {Text, TextInput, View} from 'react-native';
import {useRecoilState} from 'recoil';

type EditProfileScreenProps = NativeStackScreenProps<
  RootStackParamList,
  'EditProfile'
>;

interface EditProfileForm {
  name: string;
}

function EditProfile({navigation}: EditProfileScreenProps): React.JSX.Element {
  const [memberData, setMemberData] = useRecoilState(memberDataAtom);
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<EditProfileForm>({
    defaultValues: {
      name: memberData.member!.name,
    },
  });

  const onSubmit = (data: EditProfileForm) => {
    console.log(data);
    setMemberData(prev => prev);
  };

  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="사용자 정보 변경"
        menu={[{title: 'close', onPress: () => navigation.pop()}]}
      />
      <View className="w-full h-24 p-8 flex justify-center items-center">
        <Text className="text-xl font-bold">{memberData.member?.email}</Text>
      </View>
      <View className="h-48 flex justify-evenly">
        <View className="flex flex-row justify-between px-6">
          <Text className="font-bold text-sm text-gray-700">이름</Text>
          <View className="flex w-1/2">
            <Controller
              control={control}
              rules={{
                required: '이름을 입력해주세요.',
                maxLength: {
                  value: 8,
                  message: '이름은 최대 8자입니다.',
                },
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <TextInput
                  className="border-b border-gray-800/50 font-bold text-sm text-gray-700 py-0 text-right px-1"
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value}
                />
              )}
              name="name"
            />
            <Text className="absolute -bottom-4 right-1 text-red-400">
              {errors.name?.message}
            </Text>
          </View>
        </View>
        <View className="flex flex-row justify-between px-6">
          <Text className="font-bold text-sm text-gray-700">전화번호</Text>
          <Text className="font-semibold text-sm text-gray-700">
            {memberData.member?.phone}
          </Text>
        </View>
        <View className="flex flex-row justify-between px-6">
          <Text className="font-bold text-sm text-gray-700">가입일</Text>
          <Text className="font-semibold text-sm text-gray-700">
            {memberData.member?.createdAt}
          </Text>
        </View>
        <View className="flex flex-row justify-between px-6">
          <Text className="font-bold text-sm text-gray-700">최근 수정일</Text>
          <Text className="font-semibold text-sm text-gray-700">
            {memberData.member?.updatedAt}
          </Text>
        </View>
      </View>

      <BottomButton title={'변경'} onPress={handleSubmit(onSubmit)} />
    </View>
  );
}

export default EditProfile;
