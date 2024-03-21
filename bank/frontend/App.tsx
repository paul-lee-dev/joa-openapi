import {NavigationContainer, ParamListBase} from '@react-navigation/native';
import AccountDetail from './src/pages/AccountDetail';
import ChangeAccountLimit from './src/pages/ChangeAccountLimit';
import ChangeAccountName from './src/pages/ChangeAccountName';
import ChangePassword from './src/pages/ChangePassword';
import ChangePasswordResult from './src/pages/ChangePasswordResult';
import ChangePasswordStart from './src/pages/ChangePasswordStart';
import ChangePasswordVerify from './src/pages/ChangePasswordVerify';
import CreateAccount from './src/pages/CreateAccount';
import History from './src/pages/History';
import Intro from './src/pages/Intro';
import Join from './src/pages/Join';
import Main from './src/pages/Main';
import Menu from './src/pages/Menu';
import Search from './src/pages/Search';
import Setting from './src/pages/Setting';
import Splash from './src/pages/Splash';
import Transfer from './src/pages/Transfer';
import TransferAmount from './src/pages/TransferAmount';
import TransferConfirm from './src/pages/TransferConfirm';
import TransferResult from './src/pages/TransferResult';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

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
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen name="Intro" component={Intro} {...globalOption} />
        <Stack.Screen name="Main" component={Main} {...globalOption} />
        <Stack.Screen name="Join" component={Join} {...globalOption} />
        <Stack.Screen name="Search" component={Search} {...globalOption} />
        <Stack.Screen name="Menu" component={Menu} {...globalOption} />
        <Stack.Screen name="Setting" component={Setting} {...globalOption} />
        <Stack.Screen name="Transfer" component={Transfer} {...globalOption} />
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
  );
}

export default App;
