import {View} from 'react-native';
import Header from './Header';
import CommonInput from './CommonInput';
import CommonMenuItem from './CommonMenuItem';
import BottomButton from './BottomButton';
import BottomPopup from './BottomPopup';

function Template(): React.JSX.Element {
  return (
    <View className="w-full h-full">
      <Header />
      <CommonInput label={'이메일'} />
      <CommonInput label={'이름'} />
      <CommonInput label={'비밀번호'} />
      <CommonMenuItem title={'알림설정'} />
      <CommonMenuItem title={'앱 환경설정'} />
      <CommonMenuItem title={'은행코드 변경'} />
      <BottomButton title={'확인'} />
      <BottomPopup />
    </View>
  );
}

export default Template;
