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
import {useRecoilValue} from 'recoil';
import React, {useEffect} from 'react';
import CreateAccountConfirm from '@/pages/CreateAccountConfirm';
import CreateAccountResult from '@/pages/CreateAccountResult';
import ChangeAccountName from '@/pages/ChangeAccountName';
import ChangeAccountLimit from '@/pages/ChangeAccountLimit';
import AccountDetail from '@/pages/AccountDetail';
import AccountList from '@/pages/AccountList';
import {IAccount} from '@/models';
import {memberDataAtom} from '@/store/atoms';
import History from './pages/History';
import ChangeBankId from './pages/ChangeBankId';
import EditProfile from './pages/EditProfile';
import DeleteAccount from './pages/DeleteAccount';
import SplashScreen from 'react-native-splash-screen';

export type RootStackParamList = {
  AccountDetail: {
    account: IAccount;
  };
  AccountList: undefined;
  ChangeAccountLimit: {
    accountId: string;
    transferLimit: number;
  };
  ChangeAccountName: {
    accountId: string;
    nickname: string;
  };
  ChangeBankId: undefined;
  ChangePassword: undefined;
  ChangePasswordResult: undefined;
  ChangePasswordStart: undefined;
  ChangePasswordVerify: undefined;
  CreateAccount: undefined;
  CreateAccountConfirm: undefined;
  CreateAccountResult: undefined;
  DeleteAccount: {account: IAccount};
  EditProfile: undefined;
  History: {
    account: IAccount;
  };
  Intro: undefined;
  Join: undefined;
  Main: undefined;
  Menu: undefined;
  Search: undefined;
  Setting: undefined;
  Splash: undefined;
  Transfer: {account: IAccount};
  TransferAmount: {
    account: IAccount;
    toAccountId: string;
  };
  TransferConfirm: {
    account: IAccount;
    toAccountId: string;
    amount: number;
  };
  TransferResult: {
    amount: number;
    depositorName: string;
    accountNickname: string;
    toAccountId: string;
  };
};

const Stack = createNativeStackNavigator<RootStackParamList>();
const globalOption = {options: {headerShown: false}};

function Router(): React.JSX.Element {
  const memberData = useRecoilValue(memberDataAtom);
  useEffect(() => {
    SplashScreen.hide();
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={memberData.isLogin ? 'Main' : 'Intro'}>
        {memberData.isLogin ? (
          <>
            <Stack.Screen name="Main" component={Main} {...globalOption} />
            <Stack.Screen
              name="History"
              component={History}
              {...globalOption}
            />
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
            <Stack.Screen
              name="CreateAccountConfirm"
              component={CreateAccountConfirm}
              {...globalOption}
            />
            <Stack.Screen
              name="CreateAccountResult"
              component={CreateAccountResult}
              {...globalOption}
            />
            <Stack.Screen
              name="ChangeAccountName"
              component={ChangeAccountName}
              {...globalOption}
            />
            <Stack.Screen
              name="ChangeAccountLimit"
              component={ChangeAccountLimit}
              {...globalOption}
            />
            <Stack.Screen
              name="AccountDetail"
              component={AccountDetail}
              {...globalOption}
            />
            <Stack.Screen
              name="AccountList"
              component={AccountList}
              {...globalOption}
            />
            <Stack.Screen
              name="ChangeBankId"
              component={ChangeBankId}
              {...globalOption}
            />
            <Stack.Screen
              name="EditProfile"
              component={EditProfile}
              {...globalOption}
            />
            <Stack.Screen
              name="DeleteAccount"
              component={DeleteAccount}
              {...globalOption}
            />
          </>
        ) : (
          <>
            <Stack.Screen name="Intro" component={Intro} {...globalOption} />
            <Stack.Screen name="Join" component={Join} {...globalOption} />
          </>
        )}

        <Stack.Screen name="Search" component={Search} {...globalOption} />
        <Stack.Screen name="Menu" component={Menu} {...globalOption} />
        <Stack.Screen name="Setting" component={Setting} {...globalOption} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Router;
