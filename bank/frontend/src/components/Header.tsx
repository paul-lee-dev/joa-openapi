import {Text, TouchableOpacity, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IMenu {
  title: string;
  onPress: () => void;
}

interface IProps {
  stack?: string;
  goBack?: () => void;
  menu: IMenu[];
}

function Header({stack, goBack, menu}: IProps): React.JSX.Element {
  return (
    <View className="w-full h-16 flex flex-row justify-between px-4">
      <View className=" w-40 flex flex-row items-center flex-grow ">
        {goBack ? (
          <Icon
            name={'chevron-left'}
            color={'#000'}
            onPress={goBack}
            size={30}
          />
        ) : null}

        <Text className="text-2xl font-semibold text-gray-700">
          {stack || 'JOA BANK'}
        </Text>
      </View>
      <View className=" w-24 flex flex-row justify-end space-x-4 pr-2 items-center">
        {menu.map(m => (
          <TouchableOpacity onPress={m.onPress} key={m.title}>
            <Icon name={m.title} color={'#000'} size={30} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}

export default Header;
