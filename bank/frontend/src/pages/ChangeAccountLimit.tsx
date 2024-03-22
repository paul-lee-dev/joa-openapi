import BottomButton from '@/components/BottomButton';
import CommonInput from '@/components/CommonInput';
import Header from '@/components/Header';
import {View} from 'react-native';

function ChangeAccountLimit(): React.JSX.Element {
  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="계좌한도 변경"
        menu={[{title: 'close', onPress: () => {}}]}
      />
      <CommonInput label={'계좌 한도'} />
      <BottomButton title={'변경'} />
    </View>
  );
}

export default ChangeAccountLimit;
