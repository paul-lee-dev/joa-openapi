import {Text, TouchableOpacity, View} from 'react-native';

interface IProps {}

function AccountItem({}: IProps): React.JSX.Element {
  return (
    <View className="h-24 w-full flex flex-row items-center px-8 space-x-6">
      <View className="w-14 h-14 bg-gray-400 rounded-full" />
      <TouchableOpacity className="flex-grow flex space-y-1">
        <Text className="text-base font-bold">내 입출금통장</Text>
        <Text className="text-sm font-normal text-gray-400">
          신한은행 1234-12-123-1234
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default AccountItem;
