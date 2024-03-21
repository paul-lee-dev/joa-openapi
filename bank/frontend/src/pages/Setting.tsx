import {ScrollView, View} from 'react-native';
import Header from '../components/Header';
import CommonMenuItem from '../components/CommonMenuItem';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../../App';

type SettingScreenProps = NativeStackScreenProps<RootStackParamList, 'Setting'>;

function Setting({navigation}: SettingScreenProps): React.JSX.Element {
  return (
    <View className="w-full h-full bg-gray-100 flex">
      <Header
        stack="설정"
        goBack={() => navigation.popToTop()}
        menu={[
          {title: 'home-outline', onPress: () => navigation.popToTop()},
          {title: 'menu', onPress: () => navigation.push('Menu')},
        ]}
      />
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
