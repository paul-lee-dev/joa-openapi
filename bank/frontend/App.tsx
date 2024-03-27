import {RecoilRoot} from 'recoil';
import React from 'react';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query';
import {MenuProvider} from 'react-native-popup-menu';
import Router from '@/Router';

const queryClient = new QueryClient();

function App(): React.JSX.Element {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <MenuProvider>
          <Router />
        </MenuProvider>
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
