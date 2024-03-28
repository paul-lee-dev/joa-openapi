import clsx from 'clsx';
import {Pressable, Text, View} from 'react-native';

interface IOption {
  label: string;
  value: any;
}

interface IProps {
  label: string;
  options: IOption[];
  value: any;
  setValue: (value: any) => void;
}

function OptionInput({
  label,
  options,
  value,
  setValue,
}: IProps): React.JSX.Element {
  return (
    <View className="w-full px-6 py-4 flex space-y-2">
      <Text className="text-lg font-semibold text-slate-700">{label}</Text>
      <View className="w-full h-12 flex flex-row bg-gray-300">
        {options.map(option => (
          <Pressable
            onPress={() => setValue(option.value)}
            key={option.value}
            className={clsx(
              'h-full flex-grow flex justify-center items-center border border-gray-400',
              option.value === value && 'bg-gray-50',
            )}>
            <Text className="text-lg font-semibold">{option.label}</Text>
          </Pressable>
        ))}
      </View>
    </View>
  );
}

export default OptionInput;
