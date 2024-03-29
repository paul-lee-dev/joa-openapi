import {IAccount} from '@/models';
import {FlatList} from 'react-native';
import AccountCarouselItem from './AccountCarouselItem';
import {RootStackParamList} from '@/Router';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {QueryObserverResult, RefetchOptions} from '@tanstack/react-query';

interface IProps {
  accountList: IAccount[];
  pageWidth: number;
  pageHeight: number;
  navigation: NativeStackNavigationProp<RootStackParamList, 'Main', undefined>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  refetch: (
    options?: RefetchOptions | undefined,
  ) => Promise<QueryObserverResult<any, Error>>;
}

function AccountCarousel({
  accountList,
  pageWidth,
  pageHeight,
  navigation,
  setPage,
  refetch,
}: IProps): React.JSX.Element {
  const renderAccount = ({item}: any) => {
    return (
      <AccountCarouselItem
        account={item as IAccount}
        navigation={navigation}
        pageWidth={pageWidth}
        pageHeight={pageHeight}
        refetch={refetch}
      />
    );
  };

  const onScroll = (e: any) => {
    const newPage = Math.round(e.nativeEvent.contentOffset.x / pageWidth);
    setPage(newPage);
  };

  return (
    <FlatList
      automaticallyAdjustContentInsets={false}
      data={accountList}
      decelerationRate="normal"
      horizontal
      keyExtractor={(item: IAccount) => item.accountId}
      onScroll={onScroll}
      pagingEnabled
      renderItem={renderAccount}
      snapToInterval={pageWidth}
      snapToAlignment="start"
      showsHorizontalScrollIndicator={false}
    />
  );
}

export default AccountCarousel;
