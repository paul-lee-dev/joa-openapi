import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import CreateAccount from '@/pages/CreateAccount';
import Intro from '@/pages/Intro';
import Join from '@/pages/Join';
import Main from '@/pages/Main';
import Menu from '@/pages/Menu';
import Search from '@/pages/Search';
import Setting from '@/pages/Setting';
import Transfer from '@/pages/Transfer';
import TransferAmount from '@/pages/TransferAmount';
import TransferConfirm from '@/pages/TransferConfirm';
import TransferResult from '@/pages/TransferResult';
import {RecoilRoot} from 'recoil';

export type RootStackParamList = {
  AccountDetail: undefined;
  ChangeAccountLimit: undefined;
  ChangeAccountName: undefined;
  ChangePassword: undefined;
  ChangePasswordResult: undefined;
  ChangePasswordStart: undefined;
  ChangePasswordVerify: undefined;
  CreateAccount: undefined;
  History: undefined;
  Intro: undefined;
  Join: undefined;
  Main: undefined;
  Menu: undefined;
  Search: undefined;
  Setting: undefined;
  Splash: undefined;
  Transfer: undefined;
  TransferAmount: undefined;
  TransferConfirm: undefined;
  TransferResult: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const globalOption = {options: {headerShown: false}};

function App(): React.JSX.Element {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Intro">
          <Stack.Screen name="Intro" component={Intro} {...globalOption} />
          <Stack.Screen name="Main" component={Main} {...globalOption} />
          <Stack.Screen name="Join" component={Join} {...globalOption} />
          <Stack.Screen name="Search" component={Search} {...globalOption} />
          <Stack.Screen name="Menu" component={Menu} {...globalOption} />
          <Stack.Screen name="Setting" component={Setting} {...globalOption} />
          <Stack.Screen
            name="Transfer"
            component={Transfer}
            {...globalOption}
          />
          <Stack.Screen
            name="TransferAmount"
            component={TransferAmount}
            {...globalOption}
          />
          <Stack.Screen
            name="TransferConfirm"
            component={TransferConfirm}
            {...globalOption}
          />
          <Stack.Screen
            name="TransferResult"
            component={TransferResult}
            {...globalOption}
          />
          <Stack.Screen
            name="CreateAccount"
            component={CreateAccount}
            {...globalOption}
          />
        </Stack.Navigator>
        {/* <Stack.Screen name="Details">
        {props => <DetailsScreen {...props} />}
      </Stack.Screen> */}
        {/* <Splash /> */}
        {/* <Join /> */}
        {/* <History /> */}

        {/* <AccountDetail /> */}
        {/* <ChangePasswordStart /> */}
        {/* <ChangePasswordVerify /> */}
        {/* <ChangePassword /> */}
        {/* <ChangePasswordResult /> */}
        {/* <ChangeAccountName /> */}
        {/* <ChangeAccountLimit /> */}
      </NavigationContainer>
    </RecoilRoot>
  );
}

export default App;
