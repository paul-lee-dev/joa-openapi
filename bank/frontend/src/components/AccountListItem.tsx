import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {
  link: () => void;
}

function AccountItem({link}: IProps): React.JSX.Element {
  return (
    <View className="h-36 w-full flex justify-center p-4 bg-pink-100 rounded-xl space-y-2 shadow-sm shadow-black">
      <View className="w-full flex flex-row justify-between">
        <Text>입출금통장</Text>
        <View className="bg-pink-200 px-2 h-8 flex justify-center items-center rounded-2xl">
          <Text className="text-sm font-semibold">일반예금</Text>
        </View>
      </View>
      <Text className="text-sm font-normal text-gray-400">
        1234-12-123-1234
      </Text>
      <View className="w-full flex flex-row justify-between items-center">
        <Text className="text-xl font-bold">1,000,000원</Text>
        <Icon name={'chevron-right'} color={'#777'} onPress={link} size={25} />
      </View>
    </View>
  );
}

export default AccountItem;
