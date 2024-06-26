import {IAccount} from '@/models';
import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {
  account: IAccount;
  onPress?: () => void;
}

function AccountItem({account, onPress}: IProps): React.JSX.Element {
  return (
    <View className="h-24 w-full flex flex-row items-center px-8 space-x-6">
      <View className="w-14 h-14 bg-gray-400 rounded-full justify-center items-center">
        <Icon name={'card-account-details-outline'} color={'#ddd'} size={35} />
      </View>
      <TouchableOpacity onPress={onPress} className="flex-grow flex space-y-1">
        <Text className="text-base font-bold text-gray-700">
          {account?.nickname}
        </Text>
        <Text className="text-sm font-normal text-gray-400">
          {account?.accountId}
        </Text>
      </TouchableOpacity>
    </View>
  );
}

export default AccountItem;
