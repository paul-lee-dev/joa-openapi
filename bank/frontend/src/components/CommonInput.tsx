import {Text, TextInput, View} from 'react-native';

interface IProps {
  label: string;
  children?: React.ReactNode;
}

function CommonInput({label, children}: IProps): React.JSX.Element {
  return (
    <View className="w-full px-6 py-8">
      <Text className="text-lg font-semibold text-slate-700">{label}</Text>
      {children || <TextInput className="border-b border-gray-800/50" />}
    </View>
  );
}

export default CommonInput;
