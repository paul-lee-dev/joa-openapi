import {Image, ScrollView, Text, TouchableOpacity, View} from 'react-native';
import Header from '../components/Header';
import Money from '@/assets/money.png';
import Waage from '@/assets/waage.png';
import Dollar from '@/assets/dollar.png';
import Book from '@/assets/book.png';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import {useCallback, useState} from 'react';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import Footer from '@/components/Footer';
import BottomPopup from '@/components/BottomPopup';
import CommonMenuItem from '@/components/CommonMenuItem';
import {RootStackParamList} from '@/Router';
import {useRecoilValue} from 'recoil';
import {memberDataAtom} from '@/store/atoms';
import {useQuery} from '@tanstack/react-query';
import {getAccountList} from '@/api/account';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import {useFocusEffect} from '@react-navigation/native';
import AccountCarousel from '@/components/AccountCarousel';
import {IAccount, productTypeName} from '@/models';
import AccountCarouselIndicator from '@/components/AccountCarouselIndicator';
import {
  Menu,
  MenuOption,
  MenuOptions,
  MenuTrigger,
} from 'react-native-popup-menu';

type MainScreenProps = NativeStackScreenProps<RootStackParamList, 'Main'>;

interface ICarouselLayout {
  x: number;
  y: number;
  width: number;
  height: number;
}

const popupStyle = {
  width: 100,
  borderRadius: 10,
  padding: 4,
  backgroundColor: 'rgb(252, 231, 243)',
};

