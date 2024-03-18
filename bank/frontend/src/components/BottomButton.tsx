import {Text, View} from 'react-native';

interface IProps {
  title: string;
}

function BottomButton({title}: IProps): React.JSX.Element {
  return (
    <View className="w-screen h-16 absolute bottom-0 bg-pink-200 items-center justify-center shadow-md shadow-black">
      <Text className="text-2xl font-semibold">{title}</Text>
    </View>
  );
}

export default BottomButton;
