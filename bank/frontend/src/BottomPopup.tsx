import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import CommonInput from './CommonInput';
import BottomButton from './BottomButton';

interface IProps {
  title: String;
}

function BottomPopup(): React.JSX.Element {
  return (
    <View className="w-full h-full absolute bg-black/30">
      <View className="w-full h-2/3 absolute bottom-0 rounded-t-[40px] bg-white px-10 py-2 flex items-center">
        <View className="w-16 h-1 bg-slate-400/50 rounded-full mb-10" />
        <Text>하이</Text>
        <CommonInput label={'이메일'} />
        <CommonInput label={'비밀번호'} />
        <BottomButton title={'로그인'} />
      </View>
    </View>
  );
}

export default BottomPopup;
