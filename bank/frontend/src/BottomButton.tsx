import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

interface IProps {
  title: String;
}

function BottomButton({title}: IProps): React.JSX.Element {
  return (
    <View className="w-screen h-16 absolute bottom-0 bg-pink-200 items-center justify-center">
      <Text className="text-2xl font-semibold">{title}</Text>
    </View>
  );
}

export default BottomButton;
