import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

function Header(): React.JSX.Element {
  return (
    <View className="w-full h-16 flex flex-row justify-between px-4">
      <View className=" w-40 flex flex-row items-center flex-grow ">
        <Text className="text-2xl font-semibold">JOA BANK</Text>
      </View>
      <View className=" w-24 flex flex-row justify-around items-center">
        <Icon name="search" color={'#000'} onPress={() => {}} size={30} />
        <Icon name="menu" color={'#000'} onPress={() => {}} size={30} />
      </View>
    </View>
  );
}

export default Header;
