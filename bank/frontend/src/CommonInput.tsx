import {Text, TextInput, View} from 'react-native';

interface IProps {
  label: String;
}

function CommonInput({label}: IProps): React.JSX.Element {
  return (
    <View className="w-full px-6 py-4">
      <Text className="text-lg font-semibold text-slate-700">{label}</Text>
      <TextInput className="border-b" />
    </View>
  );
}

export default CommonInput;
