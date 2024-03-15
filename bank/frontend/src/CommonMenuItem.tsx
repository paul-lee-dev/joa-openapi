import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IProps {
  title: String;
}

function CommonMenuItem({title}: IProps): React.JSX.Element {
  return (
    <View className="w-full px-6 py-2">
      <View className="w-full h-16 border-b border-slate-400/50 flex flex-row justify-between items-center">
        <Text className="text-lg font-semibold text-slate-700">{title}</Text>
        <Icon
          name="chevron-right"
          color={'#aaa'}
          onPress={() => {}}
          size={30}
        />
      </View>
    </View>
  );
}

export default CommonMenuItem;
