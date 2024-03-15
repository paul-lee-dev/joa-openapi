import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IMenu {
  title: string;
  onPress: () => void;
}

interface IProps {
  stack: boolean;
  menu: IMenu[];
}

function Header({stack, menu}: IProps): React.JSX.Element {
  return (
    <View className="w-full h-16 flex flex-row justify-between px-4">
      <View className=" w-40 flex flex-row items-center flex-grow ">
        {stack ? (
          <Icon
            name={'chevron-left'}
            color={'#000'}
            onPress={() => {}}
            size={30}
          />
        ) : null}

        <Text className="text-2xl font-semibold">JOA BANK</Text>
      </View>
      <View className=" w-24 flex flex-row justify-around items-center">
        {menu.map(m => (
          <Icon name={m.title} color={'#000'} onPress={m.onPress} size={30} />
        ))}
      </View>
    </View>
  );
}

export default Header;
