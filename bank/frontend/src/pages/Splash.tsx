import {Image, Text, View} from 'react-native';
import PiggyBank from '../assets/piggy-bank.png';

function Splash(): React.JSX.Element {
  return (
    <View className="flex flex-1 bg-pink-200 justify-center items-center space-y-10">
      <View className="w-1/2">
        <Text className="text-lg">핀테크 프로젝트를 위한</Text>
        <Text className="text-lg">가상은행</Text>
      </View>
      <Image source={PiggyBank} resizeMode="cover" className="w-80 h-80" />
      <Text className="text-3xl font-semibold">JOA BANK</Text>
    </View>
  );
}

export default Splash;
