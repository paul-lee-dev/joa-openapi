import {ScrollView, View} from 'react-native';
import Header from '../components/Header';
import CommonMenuItem from '../components/CommonMenuItem';

function Setting(): React.JSX.Element {
  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header stack="설정" menu={[{title: 'menu', onPress: () => {}}]} />
      <ScrollView className="w-full flex-grow">
        <View>
          <CommonMenuItem title={'알림설정'} underline={true} />
          <CommonMenuItem title={'앱 환경설정'} underline={true} />
          <CommonMenuItem title={'은행코드 변경'} underline={true} />
        </View>
      </ScrollView>
    </View>
  );
}

export default Setting;
