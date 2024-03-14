import {Text, View} from 'react-native';

function Splash(): React.JSX.Element {
  return (
    <View className="flex flex-1 bg-pink-200 justify-center items-center space-y-28">
      <View className="w-1/2">
        <Text className="text-lg">핀테크 프로젝트를 위한</Text>
        <Text className="text-lg">가상은행</Text>
      </View>
      <View className="w-32 h-32 bg-pink-100" />
      <Text className="text-3xl font-semibold">JOA BANK</Text>
    </View>
  );
}

export default Splash;
