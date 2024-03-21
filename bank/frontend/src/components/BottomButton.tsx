import {Text, TouchableOpacity} from 'react-native';

interface IProps {
  title: string;
  onPress?: () => void;
}

function BottomButton({title, onPress}: IProps): React.JSX.Element {
  return (
    <TouchableOpacity
      onPress={onPress}
      className="w-screen h-16 absolute bottom-0 left-0 bg-pink-200 items-center justify-center shadow-md shadow-black">
      <Text className="text-2xl font-semibold text-gray-700">{title}</Text>
    </TouchableOpacity>
  );
}

export default BottomButton;
