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

const Stack = createNativeStackNavigator();

function App(): React.JSX.Element {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Intro">
        <Stack.Screen
          name="Intro"
          component={Intro}
          options={{title: 'ZOA BANK'}}
        />
        <Stack.Screen
          name="Main"
          component={Main}
          options={{title: 'ZOA BANK'}}
        />
        <Stack.Screen
          name="Join"
          component={Join}
          options={{title: 'ZOA BANK'}}
        />
      </Stack.Navigator>
      {/* <Stack.Screen name="Details">
        {props => <DetailsScreen {...props} />}
      </Stack.Screen> */}
      {/* <Splash /> */}
      {/* <Join /> */}
      {/* <History /> */}
      {/* <Transfer /> */}
      {/* <TransferAmount /> */}
      {/* <TransferConfirm /> */}
      {/* <TransferResult /> */}
      {/* <Menu /> */}
      {/* <Setting /> */}
      {/* <Search /> */}
      {/* <CreateAccount /> */}
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
