import {Text, View} from 'react-native';

interface IProps {
  label: string;
  options: string[];
}

function FilterOption({label, options}: IProps): React.JSX.Element {
  return (
    <View className="w-full px-6 py-4 flex space-y-2">
      <Text className="text-lg font-semibold text-slate-700">{label}</Text>
      <View className="w-full h-12 flex flex-row bg-gray-300">
        {options.map((option, i) =>
          i === 0 ? (
            <View
              key={option}
              className="h-full flex-grow flex justify-center items-center border border-gray-400 bg-gray-50">
              <Text className="text-lg font-semibold">{option}</Text>
            </View>
          ) : (
            <View
              key={option}
              className="h-full flex-grow flex justify-center items-center border border-gray-400">
              <Text className="text-lg font-semibold">{option}</Text>
            </View>
          ),
        )}
      </View>
    </View>
  );
}

export default FilterOption;
