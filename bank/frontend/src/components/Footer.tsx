import {Text, View} from 'react-native';

function Footer(): React.JSX.Element {
  return (
    <View className="w-full p-10 flex items-center">
      <Text className="text-gray-400 text-sm font-light">
        COPYRIGHT© {new Date().getFullYear()} JOA BANK
      </Text>
    </View>
  );
}

export default Footer;