function Main({navigation}: MainScreenProps): React.JSX.Element {
  const memberData = useRecoilValue(memberDataAtom);
  const {data, refetch} = useQuery({
    queryKey: ['accountList'],
    queryFn: getAccountList,
    retry: true,
  });
  const [createModalOpen, setCreateModalOpen] = useState<boolean>(false);
  const [carouselLayout, setCarouselLayout] = useState<ICarouselLayout>({
    x: 0,
    y: 0,
    width: 0,
    height: 0,
  });
  const [carouselPage, setCarouselPage] = useState<number>(0);

  useFocusEffect(
    useCallback(() => {
      refetch();
    }, [refetch]),
  );

  return (
    <View className="w-full h-full bg-gray-100">
      <Header
        menu={[
          {title: 'magnify', onPress: () => navigation.navigate('Search')},
          {title: 'menu', onPress: () => navigation.navigate('Menu')},
        ]}
      />
      <ScrollView className="w-full h-full bg-gray-100">
        {memberData.member !== null ? (
          <View className="w-full px-10 py-6">
            <Text className="text-lg font-semibold text-gray-700">
              {`${memberData.member?.name}님`},
            </Text>
            <Text className="text-lg font-semibold text-gray-700">
              조아은행에 오신 것을 환영합니다.
            </Text>
          </View>
        ) : (
          <View className="w-full px-10 py-6">
            <SkeletonPlaceholder backgroundColor={'#fce7f3'}>
              <View style={{width: 270, height: 60, borderRadius: 10}} />
            </SkeletonPlaceholder>
          </View>
        )}
        <View className="w-full p-6 pb-12 flex space-y-4">
          <View className="w-full relative py-4 px-6 rounded-3xl flex flex-row justify-between items-center shadow-sm shadow-black  bg-gray-50">
            <View className="flex flex-row absolute bottom-1 z-10 right-4 bg-black/50 rounded-full px-2 border space-x-1 border-gray-200">
              <Text className="text-xs text-gray-50">1</Text>
              <Text className="text-xs text-gray-50">/</Text>
              <Text className="text-xs text-gray-50">3</Text>
            </View>
            <View className="flex flex-grow space-y-1">
              <Text className="text-md font-medium text-gray-700">
                조아은행 발행 적금
              </Text>
              <Text className="text-md font-semibold text-gray-700">
                조건없이 최대 연 4.3% (세전)
              </Text>
            </View>
            <Image source={Money} className="w-16 h-12" />
          </View>
          {data?.page?.content.length > 1 ? (
            <View
              onLayout={event => {
                setCarouselLayout(event.nativeEvent.layout);
              }}
              className="w-full relative rounded-3xl bg-pink-200 overflow-hidden flex shadow-sm shadow-black">
              <View className="absolute top-4 right-4 z-20">
                <Menu>
                  <MenuTrigger>
                    <Icon name={'dots-vertical'} color={'#777'} size={20} />
                  </MenuTrigger>
                  <MenuOptions optionsContainerStyle={popupStyle}>
                    <MenuOption
                      onSelect={() =>
                        navigation.navigate('History', {
                          account: data.page.content[carouselPage],
                        })
                      }>
                      <Text className="w-full text-center">거래 내역</Text>
                    </MenuOption>
                    <View className="w-full h-[1px] bg-gray-600" />
                    <MenuOption
                      onSelect={() =>
                        navigation.navigate('AccountDetail', {
                          account: data.page.content[carouselPage],
                        })
                      }>
                      <Text className="w-full text-center">상세 보기</Text>
                    </MenuOption>
                    <View className="w-full h-[1px] bg-gray-600" />
                    <MenuOption
                      onSelect={() =>
                        navigation.navigate('DeleteAccount', {
                          account: data.page.content[carouselPage],
                        })
                      }>
                      <Text className="w-full text-center">계좌 해지</Text>
                    </MenuOption>
                  </MenuOptions>
                </Menu>
              </View>
              <AccountCarousel
                accountList={data.page.content as IAccount[]}
                pageWidth={carouselLayout.width}
                pageHeight={carouselLayout.height || 176}
                navigation={navigation}
                setPage={setCarouselPage}
                refetch={refetch}
              />
              <AccountCarouselIndicator
                total={data?.page?.content.length}
                current={carouselPage}
              />
            </View>
          ) : (
            <View
              onLayout={event => {
                setCarouselLayout(event.nativeEvent.layout);
              }}
              className="w-full h-44 relative rounded-3xl bg-pink-200 flex overflow-hidden">
              <SkeletonPlaceholder backgroundColor={'#fce7f3'}>
                <View style={{width: '100%', height: '100%'}} />
              </SkeletonPlaceholder>
            </View>
          )}
          <TouchableOpacity
            onPress={() => setCreateModalOpen(true)}
            className="w-full h-14 bg-gray-50 rounded-3xl flex items-center justify-center shadow-sm shadow-black">
            <Icon name={'plus'} color={'#777'} onPress={() => {}} size={25} />
          </TouchableOpacity>
        </View>
        <ScrollView
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          className="w-full">
          <View className="px-6 py-1 flex flex-row space-x-4">
            <TouchableOpacity
              onPress={() =>
                navigation.navigate('ProductList', {
                  productType: 'ORDINARY_DEPOSIT',
                })
              }
              className="bg-gray-50 w-32 h-32 rounded-2xl shadow-sm shadow-black flex p-6 justify-center space-y-3">
              <Image source={Waage} className="w-10 h-10" />
              <View>
                <Text className="font-bold text-md text-gray-700">
                  예적금 상품
                </Text>
                <Text className="font-bold text-md text-gray-700">
                  비교하기
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-50 w-32 h-32 rounded-2xl shadow-sm shadow-black flex p-6 justify-center space-y-5">
              <Image source={Dollar} className="w-10 h-10" />
              <View>
                <Text className="font-bold text-md text-gray-700">
                  환율 조회
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity className="bg-gray-50 w-32 h-32 rounded-2xl shadow-sm shadow-black flex p-6 justify-center space-y-3">
              <Image source={Book} className="w-10 h-10" />
              <View>
                <Text className="font-bold text-md text-gray-700">
                  돈이 되는
                </Text>
                <Text className="font-bold text-md text-gray-700">이야기</Text>
              </View>
            </TouchableOpacity>
          </View>
        </ScrollView>
        <Footer />
      </ScrollView>
      {createModalOpen && (
        <BottomPopup close={() => setCreateModalOpen(false)}>
          <View className="w-full flex flex-grow space-y-8 -mb-6">
            {productTypeName.map(item => (
              <CommonMenuItem
                key={item.type}
                title={item.title}
                subtitle={item.description}
                underline={false}
                onPress={() => {
                  setCreateModalOpen(false);
                  navigation.navigate('ProductList', {
                    productType: item.type,
                  });
                }}
              />
            ))}
          </View>
        </BottomPopup>
      )}
    </View>
  );
}

export default Main;
