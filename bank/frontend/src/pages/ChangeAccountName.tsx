import {View} from 'react-native';
import Header from '../components/Header';
import BottomButton from '../components/BottomButton';
import CommonInput from '../components/CommonInput';

function ChangeAccountName(): React.JSX.Element {
  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="계좌이름 변경"
        menu={[{title: 'close', onPress: () => {}}]}
      />
      <CommonInput label={'계좌 이름'} />
      <BottomButton title={'변경'} />
    </View>
  );
}

export default ChangeAccountName;
