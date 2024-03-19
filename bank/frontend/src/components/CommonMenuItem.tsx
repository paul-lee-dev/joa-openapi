import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

interface IProps {
  title: string;
  underline: boolean;
  subtitle?: string;
}

function CommonMenuItem({
  title,
  underline,
  subtitle,
}: IProps): React.JSX.Element {
  return (
    <View className="w-full px-6 py-2">
      {underline ? (
        <View className="w-full h-16 border-b border-slate-400/50 flex flex-row justify-between items-center">
          <View className="flex">
            {subtitle && (
              <Text className="text-xs font-light text-gray-400">
                {subtitle}
              </Text>
            )}
            <Text className="text-lg font-semibold text-slate-700">
              {title}
            </Text>
          </View>
          <Icon
            name="chevron-right"
            color={'#aaa'}
            onPress={() => {}}
            size={30}
          />
        </View>
      ) : (
        <View className="w-full h-16 flex flex-row justify-between items-center">
          <View className="flex">
            {subtitle && (
              <Text className="text-xs font-light text-gray-400">
                {subtitle}
              </Text>
            )}
            <Text className="text-lg font-semibold text-slate-700">
              {title}
            </Text>
          </View>
          <Icon
            name="chevron-right"
            color={'#aaa'}
            onPress={() => {}}
            size={30}
          />
        </View>
      )}
    </View>
  );
}

export default CommonMenuItem;
